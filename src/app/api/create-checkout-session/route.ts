// app/api/create-checkout-session/route.ts
import { stripe } from '../../../lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, price } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name },
            unit_amount: price * 100, // price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    })

    return NextResponse.json({ id: session.id })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
