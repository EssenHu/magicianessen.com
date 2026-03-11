import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  contact?: string;
  date?: string;
  location?: string;
  guestCount?: string;
  eventType?: string;
  message?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "essenhippohu@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Magician Essen <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, contact, date, location, guestCount, eventType, message } = body;

    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }
    if (!date?.trim()) {
      return NextResponse.json(
        { error: "Event date is required" },
        { status: 400 }
      );
    }
    if (!location?.trim()) {
      return NextResponse.json(
        { error: "Location is required" },
        { status: 400 }
      );
    }
    if (!eventType?.trim()) {
      return NextResponse.json(
        { error: "Event type is required" },
        { status: 400 }
      );
    }
    if (!contact?.trim()) {
      return NextResponse.json(
        { error: "Please leave an email, phone number, or WeChat so we can reach you." },
        { status: 400 }
      );
    }

    const submission = {
      name: name.trim(),
      contact: contact.trim(),
      date: date.trim(),
      location: location.trim(),
      guestCount: (guestCount ?? "").trim(),
      eventType: eventType.trim(),
      message: (message ?? "").trim(),
      receivedAt: new Date().toISOString(),
    };

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `[Magician Essen] Inquiry from ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Contact: ${submission.contact}`,
          `Event date: ${submission.date}`,
          `Location: ${submission.location}`,
          submission.guestCount ? `Guest count: ${submission.guestCount}` : null,
          `Event type: ${submission.eventType}`,
          submission.message ? `Message:\n${submission.message}` : null,
          `\nReceived: ${submission.receivedAt}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      if (error) {
        console.error("[Contact] Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send. Please try again or email directly." },
          { status: 500 }
        );
      }
    } else {
      console.log("[Contact form submission]", submission);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[Contact] Error:", e);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
