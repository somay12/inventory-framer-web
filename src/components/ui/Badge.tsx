import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'popular' | 'save'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-subtle text-text-secondary border-border',
    popular: 'bg-brand-50 text-brand-600 border-brand-100',
    save: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-pill border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
