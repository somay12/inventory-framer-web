import { useState } from 'react'
import { cn } from '@/lib/cn'

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

export function Img({ src, alt, className, fallback = 'bg-gradient-to-br from-subtle to-border', ...props }: ImgProps) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={cn('rounded-image flex items-center justify-center text-text-muted', fallback, className)}
        role="img"
        aria-label={alt}
      >
        <span className="text-sm px-4 text-center">Image unavailable</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('rounded-image object-cover', className)}
      loading="lazy"
      onError={() => setError(true)}
      {...props}
    />
  )
}
