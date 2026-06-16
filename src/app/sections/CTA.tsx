
"use client";

import { motion } from "motion/react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F0FFFE] px-6 py-24">
      {/* Glow energético */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-95 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C9B8]/10 blur-[130px]"
      />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,14,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,14,26,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

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
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0E1A] p-8 text-center shadow-[0_25px_80px_rgba(10,14,26,0.12)] md:p-16"
      >
        {/* Glow interno */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-70 w-100 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[100px]" />

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
          className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-[#00C9B8]/20 bg-[#00C9B8]/10 text-[#00C9B8]"
        >
          <MessageSquare className="h-6 w-6" />
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
          className="relative z-10 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#F0FFFE] sm:text-5xl"
        >
          Quando alguém te pesquisa no Google,{" "}
          <span className="text-[#00C9B8] drop-shadow-[0_0_20px_rgba(0,201,184,0.20)]">
            o que aparece
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
          className="relative z-10 mt-5 max-w-2xl text-base leading-relaxed text-[#F0FFFE]/70 sm:text-lg"
        >
          Se a resposta for “nada” ou, pior, o perfil de um concorrente,
          você provavelmente está perdendo contatos todos os dias sem nem saber.
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
          className="relative z-10 mt-10 w-full sm:w-auto"
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
                "0 0 30px rgba(0,201,184,0.20)",
                "0 0 40px rgba(0,201,184,0.30)",
                "0 0 30px rgba(0,201,184,0.20)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00C9B8] px-8 py-4 text-base font-bold text-[#0A0E1A] transition-all duration-300 sm:w-auto"
          >
            Bora mudar isso

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <ArrowUpRight className="h-5 w-5" />
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
          className="relative z-10 mt-6 text-center text-xs font-medium tracking-wide text-[#F0FFFE]/45"
        >
          Resposta rápida • Processo simples • Entrega ágil
        </motion.span>
      </motion.div>
    </section>
  );
}