import React from "react";
import { motion } from "framer-motion";

export const MensajeClave: React.FC = () => {
  return (
    <section
      id="mensaje-clave"
      aria-label="Mensaje clave"
      className="relative py-28 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #C4A0BC 0%, #E1B9DA 35%, #E4C6CE 65%, #E2B4A6 100%)",
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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Section badge */}
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-white/80 uppercase">
            🌿 Mensaje clave
          </span>

          {/* Main quote */}
          <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-md leading-tight">
            A veces salir de la zona de confort no es hacer algo grande…
          </h2>

          <p className="font-heading font-bold text-xl sm:text-2xl text-white/95">
            Es decidir hacer algo por ti.
          </p>

          {/* Divider */}
          <div className="w-16 h-0.5 rounded-full bg-white/40" />

          {/* Supporting text */}
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="font-body text-base text-white/90 leading-relaxed">
              Porque como mamás damos mucho, pero también necesitamos llenarnos.
            </p>
            <p className="font-body text-base text-white/90 leading-relaxed">
              Y cuando cambiamos un{" "}
              <strong className="text-white">1% cada día</strong>, en nosotras
              se siente… y en nuestro hogar también.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
