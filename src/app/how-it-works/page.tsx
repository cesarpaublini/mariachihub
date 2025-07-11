import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'

export const metadata = {
  title: "How It Works | Book a Mariachi Band in 3 Easy Steps",
  description: "Learn how MariachiHub makes it simple to book mariachi bands for any event. See how it works from selecting a package to payment."
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
              Simple steps to bring authentic mariachi music to your event
            </p>
          </div>
        </section>

        {/* How It Works Component */}
        <HowItWorks />

        {/* Detailed Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detailed Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about each step of our booking process and what to expect.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-4">01</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Package</h3>
                  <p className="text-gray-600 mb-4">
                    We offer three main packages designed to meet different needs and budgets:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span><strong>Serenata Package:</strong> Perfect for birthdays & love tributes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span><strong>Weekday Special:</strong> Limited time offer for off-peak bookings</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span><strong>Signature Package:</strong> Great for weddings & private events</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Comparison</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-800">Musicians</span>
                      <span className="font-semibold text-gray-800">5-piece band</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-800">Duration</span>
                      <span className="font-semibold text-gray-800">30 min - 5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-800">Travel Distance</span>
                      <span className="font-semibold text-gray-800">30 miles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-800">Song Requests</span>
                      <span className="font-semibold text-gray-800">Included</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Need</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Event date and time</li>
                    <li>• Venue location and details</li>
                    <li>• Expected number of guests</li>
                    <li>• Type of celebration</li>
                    <li>• Any special requests</li>
                    <li>• Contact information</li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-4xl font-bold text-red-600 mb-4">02</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Date</h3>
                  <p className="text-gray-600 mb-4">
                    Our booking form is designed to be quick and easy. Simply fill out the 
                    required information and we&apos;ll handle the rest.
                  </p>
                  <p className="text-gray-600">
                    We recommend booking at least 2-4 weeks in advance, especially for 
                    weekend events and peak seasons like wedding season and holidays.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-4">03</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm Details</h3>
                  <p className="text-gray-600 mb-4">
                    Within 24 hours of your booking, our team will contact you to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span>Confirm your booking details</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span>Discuss any special requests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span>Provide venue-specific recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      <span>Answer any questions you may have</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Communication Channels</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-gray-800">Email confirmation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-gray-800">Phone consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">Online portal access</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Day of Event</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Musicians arrive 30 minutes early</li>
                    <li>• Professional setup and sound check</li>
                    <li>• Traditional mariachi attire</li>
                    <li>• Flexible performance schedule</li>
                    <li>• Professional conduct throughout</li>
                    <li>• Clean breakdown and departure</li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-4xl font-bold text-red-600 mb-4">04</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjoy Your Event</h3>
                  <p className="text-gray-600 mb-4">
                    On your special day, our professional mariachi band will arrive 
                    on time and ready to perform. They&apos;ll handle all the setup and 
                    ensure your event runs smoothly.
                  </p>
                  <p className="text-gray-600">
                    Our musicians are experienced in reading the crowd and will 
                    adjust their performance to match the energy and mood of your event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Booking your mariachi band is simple and straightforward. 
              Follow these four easy steps to bring authentic Mexican music to your event.
            </p>
            <a
              href="/book"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 