import React from "react";
import { motion } from "framer-motion";

export const Respaldo: React.FC = () => {
  return (
    <section
      id="respaldo"
      aria-label="Respaldo"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #E1B9DA 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Section badge */}
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase">
            🧠 Respaldo
          </span>

          {/* Main message */}
          <h2 className="font-script text-4xl sm:text-5xl py-2 text-gradient-shesa">
            Pequeños cambios pueden
            <br />
            transformar tu bienestar.
          </h2>

          <div className="w-12 h-0.5 rounded-full bg-gradient-shesa opacity-60" />

          <p className="font-body text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Hoy sabemos que aprender, crear y mantener la mente ocupada en cosas
            positivas ayuda a{" "}
            <strong className="text-neutral-700">reducir el estrés</strong>,{" "}
            <strong className="text-neutral-700">mejorar el ánimo</strong> y{" "}
            <strong className="text-neutral-700">
              fortalecer nuestra salud emocional
            </strong>
            .
          </p>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl px-10 py-8 mt-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(230,194,224,0.15) 0%, rgba(225,185,218,0.15) 50%, rgba(226,180,166,0.15) 100%)",
              border: "1px solid rgba(196,160,188,0.25)",
            }}
          >
            <p className="font-script text-3xl sm:text-4xl text-primary-lilac">
              "No es solo lo que haces… es cómo te hace sentir."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
