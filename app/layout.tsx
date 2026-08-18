import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.tudominio.com"; // TODO: Reemplazar con tu dominio real

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // ---- Core ----
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "JABA – Soluciones en Aluminio, Cristal y Carpintería | Guadalajara, Jalisco",
    template: "%s | JABA Aluminios y Cristales",
  },
  description:
    "Empresa líder en Guadalajara con más de 10 años de experiencia en diseño, fabricación e instalación de ventanas, puertas, domos, canceles de baño, fachadas, pasamanos, pergolados y carpintería. Precios competitivos y garantía por escrito.",
  keywords: [
    "aluminio Guadalajara",
    "cristal templado Guadalajara",
    "carpintería Guadalajara",
    "ventanas de aluminio",
    "puertas de aluminio",
    "domos de policarbonato",
    "domos de cristal",
    "canceles de baño",
    "fachadas de aluminio y cristal",
    "pasamanos y barandales",
    "pergolados",
    "divisiones de oficina",
    "puertas abatibles",
    "puertas corredizas",
    "JABA",
    "aluminios y cristales Jalisco",
    "carpintería residencial Guadalajara",
    "remodelación Guadalajara",
  ],
  authors: [{ name: "JABA – Soluciones en Aluminio, Cristal y Carpintería" }],
  creator: "JABA",
  publisher: "JABA – Soluciones en Aluminio, Cristal y Carpintería",

  // ---- Canonical ----
  alternates: {
    canonical: "/",
  },

  // ---- Robots ----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ---- Open Graph (Facebook, WhatsApp, LinkedIn, etc.) ----
  openGraph: {
    title: "JABA – Soluciones en Aluminio, Cristal y Carpintería",
    description:
      "Diseño, fabricación e instalación de soluciones integrales en aluminio, cristal y carpintería para proyectos residenciales y comerciales en Guadalajara, Jalisco. Más de 10 años de experiencia.",
    url: SITE_URL,
    siteName: "JABA – Aluminios, Carpintería y Cristales",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JABA – Soluciones en Aluminio, Cristal y Carpintería en Guadalajara",
        type: "image/jpeg",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  // ---- Twitter / X ----
  twitter: {
    card: "summary_large_image",
    title: "JABA – Aluminios, Cristal y Carpintería | Guadalajara",
    description:
      "Ventanas, puertas, domos, canceles de baño, fachadas y carpintería de alta calidad. Más de 10 años en Guadalajara. ¡Cotiza ahora!",
    images: ["/images/og-image.jpg"],
  },

  // ---- Icons ----
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // ---- Verification (descomentar cuando tengas tus IDs) ----
  // verification: {
  //   google: "tu-google-site-verification-id",
  // },

  // ---- Other ----
  category: "construction",
  other: {
    "geo.region": "MX-JAL",
    "geo.placename": "Guadalajara",
    "geo.position": "20.6156163;-103.3749249",
    "ICBM": "20.6156163, -103.3749249",
  },
};

// ---- JSON-LD Structured Data ----
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JABA – Soluciones en Aluminio, Cristal y Carpintería",
  image: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/images/logo-negro.png`,
  description:
    "Empresa líder en Guadalajara con más de 10 años de experiencia en diseño, fabricación e instalación de ventanas, puertas, domos, canceles de baño, fachadas, pasamanos, pergolados y carpintería.",
  url: SITE_URL,
  telephone: ["+523319777605", "+523319753530"],
  email: "presupuestos@jaba.com.mx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida 8 de Julio #3908, Col. Balcones del 4",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: "44984",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.6156163,
    longitude: -103.3749249,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/solucionesjaba26/",
    "https://www.instagram.com/solucionesjabamx/",
    "https://www.tiktok.com/@soluciones_jaba1",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 20.6156163,
      longitude: -103.3749249,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos y Servicios",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ventanas de Aluminio",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Puertas de Aluminio",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domos de Policarbonato y Cristal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Canceles de Baño",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fachadas de Aluminio y Cristal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpintería",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
