import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const WA_LINK =
  'https://chat.whatsapp.com/BBgGmAEfY50LRJ2cNvAQCZ'

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.077a.75.75 0 0 0 .916.916l5.219-1.476A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.67-.502-5.203-1.378l-.374-.215-3.868 1.094 1.094-3.868-.215-.374A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
)

export const WhatsAppCTA: React.FC = () => {
  return (
    <section
      id="contacto"
      aria-label="Cierre final – Únete a la comunidad"
      className="relative py-24 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #C4A0BC 0%, #E1B9DA 35%, #E4C6CE 65%, #E2B4A6 100%)',
        }}
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/15 blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-hover">
            <WhatsAppIcon className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="font-script text-5xl sm:text-6xl text-white drop-shadow-md">
            No tienes que hacerlo sola…
          </h2>

          <p className="font-body text-white/90 text-base sm:text-lg max-w-xl leading-relaxed">
            Este es un espacio para crecer, avanzar y volver a encontrarte
            contigo misma.
          </p>

          {/* WhatsApp button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Button
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              className="text-lg px-10 py-4 shadow-lg"
            >
               Unirme al grupo de WhatsApp 💬
            </Button>
          </motion.div>

          <p className="font-body text-white/70 text-xs">
            Sin presiones · Tu ritmo · Tu espacio
          </p>
        </motion.div>
      </div>
    </section>
  )
}
