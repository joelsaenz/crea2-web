import { motion } from 'framer-motion'
import { steps } from '@/data/process'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-light">
      <div className="container-main">
        <h2 className="section-title text-center">Nuestro Proceso</h2>
        <p className="section-subtitle text-center">
          Cómo trabajamos para llevar tu proyecto al siguiente nivel
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 mt-12"
        >
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-electric/30 -translate-y-1/2 rounded-full" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-row lg:flex-col items-center gap-4 lg:gap-3 w-full lg:w-auto"
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-electric text-white shadow-lg">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <div className="mt-2 lg:mt-3">
                    <Icon size={28} className="text-electric" />
                  </div>
                </div>

                <div className="flex-1 lg:text-center">
                  <h3 className="text-lg font-bold text-dark-900">{step.title}</h3>
                  <p className="text-sm text-dark-800/70 mt-1 max-w-[260px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="block lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-electric/30 -translate-x-1/2 rounded-full" />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
