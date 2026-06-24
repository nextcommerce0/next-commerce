"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 65,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 65,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x * 0.7);
    mouseY.set(y * 0.7);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-[#F0FFFE] pb-20 pt-20 md:pb-28 md:pt-24"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,14,26,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,14,26,0.06)_1px,transparent_1px)] bg-size-4rem_4rem" />

      {/* ENERGIA INTERATIVA */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="pointer-events-none absolute inset-0 flex items-start justify-center pt-16 md:pt-20"
      >
        {/* Glow principal */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-155 w-155 rounded-full bg-[#00C9B8]/45 blur-[120px]"
        />

        {/* Núcleo energético */}
        <motion.div
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-72.5 w-72.5 rounded-full bg-[#00C9B8]/55 blur-[70px]"
        />

        {/* Aura orgânica girando */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.06, 1],
          }}
          transition={{
            rotate: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute h-190 w-190"
        >
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#00C9B8]/35 via-transparent to-[#00C9B8]/18 blur-[100px]" />
        </motion.div>

        {/* Centro brilhante */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-16 w-16 rounded-full bg-[#00C9B8] blur-[28px]"
        />
      </motion.div>

      {/* CONTEÚDO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        {/* HEADING */}
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0A0E1A] sm:text-6xl md:text-7xl"
        >
          Seu negócio merece um site tão profissional quanto o que você <br />
          <span
            className="
              relative
              text-[#00C9B8]
              [-webkit-text-stroke:0.9px_rgba(255,255,255,0.95)]
              [paint-order:stroke_fill]
              [text-shadow:0_0_0_rgba(255,255,255,0)]
              [-webkit-font-smoothing:antialiased]
              [text-rendering:geometricPrecision]
            "
          >
            oferece
          </span>
          .
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#0A0E1A]/80 sm:text-lg"
        >
          Na Next, desenvolvemos sites personalizados para empresas e
          profissionais que querem se apresentar com credibilidade, design
          consistente e uma estrutura que funciona de verdade.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="https://wa.me/5511923736213"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#00C9B8] px-7 py-3.5 text-sm font-bold text-[#0A0E1A] shadow-[0_0_35px_rgba(0,201,184,0.30)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,201,184,0.45)] sm:w-auto"
          >
            Começar meu projeto
          </a>

          <Link
            href="#portfolio"
            className="flex w-full items-center justify-center rounded-xl border border-[#0A0E1A]/10 bg-white/50 px-7 py-3.5 text-sm font-medium text-[#0A0E1A] backdrop-blur-sm transition-all duration-300 hover:border-[#00C9B8]/30 hover:bg-[#00C9B8]/10 sm:w-auto"
          >
            Explorar portfólio
          </Link>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.7,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-20 w-full max-w-3xl border-t border-[#0A0E1A]/10"
        />
      </motion.div>
    </section>
  );
}
