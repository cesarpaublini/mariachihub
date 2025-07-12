import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'choosing-perfect-mariachi-songs',
    title: 'How to Choose the Perfect Mariachi Songs for Your Event',
    excerpt: 'Discover the best mariachi songs for weddings, birthdays, and special celebrations. Learn which songs create the perfect atmosphere for your event.',
    content: `
      <p>Choosing the right mariachi songs for your event is crucial to creating the perfect atmosphere. Whether you're planning a wedding, birthday celebration, or corporate event, the music selection can make or break the experience.</p>
      
      <h2>Understanding Different Song Types</h2>
      <p>Mariachi music encompasses various styles and emotions. Here are the main categories:</p>
      
      <h3>Romantic Songs (Canciones Románticas)</h3>
      <p>Perfect for weddings and romantic celebrations:</p>
      <ul>
        <li>"Amor Eterno" - A classic love song</li>
        <li>"El Rey" - A powerful declaration of love</li>
        <li>"Si Nos Dejan" - Beautiful romantic ballad</li>
      </ul>
      
      <h3>Celebratory Songs (Canciones Festivas)</h3>
      <p>Great for birthdays and happy occasions:</p>
      <ul>
        <li>"Las Mañanitas" - Traditional birthday song</li>
        <li>"Cielito Lindo" - Upbeat celebration song</li>
        <li>"La Bamba" - Energetic party favorite</li>
      </ul>
      
      <h3>Traditional Songs (Canciones Tradicionales)</h3>
      <p>For cultural celebrations and heritage events:</p>
      <ul>
        <li>"El Son de la Negra" - Iconic mariachi piece</li>
        <li>"Jarabe Tapatío" - Traditional Mexican dance</li>
        <li>"La Cucaracha" - Classic folk song</li>
      </ul>
      
      <h2>Tips for Song Selection</h2>
      <p>When choosing mariachi songs for your event, consider these factors:</p>
      
      <h3>1. Event Type and Mood</h3>
      <p>Match the music to your event's atmosphere. Romantic songs for weddings, upbeat songs for celebrations, and traditional songs for cultural events.</p>
      
      <h3>2. Guest Demographics</h3>
      <p>Consider your guests' familiarity with mariachi music. Mix well-known songs with traditional pieces to ensure everyone enjoys the experience.</p>
      
      <h3>3. Timing and Flow</h3>
      <p>Plan the song order to create a natural flow. Start with welcoming songs, build to emotional highlights, and end with celebratory pieces.</p>
      
      <h2>Working with Your Mariachi Band</h2>
      <p>Professional mariachi bands can help you select the perfect songs for your event. They understand:</p>
      <ul>
        <li>Which songs work best for different occasions</li>
        <li>How to read the crowd and adjust accordingly</li>
        <li>The proper timing and flow of performances</li>
        <li>How to incorporate special requests</li>
      </ul>
      
      <h2>Special Requests and Customization</h2>
      <p>Don't hesitate to make special requests. Many mariachi bands can:</p>
      <ul>
        <li>Learn new songs for your event</li>
        <li>Create custom arrangements</li>
        <li>Incorporate family favorites</li>
        <li>Adapt traditional songs to your style</li>
      </ul>
      
      <p>Remember, the goal is to create an authentic and memorable experience that reflects your cultural heritage and personal taste. With the right song selection, your mariachi performance will be the highlight of your event.</p>
    `,
    image: '/blog-mariachi-songs.jpg',
    category: 'Event Planning',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Carlos Rodriguez',
    authorImage: '/band-leader.jpg'
  },
  {
    slug: 'mariachi-wedding-traditions',
    title: 'Traditional Mariachi Wedding Traditions Explained',
    excerpt: 'Explore the rich cultural traditions behind mariachi music in Mexican weddings. From the serenata to the reception, learn how to incorporate authentic customs.',
    content: `
      <p>Mariachi music plays a vital role in traditional Mexican weddings, adding cultural depth and emotional resonance to the celebration. Understanding these traditions helps create an authentic and meaningful experience.</p>
      
      <h2>The Serenata Tradition</h2>
      <p>One of the most beautiful mariachi wedding traditions is the serenata, or serenade. This typically occurs the night before the wedding or early on the wedding day.</p>
      
      <h3>When and Where</h3>
      <p>The serenata usually takes place:</p>
      <ul>
        <li>Outside the bride's home</li>
        <li>At the groom's family home</li>
        <li>At the wedding venue before the ceremony</li>
      </ul>
      
      <h3>Traditional Songs</h3>
      <p>Common serenata songs include:</p>
      <ul>
        <li>"Las Mañanitas" - Morning serenade</li>
        <li>"Amor Eterno" - Eternal love</li>
        <li>"Si Nos Dejan" - If they let us</li>
      </ul>
      
      <h2>Wedding Ceremony Music</h2>
      <p>During the ceremony, mariachi music can be incorporated in several ways:</p>
      
      <h3>Processional Music</h3>
      <p>As the bride walks down the aisle, traditional songs like "Ave Maria" or "Amor Eterno" create a romantic atmosphere.</p>
      
      <h3>Unity Ceremony</h3>
      <p>During the unity candle lighting or other symbolic moments, instrumental pieces provide emotional background music.</p>
      
      <h3>Recessional</h3>
      <p>Celebratory songs like "Cielito Lindo" or "La Bamba" mark the newlyweds' exit and the beginning of the celebration.</p>
      
      <h2>Reception Traditions</h2>
      <p>The reception is where mariachi music truly shines:</p>
      
      <h3>Grand Entrance</h3>
      <p>Mariachi bands often play as the newlyweds make their grand entrance, setting the tone for the celebration.</p>
      
      <h3>First Dance</h3>
      <p>Many couples choose a traditional mariachi song for their first dance, such as "Amor Eterno" or "El Rey."</p>
      
      <h3>Family Dances</h3>
      <p>Traditional dances with family members often feature mariachi music, strengthening family bonds.</p>
      
      <h2>Modern Adaptations</h2>
      <p>While honoring tradition, modern couples can adapt these customs:</p>
      <ul>
        <li>Mix traditional and contemporary songs</li>
        <li>Incorporate mariachi music at specific moments</li>
        <li>Create a cultural fusion with other music styles</li>
        <li>Personalize song selections to reflect the couple's story</li>
      </ul>
      
      <h2>Planning Your Mariachi Wedding</h2>
      <p>To successfully incorporate mariachi traditions:</p>
      <ol>
        <li>Work with experienced mariachi musicians who understand wedding traditions</li>
        <li>Plan the timing carefully to enhance rather than interrupt the flow</li>
        <li>Communicate your vision and any special requests</li>
        <li>Consider your guests' cultural backgrounds and preferences</li>
        <li>Allow for spontaneity and cultural authenticity</li>
      </ol>
      
      <p>By understanding and respecting these traditions, you can create a wedding celebration that honors your cultural heritage while creating lasting memories for all your guests.</p>
    `,
    image: '/blog-wedding-traditions.jpg',
    category: 'Weddings',
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Maria Gonzalez',
    authorImage: '/musicians-group.jpg'
  },
  {
    slug: 'mariachi-instruments-guide',
    title: 'A Complete Guide to Mariachi Instruments',
    excerpt: 'From the iconic vihuela to the powerful trumpet, learn about all the instruments that make up a traditional mariachi ensemble and their unique sounds.',
    content: `
      <p>A traditional mariachi ensemble is a symphony of unique instruments, each contributing to the distinctive sound that has captivated audiences worldwide. Understanding these instruments helps appreciate the complexity and beauty of mariachi music.</p>
      
      <h2>The String Section</h2>
      <p>The heart of the mariachi ensemble consists of string instruments that provide harmony and rhythm.</p>
      
      <h3>Vihuela</h3>
      <p>The vihuela is a small, high-pitched guitar with five strings. It's one of the most distinctive mariachi instruments, providing rhythmic accompaniment and harmonic support.</p>
      <ul>
        <li>Five nylon strings</li>
        <li>High-pitched, bright sound</li>
        <li>Essential for rhythmic patterns</li>
        <li>Unique to mariachi music</li>
      </ul>
      
      <h3>Guitarrón</h3>
      <p>The guitarrón is a large, deep-bodied bass guitar that provides the foundation of the ensemble's sound.</p>
      <ul>
        <li>Six thick strings</li>
        <li>Deep, resonant bass notes</li>
        <li>Provides harmonic foundation</li>
        <li>Essential for rhythm and harmony</li>
      </ul>
      
      <h3>Guitar</h3>
      <p>The traditional guitar provides additional harmonic support and can take melodic solos.</p>
      <ul>
        <li>Six nylon strings</li>
        <li>Versatile harmonic instrument</li>
        <li>Can play melodies and accompaniment</li>
        <li>Familiar to most audiences</li>
      </ul>
      
      <h2>The Brass Section</h2>
      <p>Brass instruments add power and excitement to mariachi music.</p>
      
      <h3>Trumpet</h3>
      <p>The trumpet is the most prominent brass instrument in mariachi, providing bright, powerful melodies.</p>
      <ul>
        <li>Bright, penetrating sound</li>
        <li>Plays main melodies and solos</li>
        <li>Adds excitement and energy</li>
        <li>Often played in pairs</li>
      </ul>
      
      <h2>The Voice</h2>
      <p>Vocals are central to mariachi music, with multiple singers often harmonizing together.</p>
      
      <h3>Lead Singer</h3>
      <p>The lead singer carries the main melody and emotional expression of the song.</p>
      
      <h3>Harmony Singers</h3>
      <p>Additional singers provide rich harmonies and vocal support.</p>
      
      <h2>Traditional vs. Modern Ensembles</h2>
      <p>While traditional mariachi ensembles focus on these core instruments, modern groups may include:</p>
      <ul>
        <li>Additional trumpets for more power</li>
        <li>Violins for classical influence</li>
        <li>Accordion for regional variations</li>
        <li>Percussion instruments for contemporary styles</li>
      </ul>
      
      <h2>The Role of Each Instrument</h2>
      <p>Understanding how instruments work together:</p>
      
      <h3>Rhythm Section</h3>
      <p>The vihuela and guitarrón provide the rhythmic foundation, while the guitar adds harmonic support.</p>
      
      <h3>Melody Section</h3>
      <p>Trumpets and vocals carry the main melodies, creating the memorable tunes that define mariachi music.</p>
      
      <h3>Harmony Section</h3>
      <p>All instruments work together to create rich harmonies and emotional depth.</p>
      
      <h2>Learning Mariachi Instruments</h2>
      <p>For those interested in learning mariachi instruments:</p>
      <ol>
        <li>Start with the guitar for basic music theory</li>
        <li>Learn traditional mariachi techniques</li>
        <li>Study with experienced mariachi musicians</li>
        <li>Practice traditional songs and styles</li>
        <li>Join or form a mariachi ensemble</li>
      </ol>
      
      <p>The beauty of mariachi music lies in the perfect harmony of these diverse instruments, each contributing its unique voice to create the rich, emotional sound that has become a symbol of Mexican culture worldwide.</p>
    `,
    image: '/blog-instruments.jpg',
    category: 'Music',
    date: '2024-01-05',
    readTime: '6 min read',
    author: 'Javier Martinez',
    authorImage: '/celebration-moment.jpg'
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | MariachiHub Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, current: true }
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
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-red-800/80"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-red-100 mb-8">
              {post.excerpt}
            </p>
            
            {/* Author and Meta Info */}
            <div className="flex items-center justify-center space-x-6 text-red-100">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm opacity-90">MariachiHub</div>
                </div>
              </div>
              <div className="text-left">
                <time dateTime={post.date} className="block font-semibold">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <div className="text-sm opacity-90">{post.readTime}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share and Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 sm:mb-0">
                  <span className="text-gray-600 font-semibold">Share this article:</span>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                    </svg>
                  </a>
                </div>
                <Link
                  href="/blog"
                  className="text-red-600 hover:text-red-700 font-semibold flex items-center"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <article key={relatedPost.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <time dateTime={relatedPost.date}>
                            {new Date(relatedPost.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </time>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 