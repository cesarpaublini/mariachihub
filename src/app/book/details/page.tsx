'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingSteps from '@/components/BookingSteps'
import Breadcrumbs from '@/components/Breadcrumbs'
import { 
  BookingData, 
  initialBookingData, 
  groupSizes, 
  eventTypes,
  getGroupSizePrice,
  calculateDeposit,
  formatCurrency,
  validateStep1,
  validateStep2,
} from '@/lib/booking'

export default function DetailsPage() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Load existing booking data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mariachihub_booking')
    if (saved) {
      const parsed = JSON.parse(saved)
      setBookingData(parsed)
    }
    setIsLoading(false)
  }, [])

  // Redirect if step 1 is not completed
  useEffect(() => {
    if (!isLoading && !validateStep1(bookingData)) {
      router.push('/book/availability')
    }
  }, [bookingData, router, isLoading])

  const updateBookingData = (updates: Partial<BookingData>) => {
    const newData = { ...bookingData, ...updates }
    
    // Calculate total and deposit when group size changes
    if (updates.groupSize) {
      const totalAmount = getGroupSizePrice(updates.groupSize)
      const depositAmount = calculateDeposit(totalAmount)
      newData.totalAmount = totalAmount
      newData.depositAmount = depositAmount
    }
    
    setBookingData(newData)
    localStorage.setItem('mariachihub_booking', JSON.stringify(newData))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!bookingData.groupSize) {
      newErrors.groupSize = 'Please select a package'
    }
    if (!bookingData.eventType) {
      newErrors.eventType = 'Please select an event type'
    }
    if (!bookingData.fullName?.trim()) {
      newErrors.fullName = 'Please enter your full name'
    }
    if (!bookingData.email?.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/\S+@\S+\.\S+/.test(bookingData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!bookingData.eventAddress?.trim()) {
      newErrors.eventAddress = 'Please enter the address of the event'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateForm()) {
      router.push('/book/checkout')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading booking details...</p>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Book', href: '/book' },
    { label: 'Date & Time', href: '/book/availability' },
    { label: 'Package & Details', current: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <BookingSteps currentStep={2} />
      
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package & Event Details
            </h1>
            <p className="text-xl text-gray-600">
              Select the perfect mariachi package and tell us about your event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Package Selection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Package</h2>
              
              <div className="space-y-4">
                {groupSizes.map((package_) => (
                  <div
                    key={package_.id}
                    onClick={() => updateBookingData({ groupSize: package_.id })}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      bookingData.groupSize === package_.id
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {package_.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{package_.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">
                          {formatCurrency(package_.price)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {package_.id === 'serenata' || package_.id === 'weekday' ? '30 minutes' : 
                           package_.id === 'signature' ? '1 hour minimum' :
                           package_.id.startsWith('extended') ? 'fixed rate' : 'per hour'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {errors.groupSize && (
                <p className="text-red-500 text-sm mt-2">{errors.groupSize}</p>
              )}

              {/* Package Features */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">All Packages Include:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5-piece professional mariachi band</li>
                  <li>• Professional attire and traditional costumes</li>
                  <li>• Sound equipment and travel within service area</li>
                  <li>• Song requests and tailored performances</li>
                  <li>• Serving Tampa Bay and surrounding areas</li>
                </ul>
              </div>
            </div>

            {/* Event Details Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
              
              <div className="space-y-6">
                {/* Event Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Event Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {eventTypes.map((eventType) => (
                      <button
                        key={eventType.id}
                        type="button"
                        onClick={() => updateBookingData({ eventType: eventType.id })}
                        className={`p-3 border-2 rounded-lg text-left transition-all ${
                          bookingData.eventType === eventType.id
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{eventType.icon}</div>
                        <div className="text-sm font-medium text-black">{eventType.name}</div>
                      </button>
                    ))}
                  </div>
                  {errors.eventType && (
                    <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
                  )}
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.fullName || ''}
                      onChange={(e) => updateBookingData({ fullName: e.target.value })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-black ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email || ''}
                      onChange={(e) => updateBookingData({ email: e.target.value })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-black ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingData.phone || ''}
                    onChange={(e) => updateBookingData({ phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-black"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Event Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Address *
                  </label>
                  <input
                    type="text"
                    value={bookingData.eventAddress || ''}
                    onChange={(e) => updateBookingData({ eventAddress: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-black ${
                      errors.eventAddress ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Address of the event venue"
                  />
                  {errors.eventAddress && (
                    <p className="text-red-500 text-sm mt-1">{errors.eventAddress}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    value={bookingData.notes || ''}
                    onChange={(e) => updateBookingData({ notes: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-black"
                    placeholder="Tell us about any special requests, song preferences, or additional details..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary */}
          {bookingData.totalAmount && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {formatCurrency(bookingData.totalAmount)}
                  </div>
                  <div className="text-gray-600">Total Amount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(bookingData.depositAmount || 0)}
                  </div>
                  <div className="text-gray-600">Deposit Required (25%)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency((bookingData.totalAmount || 0) - (bookingData.depositAmount || 0))}
                  </div>
                  <div className="text-gray-600">Remaining Balance</div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => router.push('/book/availability')}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← Back to Date & Time
            </button>
            
            <button
              onClick={handleContinue}
              disabled={!validateStep2(bookingData)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Continue to Payment →
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 