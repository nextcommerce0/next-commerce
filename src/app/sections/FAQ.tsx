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
      question: "O que é uma vitrine digital da Next Commerce?",
      answer:
        "É uma página profissional feita para apresentar seu negócio de forma moderna e levar clientes direto para o WhatsApp. Ela é rápida, funciona muito bem no celular e é pensada para aumentar contatos e pedidos.",
    },
    {
      question: "Preciso pagar mensalidade?",
      answer:
        "Temos opções sem mensalidade, onde você paga apenas pelo desenvolvimento da vitrine. Também oferecemos manutenção opcional para quem quiser suporte, atualizações e melhorias contínuas.",
    },
    {
      question: "Em quanto tempo meu projeto fica pronto?",
      answer:
        "O prazo médio é de 5 a 7 dias úteis após recebermos as informações do seu negócio, como fotos, textos e referências.",
    },
    {
      question: "Serve para qualquer tipo de negócio?",
      answer:
        "Sim. Funciona muito bem para restaurantes, salões, clínicas, lojas, prestadores de serviço e qualquer empresa que use o WhatsApp como principal canal de atendimento.",
    },
    {
      question: "Vou conseguir editar depois?",
      answer:
        "Depende do plano escolhido. Podemos entregar uma estrutura simples para ajustes básicos ou cuidar das alterações para você.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full border-t border-[#110B24] bg-[#07040E] py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b03f6]">
            Dúvidas Frequentes
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-4xl">
            Perguntas{" "}
            <span className="text-[#36f631]">
              respondidas
            </span>
          </h2>

          <p className="mt-4 text-sm text-[#A39CB5] sm:text-base">
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
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#6b03f6]/30 bg-[#110B24]/40"
                    : "border-[#110B24] bg-[#110B24]/10 hover:border-[#6b03f6]/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-bold tracking-tight text-[#F8F7FA] sm:text-lg">
                    {item.question}
                  </span>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "border-[#36f631]/30 bg-[#07040E] text-[#36f631]"
                        : "border-[#110B24] bg-[#07040E] text-[#A39CB5]"
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
                    <p className="border-t border-[#110B24]/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-[#A39CB5] sm:text-base">
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