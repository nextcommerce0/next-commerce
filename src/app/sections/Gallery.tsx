"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Gallery() {
  const projetos = [
    {
      title: "Burger & Co. Craft",
      category: "Gastronomia",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
      link: "https://exemplo1.com.br",
    },
    {
      title: "Studio Donna | Beauty",
      category: "Estética & Beleza",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
      link: "https://exemplo2.com.br",
    },
    {
      title: "EletroVolt Materiais",
      category: "Serviços Locais",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356df?q=80&w=1200&auto=format&fit=crop",
      link: "https://exemplo3.com.br",
    },
    {
      title: "Aura Concept Store",
      category: "Moda & Vestuário",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      link: "https://exemplo4.com.br",
    },
  ];

  const projetosDuplicados = [
    ...projetos.map((p) => ({ ...p, id: `orig-${p.title}` })),
    ...projetos.map((p) => ({ ...p, id: `dup-${p.title}` })),
  ];

  return (
    <section
      id="portfolio"
      className="w-full overflow-hidden border-t border-[#110B24] bg-[#07040E] py-24"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-5xl px-6">
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#F8F7FA] sm:text-4xl">
          Alguns projetos que saíram do{" "}
          <span className="text-[#36f631]">papel</span>.
        </h2>

        <p className="mt-4 max-w-2xl text-base text-[#A39CB5]">
          Cada projeto foi pensado para oferecer uma experiência de navegação
          clara, moderna e bem estruturada. Explore os projetos e veja como cada
          solução foi construída na prática.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden py-4">
        {/* Fade lateral */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#07040E] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#07040E] to-transparent" />

        {/* Track */}
        <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {projetosDuplicados.map((projeto) => (
            <a
              key={projeto.id}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-70 shrink-0 overflow-hidden rounded-2xl border border-[#110B24] bg-[#110B24]/20 transition-all duration-300 hover:border-[#6b03f6]/40 hover:bg-[#110B24]/50 sm:w-85"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#110B24]">
                <Image
                  src={projeto.image}
                  alt={projeto.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 340px"
                />

                <div className="absolute inset-0 bg-[#07040E]/20 transition-colors duration-300 group-hover:bg-[#07040E]/40" />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b03f6]">
                    {projeto.category}
                  </span>

                  <h3 className="mt-1 text-base font-bold tracking-tight text-[#F8F7FA]">
                    {projeto.title}
                  </h3>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#110B24] bg-[#07040E] text-[#A39CB5] transition-all duration-300 group-hover:border-[#36f631]/30 group-hover:text-[#36f631]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
