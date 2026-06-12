"use client";

import { motion } from "motion/react";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#07040E] px-6 py-20">
      
      {/* Glow Roxo Respirando */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-87.5 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b03f6]/5 blur-[120px]"
      />

      {/* Card CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center rounded-[28px] border border-[#110B24] bg-linear-to-b from-[#110B24]/60 to-[#07040E] p-8 text-center md:p-16"
      >
        {/* Ícone */}
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6b03f6]/20 bg-[#6b03f6]/10 text-[#6b03f6]"
        >
          <MessageSquare className="h-5 w-5" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#F8F7FA] sm:text-5xl"
        >
          Pronto para transformar visitas em{" "}
          <span className="text-[#36f631] drop-shadow-[0_0_20px_rgba(54,246,49,0.15)]">
            conversas no WhatsApp
          </span>
          ?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-4 max-w-xl text-base leading-relaxed text-[#A39CB5] sm:text-lg"
        >
          Seu cliente já está procurando você. Criamos experiências
          rápidas, profissionais e pensadas para gerar mais mensagens
          e oportunidades de venda.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-10 w-full sm:w-auto"
        >
          <motion.a
            href="https://wa.me/5511923736213"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(54,246,49,0.22)",
                "0 0 38px rgba(54,246,49,0.32)",
                "0 0 30px rgba(54,246,49,0.22)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#36f631] px-8 py-4 text-base font-bold text-[#07040E] sm:w-auto"
          >
            Falar no WhatsApp

            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <ArrowRight className="h-5 w-5 text-[#07040E]" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Proof line */}
        <motion.span
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="mt-5 text-center text-xs font-medium tracking-wide text-[#6D6780]"
        >
          Resposta rápida • Processo simples • Entrega ágil
        </motion.span>
      </motion.div>
    </section>
  );
}