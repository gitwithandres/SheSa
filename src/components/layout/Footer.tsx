import React from 'react'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-[#f9f0f8] border-t border-primary-pink/30 mt-0">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-script text-4xl py-2 text-gradient-shesa">SheSa</span>
          <p className="font-body text-xs text-neutral-500 max-w-xs text-center md:text-left">
            Comunidad de mamás que crecen juntas · Con propósito y a su ritmo
          </p>
        </div>

        {/* Links rápidos */}
        <nav className="flex flex-wrap justify-center gap-5">
          {[
            { label: 'Inicio',      href: '#hero'            },
            { label: 'Comunidad',   href: '#que-encontraras' },
            { label: 'Mi Camino',   href: '#mi-camino'       },
            { label: 'Contacto',    href: '#contacto'        },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm text-neutral-500 hover:text-primary-lilac transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-neutral-400 text-center">
          © {year} SheSa · Elvia Martínez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
