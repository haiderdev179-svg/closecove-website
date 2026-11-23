import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c] || c)
  );

/* ═══════════════════════════════════════════════════════════════
   TIMEZONE HELPERS — Uses native Intl (no external library)
   ═══════════════════════════════════════════════════════════════ */

/** Build a UTC Date from "2026-12-07" + "2:00 PM" + "America/New_York" */
function buildUtcDate(dateStr: string, timeStr: string, tz: string): Date {
  // Parse time string like "2:00 PM" into 24h hours/minutes
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) throw new Error("Invalid time format");
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === "PM" && hours !== 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;

  // Create a date in the visitor's timezone by trying offsets
  // We use Intl to find the UTC offset for the given timezone + date
  const [year, month, day] = dateStr.split("-").map(Number);

  // Start with a naive UTC date
  const naive = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));

  // Format that moment in the target timezone to find how the timezone shifts it
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(naive);

  const getPart = (type: string) => {
    const p = parts.find((p) => p.type === type);
    return p ? parseInt(p.value, 10) : 0;
  };

  const tzHour = getPart("hour") === 24 ? 0 : getPart("hour");
  const tzMinute = getPart("minute");
  const tzDay = getPart("day");

  // Calculate offset: difference between UTC and what the timezone shows
  // The naive date IS in UTC, so the tz formatter shows what time it is "there"
  // We want the REVERSE: given a local time, find UTC
  // offset_minutes = (tzHour * 60 + tzMinute) - (hours * 60 + minutes) + (tzDay - day) * 1440
  const naiveMinutes = hours * 60 + minutes;
  const tzMinutes = tzHour * 60 + tzMinute;
  let dayDiff = tzDay - day;
  if (dayDiff > 15) dayDiff -= 30; // month boundary
  if (dayDiff < -15) dayDiff += 30;
  const offsetMinutes = tzMinutes - naiveMinutes + dayDiff * 1440;

  // The actual UTC time = local time - offset
  const utc = new Date(Date.UTC(year, month - 1, day, hours, minutes, 0));
  utc.setUTCMinutes(utc.getUTCMinutes() - offsetMinutes);

  return utc;
}

