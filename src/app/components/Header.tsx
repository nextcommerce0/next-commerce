"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-[#00C9B8]/20 bg-[#0A0E1A]/95 backdrop-blur-md shadow-lg"
          : "border-[#00C9B8]/15 bg-[#F0FFFE]"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={scrolled ? "/logodarknobg.png" : "/logolightnobg.png"}
            alt="Next Commerce Logo"
            width={300}
            height={300}
            priority
            className="h-14 w-auto object-contain transition-all duration-500 md:h-16"
          />
        </Link>

        {/* NAVEGAÇÃO */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#solucoes"
            className={`text-sm font-medium transition-colors duration-300 hover:text-[#00C9B8] ${
              scrolled ? "text-[#F0FFFE]" : "text-[#0A0E1A]"
            }`}
          >
            O que fazemos
          </Link>

          <Link
            href="#portfolio"
            className={`text-sm font-medium transition-colors duration-300 hover:text-[#00C9B8] ${
              scrolled ? "text-[#F0FFFE]" : "text-[#0A0E1A]"
            }`}
          >
            Projetos
          </Link>

          <Link
            href="#planos"
            className={`text-sm font-medium transition-colors duration-300 hover:text-[#00C9B8] ${
              scrolled ? "text-[#F0FFFE]" : "text-[#0A0E1A]"
            }`}
          >
            Planos
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="https://wa.me/5511923736213"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-[#00C9B8] px-6 py-3 text-sm font-bold text-[#0A0E1A] shadow-[0_0_25px_rgba(0,201,184,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(0,201,184,0.4)]"
          >
            Falar com a Next
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
