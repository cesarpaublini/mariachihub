import Link from 'next/link'
import Image from 'next/image'
import { cities } from '@/lib/cities'

const cityData = [
  {
    name: 'Tampa Bay',
    slug: 'tampa',
    description: 'The heart of Florida\'s west coast',
    image: '/tampa-bay-skyline.jpg',
    featured: true
  },
  {
    name: 'Ybor City',
    slug: 'tampa/ybor-city',
    description: 'Historic Cuban district with authentic culture',
    image: '/ybor-city-mariachi.jpg',
    featured: false
  },
  {
    name: 'South Tampa',
    slug: 'tampa/south-tampa',
    description: 'Elegant events in upscale neighborhoods',
    image: '/south-tampa-event.jpg',
    featured: false
  },
  {
    name: 'Clearwater',
    slug: 'tampa/clearwater',
    description: 'Beachside celebrations with ocean views',
    image: '/clearwater-beach.jpg',
    featured: false
  }
]

export default function CityGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tampa Bay Area Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mariachi bands serving the entire Tampa Bay area. 
            From historic Ybor City to beautiful Clearwater Beach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityData.map((city, index) => (
            <Link
              key={index}
              href={`/${city.slug}`}
              className={`group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                city.featured ? 'ring-2 ring-red-500' : ''
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={city.image}
                  alt={`Mariachi services in ${city.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                    <p className="text-sm opacity-90">{city.description}</p>
                  </div>
                </div>
                {city.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">View Details</span>
                  <svg 
                    className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Service Outside Tampa Bay?
            </h3>
            <p className="text-gray-600 mb-6">
              We also serve Miami, Los Angeles, San Antonio, and other major cities. 
              Contact us to see if we can arrange mariachi services in your area.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 