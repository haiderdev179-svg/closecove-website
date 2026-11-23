import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] || character
  );

function formatPreferredTime(date?: string, time?: string): string {
  if (!date || !time) return "Not specified";
  const d = new Date(date + "T12:00:00");
  const formatted = d.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
  return `${formatted} at ${time}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      businessName,
      businessType,
      contact,
      phone,
      email,
      preferredDate,
      preferredTime,
      challenge,
      selectedTier,
    } = body;

    // Validate required fields
    if (!name || !businessName || !businessType || (!contact && !email)) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const inquiryPayload = {
      id: `inq_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      businessName: String(businessName).trim(),
      businessType: String(businessType).trim(),
      contact: contact ? String(contact).trim() : (email ? String(email).trim() : ""),
      phone: phone ? String(phone).trim() : "",
      email: email ? String(email).trim() : "",
      preferredDate: preferredDate ? String(preferredDate).trim() : "",
      preferredTime: preferredTime ? String(preferredTime).trim() : "",
      challenge: challenge ? String(challenge).trim() : "None specified",
      selectedTier: selectedTier || "General Inquiry",
    };

    // Log the lead server-side for immediate traceability
    console.log("=== NEW CLOSECOVE INQUIRY ===");
    console.log(JSON.stringify(inquiryPayload, null, 2));

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const preferredTimeFormatted = formatPreferredTime(
      inquiryPayload.preferredDate,
      inquiryPayload.preferredTime
    );

    // --- Send admin notification email ---
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CloseCove Inquiries <hello@closecove.com>",
          to: ["hello@closecove.com"],
          subject: `New Lead: ${inquiryPayload.businessName} (${inquiryPayload.businessType})`,
          html: `
            <h2>New Inquiry on CloseCove.com</h2>
            <p><strong>Name:</strong> ${escapeHtml(inquiryPayload.name)}</p>
            <p><strong>Business:</strong> ${escapeHtml(inquiryPayload.businessName)}</p>
            <p><strong>Type:</strong> ${escapeHtml(inquiryPayload.businessType)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(inquiryPayload.phone || "Not provided")}</p>
            <p><strong>Email:</strong> ${escapeHtml(inquiryPayload.email || inquiryPayload.contact)}</p>
            <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTimeFormatted)}</p>
            <p><strong>Plan Interest:</strong> ${escapeHtml(String(inquiryPayload.selectedTier))}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(inquiryPayload.challenge)}</p>
            <p><em>Received at: ${escapeHtml(inquiryPayload.timestamp)}</em></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorDetails = await emailResponse.text();
        throw new Error(`Resend returned ${emailResponse.status}: ${errorDetails}`);
      }
    } catch (emailErr) {
      console.error("Failed to dispatch Resend email:", emailErr);
      return NextResponse.json(
        { error: "Unable to send your inquiry. Please try again later." },
        { status: 502 }
      );
    }

    // --- Send confirmation email to the user ---
    const userEmail = inquiryPayload.email || inquiryPayload.contact;
    if (userEmail && userEmail.includes("@")) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CloseCove <hello@closecove.com>",
            to: [userEmail],
            subject: `Your demo with CloseCove is confirmed! 🎉`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h1 style="color: #F26A21; font-size: 24px; margin-bottom: 20px;">Your Demo is Booked!</h1>

                <p>Hey ${escapeHtml(inquiryPayload.name)},</p>

                <p>Thanks for booking a demo with CloseCove! We'll reach out at your preferred time to walk you through how we help <strong>${escapeHtml(inquiryPayload.businessType)}</strong> businesses catch every missed call and turn them into customers.</p>

                <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                  ${inquiryPayload.preferredDate && inquiryPayload.preferredTime ? `
                  <tr>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; color: #666;">Preferred Time</td>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; font-weight: bold; text-align: right;">${escapeHtml(preferredTimeFormatted)}</td>
                  </tr>
                  ` : ""}
                  ${inquiryPayload.phone ? `
                  <tr>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; color: #666;">Phone</td>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; font-weight: bold; text-align: right;">${escapeHtml(inquiryPayload.phone)}</td>
                  </tr>
                  ` : ""}
                  <tr>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; color: #666;">Business Type</td>
                    <td style="padding: 10px 0; border-top: 1px solid #eee; font-weight: bold; text-align: right;">${escapeHtml(inquiryPayload.businessType)}</td>
                  </tr>
                </table>

                <p>Talk soon!<br/>— The CloseCove Team</p>

                <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

                <p style="font-size: 12px; color: #999; text-align: center;">
                  CloseCove · AI-Powered Missed Call Text-Back · <a href="https://closecove.com" style="color: #F26A21;">closecove.com</a>
                </p>
              </div>
            `,
          }),
        });
      } catch (userEmailErr) {
        // Non-blocking — admin email already sent
        console.error("Failed to send user confirmation email:", userEmailErr);
      }
    }

    // Forward to backend server to store as a lead
    try {
      await fetch("https://www.getclosecove.com/api/website-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryPayload),
      });
    } catch (backendErr) {
      // Non-blocking — email already sent, lead storage is best-effort
      console.error("Failed to forward inquiry to backend:", backendErr);
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully.",
      inquiryId: inquiryPayload.id,
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}