import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, Paintbrush, Cpu, UserCheck, Clock, MapPin } from 'lucide-react'

export interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
}

export const items: WhyItem[] = [
  {
    icon: BadgeCheck,
    title: 'Calidad Garantizada',
    description: 'Utilizamos materiales de primera calidad y tecnología de impresión profesional',
  },
  {
    icon: Paintbrush,
    title: 'Diseños Personalizados',
    description: 'Cada proyecto es único y diseñado a la medida de tus necesidades',
  },
  {
    icon: Cpu,
    title: 'Tecnología Profesional',
    description: 'Equipos de impresión y corte de última generación',
  },
  {
    icon: UserCheck,
    title: 'Atención Personalizada',
    description: 'Te acompañamos en todo el proceso, desde la idea hasta la instalación',
  },
  {
    icon: Clock,
    title: 'Entregas Puntuales',
    description: 'Respetamos los tiempos acordados para cada proyecto',
  },
  {
    icon: MapPin,
    title: 'Cobertura Nacional',
    description: 'Llegamos a todo el país con nuestras soluciones',
  },
]
