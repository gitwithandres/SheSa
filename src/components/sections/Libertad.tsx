import React from "react";
import { motion } from "framer-motion";

const items = [
  { icon: "🚶‍♀️", text: "Avanzar a tu ritmo" },
  { icon: "🌱", text: "Probar cosas nuevas sin presión" },
  { icon: "🧘", text: "Tener un espacio para ti" },
  { icon: "✨", text: "Crecer sin compararte" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Libertad: React.FC = () => {
  return (
    <section
      id="libertad"
      aria-label="Tu libertad"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #E6C2E0 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase">
              🌸 Libertad
            </span>

            <h2 className="font-script text-4xl sm:text-5xl py-2 text-gradient-shesa">
              Este espacio es
              <br />
              para ti si quieres:
            </h2>
          </motion.div>

          {/* Right: List items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4 bg-gradient-to-r from-[#fdf6fc] to-white rounded-2xl px-6 py-5 border border-primary-pink/20 shadow-card hover:shadow-hover transition-shadow duration-300"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="font-heading font-semibold text-base text-neutral-800">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-script text-3xl sm:text-4xl text-primary-lilac">
            "Aquí no hay exigencias… hay acompañamiento."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};
