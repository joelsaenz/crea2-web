import { Map } from 'lucide-react'
import { socialLinks, quickLinks, contactItems } from '@/data/footer'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900">
      <div className="container-main section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tight text-electric">
              CREA2
            </span>
            <p className="text-sm leading-relaxed text-white/60">
              Soluciones integrales de publicidad, impresión y branding
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-electric hover:text-electric"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Enlaces</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/50 transition-colors hover:text-electric"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contacto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contacto</h3>
            <ul className="space-y-3">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                  <span className="text-sm text-white/60">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Ubicación */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Ubicación</h3>
            <div className="rounded-xl overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps?q=13.8741685,-88.1473914&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CREA2"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/VoRY1QPXeH8PfJWU9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-electric transition-colors inline-flex items-center gap-1"
            >
              <Map size={14} />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-white/40">
          &copy; 2026 CREA2. Todos los derechos reservados. Diseñado con pasión.
        </p>
      </div>
    </footer>
  )
}
