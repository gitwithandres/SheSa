import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const WA_LINK =
  "https://wa.me/573002255423?text=Hola%20Elvia%20quiero%20saber%20más%20sobre%20SheSa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

export const MiCamino: React.FC = () => {
  return (
    <section
      id="mi-camino"
      aria-label="Parte de mi camino"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fdf6fc 0%, #f9f0f8 40%, #fce8ec 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #C4A0BC 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #E2B4A6 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Section badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase"
          >
            ✨ Parte de mi camino
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="font-script text-5xl sm:text-6xl py-2 text-gradient-shesa"
          >
            Lo que también forma
            <br />
            parte de mi proceso…
          </motion.h2>

          {/* Story paragraphs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-left sm:text-center"
          >
            <p className="font-body text-base text-neutral-600 leading-relaxed">
              En este camino de crecer como mamá y mujer, he explorado diferentes
              formas de avanzar… algunas más simples, otras más retadoras.
            </p>

            <p className="font-body text-base text-neutral-600 leading-relaxed">
              Una de ellas ha sido el mundo de la belleza y el cuidado personal,
              algo que empezó como amor propio… y también me permitió generar
              ingresos.
            </p>

            <p className="font-body text-base text-neutral-600 leading-relaxed">
              Para mí no se trata solo de vender, sino de sentirme bien conmigo
              misma, aprender y rodearme de una comunidad que también quiere
              crecer.
            </p>

            <p className="font-body text-base text-neutral-600 leading-relaxed">
              Gracias a eso he tenido acceso a espacios de capacitación, lectura
              y acompañamiento que han aportado mucho a mi proceso.
            </p>
          </motion.div>

          {/* Important note */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-primary-pink/30 bg-white/80 backdrop-blur-sm px-8 py-6 max-w-xl shadow-card"
          >
            <p className="font-heading font-bold text-base text-neutral-800 mb-3">
              Pero algo importante…
            </p>
            <p className="font-body text-sm text-neutral-600 leading-relaxed mb-3">
              <strong className="text-primary-lilac">
                Esto no es una obligación, ni es para todas.
              </strong>
              <br />
              Cada mamá es libre de elegir su camino.
            </p>
            <p className="font-body text-sm text-neutral-600 leading-relaxed">
              Aquí puedes simplemente venir a aprender, despejar tu mente y
              avanzar poco a poco…
            </p>
            <p className="font-body text-sm text-neutral-600 leading-relaxed mt-2">
              Y si en algún momento quieres conocer otras opciones, también
              estaré para guiarte.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote variants={fadeUp} className="mt-4">
            <p className="font-script text-3xl sm:text-4xl text-primary-lilac">
              "No se trata de hacer todo… se trata de encontrar lo que conecta
              contigo."
            </p>
          </motion.blockquote>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-4">
            <Button
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              👉 Quiero saber más 💬
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
