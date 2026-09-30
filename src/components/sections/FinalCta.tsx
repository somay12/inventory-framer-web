import { motion } from 'framer-motion'
import { finalCta } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function FinalCta() {
  return (
    <section className="py-24 md:py-32 section-scroll-margin">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative overflow-hidden rounded-card px-8 py-16 md:px-16 md:py-20 text-center',
            'bg-gradient-to-br from-brand-600 to-brand-700'
          )}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-heading text-heading-xl md:text-heading-xl text-white mb-6 text-balance">
              {finalCta.title}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto text-balance">
              {finalCta.description}
            </p>
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-white/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              onClick={() => window.location.href = '/contact'}
            >
              {finalCta.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
