import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Comunidad',   href: '#que-encontraras' },
  { label: 'Mi Camino',   href: '#mi-camino' },
  { label: 'Contacto',    href: '#contacto' },
]

const WA_LINK =
  'https://wa.me/573002255423?text=Hola%20Elvia%20quiero%20unirme%20a%20la%20comunidad%20SheSa'

export const Navbar: React.FC = () => {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass shadow-soft py-2' : 'bg-transparent py-4',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-script text-4xl leading-none py-1 text-gradient-shesa">
            SheSa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-500 text-neutral-700 hover:text-primary-lilac transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button href={WA_LINK} target="_blank" rel="noopener noreferrer" size="sm">
            Únete ahora ✨
          </Button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-primary-lilac transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary-lilac transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary-lilac transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/30 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-base font-medium text-neutral-700 hover:text-primary-lilac transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-2"
              >
                Únete ahora ✨
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
