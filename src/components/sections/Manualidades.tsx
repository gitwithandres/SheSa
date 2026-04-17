import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import type { Product } from '../../lib/supabase'

// ── Datos estáticos tipados (preparados para migrar a Supabase) ──────────
const products: Product[] = [
  {
    id: '1',
    name: 'Cajita Personalizable',
    price: 10000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776359194/Generated_Image_April_15_2026_-_10_16AM_ejkgmo.png',
    category: 'manualidades',
    description: 'Cajita personalizada con los colores y diseño de tu preferencia.',
    whatsapp_message: 'Hola Elvia, quiero una cajita personalizada 🎁',
  },
  {
    id: '2',
    name: 'Manilla con nombre personalizado',
    price: 5000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_1_wiyarx.png',
    category: 'manualidades',
    description: 'Manilla personalizada con el nombre de tu preferencia.',
    whatsapp_message: 'Hola Elvia, quiero una manilla personalizada 📿',
  },
  {
    id: '3',
    name: 'Manilla Unicolor',
    price: 5000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_3_ydm9hp.png',
    category: 'manualidades',
    description: 'Manilla unicolor con el color de tu preferencia.',
    whatsapp_message: 'Hola Elvia, quiero una manilla unicolor 📿',
  },
  {
    id: '4',
    name: 'Lapicero bordado personalizado',
    price: 8000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_2_sv7z5c.png',
    category: 'manualidades',
    description: 'Lapicero bordado personalizado con el nombre de tu preferencia.',
    whatsapp_message: 'Hola Elvia, quiero un lapicero bordado personalizado 🖊️',
  },
  {
    id: '5',
    name: 'Manilla Unisex con tematica de tu equipo preferido',
    price: 5000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_4_y1ti36.png',
    category: 'manualidades',
    description: 'Manilla unisex con tematica de tu equipo preferido.',
    whatsapp_message: 'Hola Elvia, quiero una manilla unisex con tematica de mi equipo preferido 📿',
  },
  {
    id: '6',
    name: 'Llavero personalizado',
    price: 5000,
    image: 'https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_c8a3ou.png',
    category: 'manualidades',
    description: 'Llavero personalizado con el nombre de tu preferencia.',
    whatsapp_message: 'Hola Elvia, quiero un llavero personalizado 🔑',
  },
]


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
    `https://wa.me/573002255423?text=${encodeURIComponent(msg)}`

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
                <div className="w-full aspect-square overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>  

                {/* Content */}
                <div className="flex flex-col gap-3 px-5 pb-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-base text-neutral-800 flex-1">
                      {product.name}
                    </h3>
                    <span className="font-heading font-bold text-sm text-primary-lilac whitespace-nowrap">
                      ${product.price.toLocaleString('es-MX')} COP
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
