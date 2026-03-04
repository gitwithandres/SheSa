import React from 'react'
import { Navbar }       from './components/layout/Navbar'
import { Footer }       from './components/layout/Footer'
import { Hero }         from './components/sections/Hero'
import { Emprender }    from './components/sections/Emprender'
import { WhatsAppCTA }  from './components/sections/WhatsAppCTA'
import { Manualidades } from './components/sections/Manualidades'
import { Farmasi }      from './components/sections/Farmasi'

const App: React.FC = () => {
  return (
    <>
      {/* ── Skip link for accessibility ── */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999] bg-primary-lilac text-white px-4 py-2 rounded-full font-heading text-sm"
      >
        Ir al contenido principal
      </a>

      {/* ── Layout ── */}
      <Navbar />

      <main id="main-content">
        <Hero />
        <Emprender />
        <WhatsAppCTA />
        <Manualidades />
        <Farmasi />
      </main>

      <Footer />
    </>
  )
}

export default App
