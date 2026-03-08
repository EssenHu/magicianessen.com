import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  date?: string;
  location?: string;
  guestCount?: string;
  eventType?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();
    const { name, date, location, guestCount, eventType, message } = body;

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

    const submission = {
      name: name.trim(),
      date: date.trim(),
      location: location.trim(),
      guestCount: (guestCount ?? "").trim(),
      eventType: eventType.trim(),
      message: (message ?? "").trim(),
      receivedAt: new Date().toISOString(),
    };

    // Log for now; you can later write to a file or send email
    console.log("[Contact form submission]", submission);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
