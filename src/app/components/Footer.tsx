"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#6b03f6]/10 bg-[#07040E] text-[#A39CB5]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* SOBRE */}
          <div className="flex flex-col gap-4">
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

            <p className="max-w-xs text-sm leading-relaxed text-[#A39CB5]">
              Sites profissionais para negócios que levam a sério a própria
              imagem.
            </p>

            {/* Social */}
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://www.instagram.com/nextcommerc0?igsh=eWZyMzZweTBmZ3V6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-300 hover:scale-110 hover:text-[#6b03f6]"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:scale-110 hover:text-[#6b03f6]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F8F7FA]">
              Navegação
            </h3>

            <Link
              href="#solucoes"
              className="text-sm transition-colors duration-300 hover:text-[#6b03f6]"
            >
              Soluções
            </Link>

            <Link
              href="#portfolio"
              className="text-sm transition-colors duration-300 hover:text-[#6b03f6]"
            >
              Portfólio
            </Link>

            <Link
              href="#faq"
              className="text-sm transition-colors duration-300 hover:text-[#6b03f6]"
            >
              Dúvidas frequentes
            </Link>
          </div>

          {/* CONTATO */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F8F7FA]">
              Contato direto
            </h3>

            <a
              href="https://wa.me/5511923736213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#36f631] transition-opacity hover:opacity-80"
            >
              <MessageSquare className="h-4 w-4" />
              (11) 92373-6213
            </a>

            <a
              href="mailto:nextcommerce0@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors duration-300 hover:text-[#6b03f6]"
            >
              <Mail className="h-4 w-4" />
              nextcommerce0@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#110B24] pt-6 text-center text-xs text-[#6D6780]">
          <p>© {currentYear} Next Commerce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
