import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const WA_LINK =
  'https://wa.me/TUNUMERO?text=Hola%20Elvia%20quiero%20información%20sobre%20SheSa'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18 } },
}

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Bienvenida a SheSa"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-24 pb-16"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, #E6C2E0 0%, #E1B9DA 40%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, #E2B4A6 0%, #E4C6CE 50%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Text column ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start gap-5"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary-pink/40 text-primary-lilac text-xs font-heading font-semibold px-4 py-1.5 rounded-full shadow-card"
            >
              🌸 Comunidad de mamás emprendedoras
            </motion.span>

            {/* Script title */}
            <motion.h1
              variants={fadeUp}
              className="font-script text-6xl sm:text-7xl leading-tight text-gradient-shesa"
            >
              Tu momento<br />es ahora
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold text-2xl sm:text-3xl text-neutral-800 leading-snug"
            >
              Genera ingresos reales<br />
              <span className="text-primary-lilac">sin descuidar a tu familia</span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base text-neutral-600 max-w-md leading-relaxed"
            >
              Hola, soy <strong className="text-primary-lilac font-semibold">Elvia Martínez</strong>.
              En SheSa te acompaño a construir tu propio negocio desde casa,
              a tu ritmo, con una comunidad que te impulsa a crecer de verdad.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Button href={WA_LINK} target="_blank" rel="noopener noreferrer" size="lg">
                Quiero emprender 🚀
              </Button>
              <Button href="#emprender" variant="outline" size="lg">
                Conoce más
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mt-2"
            >
              <div className="flex -space-x-2">
                {['#C4A0BC','#E1B9DA','#E2B4A6'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-heading font-bold text-white"
                    style={{ background: c }}
                  >
                    {['E','M','L'][i]}
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-neutral-500">
                +200 mamás ya haciendo crecer su negocio ✨
              </p>
            </motion.div>
          </motion.div>

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Floating card decorations */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 glass rounded-2xl px-4 py-3 shadow-soft z-20 hidden sm:flex items-center gap-2"
            >
              <span className="text-xl">💰</span>
              <div>
                <p className="font-heading text-xs font-bold text-neutral-800">Ingresos reales</p>
                <p className="font-body text-[10px] text-neutral-500">Desde el primer mes</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-soft z-20 hidden sm:flex items-center gap-2"
            >
              <span className="text-xl">🌸</span>
              <div>
                <p className="font-heading text-xs font-bold text-neutral-800">Comunidad</p>
                <p className="font-body text-[10px] text-neutral-500">Crecemos juntas</p>
              </div>
            </motion.div>

            {/* Main image placeholder */}
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-hover">
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{
                  background: 'linear-gradient(145deg, #E6C2E0 0%, #E4C6CE 50%, #E2B4A6 100%)',
                }}
              >
                <span className="text-7xl">🌸</span>
                <div className="text-center px-6">
                  <p className="font-script text-3xl text-white drop-shadow">Elvia Martínez</p>
                  <p className="font-body text-sm text-white/80 mt-1">Fundadora de SheSa</p>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-body text-[10px] text-white/60 italic">
                    [ Reemplaza con tu foto aquí ]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <p className="font-body text-xs text-neutral-400">Descubre más</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-5 text-primary-pink"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
