import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/cn'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.items.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length)
  }, [])

  const item = testimonials.items[current]

  return (
    <section className="py-24 md:py-32 section-scroll-margin bg-subtle/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader {...testimonials} />

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface border border-border rounded-card p-8 md:p-12 shadow-soft relative"
          >
            <Quote className="w-12 h-12 text-brand-500/20 absolute top-8 left-8" />
            <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-8 relative z-10 text-balance">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-semibold text-lg">
                {item.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-text-primary">{item.author}</p>
                <p className="text-sm text-text-secondary">{item.role}, {item.company}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-button border border-border hover:border-brand-500 hover:text-brand-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    current === index ? 'bg-brand-500 w-6' : 'bg-border hover:bg-text-muted'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-button border border-border hover:border-brand-500 hover:text-brand-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
