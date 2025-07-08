import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <Image
          src="/hero-mariachi-band.jpg"
          alt="Professional mariachi band performing"
          fill
          priority
          className="object-cover hidden md:block"
          sizes="100vw"
        />
        {/* Mobile Image */}
        <Image
          src="/mobile-hero.jpg"
          alt="Professional mariachi band performing"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Authentic Mariachi Music
            <span className="block text-yellow-300">For Every Occasion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Book professional mariachi bands for weddings, birthdays, corporate events, 
            and special celebrations. Experience the vibrant sounds of Mexico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Book Your Mariachi
            </Link>
            <Link 
              href="/how-it-works" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-800 transition-colors"
            >
              How It Works
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-gray-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-gray-200">Professional Bands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">4.9★</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 