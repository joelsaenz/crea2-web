import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 container-main text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight max-w-5xl mx-auto"
        >
          Impulsamos tu marca con{' '}
          <span className="bg-gradient-to-r from-electric to-electric-light bg-clip-text text-transparent">
            soluciones creativas
          </span>{' '}
          de impresión y publicidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Diseñamos, imprimimos e instalamos soluciones publicitarias que ayudan
          a empresas y emprendedores a destacar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contacto" className="btn-primary text-base px-8 py-4 w-full sm:w-auto text-center">
            Solicitar Cotización
          </a>
          <a href="#portafolio" className="btn-outline text-base px-8 py-4 w-full sm:w-auto text-center">
            Ver Portafolio
          </a>
          <a href="#about" className="btn-outline text-base px-8 py-4 w-full sm:w-auto text-center">
            Sobre Nosotros
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  )
}
