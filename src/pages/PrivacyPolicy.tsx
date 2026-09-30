import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Inventory</title>
        <meta name="description" content="Privacy policy for Inventory." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <h1 className="font-heading text-heading-xl text-text-primary mb-8">Privacy Policy</h1>
            <div className="prose prose-lg text-text-secondary space-y-6">
              <p>Last updated: September 2026</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">1. Introduction</h2>
              <p>At Inventory, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as your name, email address, company name, and any messages you send through our contact form.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@inventory.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
