import React from 'react'
import { Navbar }          from './components/layout/Navbar'
import { Footer }          from './components/layout/Footer'
import { Hero }            from './components/sections/Hero'
import { QueEncontraras }  from './components/sections/QueEncontraras'
import { Conexion }        from './components/sections/Conexion'
import { MensajeClave }    from './components/sections/MensajeClave'
import { Libertad }        from './components/sections/Libertad'
import { MiCamino }        from './components/sections/MiCamino'
import { Respaldo }        from './components/sections/Respaldo'
import { WhatsAppCTA }     from './components/sections/WhatsAppCTA'

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
        <QueEncontraras />
        <Conexion />
        <MensajeClave />
        <Libertad />
        <MiCamino />
        <Respaldo />
        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  )
}

export default App
