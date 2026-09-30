import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'
import { security } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Lock,
}

export function Security() {
  return (
    <section className="py-24 md:py-32 section-scroll-margin">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader {...security} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {security.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(#0C0A09 1px, transparent 1px), linear-gradient(90deg, #0C0A09 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }} />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-7 h-7 text-brand-600" />}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-600 font-medium mb-4">{item.subtitle}</p>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {item.description}
                    </p>
                    {item.badges && (
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <Badge key={badge} variant="default">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}
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
