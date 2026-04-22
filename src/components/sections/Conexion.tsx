import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const Conexion: React.FC = () => {
  return (
    <section
      id="conexion"
      aria-label="Conexión – Yo también soy mamá"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fdf6fc 0%, #f9f0f8 40%, #fce8ec 100%)",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #E1B9DA 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
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
            💖 Conexión
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="font-script text-5xl sm:text-6xl py-2 text-gradient-shesa"
          >
            Yo también soy mamá…
            <br />
            y también dudé
          </motion.h2>

          {/* Storytelling paragraphs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-left sm:text-center"
          >
            <p className="font-body text-base text-neutral-600 leading-relaxed">
              Sé lo que se siente estar en casa, darlo todo por la familia y aun
              así sentirte cansada, con la mente llena y sin un espacio para ti.
            </p>

            <p className="font-body text-base text-neutral-600 leading-relaxed">
              También tuve miedo y pensé que necesitaba tener todo claro para
              empezar… pero entendí algo importante:{" "}
              <strong className="text-primary-lilac">
                no necesitamos hacerlo perfecto, solo dar pequeños pasos.
              </strong>
            </p>

            <p className="font-body text-base text-neutral-600 leading-relaxed">
              Como cuidar nuestra piel, salir a caminar 15 minutos o aprender
              algo nuevo.
            </p>

            <p className="font-body text-base text-neutral-700 leading-relaxed font-medium">
              Y ahí, poco a poco… todo empezó a cambiar.
            </p>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mt-4"
          >
            {["#C4A0BC", "#E1B9DA", "#E4C6CE", "#E2B4A6", "#E6C2E0"].map(
              (c, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
