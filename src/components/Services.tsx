import { motion } from 'framer-motion'
import { services } from '@/data/services'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 } as const,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  } as const,
}

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-light">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle mx-auto">
            Soluciones integrales de publicidad, impresión y branding para tu negocio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="card-glass p-6 sm:p-8 group cursor-default"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-electric/10 text-electric mb-5 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4">{service.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-dark-900/5 text-dark-800/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
