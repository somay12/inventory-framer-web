import { cn } from '@/lib/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow-brand hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border border-border bg-surface text-text-primary hover:border-brand-500 hover:text-brand-600 hover:shadow-glow',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-subtle',
  }

  const sizes = {
    sm: 'h-9 px-4 text-sm rounded-button',
    md: 'h-12 px-6 text-base rounded-button',
    lg: 'h-14 px-8 text-lg rounded-button',
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
