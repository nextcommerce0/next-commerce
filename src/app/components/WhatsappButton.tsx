"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511923736213"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento no WhatsApp"
      className="
        group fixed bottom-4 right-4 z-50
        flex items-center justify-center
        rounded-full bg-[#00C9B8]
        text-[#0A0E1A]
        shadow-[0_0_25px_rgba(0,201,184,0.28)]
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[0_0_40px_rgba(0,201,184,0.40)]

        h-13 w-13 p-0
        sm:bottom-6 sm:right-6
        sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5
      "
    >
      <FaWhatsapp className="h-6 w-6 shrink-0 sm:h-4.5 sm:w-4.5" />

      <span className="hidden whitespace-nowrap text-sm font-bold sm:inline">
        Atendimento no WhatsApp
      </span>
    </a>
  );
}