import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextcommerce.vercel.app"),

  title: {
    default: "Next Commerce | Sites Profissionais para Empresas",
    template: "%s | Next Commerce",
  },
  verification: {
    google: "GatA2S_BTmD-viWfkzUblPbkIgjeR6NlP4iX1mX46S8",
  },

  description:
    "Desenvolvemos sites profissionais, modernos e rápidos para empresas e profissionais que querem transmitir credibilidade, gerar confiança e atrair mais clientes.",

  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "site profissional",
    "landing page",
    "site para empresa",
    "web design",
    "SEO",
    "sites modernos",
    "desenvolvedor frontend",
    "Next.js",
    "site para clínica",
    "site para advogado",
    "site para restaurante",
    "site para barbearia",
  ],

  authors: [
    {
      name: "Next Commerce",
    },
  ],

  creator: "Next Commerce",
  publisher: "Next Commerce",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://nextcommerce.com.br",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nextcommerce.com.br",
    siteName: "Next Commerce",
    title: "Next Commerce | Sites Profissionais para Empresas",
    description:
      "Sites modernos, rápidos e profissionais para empresas que querem fortalecer sua presença online e conquistar mais clientes.",

    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Next Commerce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Next Commerce | Sites Profissionais",
    description:
      "Sites modernos, rápidos e profissionais para negócios que levam a sério sua imagem.",
    images: ["/opengraph.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappButton />
        <StructuredData />
      </body>
    </html>
  );
}
