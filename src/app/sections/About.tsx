"use client";

import { motion } from "motion/react";
import { Eye, Smartphone, Zap } from "lucide-react";

export default function About() {
  const pilares = [
    {
      icon: <Eye className="h-5 w-5 text-[#00C9B8]" />,
      title: "Primeira impressão que fica",
      description:
        "Seu site reflete o nível do seu trabalho. Visual limpo, identidade consistente e estrutura que transmite confiança antes de qualquer palavra.",
    },
    {
      icon: <Zap className="h-5 w-5 text-[#00C9B8]" />,
      title: "Velocidade e performance",
      description:
        "Sites leves e otimizados para abrir com agilidade em qualquer dispositivo, garantindo uma navegação fluida e sem esperas.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-[#00C9B8]" />,
      title: "Contato direto e simplificado",
      description:
        "A estrutura do site facilita o acesso ao WhatsApp e demais canais de contato, tornando a comunicação mais rápida e intuitiva.",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="solucoes"
      className="relative w-full overflow-hidden border-t border-[#0A0E1A]/5 bg-[#F0FFFE] py-24"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-75 w-125 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[120px]" />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,14,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,14,26,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-[#00C9B8]/20 bg-[#00C9B8]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9B8]">
            Metodologia Next
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0A0E1A] sm:text-4xl md:text-5xl">
            Na{" "}
            <span className="text-[#00C9B8] drop-shadow-[0_0_18px_rgba(0,201,184,0.18)]">
              Next
            </span>
            ,
            <br />
            cada site começa pelo que importa:{" "}
            <span className="text-[#00C9B8] drop-shadow-[0_0_18px_rgba(0,201,184,0.18)]">
              o seu negócio
            </span>
            .
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#0A0E1A]/70 sm:text-lg">
            Trabalhamos com foco em experiência do usuário, clareza e
            performance porque um site bem estruturado não é só mais bonito, é
            mais fácil de entender, de navegar e de confiar. O resultado é uma
            página que valoriza o seu trabalho, apresenta o que você faz com
            clareza e transmite credibilidade para quem acessa pela primeira
            vez.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {pilares.map((pilar) => (
            <motion.div
              key={pilar.title}
              variants={fadeUp}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-[#0A0E1A]/8 bg-white/70 p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#00C9B8]/20 hover:shadow-[0_0_40px_rgba(0,201,184,0.08)]"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-36 w-36 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[70px]" />
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 3,
                  scale: 1.05,
                }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00C9B8]/15 bg-[#00C9B8]/10 transition-all duration-300 group-hover:border-[#00C9B8]/30 group-hover:bg-[#00C9B8]/15"
              >
                {pilar.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 mt-5 text-lg font-bold tracking-tight text-[#0A0E1A]">
                {pilar.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#0A0E1A]/65">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}