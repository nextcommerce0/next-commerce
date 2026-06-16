import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextcommerce.com.br",
      lastModified: new Date(),
    },
  ];
}