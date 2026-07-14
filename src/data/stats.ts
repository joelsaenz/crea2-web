import { Users, Briefcase, Clock, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface StatItem {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
}

export const stats: StatItem[] = [
  { icon: Users, value: 500, suffix: '+', label: 'Clientes Atendidos' },
  { icon: Briefcase, value: 1200, suffix: '+', label: 'Proyectos Realizados' },
  { icon: Clock, value: 6, suffix: '+', label: 'Años de Experiencia' },
  { icon: Star, value: 98, suffix: '%', label: 'Satisfacción' },
]
