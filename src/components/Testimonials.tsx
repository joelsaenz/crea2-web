import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-light">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              className="card-glass p-6 sm:p-8 relative"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 text-electric/10"
              />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric to-electric-light flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="font-semibold text-dark-900">{t.name}</p>
                  <p className="text-sm text-dark-800/60">{t.company}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-dark-800/70 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
