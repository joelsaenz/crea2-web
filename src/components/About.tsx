import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { points } from '@/data/about'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Más que una imprenta, tu aliado estratégico
            </h2>
            <p className="section-subtitle">
              En CREA2 transformamos ideas en experiencias visuales que conectan
              marcas con personas. Somos especialistas en diseño gráfico,
              branding, impresión digital, vinilos, lonas, rótulos, marketing
              digital y publicidad exterior.
            </p>
            <p className="mt-6 text-lg text-dark-800/60">
              Con años de experiencia y un equipo multidisciplinario, ofrecemos
              soluciones integrales que cubren desde la conceptualización hasta
              la instalación y el seguimiento.
            </p>
            <motion.ul
              className="mt-8 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-electric" />
                  <span className="text-lg text-dark-800/80">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-electric via-electric-light to-purple-500 shadow-2xl shadow-electric/25 sm:h-96 lg:h-[28rem]">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute top-1/3 -left-6 h-20 w-20 rounded-full bg-white/5" />
              <div className="absolute bottom-1/4 right-8 h-16 w-16 rounded-full bg-white/5" />
              <span className="relative text-6xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl">
                CREA2
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
