import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '@/components/SEO'
import FloatingSocial from '@/components/FloatingSocial'
import { categories, projects, type Project } from '@/data/portfolio'

const categoryDescriptions: Record<string, string> = {
  Vinilos: 'Descubre nuestros trabajos en vinilo decorativo, vinilo vehicular y rotulación. Calidad profesional en cada proyecto.',
  Lonas: 'Impresión de lonas publicitarias de gran formato para eventos, campañas y más. Materiales de alta durabilidad.',
  Rótulos: 'Rótulos luminosos y comerciales para fachadas. Diseño, fabricación e instalación profesional.',
  Branding: 'Identidad visual corporativa: logotipos, manual de marca, papelería y branding completo para tu negocio.',
  'Redes Sociales': 'Piezas gráficas para campañas en Instagram, Facebook y más. Contenido visual que conecta con tu audiencia.',
  Fotografía: 'Sesiones fotográficas profesionales para productos, catálogos y contenido publicitario.',
  Diseño: 'Diseño gráfico profesional: logotipos, identidad visual y piezas publicitarias.',
  Todos: 'Explora todos nuestros proyectos de publicidad, impresión, branding y diseño gráfico.',
}

const categoryImages: Record<string, string> = {
  Vinilos: 'https://images.unsplash.com/photo-1586339949916-3e5457d58f5c?w=1200&h=400&fit=crop',
  Lonas: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=400&fit=crop',
  Rótulos: 'https://images.unsplash.com/photo-1562778612-e7ba75e44e85?w=1200&h=400&fit=crop',
  Branding: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=400&fit=crop',
  'Redes Sociales': 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&h=400&fit=crop',
  Fotografía: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=400&fit=crop',
  Diseño: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=400&fit=crop',
}

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()
  const decoded = decodeURIComponent(category ?? '')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = decoded === 'Todos'
    ? projects
    : projects.filter(p => p.category === decoded)

  const headerImage = categoryImages[decoded]
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={decoded !== 'Todos' ? decoded : 'Portafolio'}
        description={categoryDescriptions[decoded] ?? 'Explora nuestros proyectos de publicidad, impresión y branding.'}
        url={`/categoria/${category}`}
      />
      <FloatingSocial />
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        <div className={`absolute inset-0 ${filtered[0]?.gradient ?? 'from-electric to-purple-600'} bg-gradient-to-br`} />
        {headerImage && (
          <img
            src={headerImage}
            alt={decoded}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container-main h-full flex flex-col justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 w-fit"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {decoded}
          </h1>
          <p className="text-white/70 mt-2 text-lg">
            {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <Link
                key={cat}
                to={cat === 'Todos' ? '/categoria/Todos' : `/categoria/${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  decoded === cat
                    ? 'bg-electric text-white'
                    : 'bg-light text-dark-800 hover:bg-electric/10'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark-800/60 text-lg">No hay proyectos en esta categoría aún.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer card-glass"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-medium">
                      <Search size={18} />
                      Ver proyecto
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setSelectedProject(null)
              setImageIndex(0)
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="h-56 relative bg-dark-900">
                {(() => {
                  const imgs = selectedProject.images ?? (selectedProject.image ? [selectedProject.image] : [])
                  const currentImg = imgs[imageIndex] || imgs[0]
                  return currentImg ? (
                    <img
                      src={currentImg}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient}`} />
                  )
                })()}

                <button
                  onClick={() => {
                    setSelectedProject(null)
                    setImageIndex(0)
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>

                <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>

                {(selectedProject.images?.length ?? 0) > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setImageIndex(i => {
                          const total = selectedProject.images!.length
                          return (i - 1 + total) % total
                        })
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setImageIndex(i => {
                          const total = selectedProject.images!.length
                          return (i + 1) % total
                        })
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setImageIndex(i) }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i === imageIndex ? 'bg-white' : 'bg-white/40'
                          }`}
                          aria-label={`Imagen ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-2">{selectedProject.title}</h3>
                <p className="text-dark-800/70">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
