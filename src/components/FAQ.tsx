'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How far in advance should I book a mariachi band?',
    answer: 'We recommend booking at least 2-4 weeks in advance, especially for weekend events and peak seasons. For last-minute requests, please contact us directly and we\'ll do our best to accommodate you.'
  },
  {
    question: 'What is included in the mariachi package?',
    answer: 'Our packages include professional mariachi musicians, traditional costumes, basic sound equipment, and travel within the specified radius. Song requests and additional services can be arranged for an extra fee.'
  },
  {
    question: 'Do you provide sound equipment?',
    answer: 'Yes, we provide basic sound equipment for most packages. For larger events or outdoor venues, we can arrange enhanced sound systems. Please let us know your venue details when booking.'
  },
  {
    question: 'Can I request specific songs?',
    answer: 'Absolutely! We have an extensive repertoire of traditional and modern Mexican songs. You can provide a song list in advance, and our musicians will be happy to learn any special requests with sufficient notice.'
  },
  {
    question: 'What happens if it rains for an outdoor event?',
    answer: 'We recommend having a backup indoor location. If weather conditions are severe and unsafe for our musicians and equipment, we\'ll work with you to reschedule or provide alternative arrangements.'
  },
  {
    question: 'Do you travel outside the listed cities?',
    answer: 'Yes, we can travel to surrounding areas. Additional travel fees may apply for locations outside our standard service areas. Contact us with your specific location for a custom quote.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer a full refund for cancellations made 7 days or more before the event. Cancellations within 3-7 days receive a 50% refund. Cancellations within 72 hours are non-refundable.'
  },
  {
    question: 'Are your musicians licensed and insured?',
    answer: 'Yes, all our mariachi bands are professional musicians with proper licensing and insurance. We carry liability insurance to protect both our musicians and your event.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about booking mariachi bands for your event.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 