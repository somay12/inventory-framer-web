import { motion } from 'framer-motion'
import { TrendingUp, RefreshCw, BarChart3, Plug } from 'lucide-react'
import { features } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Img } from '@/components/ui/Img'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  RefreshCw,
  BarChart3,
  Plug,
}

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 section-scroll-margin">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader {...features} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="group h-full overflow-hidden">
                  <div className="relative overflow-hidden rounded-image">
                    <Img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      fallback="bg-gradient-to-br from-subtle to-border"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                        {Icon && <Icon className="w-5 h-5 text-brand-600" />}
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-text-primary">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
