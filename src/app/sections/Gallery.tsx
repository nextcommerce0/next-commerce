"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Gallery() {
  const projetos = [
    {
      title: "Brasa",
      category: "Gastronomia",
      image: "/restaurant.png",
      link: "https://template-restaurant-eight.vercel.app/",
    },
    {
      title: "Clínica Estética",
      category: "Estética & Beleza",
      image: "/beauty.png",
      link: "https://template-beauty.vercel.app/",
    },
    {
      title: "Advogados Associados",
      category: "Advocacia",
      image: "/advogados.png",
      link: "https://template-lawyer-psi.vercel.app/",
    },
    {
      title: "Barbearia Imprevisto",
      category: "Barbearia",
      image: "/barbershop.png",
      link: "https://template-barbershop-rust.vercel.app/",
    },
    {
      title: "Reflect Studio",
      category: "Fotografia",
      image: "/photographer.png",
      link: "https://template-photographer-psi.vercel.app/",
    },
  ];

  const projetosDuplicados = [
    ...projetos.map((p) => ({ ...p, id: `orig-${p.title}` })),
    ...projetos.map((p) => ({ ...p, id: `dup-${p.title}` })),
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden border-t border-[#0A0E1A]/5 bg-[#F0FFFE] py-24"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-150 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[120px]" />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,14,26,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,14,26,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-16 max-w-5xl px-6">
        <span className="inline-flex rounded-full border border-[#00C9B8]/20 bg-[#00C9B8]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9B8]">
          Portfólio
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0A0E1A] sm:text-4xl">
          Alguns projetos que saíram do{" "}
          <span className="text-[#00C9B8]">
            papel
          </span>
          .
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#0A0E1A]/70">
          Cada projeto foi pensado para oferecer uma experiência de navegação
          clara, moderna e bem estruturada. Explore os projetos e veja como
          cada solução foi construída na prática.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden py-4">
        {/* Fade lateral */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-linear-to-r from-[#F0FFFE] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-linear-to-l from-[#F0FFFE] to-transparent" />

        {/* Track */}
        <div className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {projetosDuplicados.map((projeto) => (
            <a
              key={projeto.id}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-72 shrink-0 overflow-hidden rounded-[28px] border border-[#0A0E1A]/8 bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00C9B8]/20 hover:shadow-[0_0_40px_rgba(0,201,184,0.10)] sm:w-85"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#EAF8F7]">
                <Image
                  src={projeto.image}
                  alt={projeto.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 340px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0E1A]/35 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00C9B8]">
                    {projeto.category}
                  </span>

                  <h3 className="mt-2 text-lg font-bold tracking-tight text-[#0A0E1A]">
                    {projeto.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#0A0E1A]/8 bg-white/80 text-[#0A0E1A]/60 transition-all duration-300 group-hover:border-[#00C9B8]/20 group-hover:bg-[#00C9B8]/10 group-hover:text-[#00C9B8]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}