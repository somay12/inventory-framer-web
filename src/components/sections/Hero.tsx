import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Check } from 'lucide-react'
import { hero } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Img } from '@/components/ui/Img'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -60])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #0C0A09 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-heading text-display text-text-primary mb-6 text-balance">
            Effortless <span className="text-brand-600">inventory</span> from day one
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 text-balance">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Get started
            </Button>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 border border-border bg-surface text-text-primary hover:border-brand-500 hover:text-brand-600 hover:shadow-glow h-14 px-8 text-lg rounded-button gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              How it works
            </a>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            {hero.trustText}
          </p>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-dark-bg rounded-card p-3 shadow-glow-dark">
            <div className="bg-dark-surface rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <Img
                  src={hero.image}
                  alt="Inventory dashboard preview"
                  className="w-full h-auto rounded-image"
                  fallback="bg-gradient-to-br from-dark-surface to-dark-bg"
                />
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 md:right-8 top-1/4 bg-surface border border-border rounded-card px-4 py-3 shadow-soft hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-accent-emerald/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-accent-emerald" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">In stock</p>
              <p className="text-xs text-text-muted">2,847 items</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-4 md:left-8 top-1/3 bg-surface border border-border rounded-card px-4 py-3 shadow-soft hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center">
              <span className="text-accent-amber font-bold text-sm">!</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Low stock alert</p>
              <p className="text-xs text-text-muted">12 items need restock</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
