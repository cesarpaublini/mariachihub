'use client'

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { BookingData, formatCurrency } from '@/lib/booking'

interface StripeFormProps {
  bookingData: BookingData
  onSuccess: (paymentIntentId: string) => void
  onError: (error: string) => void
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

export default function StripeForm({ bookingData, onSuccess }: StripeFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      // Create payment intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: bookingData.depositAmount || bookingData.totalAmount,
          bookingData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create payment intent')
      }

      const { clientSecret } = await response.json()

      // Confirm payment with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: bookingData.fullName || '',
              email: bookingData.email || '',
            },
          },
        }
      )

      if (stripeError) {
        setError(stripeError.message || 'Payment failed')
      } else if (paymentIntent?.status === 'succeeded') {
        onSuccess(paymentIntent.id)
      }
    } catch {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Information</h3>
        <p className="text-gray-600">
          Secure payment powered by Stripe
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700">Date & Time:</span>
            <span className="font-medium text-black">
              {bookingData.date} at {bookingData.time}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Location:</span>
            <span className="font-medium text-black capitalize">
              {bookingData.city?.replace('-', ' ')}
            </span>
          </div>
          {bookingData.eventAddress && (
            <div className="flex justify-between">
              <span className="text-gray-700">Event Address:</span>
              <span className="font-medium text-black">
                {bookingData.eventAddress}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-700">Package:</span>
            <span className="font-medium text-black">
              {bookingData.groupSize} Musicians
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Event Type:</span>
            <span className="font-medium text-black">
              {bookingData.eventType}
            </span>
          </div>
          <div className="border-t pt-2 mt-4">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-black">Total Amount:</span>
              <span className="text-red-600">
                {formatCurrency(bookingData.totalAmount || 0)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-black">Deposit Required:</span>
              <span className="text-black">
                {formatCurrency(bookingData.depositAmount || 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Card Information
          </label>
          <div className="border border-gray-300 rounded-lg p-4">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            <p>🔒 Your payment is secure and encrypted</p>
            <p>💳 We accept all major credit cards</p>
          </div>
          
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isProcessing ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              `Pay ${formatCurrency(bookingData.depositAmount || bookingData.totalAmount || 0)}`
            )}
          </button>
        </div>
      </form>
    </div>
  )
} 