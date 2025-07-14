'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingSteps from '@/components/BookingSteps'
import StripeForm from '@/components/StripeForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { 
  BookingData, 
  initialBookingData, 
  validateStep1,
  validateStep2,
  formatCurrency,
  getEventTypeName,
  getGroupSizeName
} from '@/lib/booking'

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here')

export default function CheckoutPage() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('bookmariachi_booking')
    if (saved) {
      const parsed = JSON.parse(saved)
      setBookingData(parsed)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (!validateStep1(bookingData)) {
        router.push('/book/availability')
        return
      }
      if (!validateStep2(bookingData)) {
        router.push('/book/details')
        return
      }
    }
  }, [bookingData, router, isLoading])

  const handlePaymentSuccess = (paymentIntentId: string) => {
    const updatedData = { ...bookingData, paymentIntentId }
    setBookingData(updatedData)
    localStorage.setItem('bookmariachi_booking', JSON.stringify(updatedData))
    setTimeout(() => {
      localStorage.removeItem('bookmariachi_booking')
      router.push('/thank-you')
    }, 1000)
  }

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-800">Loading checkout...</p>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Book', href: '/book' },
    { label: 'Date & Time', href: '/book/availability' },
    { label: 'Package & Details', href: '/book/details' },
    { label: 'Payment', current: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <BookingSteps currentStep={3} />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Booking
            </h1>
            <p className="text-xl text-gray-700">
              Secure payment to confirm your mariachi reservation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Elements stripe={stripePromise}>
                <StripeForm
                  bookingData={bookingData}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />
              </Elements>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {getGroupSizeName(bookingData.groupSize || '')}
                        </h4>
                        <p className="text-sm text-black">
                          {getEventTypeName(bookingData.eventType || '')}
                        </p>
                        <p className="text-sm text-gray-800">
                          {bookingData.date} at {bookingData.time}
                        </p>
                        <p className="text-sm text-gray-800 capitalize">
                          {bookingData.city?.replace('-', ' ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          {formatCurrency(bookingData.totalAmount || 0)}
                        </div>
                        <div className="text-sm text-gray-700">per hour</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-800 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>{formatCurrency(bookingData.totalAmount || 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travel Fee:</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment:</span>
                      <span>Included</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-black">Total:</span>
                      <span className="text-black">
                        {formatCurrency(bookingData.totalAmount || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-800">
                      <span>Deposit Required:</span>
                      <span>{formatCurrency(bookingData.depositAmount || 0)}</span>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-800">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Secure
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Encrypted
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p><strong>Name:</strong> {bookingData.fullName}</p>
                    <p><strong>Email:</strong> {bookingData.email}</p>
                    {bookingData.phone && (
                      <p><strong>Phone:</strong> {bookingData.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => router.push('/book/details')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              ← Back to Event Details
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
