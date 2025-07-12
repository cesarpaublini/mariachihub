'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BookingData, formatCurrency, getEventTypeName } from '@/lib/booking'

export default function ThankYou() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null)

  useEffect(() => {
    // Try to get booking data from localStorage (in case user refreshes)
    const saved = localStorage.getItem('mariachihub_booking')
    if (saved) {
      setBookingData(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ¡Gracias!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Your Mariachi Booking is Confirmed
            </p>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Thank you for choosing MariachiHub! Your payment has been processed and 
              your booking is confirmed. We&apos;re excited to make your celebration unforgettable.
            </p>
          </div>
        </section>

        {/* Booking Summary */}
        {bookingData && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Booking Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Event Date &amp; Time</p>
                      <p className="font-semibold text-lg">{bookingData.date} at {bookingData.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold text-lg capitalize">{bookingData.city?.replace('-', ' ')}</p>
                    </div>
                    {bookingData.eventAddress && (
                      <div>
                        <p className="text-sm text-gray-600">Event Address</p>
                        <p className="font-semibold text-lg">{bookingData.eventAddress}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-600">Package</p>
                      <p className="font-semibold text-lg">{bookingData.groupSize} Musicians</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Event Type</p>
                      <p className="font-semibold text-lg">{getEventTypeName(bookingData.eventType || '')}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="font-semibold text-lg text-red-600">{formatCurrency(bookingData.totalAmount || 0)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deposit Paid</p>
                      <p className="font-semibold text-lg text-green-600">{formatCurrency(bookingData.depositAmount || 0)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Remaining Balance</p>
                      <p className="font-semibold text-lg text-blue-600">
                        {formatCurrency((bookingData.totalAmount || 0) - (bookingData.depositAmount || 0))}
                      </p>
                    </div>
                    {bookingData.paymentIntentId && (
                      <div>
                        <p className="text-sm text-gray-600">Payment Reference</p>
                        <p className="font-mono text-sm bg-white p-2 rounded border">{bookingData.paymentIntentId}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <p className="text-xl text-gray-600">
                Here&apos;s what you can expect from us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                <p className="text-gray-600">
                  You will receive a detailed confirmation email within the next few minutes 
                  with all your booking details and next steps.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-up Call</h3>
                <p className="text-gray-600">
                  Our team will contact you within 24 hours to discuss your event details, 
                  song preferences, and answer any questions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Confirmation</h3>
                <p className="text-gray-600">
                  One week before your event, we&apos;ll send a final confirmation with arrival 
                  time, contact information, and last-minute details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-gray-600">
                  If you need to speak with someone right away, don&apos;t hesitate to call us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-red-600 font-semibold text-lg">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-red-600 font-semibold text-lg">info@mariachihub.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              While You Wait
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our website to learn more about our services and packages
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/how-it-works"
                className="bg-white hover:bg-gray-50 rounded-lg p-6 transition-colors shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How It Works</h3>
                <p className="text-gray-600">Learn about our booking process</p>
              </Link>
              
              <Link 
                href="/about"
                className="bg-white hover:bg-gray-50 rounded-lg p-6 transition-colors shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600">Discover our story and mission</p>
              </Link>
              
              <Link 
                href="/tampa"
                className="bg-white hover:bg-gray-50 rounded-lg p-6 transition-colors shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tampa Services</h3>
                <p className="text-gray-600">See our local offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 