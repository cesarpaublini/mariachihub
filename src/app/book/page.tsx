'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Book() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new booking funnel
    router.push('/book/availability')
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to booking...</p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 