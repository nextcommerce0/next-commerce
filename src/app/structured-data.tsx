export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Next Commerce",
    url: "https://nextcommerce.vercel.app",
    logo: "https://nextcommerce.vercel.app/logo.png",

    description:
      "Desenvolvimento de sites profissionais para empresas e profissionais.",

    sameAs: [
      "https://www.instagram.com/nextcommerc0",
      "https://linkedin.com",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-92373-6213",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}