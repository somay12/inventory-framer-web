import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCases } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Img } from '@/components/ui/Img'
import { cn } from '@/lib/cn'

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="usecases" className="py-24 md:py-32 section-scroll-margin bg-subtle/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader {...useCases} />

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {useCases.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onViewportEnter={() => setActiveIndex(index)}
              >
                <Card
                  className={cn(
                    'p-6 cursor-pointer transition-all duration-300',
                    activeIndex === index
                      ? 'border-brand-500/40 shadow-glow-brand'
                      : 'hover:border-brand-500/20'
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="text-sm font-medium text-brand-600 mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <a
                    href="https://cosmoeui.com"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-brand-600 font-medium hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <div className="relative rounded-card overflow-hidden shadow-soft">
                <Img
                  src={useCases.items[activeIndex].image}
                  alt={useCases.items[activeIndex].title}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  fallback="bg-gradient-to-br from-subtle to-border"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>

        <div className="md:hidden space-y-6">
          {useCases.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  fallback="bg-gradient-to-br from-subtle to-border"
                />
                <div className="p-6">
                  <span className="text-sm font-medium text-brand-600 mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <a
                    href="https://cosmoeui.com"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-brand-600 font-medium"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
