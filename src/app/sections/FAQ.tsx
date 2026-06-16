"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "Preciso entender de tecnologia para ter um site?",
      answer:
        "Não. Nossa função é justamente cuidar de tudo isso por você. Você nos conta sobre o seu negócio, o que faz, para quem, como quer se apresentar e a gente transforma isso em um site. Nenhum conhecimento técnico é necessário da sua parte.",
    },
    {
      question: "O que está incluído no desenvolvimento do site?",
      answer:
        "Cada projeto inclui criação do design, desenvolvimento das páginas, adaptação para celular e tablet, configuração básica de SEO e entrega pronta para publicar. Os detalhes variam conforme a necessidade de cada cliente, por isso começamos sempre com uma conversa.",
    },
    {
      question: "Meu site vai aparecer no Google?",
      answer:
        "Todo site que desenvolvemos já sai com uma estrutura otimizada para mecanismos de busca — títulos, descrições, velocidade de carregamento e organização do conteúdo. Isso aumenta as chances de aparecer nas buscas.",
    },
    {
      question: "O que é SEO e por que isso importa?",
      answer:
        "SEO é o conjunto de configurações que ajuda o Google a entender do que se trata o seu site e a mostrá-lo para as pessoas certas na hora certa. Pense como uma vitrine: de nada adianta ter um espaço bem organizado se ele estiver escondido numa rua que ninguém passa. O SEO é o que coloca seu site numa rua movimentada.",
    },
    {
      question: "Preciso ter textos e fotos prontos para começar?",
      answer:
        "Não necessariamente. Se você já tiver um material pronto, ótimo, mas se não tiver, podemos ajudar a organizar as informações e sugerir imagens que se encaixem no seu negócio. O importante é que a gente tenha uma boa conversa para entender o que você faz e como quer se apresentar.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden border-t border-[#0A0E1A]/5 bg-[#F0FFFE] py-24"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-75 w-125 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[120px]" />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,14,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,14,26,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-[#00C9B8]/20 bg-[#00C9B8]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9B8]">
            Dúvidas Frequentes
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0A0E1A] sm:text-4xl">
            Perguntas{" "}
            <span className="text-[#00C9B8]">
              respondidas
            </span>
          </h2>

          <p className="mt-4 text-sm text-[#0A0E1A]/65 sm:text-base">
            Algumas dúvidas comuns antes de começar seu projeto.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-[#00C9B8]/20 bg-white/80 shadow-[0_0_40px_rgba(0,201,184,0.06)]"
                    : "border-[#0A0E1A]/8 bg-white/60 hover:border-[#00C9B8]/15"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-bold tracking-tight text-[#0A0E1A] sm:text-lg">
                    {item.question}
                  </span>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#00C9B8]/20 bg-[#00C9B8]/10 text-[#00C9B8]"
                        : "border-[#0A0E1A]/8 bg-white text-[#0A0E1A]/50"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#0A0E1A]/6 px-6 pb-6 pt-4 text-sm leading-relaxed text-[#0A0E1A]/70 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}