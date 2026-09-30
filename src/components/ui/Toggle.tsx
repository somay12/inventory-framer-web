import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ToggleOption {
  label: string
  value: string
}

interface ToggleProps {
  options: ToggleOption[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export function Toggle({ options, value, onChange, className }: ToggleProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center bg-subtle border border-border rounded-pill p-1',
        className
      )}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = value === option.value
        return (
          <button
            key={option.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-pill',
              isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="toggle-pill"
                className="absolute inset-0 bg-surface rounded-pill shadow-soft"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
