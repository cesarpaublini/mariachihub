
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { tampaNeighborhoods } from '@/lib/tampaNeighborhoods'

// ✅ Static paths generation for build
export async function generateStaticParams() {
  return tampaNeighborhoods.map((neighborhood) => ({
    neighborhood,
  }));
}

// ✅ Metadata for each page
export function generateMetadata({ params }: { params: { neighborhood: string } }): Metadata {
  const { neighborhood } = params;

  if (!tampaNeighborhoods.includes(neighborhood)) {
    return {
      title: 'Neighborhood Not Found',
    };
  }

  const name = neighborhood.replace(/-/g, ' ');
  return {
    title: `Mariachi in ${name} | MariachiHub`,
    description: `Book mariachi bands in ${name}. Weddings, events, and more.`,
  };
}

// ✅ Page content
export default function NeighborhoodPage({ params }: { params: { neighborhood: string } }) {
  const { neighborhood } = params;

  if (!tampaNeighborhoods.includes(neighborhood)) {
    notFound();
  }

  const name = neighborhood.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tampa', href: '/tampa' },
    { label: name, current: true }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mariachi in {name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
              Professional mariachi bands serving {name}, Tampa
            </p>
          </div>
        </section>

        {/* Neighborhood Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Mariachi Services in {name}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {name} is a vibrant part of the Tampa Bay area, and we&apos;re 
                  proud to provide authentic mariachi music for all your special occasions 
                  in this wonderful neighborhood.
                </p>
                <p className="text-xl text-gray-600 mb-8">
                  Whether you&apos;re hosting a wedding, birthday party, corporate event, or 
                  any other celebration, our professional mariachi bands will bring the 
                  authentic sounds of Mexico to your {name} event.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                    <div className="text-gray-600">Events in {name}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24hr</div>
                    <div className="text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Services in {name}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Weddings and receptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Birthday celebrations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Quinceañeras</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Corporate events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Anniversary parties</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Special occasions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pricing for {name}
              </h2>
              <p className="text-xl text-gray-600">
                Competitive rates for mariachi services in your neighborhood
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Serenata Package - Left */}
              <div className="bg-white rounded-lg shadow-lg p-8 order-1 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Serenata Package</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$450</div>
                <div className="text-gray-600 mb-6">30 minutes</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">5-piece professional mariachi</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Surprise performance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Romantic songs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Best for birthdays & love tributes</span>
                  </li>
                </ul>
                <Link
                  href="/book"
                  className="w-full block text-center bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book This Package
                </Link>
              </div>

              {/* Signature Package - Center */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-red-500 relative order-2 md:order-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    Most Booked
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Signature Package</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$699</div>
                <div className="text-gray-600 mb-6">1 hour minimum</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">5-piece mariachi band</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Extended song list</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Professional attire</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sound equipment included</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Serving Tampa, Brandon, Riverview</span>
                  </li>
                </ul>
                <Link
                  href="/book"
                  className="w-full block text-center bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Book This Package
                </Link>
              </div>

              {/* Weekday Special - Right */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-green-500 relative order-3 md:order-3">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    Limited Time Offer
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekday Special</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$399</div>
                <div className="text-gray-600 mb-6">30 minutes (Mon–Thu or Fri mornings)</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">5-piece mariachi band</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Serenata pricing for off-peak</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Limited availability</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Valid in greater Tampa</span>
                  </li>
                </ul>
                <Link
                  href="/book"
                  className="w-full block text-center bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Book This Package
                </Link>
              </div>
            </div>

            {/* Extended Packages Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Extended Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">3 Hours</h4>
                  <div className="text-3xl font-bold text-red-600 mb-2">$1,899</div>
                  <p className="text-gray-600 text-sm mb-4">Ideal for full-day celebrations</p>
                  <Link
                    href="/book"
                    className="w-full block text-center bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">4 Hours</h4>
                  <div className="text-3xl font-bold text-red-600 mb-2">$2,499</div>
                  <p className="text-gray-600 text-sm mb-4">Perfect for continuous entertainment</p>
                  <Link
                    href="/book"
                    className="w-full block text-center bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">5 Hours</h4>
                  <div className="text-3xl font-bold text-red-600 mb-2">$2,999</div>
                  <p className="text-gray-600 text-sm mb-4">Ultimate celebration experience</p>
                  <Link
                    href="/book"
                    className="w-full block text-center bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                📍 Covers all major Tampa neighborhoods • 💡 Ideal for full-day celebrations or continuous entertainment
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Mariachi in {name}?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don&apos;t wait! Book your mariachi band today and make your {name} event 
              truly special with authentic Mexican music and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}