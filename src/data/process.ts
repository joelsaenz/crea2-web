import type { LucideIcon } from 'lucide-react'
import { Headphones, PenTool, Settings, Truck, HeartHandshake } from 'lucide-react'

export interface Step {
  number: number
  title: string
  icon: LucideIcon
  description: string
}

export const steps: Step[] = [
  { number: 1, title: 'Escuchamos tu idea', icon: Headphones, description: 'Nos reunimos contigo para entender tus necesidades y objetivos' },
  { number: 2, title: 'Diseñamos la propuesta', icon: PenTool, description: 'Creamos una propuesta visual alineada a tu marca' },
  { number: 3, title: 'Producción', icon: Settings, description: 'Utilizamos tecnología de punta para la producción' },
  { number: 4, title: 'Instalación o entrega', icon: Truck, description: 'Instalamos o entregamos tu proyecto con puntualidad' },
  { number: 5, title: 'Seguimiento', icon: HeartHandshake, description: 'Damos seguimiento para garantizar tu satisfacción' },
]
