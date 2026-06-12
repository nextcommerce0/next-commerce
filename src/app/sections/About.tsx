"use client";

import { motion } from "motion/react";
import { Eye, Smartphone, Zap } from "lucide-react";

export default function About() {
  const pilares = [
    {
      icon: <Eye className="h-5 w-5 text-[#6b03f6]" />,
      title: "Design que prende atenção",
      description:
        "Vitrines com visual premium para gerar confiança e capturar o interesse do cliente nos primeiros segundos.",
    },
    {
      icon: <Zap className="h-5 w-5 text-[#36f631]" />,
      title: "Carregamento rápido",
      description:
        "Sites leves e otimizados para abrir rapidamente no celular, reduzindo abandono e aumentando contatos.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-[#6b03f6]" />,
      title: "WhatsApp sem fricção",
      description:
        "A navegação é desenhada para levar o cliente ao WhatsApp no momento certo, sem etapas desnecessárias.",
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
      className="w-full overflow-hidden border-t border-[#110B24] bg-[#07040E] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b03f6]">
            Metodologia Next
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#F8F7FA] sm:text-4xl md:text-5xl">
            Não criamos apenas sites.
            <br />
            Criamos experiências com{" "}
            <span className="text-[#36f631] drop-shadow-[0_0_15px_rgba(54,246,49,0.15)]">
              foco em conversão
            </span>
            .
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#A39CB5] sm:text-lg">
            Muitos negócios locais perdem clientes porque suas páginas
            são lentas, confusas ou difíceis de usar no celular.
            Criamos experiências rápidas, claras e feitas para gerar
            mais contatos no WhatsApp.
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
                y: -4,
                scale: 1.015,
              }}
              className="group relative rounded-2xl border border-[#110B24] bg-[#110B24]/20 p-6 transition-colors duration-300 hover:border-[#6b03f6]/40 hover:bg-[#110B24]/40"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 2,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#110B24] bg-[#07040E] transition-colors duration-300 group-hover:border-[#6b03f6]/30"
              >
                {pilar.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold tracking-tight text-[#F8F7FA]">
                {pilar.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[#A39CB5]">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}