import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { categories, projects, type Project } from '@/data/portfolio'

const featured = projects.slice(0, 6)

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <section id="portafolio" className="section-padding bg-white">
      <div className="container-main">
        <h2 className="section-title text-center">Portafolio</h2>
        <p className="section-subtitle text-center">
          Conoce algunos de nuestros proyectos más destacados
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.filter(c => c !== 'Todos').map(cat => (
            <Link
              key={cat}
              to={`/categoria/${encodeURIComponent(cat)}`}
              className="px-5 py-2 rounded-full text-sm font-medium bg-light text-dark-800 hover:bg-electric hover:text-white transition-colors duration-200"
            >
              {cat}
            </Link>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((project, i) => (
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

        <div className="text-center mt-10">
          <Link
            to="/categoria/Todos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric text-white font-medium hover:bg-electric/90 transition-colors"
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

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
    </section>
  )
}
