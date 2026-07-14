import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-dark-900 py-24 lg:py-32">
      {/* Gradient/grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-electric-light/5" />

      {/* Floating glow orb behind buttons */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-72 w-72 rounded-full bg-electric/20 blur-[120px]" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="section-title text-white">
            ¿Listo para hacer crecer tu marca?
          </h2>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Solicita una cotización sin compromiso y descubre cómo podemos
            ayudarte
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:crea2sv@gmail.com"
            className="btn-primary group inline-flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Solicitar Cotización
          </a>
          <a
            href="https://wa.me/50370632464"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group inline-flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
