import Image from 'next/image'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    event: 'Wedding Reception',
    location: 'Tampa, FL',
    rating: 5,
    text: 'The mariachi band was absolutely incredible! They made our wedding reception so special and authentic. Our guests couldn\'t stop dancing and singing along. Highly recommend!',
    avatar: 'MR'
  },
  {
    name: 'Carlos Mendez',
    event: 'Birthday Party',
    location: 'Miami, FL',
    rating: 5,
    text: 'Perfect for my mother\'s 60th birthday! The musicians were professional, on time, and played all her favorite songs. The whole family loved it.',
    avatar: 'CM'
  },
  {
    name: 'Jennifer Smith',
    event: 'Corporate Event',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'We hired MariachiHub for our company\'s Hispanic Heritage Month celebration. The performance was outstanding and really brought the culture to life for our team.',
    avatar: 'JS'
  },
  {
    name: 'Roberto Garcia',
    event: 'Quinceañera',
    location: 'San Antonio, TX',
    rating: 5,
    text: 'The mariachi band was the highlight of my daughter\'s quinceañera. They played traditional songs that brought tears to everyone\'s eyes. Beautiful performance!',
    avatar: 'RG'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about their mariachi experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.event}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-red-100 mb-6">
              Book your mariachi band today and create memories that will last a lifetime.
            </p>
            <a
              href="/book"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Mariachi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 