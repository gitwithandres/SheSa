import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

interface Benefit {
  icon: string
  title: string
  description: string
  color: string
}

const benefits: Benefit[] = [
  {
    icon: '⏰',
    title: 'Flexibilidad total',
    description:
      'Trabaja en tus propios horarios, desde casa o donde estés. Tu negocio se adapta a tu vida, no al revés. Tú eliges cuándo y cuánto.',
    color: 'from-[#E6C2E0]/30 to-[#C4A0BC]/10',
  },
  {
    icon: '💵',
    title: 'Ingresos reales',
    description:
      'Gana dinero genuino desde el primer mes con estrategias probadas. Construye una fuente de ingreso estable que crece contigo.',
    color: 'from-[#E4C6CE]/30 to-[#E2B4A6]/10',
  },
  {
    icon: '🤝',
    title: 'Comunidad',
    description:
      'No emprendes sola. Formas parte de una red de mamás que se apoyan, comparten y crecen juntas cada día.',
    color: 'from-[#E1B9DA]/30 to-[#E6C2E0]/10',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const Emprender: React.FC = () => {
  return (
    <section
      id="emprender"
      aria-label="Por qué emprender con SheSa"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle background shape */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C4A0BC 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase mb-3">
            ¿Por qué SheSa?
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-gradient-shesa mb-4">
            Emprender contigo
          </h2>
          <p className="font-body text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
            SheSa nació para demostrar que una mamá puede tenerlo todo:
            familia, tiempo y un negocio que la haga crecer.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b) => (
            <motion.div key={b.title} variants={itemVariants}>
              <Card className={`h-full bg-gradient-to-br ${b.color} border border-white`}>
                <div className="flex flex-col gap-4 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shadow-card text-3xl">
                    {b.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-heading font-bold text-lg text-neutral-800">
                      {b.title}
                    </h3>
                    <p className="font-body text-sm text-neutral-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="w-10 h-0.5 rounded-full bg-gradient-shesa opacity-60" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-script text-3xl sm:text-4xl text-primary-lilac">
            "El éxito más hermoso es el que compartes con quienes amas."
          </p>
          <cite className="font-body text-sm text-neutral-400 not-italic mt-3 block">
            — Elvia Martínez, fundadora de SheSa
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
