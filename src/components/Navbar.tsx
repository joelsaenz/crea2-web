import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navbar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.slice(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20">
      <div className="container-main flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
          className="text-2xl font-bold text-electric tracking-tight"
        >
          CREA2
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-electric bg-electric/10'
                  : 'text-dark-800/70 hover:text-electric hover:bg-electric/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-dark-800 hover:bg-dark-800/5 transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden border-t border-white/20 bg-white/90 backdrop-blur-xl"
          >
            <div className="container-main py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-electric bg-electric/10'
                      : 'text-dark-800/70 hover:text-electric hover:bg-electric/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
