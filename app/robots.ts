import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://www.tudominio.com"; // TODO: Reemplazar con tu dominio real

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
