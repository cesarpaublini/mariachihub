import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-red-100">
          Book your professional mariachi band today and bring the authentic sounds 
          of Mexico to your special celebration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/book"
            className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Book Your Mariachi Now
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-800 transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-red-100">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
            <div className="text-red-100">Satisfaction Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">Free</div>
            <div className="text-red-100">Consultation</div>
          </div>
        </div>
      </div>
    </section>
  )
} 