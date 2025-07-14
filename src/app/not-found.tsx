import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: "404 - Page Not Found | BookMariachi",
  description: "Oops! The page you're looking for doesn't exist. Explore our mariachi packages and services instead.",
  robots: { index: false, follow: true }
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <img
              src="/mariachi-themed-404-illustration.png"
              alt="Mariachi-themed 404 illustration"
              className="w-64 h-64 mx-auto"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            🎺 Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Go to Homepage
            </Link>
            
            <Link
              href="/book"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Book a Mariachi
            </Link>
          </div>

          {/* Support Link */}
          <div className="text-center">
            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Need help? Contact us
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 