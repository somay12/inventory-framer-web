import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricing } from '@/data/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Toggle } from '@/components/ui/Toggle'
import { cn } from '@/lib/cn'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(pricing.toggle.defaultAnnual)

  const prices = useMemo(() => {
    return pricing.plans.map((plan) => ({
      ...plan,
      displayPrice: isAnnual
        ? plan.annualPrice
        : plan.monthlyPrice
          ? parseFloat((plan.monthlyPrice / 0.88).toFixed(2))
          : null,
    }))
  }, [isAnnual])

  return (
    <section id="pricing" className="py-24 md:py-32 section-scroll-margin">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader {...pricing} />

        <div className="flex justify-center mb-12">
          <Toggle
            options={[
              { label: pricing.toggle.monthly, value: 'monthly' },
              { label: pricing.toggle.annual, value: 'annual' },
            ]}
            value={isAnnual ? 'annual' : 'monthly'}
            onChange={(val) => setIsAnnual(val === 'annual')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {prices.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn('relative', plan.popular && 'md:-mt-4 md:mb-4')}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="popular">{pricing.toggle.saveBadge}</Badge>
                </div>
              )}
              <Card
                className={cn(
                  'h-full p-6 md:p-8 flex flex-col',
                  plan.popular && 'border-brand-500/40 shadow-glow-brand relative'
                )}
              >
                {plan.popular && (
                  <div className="absolute inset-0 rounded-card bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none" />
                )}
                <div className="relative">
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    {plan.displayPrice !== null ? (
                      <>
                        <span className="font-heading text-4xl font-bold text-text-primary">
                          ${plan.displayPrice.toFixed(2)}
                        </span>
                        <span className="text-text-secondary ml-2">/month</span>
                      </>
                    ) : (
                      <span className="font-heading text-4xl font-bold text-text-primary">Custom</span>
                    )}
                    {plan.billing && (
                      <p className="text-sm text-text-muted mt-1">{plan.billing}</p>
                    )}
                  </div>
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full mb-8"
                  >
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span className={cn(
                          'text-sm',
                          feature.includes('Everything in') ? 'font-medium text-text-primary' : 'text-text-secondary'
                        )}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
