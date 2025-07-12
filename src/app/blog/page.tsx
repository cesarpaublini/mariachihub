import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Mariachi Blog | Tips, Stories & Cultural Insights",
  description: "Discover mariachi music tips, cultural stories, and insights from professional mariachi musicians. Learn about Mexican music traditions and event planning."
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'choosing-perfect-mariachi-songs',
    title: 'How to Choose the Perfect Mariachi Songs for Your Event',
    excerpt: 'Discover the best mariachi songs for weddings, birthdays, and special celebrations. Learn which songs create the perfect atmosphere for your event.',
    image: '/blog-mariachi-songs.jpg',
    category: 'Event Planning',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    slug: 'mariachi-wedding-traditions',
    title: 'Traditional Mariachi Wedding Traditions Explained',
    excerpt: 'Explore the rich cultural traditions behind mariachi music in Mexican weddings. From the serenata to the reception, learn how to incorporate authentic customs.',
    image: '/blog-wedding-traditions.jpg',
    category: 'Weddings',
    date: '2024-01-10',
    readTime: '7 min read'
  },
  {
    slug: 'mariachi-instruments-guide',
    title: 'A Complete Guide to Mariachi Instruments',
    excerpt: 'From the iconic vihuela to the powerful trumpet, learn about all the instruments that make up a traditional mariachi ensemble and their unique sounds.',
    image: '/blog-instruments.jpg',
    category: 'Music',
    date: '2024-01-05',
    readTime: '6 min read'
  },
  {
    slug: 'planning-quinceanera-mariachi',
    title: 'Planning the Perfect Quinceañera with Mariachi Music',
    excerpt: 'Everything you need to know about incorporating mariachi music into your quinceañera celebration. Tips for timing, song selection, and creating unforgettable moments.',
    image: '/blog-quinceanera.jpg',
    category: 'Quinceañeras',
    date: '2023-12-28',
    readTime: '8 min read'
  },
  {
    slug: 'mariachi-etiquette-tips',
    title: 'Mariachi Etiquette: Dos and Don\'ts for Your Event',
    excerpt: 'Learn the proper etiquette for working with mariachi bands. From tipping to song requests, ensure your event runs smoothly and respectfully.',
    image: '/blog-etiquette.jpg',
    category: 'Tips',
    date: '2023-12-20',
    readTime: '4 min read'
  },
  {
    slug: 'history-mariachi-music',
    title: 'The Rich History of Mariachi Music in Mexico',
    excerpt: 'Journey through the fascinating history of mariachi music, from its indigenous roots to its modern-day popularity around the world.',
    image: '/blog-history.jpg',
    category: 'Culture',
    date: '2023-12-15',
    readTime: '9 min read'
  }
];

export default function Blog() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', current: true }
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
              Mariachi Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100">
              Tips, stories, and cultural insights from professional mariachi musicians
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover everything about mariachi music, from event planning tips to cultural traditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Mariachi Tips
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest mariachi music tips, cultural insights, and event planning advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 