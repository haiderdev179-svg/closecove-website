import { NextResponse } from "next/server";

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

    // Optional email dispatch hook via Resend if environment variable is set
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "hello@closecove.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CloseCove Leads <leads@closecove.com>",
            to: [notificationEmail],
            subject: `New Lead: ${inquiryPayload.businessName} (${inquiryPayload.businessType})`,
            html: `
              <h2>New Inquiry on CloseCove.com</h2>
              <p><strong>Name:</strong> ${inquiryPayload.name}</p>
              <p><strong>Business:</strong> ${inquiryPayload.businessName}</p>
              <p><strong>Type:</strong> ${inquiryPayload.businessType}</p>
              <p><strong>Contact:</strong> ${inquiryPayload.contact}</p>
              <p><strong>Plan Interest:</strong> ${inquiryPayload.selectedTier}</p>
              <p><strong>Biggest Challenge:</strong></p>
              <p>${inquiryPayload.challenge}</p>
              <p><em>Received at: ${inquiryPayload.timestamp}</em></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.warn("Failed to dispatch Resend email, continuing:", emailErr);
      }
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
