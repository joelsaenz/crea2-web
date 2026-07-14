export const categories = ['Todos', 'Vinilos', 'Lonas', 'Rótulos', 'Branding', 'Redes Sociales', 'Diseño', 'Fotografía']

export interface Project {
  title: string
  category: string
  description: string
  gradient: string
  image?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    title: 'Branding Corporativo',
    category: 'Branding',
    description: 'Desarrollo de identidad visual completa para empresa corporativa.',
    gradient: 'from-purple-500 to-purple-800',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Vinilo Decorativo',
    category: 'Vinilos',
    description: 'Vinilo decorativo para oficina corporativa con diseño personalizado.',
    gradient: 'from-blue-400 to-blue-700',
    images: [
      'https://images.unsplash.com/photo-1586339949916-3e5457d58f5c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Lona Publicitaria',
    category: 'Lonas',
    description: 'Lona de gran formato para campaña publicitaria exterior.',
    gradient: 'from-emerald-400 to-emerald-700',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Rótulo Luminoso',
    category: 'Rótulos',
    description: 'Rótulo LED frontal para fachada de local comercial.',
    gradient: 'from-orange-400 to-orange-700',
    images: [
      'https://images.unsplash.com/photo-1562778612-e7ba75e44e85?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Campaña Redes Sociales',
    category: 'Redes Sociales',
    description: 'Set de piezas gráficas para campaña en Instagram y Facebook.',
    gradient: 'from-pink-400 to-pink-700',
    images: [
      'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1432889821006-3149404b3d5a?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Fotografía de Producto',
    category: 'Fotografía',
    description: 'Sesión fotográfica profesional para catálogo de productos.',
    gradient: 'from-teal-400 to-teal-700',
    images: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Diseño de Logo',
    category: 'Diseño',
    description: 'Creación de logotipo minimalista para startup tecnológica.',
    gradient: 'from-indigo-400 to-indigo-700',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Vinilo Vehicular',
    category: 'Vinilos',
    description: 'Rotulación completa de flotilla vehicular con vinilo de corte.',
    gradient: 'from-rose-500 to-rose-800',
    images: [
      'https://images.unsplash.com/photo-1586339949916-3e5457d58f5c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Identidad Visual',
    category: 'Branding',
    description: 'Sistema de identidad visual con papelería corporativa y manual de marca.',
    gradient: 'from-amber-400 to-amber-700',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Lona Gigante',
    category: 'Lonas',
    description: 'Impresión de lona monumental para evento masivo.',
    gradient: 'from-cyan-400 to-cyan-700',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    ],
  },
]
