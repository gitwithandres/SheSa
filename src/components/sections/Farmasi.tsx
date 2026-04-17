import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

interface FarmasiOption {
  icon: string
  title: string
  description: string
  cta: string
  href: string
  variant: 'primary' | 'outline' | 'ghost'
}

const options: FarmasiOption[] = [
  {
    icon: '🛍️',
    title: 'Comprar en mi tienda',
    description:
      'Descubre toda la línea Farmasi: maquillaje, cuidado personal y más, con los mejores precios directos.',
    cta: 'Ir a mi tienda Farmasi',
    href: 'https://www.co.farmasi.com/elvimartinez17',
    variant: 'primary',
  },
  {
    icon: '🎁',
    title: 'Registrarte como cliente',
    description:
      'Regístrate como cliente VIP y accede a descuentos exclusivos, ofertas especiales y beneficios únicos.',
    cta: 'Quiero ser cliente VIP',
    href: 'https://www.co.farmasi.com/elvimartinez17/register/customer',
    variant: 'outline',
  },
  {
    icon: '🌟',
    title: 'Ser parte de mi equipo',
    description:
      'Únete a SheSa como distribuidora Farmasi y comienza a generar ingresos mientras usas productos que amas.',
    cta: 'Quiero unirme al equipo',
    href: 'https://www.co.farmasi.com/elvimartinez17/register/beautyinfluencer',
    variant: 'ghost',
  },
]

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const Farmasi: React.FC = () => {
  return (
    <section
      id="farmasi"
      aria-label="Farmasi con SheSa"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Top decorative wave */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #fdf6fc, transparent)',
        }}
      />

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6C2E0, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase mb-3">
            Belleza con propósito
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-gradient-shesa mb-4">
            Farmasi
          </h2>
          <p className="font-body text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Farmasi es la marca de belleza y bienestar que me permite ayudarte a verte
            increíble y generar ingresos al mismo tiempo. Calidad real a precios accesibles.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-8 my-12"
        >
          {[
            { value: '+500', label: 'productos disponibles' },
            { value: '100%', label: 'calidad garantizada' },
            { value: '+40',  label: 'países con presencia' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-3xl text-gradient-shesa">{s.value}</p>
              <p className="font-body text-xs text-neutral-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Options grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {options.map((opt) => (
            <motion.div key={opt.title} variants={itemVariants}>
              <div
                className="h-full rounded-3xl border border-primary-pink/30 bg-gradient-to-br from-[#fdf6fc] to-white p-6 flex flex-col gap-4 shadow-card hover:shadow-hover transition-shadow duration-300"
              >
                <span className="text-4xl">{opt.icon}</span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-heading font-bold text-lg text-neutral-800">
                    {opt.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-500 leading-relaxed flex-1">
                    {opt.description}
                  </p>
                </div>
                <Button
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={opt.variant}
                  size="md"
                  className="w-full"
                >
                  {opt.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center rounded-3xl p-10"
          style={{
            background:
              'linear-gradient(135deg, #E6C2E0/20 0%, #E1B9DA/20 50%, #E2B4A6/20 100%)',
            border: '1px solid rgba(196,160,188,0.25)',
          }}
        >
          <p className="font-script text-4xl text-primary-lilac mb-3">
            Tu belleza, tu negocio, tu libertad.
          </p>
          <p className="font-body text-sm text-neutral-500 max-w-lg mx-auto">
            Con Farmasi y SheSa, construyes algo tuyo desde hoy.
            Sin grandes inversiones. Con el respaldo de una comunidad que ya lo está haciendo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
