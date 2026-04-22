import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const WA_LINK =
  "https://wa.me/573002255423?text=Hola%20Elvia%20quiero%20ser%20parte%20de%20la%20comunidad%20SheSa";

interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: "💡",
    title: "Ideas simples para generar ingresos",
    description:
      "Ideas prácticas para generar ingresos desde casa con manualidades, a tu ritmo y sin complicaciones.",
    color: "from-[#E6C2E0]/30 to-[#C4A0BC]/10",
  },
  {
    icon: "💪",
    title: "Motivación real",
    description:
      "Motivación real para los días en los que cuesta avanzar. No estás sola en este camino.",
    color: "from-[#E4C6CE]/30 to-[#E2B4A6]/10",
  },
  {
    icon: "🧘",
    title: "Actividades para despejar la mente",
    description:
      "Actividades prácticas para despejar la mente y reconectar contigo misma.",
    color: "from-[#E1B9DA]/30 to-[#E6C2E0]/10",
  },
  {
    icon: "🧠",
    title: "Herramientas para el estrés",
    description:
      "Herramientas para manejar el estrés y la ansiedad del día a día.",
    color: "from-[#E2B4A6]/30 to-[#E4C6CE]/10",
  },
  {
    icon: "🌸",
    title: "Pequeños hábitos",
    description:
      "Pequeños hábitos que te ayudan a sentirte mejor contigo misma, paso a paso.",
    color: "from-[#C4A0BC]/30 to-[#E1B9DA]/10",
  },
];

// Productos de manualidades (fotos del catálogo)
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Cajita Personalizable",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776359194/Generated_Image_April_15_2026_-_10_16AM_ejkgmo.png",
    description:
      "Cajita personalizada con los colores y diseño de tu preferencia.",
  },
  {
    id: "2",
    name: "Manilla con nombre personalizado",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_1_wiyarx.png",
    description: "Manilla personalizada con el nombre de tu preferencia.",
  },
  {
    id: "3",
    name: "Manilla Unicolor",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_3_ydm9hp.png",
    description: "Manilla unicolor con el color de tu preferencia.",
  },
  {
    id: "4",
    name: "Lapicero bordado personalizado",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_2_sv7z5c.png",
    description:
      "Lapicero bordado personalizado con el nombre de tu preferencia.",
  },
  {
    id: "5",
    name: "Manilla Unisex temática",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_4_y1ti36.png",
    description: "Manilla unisex con temática de tu equipo preferido.",
  },
  {
    id: "6",
    name: "Llavero personalizado",
    image:
      "https://res.cloudinary.com/dq7wcdneb/image/upload/v1776438358/Generated_Image_April_17_2026_-_10_05AM_c8a3ou.png",
    description: "Llavero personalizado con el nombre de tu preferencia.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const productContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const productItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const QueEncontraras: React.FC = () => {
  return (
    <section
      id="que-encontraras"
      aria-label="Qué encontrarás en SheSa"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle background shape */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #C4A0BC 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase mb-3">
            💡 ¿Qué encontrarás?
          </span>
          <br />
          <h2 className="font-script text-5xl sm:text-6xl py-2 text-gradient-shesa mb-4">
            Un espacio para ti
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Este es un espacio pensado para ti…{" "}
            <strong className="text-neutral-700">
              sin presión, sin exigencias.
            </strong>
          </p>
        </motion.div>

        {/* Benefits cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((b) => (
            <motion.div key={b.title} variants={itemVariants}>
              <Card
                className={`h-full bg-gradient-to-br ${b.color} border border-white`}
              >
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

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl sm:text-4xl text-primary-lilac">
            "Aquí no tienes que hacerlo perfecto… solo empezar."
          </p>
        </motion.blockquote>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <Button
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            👉 Quiero ser parte 💬
          </Button>
        </motion.div>

        {/* ── Manualidades gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-widest text-primary-lilac uppercase mb-3">
            Hechas con amor
          </span>
          <br />
          <h3 className="font-script text-4xl sm:text-5xl py-2 text-gradient-shesa mb-4">
            Manualidades
          </h3>
          <p className="font-body text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Algunas de las creaciones que nacen de este espacio. Ideas simples
            que se convierten en ingresos reales.
          </p>
        </motion.div>

        <motion.div
          variants={productContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={productItemVariants}>
              <Card className="flex flex-col gap-4 overflow-hidden p-0">
                {/* Image */}
                <div className="w-full aspect-square overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 px-5 pb-5">
                  <h4 className="font-heading font-bold text-base text-neutral-800">
                    {product.name}
                  </h4>
                  <p className="font-body text-xs text-neutral-500 leading-relaxed">
                    {product.description}
                  </p>
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
          Todos los productos son hechos a mano ✨
        </motion.p>
      </div>
    </section>
  );
};
