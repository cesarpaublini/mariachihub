import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'

export const metadata = {
  title: "About MariachiHub | Our Story & Values",
  description: "Learn about the mission behind MariachiHub — connecting you with the best mariachi talent in your city. Discover who we are and what drives us."
};

export default function About() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About', current: true }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/mariachi-tradition.jpg"
              alt="Traditional mariachi musicians preserving Mexican culture"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About BookMariachi
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
              Connecting communities with authentic Mexican music and culture since 2018
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl mb-6">
                BookMariachi was born from a simple idea: to make authentic Mexican music 
                accessible to everyone, everywhere. Founded in 2018 by a group of passionate 
                musicians and entrepreneurs, we recognized that finding professional mariachi 
                bands was often difficult and unreliable.
              </p>
              
              <p className="text-xl mb-6">
                What started as a small network of local musicians in Tampa has grown into 
                a nationwide platform connecting thousands of customers with hundreds of 
                professional mariachi bands across the United States.
              </p>
              
              <p className="text-xl mb-6">
                Our mission is to preserve and celebrate Mexican culture through music, 
                while providing reliable, professional entertainment services for all types 
                of celebrations and events.
              </p>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We are committed to preserving the authentic sounds and traditions 
                  of Mexican mariachi music.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong relationships with musicians, 
                  customers, and the communities we serve.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of professionalism and 
                  musical quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate individuals behind BookMariachi who work tirelessly 
                to bring authentic Mexican music to your events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/band-leader.jpg"
                    alt="Carlos Rodriguez, Founder & CEO"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carlos Rodriguez</h3>
                <p className="text-red-600 mb-2">Founder & CEO</p>
                <p className="text-gray-600">
                  Former mariachi musician with 20+ years of experience in the industry.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/musicians-group.jpg"
                    alt="Maria Gonzalez, Operations Manager"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Gonzalez</h3>
                <p className="text-red-600 mb-2">Operations Manager</p>
                <p className="text-gray-600">
                  Ensures smooth coordination between customers and musicians.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/celebration-moment.jpg"
                    alt="Javier Martinez, Head of Music"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Javier Martinez</h3>
                <p className="text-red-600 mb-2">Head of Music</p>
                <p className="text-gray-600">
                  Curates and maintains our network of professional mariachi bands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 