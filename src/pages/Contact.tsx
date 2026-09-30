import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact – Inventory</title>
        <meta name="description" content="Get in touch with the Inventory team." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <h1 className="font-heading text-heading-xl text-text-primary mb-4">Contact us</h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Have a question or want to learn more? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-text-primary mb-2">Message sent!</h3>
                      <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 bg-subtle border border-border rounded-button text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 bg-subtle border border-border rounded-button text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 bg-subtle border border-border rounded-button text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-subtle border border-border rounded-button text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                      <Button type="submit" size="lg">
                        Send message
                      </Button>
                    </form>
                  )}
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Phone</h3>
                  <p className="text-text-secondary text-sm">+1 (555) 123-4567</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Email</h3>
                  <p className="text-text-secondary text-sm">hello@inventory.com</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Address</h3>
                  <p className="text-text-secondary text-sm">
                    123 Inventory Street<br />
                    San Francisco, CA 94102
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
