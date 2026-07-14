import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/data/stats'
import type { StatItem } from '@/data/stats'

function useCountUp(target: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let rafId: number
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, start])

  return count
}

const staggerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            CREA2 en números
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Nuestro compromiso con la calidad nos ha permitido alcanzar estas
            cifras
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: StatItem
  index: number
  inView: boolean
}) {
  const count = useCountUp(stat.value, 2000, inView)
  const Icon = stat.icon

  return (
    <motion.div
      custom={index}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
    >
      <Icon className="mb-4 h-8 w-8 text-electric" />
      <span className="text-4xl font-bold text-white">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-2 text-white/70">{stat.label}</span>
    </motion.div>
  )
}
