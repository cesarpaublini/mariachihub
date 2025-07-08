import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PackageList from '@/components/PackageList'
import HowItWorks from '@/components/HowItWorks'
import CityGrid from '@/components/CityGrid'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: "Hire a Mariachi Band Near You | MariachiHub",
  description: "Instantly book top-rated mariachi bands for events across Florida. Transparent pricing, easy online booking, and unforgettable performances."
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PackageList />
        <HowItWorks />
        <CityGrid />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
