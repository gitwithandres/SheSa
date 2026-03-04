import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import type { Product } from '../../lib/supabase'

// ── Datos estáticos tipados (preparados para migrar a Supabase) ──────────
const products: Product[] = [
  {
    id: '1',
    name: 'Arreglo floral en caja',
    price: 350,
    image: '',
    category: 'manualidades',
    description: 'Elegante arreglo floral hecho a mano en caja kraft.',
    whatsapp_message: 'Hola Elvia, quiero el Arreglo floral en caja 🌸',
  },
  {
    id: '2',
    name: 'Vela aromática artesanal',
    price: 180,
    image: '',
    category: 'manualidades',
    description: 'Vela de soya con esencias naturales, perfecta para regalar.',
    whatsapp_message: 'Hola Elvia, me interesa la Vela aromática artesanal 🕯️',
  },
  {
    id: '3',
    name: 'Porta retrato bordado',
    price: 220,
    image: '',
    category: 'manualidades',
    description: 'Marco bordado a mano con diseños florales únicos.',
    whatsapp_message: 'Hola Elvia, quiero el Porta retrato bordado 🖼️',
  },
  {
    id: '4',
    name: 'Set de jabones naturales',
    price: 290,
    image: '',
    category: 'manualidades',
    description: 'Set de 3 jabones artesanales con ingredientes naturales.',
    whatsapp_message: 'Hola Elvia, me interesa el Set de jabones naturales 🧼',
  },
  {
    id: '5',
    name: 'Maceta decorativa pintada',
    price: 160,
    image: '',
    category: 'manualidades',
    description: 'Maceta de barro pintada a mano con diseños únicos.',
    whatsapp_message: 'Hola Elvia, quiero la Maceta decorativa pintada 🪴',
  },
  {
    id: '6',
    name: 'Caja regalo personalizada',
    price: 450,
    image: '',
    category: 'manualidades',
    description: 'Caja regalo armada con productos artesanales seleccionados.',
    whatsapp_message: 'Hola Elvia, quiero la Caja regalo personalizada 🎁',
  },
]

const placeholderEmojis: Record<string, string> = {
  '1': '🌸', '2': '🕯️', '3': '🖼️',
  '4': '🧼', '5': '🪴', '6': '🎁',
}

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const Manualidades: React.FC = () => {
  const buildWALink = (msg: string) =>
    `https://wa.me/TUNUMERO?text=${encodeURIComponent(msg)}`

  return (
    <section
      id="manualidades"
      aria-label="Manualidades SheSa"
      className="py-24 bg-gradient-to-b from-[#fdf6fc] to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase mb-3">
            Hechas con amor
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-gradient-shesa mb-4">
            Manualidades
          </h2>
          <p className="font-body text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Cada pieza es única, creada a mano con dedicación.
            Perfectas para regalar o para decorar tu espacio con alma.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="flex flex-col gap-4 overflow-hidden p-0">
                {/* Image placeholder */}
                <div
                  className="w-full aspect-square flex items-center justify-center text-6xl rounded-t-3xl"
                  style={{
                    background:
                      'linear-gradient(145deg, #f9f0f8 0%, #fce8ec 100%)',
                  }}
                >
                  {placeholderEmojis[product.id] ?? '🎨'}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 px-5 pb-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-base text-neutral-800 flex-1">
                      {product.name}
                    </h3>
                    <span className="font-heading font-bold text-sm text-primary-lilac whitespace-nowrap">
                      ${product.price.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  {product.description && (
                    <p className="font-body text-xs text-neutral-500 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <Button
                    href={buildWALink(product.whatsapp_message ?? `Hola Elvia, quiero ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="mt-1 w-full"
                  >
                    Comprar por WhatsApp 💬
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Info note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center font-body text-xs text-neutral-400 mt-10"
        >
          Todos los productos son hechos a mano · Envíos disponibles · Precios sujetos a cambio sin previo aviso
        </motion.p>
      </div>
    </section>
  )
}
