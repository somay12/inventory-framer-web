import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  dark?: boolean
}

export function SectionHeader({ eyebrow, title, description, className, dark = false }: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center mb-16 md:mb-20', className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-pill border mb-6',
            dark
              ? 'text-brand-300 bg-brand-900/40 border-brand-700/40'
              : 'text-brand-600 bg-brand-50 border-brand-100'
          )}
        >
          <span className={cn('w-1.5 h-1.5 rounded-full', dark ? 'bg-brand-400' : 'bg-brand-500')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-heading-lg md:text-heading-xl mb-4 text-balance',
          dark ? 'text-white' : 'text-text-primary'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg md:text-xl leading-relaxed text-balance',
            dark ? 'text-white/70' : 'text-text-secondary'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
