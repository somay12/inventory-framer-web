import { motion } from 'framer-motion'
import { dataViz } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Img } from '@/components/ui/Img'

export function DataViz() {
  return (
    <section className="py-24 md:py-32 section-scroll-margin bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={dataViz.eyebrow}
          title={dataViz.title}
          description={dataViz.description}
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dataViz.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card dark className="h-full overflow-hidden group hover:border-brand-500/40">
                <div className="relative overflow-hidden">
                  <Img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback="bg-gradient-to-br from-brand-900/50 to-dark-surface"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
