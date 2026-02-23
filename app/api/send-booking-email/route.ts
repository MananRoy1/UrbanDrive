import React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import BookingConfirmation from "@/email/BookingConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, carName, bookingDate, totalPrice } = await req.json();

    const html = await render(
      React.createElement(BookingConfirmation, {
        name: name || "Customer",
        carName,
        bookingDate,
        totalPrice,
      }),
    );

    await resend.emails.send({
      from: "Car Rentals <onboarding@resend.dev>", // change after domain verified
      to: [email],
      subject: "Booking Confirmation!",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
