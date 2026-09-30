import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use – Inventory</title>
        <meta name="description" content="Terms of use for Inventory." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <h1 className="font-heading text-heading-xl text-text-primary mb-8">Terms of Use</h1>
            <div className="prose prose-lg text-text-secondary space-y-6">
              <p>Last updated: September 2026</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using Inventory, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">2. Use of Services</h2>
              <p>You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable laws or regulations.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">3. Intellectual Property</h2>
              <p>All content, features, and functionality of Inventory, including but not limited to text, graphics, logos, and software, are the exclusive property of Inventory and are protected by international copyright, trademark, and other intellectual property laws.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">4. Limitation of Liability</h2>
              <p>In no event shall Inventory be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">5. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page.</p>
              <h2 className="font-heading text-heading-md text-text-primary mt-8 mb-4">6. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at legal@inventory.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
