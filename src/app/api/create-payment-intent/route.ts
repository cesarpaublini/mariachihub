// app/api/create-payment-intent/route.ts
import { stripe } from '../../../lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { amount, bookingData } = body

    if (!amount || !bookingData) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      description: `MariachiHub Booking - ${bookingData.fullName}`,
      metadata: {
        email: bookingData.email,
        date: bookingData.date,
        city: bookingData.city,
        eventType: bookingData.eventType,
        groupSize: bookingData.groupSize,
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    console.error('Stripe Error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
