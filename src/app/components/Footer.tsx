"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-[#00C9B8]/10 bg-[#0A0E1A] text-[#F0FFFE]">
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-125 -translate-x-1/2 rounded-full bg-[#00C9B8]/10 blur-[120px]" />

      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(240,255,254,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(240,255,254,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* SOBRE */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logodark.png"
                alt="Next Commerce Logo"
                width={150}
                height={150}
                priority
                className="h-14 w-auto object-contain md:h-16"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-[#F0FFFE]/65">
              Sites profissionais para negócios que levam a sério a própria
              imagem.
            </p>

            {/* Social */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/nextcommerc0?igsh=eWZyMzZweTBmZ3V6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-[#F0FFFE]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C9B8]/20 hover:bg-[#00C9B8]/10 hover:text-[#00C9B8]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/nextcommerce0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-[#F0FFFE]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C9B8]/20 hover:bg-[#00C9B8]/10 hover:text-[#00C9B8]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0FFFE]">
              Navegação
            </h3>

            <Link
              href="#solucoes"
              className="text-sm text-[#F0FFFE]/65 transition-colors duration-300 hover:text-[#00C9B8]"
            >
              Soluções
            </Link>

            <Link
              href="#portfolio"
              className="text-sm text-[#F0FFFE]/65 transition-colors duration-300 hover:text-[#00C9B8]"
            >
              Portfólio
            </Link>

            <Link
              href="#faq"
              className="text-sm text-[#F0FFFE]/65 transition-colors duration-300 hover:text-[#00C9B8]"
            >
              Dúvidas frequentes
            </Link>
          </div>

          {/* CONTATO */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0FFFE]">
              Contato direto
            </h3>

            <a
              href="https://wa.me/5511923736213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-[#00C9B8] transition-opacity hover:opacity-80"
            >
              <MessageSquare className="h-4 w-4" />
              (11) 92373-6213
            </a>

            <a
              href="mailto:nextcommerce0@gmail.com"
              className="flex items-center gap-3 text-sm text-[#F0FFFE]/65 transition-colors duration-300 hover:text-[#00C9B8]"
            >
              <Mail className="h-4 w-4" />
              nextcommerce0@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-[#F0FFFE]/40">
          <p>© {currentYear} Next Commerce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
