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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, businessType, contact, challenge, selectedTier } =
      body;

    // Validate required fields
    if (!name || !businessName || !businessType || !contact) {
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
      contact: String(contact).trim(),
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

    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CloseCove Inquiries <hello@closecove.com>",
          to: ["closecoveagency@gmail.com"],
          subject: `New Lead: ${inquiryPayload.businessName} (${inquiryPayload.businessType})`,
          html: `
            <h2>New Inquiry on CloseCove.com</h2>
            <p><strong>Name:</strong> ${escapeHtml(inquiryPayload.name)}</p>
            <p><strong>Business:</strong> ${escapeHtml(inquiryPayload.businessName)}</p>
            <p><strong>Type:</strong> ${escapeHtml(inquiryPayload.businessType)}</p>
            <p><strong>Contact:</strong> ${escapeHtml(inquiryPayload.contact)}</p>
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
