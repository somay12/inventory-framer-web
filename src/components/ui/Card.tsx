import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  dark?: boolean
}

export function Card({ children, className, dark = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card shadow-soft transition-all duration-300',
        dark
          ? 'bg-dark-surface border border-white/10 hover:border-brand-500/40'
          : 'bg-surface border border-border hover:shadow-glow-brand hover:border-brand-500/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
