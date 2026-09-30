import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { siteConfig } from '@/data/content'
import { Button } from '@/components/ui/Button'
import { Img } from '@/components/ui/Img'

export function ScrollProgress() {
  const { scrollY } = useScroll()
  const scaleX = useTransform(scrollY, [0, 1000], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-brand-500 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      } else {
        window.location.href = '/' + href
      }
      return
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#features')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Img
            src="/logo.png"
            alt="Inventory"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
            fallback="bg-gradient-to-br from-subtle to-border"
          />
          <span className="font-heading text-xl font-bold text-text-primary">Inventory</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" onClick={() => scrollTo('/contact')}>
            Get started
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-button text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-surface border-b border-border"
        >
          <div className="px-5 py-4 space-y-3">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button className="w-full justify-center" onClick={() => scrollTo('/contact')}>
                Get started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
