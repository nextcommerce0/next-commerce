"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07040E] pb-20 pt-28 md:pb-28 md:pt-36">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#110B24_1px,transparent_1px),linear-gradient(to_bottom,#110B24_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-40 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Glow Roxo Animado */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-150 -translate-x-1/2 rounded-full bg-[#6b03f6]/10 blur-[130px]"
      />

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
        {/* Heading */}
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
          className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#F8F7FA] sm:text-6xl md:text-7xl"
        >
          Transformamos visitas em conexões no{" "}
          <span className="text-[#36f631] drop-shadow-[0_0_20px_rgba(54,246,49,0.15)]">
            WhatsApp.
          </span>
        </motion.h1>

        {/* Subtitle */}
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
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#A39CB5] sm:text-lg"
        >
          Desenvolvemos experiências digitais de alta performance para negócios
          locais. Design cirúrgico, carregamento instantâneo e foco absoluto em
          vendas.
        </motion.p>

        {/* CTA Buttons */}
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
            className="group flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#36f631] px-7 py-3.5 text-sm font-bold text-[#07040E] shadow-[0_0_30px_rgba(54,246,49,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(54,246,49,0.4)] sm:w-auto"
          >
            Começar meu projeto
            <ArrowUpRight className="h-4 w-4 text-[#07040E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="#portfolio"
            className="flex w-full items-center justify-center rounded-lg border border-[#6b03f6]/20 bg-[#110B24]/40 px-7 py-3.5 text-sm font-medium text-[#F8F7FA] transition-all duration-300 hover:border-[#6b03f6]/40 hover:bg-[#6b03f6]/20 sm:w-auto"
          >
            Explorar portfólio
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-20 w-full max-w-3xl border-t border-[#110B24]"
        />
      </motion.div>
    </section>
  );
}