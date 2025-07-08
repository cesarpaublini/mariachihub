import Link from 'next/link'
import Image from 'next/image'

const packages = [
  {
    name: 'Quinceañera Package',
    price: '$599',
    duration: '3 hours',
    image: '/quinceanera-celebration.jpg',
    alt: 'Colorful quinceañera celebration with mariachi',
    features: [
      '6-piece mariachi band',
      'Traditional quinceañera songs',
      'Professional sound system',
      'Travel within 30 miles',
      'Traditional costumes',
      'Unlimited song requests',
      'Background music between sets'
    ],
    popular: false
  },
  {
    name: 'Wedding Package',
    price: '$499',
    duration: '2 hours',
    image: '/wedding-performance.jpg',
    alt: 'Mariachi band performing at a beautiful wedding',
    features: [
      '5-piece mariachi band',
      'Traditional wedding songs',
      'Enhanced sound system',
      'Travel within 30 miles',
      'Professional attire',
      'Song requests included'
    ],
    popular: true
  },
  {
    name: 'Corporate Package',
    price: '$399',
    duration: '1.5 hours',
    image: '/corporate-event.jpg',
    alt: 'Professional mariachi performance at corporate event',
    features: [
      '4-piece mariachi band',
      'Professional business songs',
      'Basic sound equipment',
      'Travel within 20 miles',
      'Professional attire',
      'Background music included'
    ],
    popular: false
  }
]

export default function PackageList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we have the perfect mariachi 
            package to make your event unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-visible ${
                pkg.popular ? 'ring-2 ring-red-500 transform scale-105 z-10 mt-8' : ''
              }`}
            >
              {/* Featured Ribbon - now above the card, not inside image */}
              {pkg.popular && (
                <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-30 pointer-events-none">
                  <span className="bg-red-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg tracking-wide drop-shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Image */}
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom package? Contact us for special arrangements.
          </p>
          <Link
            href="/contact"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  )
} 