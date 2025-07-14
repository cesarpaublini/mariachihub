'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">BookMariachi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">
              How It Works
            </Link>
            <Link href="/tampa" className="text-gray-700 hover:text-red-600 transition-colors">
              Tampa
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/book" 
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Blog
              </Link>
              <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                How It Works
              </Link>
              <Link href="/tampa" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Tampa
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Contact
              </Link>
              <Link href="/book" className="block px-3 py-2 bg-red-600 text-white rounded-lg mt-2">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 