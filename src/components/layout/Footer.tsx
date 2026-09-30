import { footer } from '@/data/content'
import { Img } from '@/components/ui/Img'

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white/60 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Img
                src="/logo.png"
                alt="Inventory"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                fallback="bg-gradient-to-br from-subtle to-border"
              />
              <span className="font-heading text-xl font-bold text-white">Inventory</span>
            </div>
            <p className="text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Browse</h4>
            <ul className="space-y-3">
              {footer.browse.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15551234567" className="text-sm hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@inventory.com" className="text-sm hover:text-white transition-colors">
                  hello@inventory.com
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  123 Inventory Street<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">{footer.copyright}</p>
          <div className="flex items-center gap-4">
            {footer.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
