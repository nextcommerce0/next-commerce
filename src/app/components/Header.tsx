"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#6b03f6]/15 bg-[#0B0714]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Next Commerce Logo"
            width={150}
            height={150}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* NAVEGAÇÃO */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#solucoes"
            className="text-sm font-medium text-[#A39CB5] transition-colors duration-300 hover:text-[#6b03f6]"
          >
            O que fazemos
          </Link>

          <Link
            href="#portfolio"
            className="text-sm font-medium text-[#A39CB5] transition-colors duration-300 hover:text-[#6b03f6]"
          >
            Vitrines
          </Link>

          <Link
            href="#planos"
            className="text-sm font-medium text-[#A39CB5] transition-colors duration-300 hover:text-[#6b03f6]"
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
            className="group flex items-center gap-2 rounded-full bg-[#36f631] px-6 py-3 text-sm font-bold text-[#07040E] shadow-[0_0_25px_rgba(54,246,49,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(54,246,49,0.4)]"
          >
            Criar minha vitrine
            <ArrowUpRight className="h-4 w-4 text-[#07040E] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
