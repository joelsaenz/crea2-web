import type { LucideIcon } from 'lucide-react'
import { Palette, Printer, PenTool, Megaphone, Monitor } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  items: string[]
}

export const services: Service[] = [
  {
    icon: Palette,
    title: 'Diseño y Branding',
    items: ['Diseño de logotipos', 'Identidad corporativa', 'Manual de marca', 'Papelería empresarial'],
  },
  {
    icon: Printer,
    title: 'Impresión Publicitaria',
    items: ['Vinilos', 'Lonas', 'Stickers', 'PVC', 'Backlight', 'Microperforado', 'DTF UV', 'Sublimación'],
  },
  {
    icon: PenTool,
    title: 'Rotulación',
    items: ['Rótulos comerciales', 'Fachadas', 'Señalización', 'Rotulación vehicular', 'Letras corpóreas'],
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    items: ['Redes sociales', 'Diseño para redes', 'Campañas publicitarias', 'Fotografía', 'Video'],
  },
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    items: ['Sitios web', 'Landing Pages', 'Tiendas en línea', 'Sistemas web', 'SEO'],
  },
]
