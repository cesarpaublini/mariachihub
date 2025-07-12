'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingSteps from '@/components/BookingSteps'
import { 
  BookingData, 
  initialBookingData, 
  timeSlots, 
  getAvailableCities,
  validateStep1 
} from '@/lib/booking'

export default function AvailabilityPage() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const saved = localStorage.getItem('mariachihub_booking')
    if (saved) {
      const parsed = JSON.parse(saved)
      setBookingData(parsed)
    }
  }, [])

  const updateBookingData = (updates: Partial<BookingData>) => {
    const newData = { ...bookingData, ...updates }
    setBookingData(newData)
    localStorage.setItem('mariachihub_booking', JSON.stringify(newData))
  }

  const handleDateChange = (date: string) => updateBookingData({ date })
  const handleTimeChange = (time: string) => updateBookingData({ time })
  const handleCityChange = (city: string) => updateBookingData({ city })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!bookingData.date) newErrors.date = 'Please select a date'
    if (!bookingData.time) newErrors.time = 'Please select a time'
    if (!bookingData.city) newErrors.city = 'Please select a city'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateForm()) router.push('/book/details')
  }

  const today = new Date().toISOString().split('T')[0]
  const maxDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const availableCities = getAvailableCities()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BookingSteps currentStep={1} />
      
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/booking-hero.jpg"
            alt="Professional mariachi band ready for your event"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            When & Where is Your Event?
          </h1>
          <p className="text-xl text-red-100">
            Let&apos;s start by selecting the date, time, and location for your mariachi performance.
          </p>
        </div>
      </section>
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Event Date *
                </label>
                <input
                  type="date"
                  value={bookingData.date || ''}
                  onChange={(e) => handleDateChange(e.target.value)}
                  min={today}
                  max={maxDate}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Event date"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* Event Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Event Time *
                </label>
                <select
                  value={bookingData.time || ''}
                  onChange={(e) => handleTimeChange(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  City *
                </label>
                <select
                  value={bookingData.city || ''}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a city</option>
                  {availableCities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Booking Tips */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 Booking Tips
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Book at least 2-4 weeks in advance for weekend events</li>
                <li>• We&apos;re available 7 days a week</li>
                <li>• Performance times range from 10:00 AM to 9:30 PM</li>
                <li>• We serve the entire Tampa Bay area and surrounding cities</li>
              </ul>
            </div>

            {/* Continue */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => router.push('/book')}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                &larr; Back to Booking Info
              </button>
              <button
                onClick={handleContinue}
                disabled={!validateStep1(bookingData)}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Continue to Package Selection →
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