/** Format a UTC Date in a specific timezone: "Monday, December 7, 2:00 PM Eastern Time" */
function formatInTimezone(utcDate: Date, tz: string, tzLabel: string): string {
  const formatted = utcDate.toLocaleString("en-US", {
    timeZone: tz,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${formatted} ${tzLabel}`;
}

/** Short format for .ics DTSTART/DTEND: "20261207T190000Z" */
function toIcsUtc(utcDate: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    utcDate.getUTCFullYear().toString() +
    pad(utcDate.getUTCMonth() + 1) +
    pad(utcDate.getUTCDate()) +
    "T" +
    pad(utcDate.getUTCHours()) +
    pad(utcDate.getUTCMinutes()) +
    pad(utcDate.getUTCSeconds()) +
    "Z"
  );
}

/** Generate a .ics calendar invite string */
function generateIcs(
  utcStart: Date,
  durationMinutes: number,
  summary: string,
  description: string,
  organizerEmail: string
): string {
  const utcEnd = new Date(utcStart.getTime() + durationMinutes * 60 * 1000);
  const now = new Date();

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CloseCove//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `DTSTART:${toIcsUtc(utcStart)}`,
    `DTEND:${toIcsUtc(utcEnd)}`,
    `DTSTAMP:${toIcsUtc(now)}`,
    `UID:${crypto.randomUUID()}@closecove.com`,
    `ORGANIZER;CN=CloseCove:mailto:${organizerEmail}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    "STATUS:TENTATIVE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/* Timezone label map */
const TZ_LABELS: Record<string, string> = {
  "America/New_York": "Eastern Time",
  "America/Chicago": "Central Time",
  "America/Denver": "Mountain Time",
  "America/Los_Angeles": "Pacific Time",
  "America/Phoenix": "Arizona Time",
  "America/Anchorage": "Alaska Time",
  "Pacific/Honolulu": "Hawaii Time",
};

const PKT_TZ = "Asia/Karachi";
const PKT_LABEL = "PKT";

/* ═══════════════════════════════════════════════════════════════
   API ROUTE
   ═══════════════════════════════════════════════════════════════ */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      businessName,
      contact,
      phone,
      email,
      preferredDate,
      preferredTime,
      timezone,
      challenge,
      smsConsent,
      businessType,
      selectedTier,
    } = body;

    if (!name || !businessName || !contact) {
      return NextResponse.json(
        { error: "Name, business name, and contact are required" },
        { status: 400 }
      );
    }

    /* ─── Build timezone-aware date strings ─── */
    let visitorTimeStr = "";
    let adminTimeStr = "";
    let icsContent = "";
    const visitorTzLabel = timezone ? (TZ_LABELS[timezone] || timezone) : "";

    if (preferredDate && preferredTime && timezone) {
      try {
        const utcDate = buildUtcDate(preferredDate, preferredTime, timezone);

        // Format for visitor's timezone
        visitorTimeStr = formatInTimezone(utcDate, timezone, visitorTzLabel);

        // Format for admin (PKT)
        adminTimeStr = formatInTimezone(utcDate, PKT_TZ, PKT_LABEL);

        // Generate .ics calendar invite
        const icsDescription = `CloseCove demo call with ${name} from ${businessName}.\\nPhone: ${phone || "N/A"}\\nBusiness type: ${businessType || "N/A"}`;
        icsContent = generateIcs(
          utcDate,
          15,
          `CloseCove Call — ${businessName}`,
          icsDescription,
          "hello@closecove.com"
        );
      } catch {
        // Fallback: show raw date/time without conversion
        visitorTimeStr = `${preferredDate} at ${preferredTime}`;
        adminTimeStr = visitorTimeStr;
      }
    } else if (preferredDate && preferredTime) {
      // No timezone provided — show raw
      visitorTimeStr = `${preferredDate} at ${preferredTime}`;
      adminTimeStr = visitorTimeStr;
    }

    /* ─── Admin notification email ─── */
    const adminHtml = `
      <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: #10222F; padding: 24px 28px;">
          <h1 style="color: #EAF2F6; font-size: 20px; margin: 0; font-weight: 700;">New Inquiry from ${escapeHtml(businessType || "Website")}</h1>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Business</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(businessName)}</td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(phone)}</td></tr>` : ""}
            ${email ? `<tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(email)}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #6b7280;">Contact</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(contact)}</td></tr>
            ${visitorTimeStr ? `<tr><td style="padding: 8px 0; color: #6b7280;">Preferred (visitor)</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(visitorTimeStr)}</td></tr>` : ""}
            ${adminTimeStr ? `<tr><td style="padding: 8px 0; color: #6b7280;">Your time (PKT)</td><td style="padding: 8px 0; font-weight: 600; color: #F26A21;">${escapeHtml(adminTimeStr)}</td></tr>` : ""}
            ${timezone ? `<tr><td style="padding: 8px 0; color: #6b7280;">Timezone</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(timezone)}</td></tr>` : ""}
            ${selectedTier ? `<tr><td style="padding: 8px 0; color: #6b7280;">Plan</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(selectedTier)}</td></tr>` : ""}
          </table>
          ${challenge ? `<div style="margin-top: 16px; padding: 14px; background: #f9fafb; border-radius: 8px;"><p style="color: #6b7280; font-size: 12px; margin: 0 0 4px;">Challenge</p><p style="margin: 0; font-size: 14px;">${escapeHtml(challenge)}</p></div>` : ""}
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">SMS consent: ${smsConsent ? "Yes" : "No"}</p>
        </div>
      </div>
    `;

    /* ─── User confirmation email (matches chat widget style) ─── */
    const userHtml = `
      <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: #10222F; padding: 32px 28px; text-align: center;">
          <div style="width: 56px; height: 56px; background: #1E7B3A; border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 28px;">✓</span>
          </div>
          <h1 style="color: #EAF2F6; font-size: 24px; margin: 0; font-weight: 700;">Request Received!</h1>
          <p style="color: #8FA8B8; font-size: 14px; margin: 8px 0 0;">We'll confirm your call by email within one business day.</p>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${visitorTimeStr ? `<tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6; width: 130px;">Preferred time</td><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f3f4f6;">${escapeHtml(visitorTimeStr)}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Phone</td><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f3f4f6;">${escapeHtml(phone)}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Business</td><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #f3f4f6;">${escapeHtml(businessName)}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">Type</td><td style="padding: 10px 0; font-weight: 600;">${escapeHtml(businessType || "General")}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #EAF2F6; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #3B5565;">Questions? Reply to this email or call <a href="tel:+18889950954" style="color: #F26A21; text-decoration: none; font-weight: 600;">+1 (888) 995-0954</a></p>
          </div>
        </div>
        <div style="padding: 20px 28px; border-top: 1px solid #f3f4f6; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af;">CloseCove · AI-Powered Missed Call Text-Back · <a href="https://closecove.com" style="color: #F26A21; text-decoration: none;">closecove.com</a></p>
        </div>
      </div>
    `;

    /* ─── Send emails via Resend ─── */
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      // Admin notification email (with .ics attachment if available)
      const adminPayload: Record<string, unknown> = {
        from: "CloseCove <notifications@closecove.com>",
        to: ["hello@closecove.com"],
        subject: `New ${businessType || "Website"} Inquiry — ${name} (${businessName})`,
        html: adminHtml,
      };

      // Attach .ics to admin email
      if (icsContent) {
        adminPayload.attachments = [
          {
            filename: "closecove-call.ics",
            content: Buffer.from(icsContent).toString("base64"),
            type: "text/calendar",
          },
        ];
      }

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify(adminPayload),
      });

      // User confirmation email (with .ics attachment if available)
      if (email) {
        const userPayload: Record<string, unknown> = {
          from: "CloseCove <hello@closecove.com>",
          to: [email],
          subject: `Request received — CloseCove`,
          html: userHtml,
        };

        // Attach .ics to user email too
        if (icsContent) {
          userPayload.attachments = [
            {
              filename: "closecove-call.ics",
              content: Buffer.from(icsContent).toString("base64"),
              type: "text/calendar",
            },
          ];
        }

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify(userPayload),
        });
      }
    }

    /* ─── Forward to backend ─── */
    try {
      await fetch("https://www.getclosecove.com/api/website-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          businessName,
          contact,
          phone,
          email,
          preferredDate,
          preferredTime,
          timezone,
          challenge,
          smsConsent,
          businessType,
          selectedTier,
        }),
      });
    } catch {
      // Backend forwarding is non-critical
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}