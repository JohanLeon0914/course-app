import { Course } from "@/models/Courses.model";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const { courses, email } = await reqBody;

    const extractingItems = await courses.map((course: Course) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: course.price * 100,
        product_data: {
          name: course.name,
          description: course.description,
          images: [course.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.HOST_URL}/success`,
      cancel_url: `${process.env.HOST_URL}/checkout`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};