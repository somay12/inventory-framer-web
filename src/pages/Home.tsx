import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { UseCases } from '@/components/sections/UseCases'
import { DataViz } from '@/components/sections/DataViz'
import { Security } from '@/components/sections/Security'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Inventory – Effortless inventory from day one</title>
        <meta name="description" content="Optimize your stock levels, reduce waste, boost profitability and always stay updated with your business, 24x7." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <DataViz />
        <Security />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
