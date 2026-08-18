// ============================================================
// JABA – Soluciones en Aluminio, Cristal y Carpintería
// Data Layer – Interfaces & Content
// ============================================================

// ---------- Interfaces ----------

export interface BannerSlide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface JabaSolution {
  id: string;
  icon: string; // SVG path or icon name
  title: string;
  description: string;
}

export interface ResidentialWork {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface PhilosophyValue {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface QualityCommitment {
  id: string;
  text: string;
}

export interface Service {
  id: string;
  name: string;
  icon?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export interface CarpentryService {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface B2BSolution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Advantage {
  id: string;
  text: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phones: string[];
  socialLinks: SocialLink[];
  mapEmbedUrl: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  qualityPolicy: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

// ---------- Data ----------

export const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "quienes-somos", label: "Quiénes Somos", href: "#quienes-somos" },
  { id: "productos", label: "Productos", href: "#productos" },
  { id: "soluciones", label: "Soluciones", href: "#soluciones" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

export const siteData = {
  logoBlanco: "/images/logo-blanco.png",
  logoNegro: "/images/logo-negro.png",
  brand: {
    name: "JABA – Soluciones en Aluminio, Cristal y Carpintería",
  },
  navLinks,
};

export const bannerSlides: BannerSlide[] = [
  {
    id: "banner-1",
    title: "Aluminios, Carpintería y Cristales",
    subtitle: "Soluciones arquitectónicas de vanguardia",
    description:
      "Diseñamos e instalamos soluciones integrales en aluminio, carpintería y cristal para proyectos residenciales y comerciales.",
    backgroundImage: "/images/proyectos/fachadas/fachada-12.jpg",
    ctaText: "Cotiza ahora",
    ctaHref: "#contacto",
  },
  {
    id: "banner-2",
    title: "Diseño y Calidad",
    subtitle: "Más de 10 años de experiencia",
    description:
      "Fabricamos productos con los más altos estándares de calidad, garantizando diseños vanguardistas y precios accesibles.",
    backgroundImage: "/images/proyectos/fachadas/fachada-20.jpeg",
    ctaText: "Conócenos",
    ctaHref: "#quienes-somos",
  },
  {
    id: "banner-3",
    title: "Ventanas, Puertas, Domos, Canceles de Baño y Fachadas",
    subtitle: "Soluciones completas para tu proyecto",
    description:
      "Ofrecemos una amplia gama de productos en aluminio, cristal y carpintería para toda clase de construcciones y remodelaciones.",
    backgroundImage: "/images/proyectos/fachadas/fachadas-26.jpg",
    ctaText: "Ver productos",
    ctaHref: "#productos",
  },
];

export const jabaSolutions: JabaSolution[] = [
  {
    id: "experiencia",
    icon: "award",
    title: "Experiencia",
    description:
      "Con 10 años de experiencia en el mercado, ofrecemos soluciones a tu medida y de acuerdo a tu proyecto.",
  },
  {
    id: "calidad",
    icon: "shield-check",
    title: "Calidad",
    description:
      "Fabricamos productos en aluminio, vidrio y carpintería, garantizando precios accesibles y diseños vanguardistas.",
  },
  {
    id: "garantia",
    icon: "file-certificate",
    title: "Garantía",
    description:
      "Todos nuestros trabajos cuentan con un sistema de gestión de calidad interno. Nuestra garantía es por escrito.",
  },
  {
    id: "precios",
    icon: "tag",
    title: "Precios competitivos",
    description:
      "Contamos con los precios más competitivos del mercado. ¡Cotiza con nosotros!",
  },
  {
    id: "asesoria",
    icon: "headset",
    title: "Asesoría personalizada",
    description:
      "Te apoyamos durante todo el proceso del proyecto. Nuestros ejecutivos mantienen comunicación frecuente para monitorear el trabajo.",
  },
  {
    id: "satisfaccion",
    icon: "star",
    title: "Satisfacción total",
    description:
      "Gracias a nuestra experiencia y políticas de calidad, ofrecemos una satisfacción total en todos nuestros productos e instalaciones.",
  },
];

export const residentialWorks: ResidentialWork[] = [
  {
    id: "rw-fachadas",
    title: "Fachadas de araña",
    image: "/images/proyectos/fachadas/fachadas-25.jpg",
    category: "fachadas",
  },
  {
    id: "rw-puertas-ventanas",
    title: "Puertas corredizas",
    image: "/images/proyectos/puertas/puertas-6.jpg",
    category: "puertas-ventanas",
  },
  {
    id: "rw-canceles",
    title: "Canceles de Baño",
    image: "/images/proyectos/canceles/cancel.jpg",
    category: "canceles",
  },
  {
    id: "rw-domos",
    title: "Domos de Cristal templado",
    image: "/images/proyectos/domos/domos-4.jpg",
    category: "domos",
  },
  {
    id: "rw-pasamanos",
    title: "Pasamanos",
    image: "/images/proyectos/pasamanos/pasamanos-4.jpg",
    category: "pasamanos",
  },
  {
    id: "rw-pergolados",
    title: "Pergolados Exteriores",
    image: "/images/proyectos/pergolados/pergolado-6.jpg",
    category: "pergolados",
  },
];

export const philosophyValues: PhilosophyValue[] = [
  {
    id: "pv-atencion",
    icon: "heart-handshake",
    title: "Atención y servicio al cliente",
    description:
      "Lo primordial es la satisfacción de nuestros clientes.",
  },
  {
    id: "pv-honestidad",
    icon: "scale",
    title: "Honestidad y respeto",
    description:
      "Ofrecer lo que realmente necesitan nuestros clientes.",
  },
  {
    id: "pv-puntualidad",
    icon: "clock",
    title: "Puntualidad y responsabilidad",
    description:
      "Entregar en tiempo y forma todos nuestros trabajos.",
  },
  {
    id: "pv-equipo",
    icon: "users",
    title: "Trabajo en equipo",
    description: "El trabajo en equipo siempre da mejores resultados.",
  },
];

export const qualityCommitments: QualityCommitment[] = [
  {
    id: "qc-1",
    text: "Asegurar la satisfacción de nuestros clientes.",
  },
  {
    id: "qc-2",
    text: "Garantizar el cumplimiento en tiempo y forma de los compromisos.",
  },
  {
    id: "qc-3",
    text: "Desarrollar de manera integral a nuestro talento humano.",
  },
];

export const qualitySystemTitle = "Sistema de Gestión de Calidad";
export const qualitySystemSubtitle = "ISO 9001:2015";

export const companyInfo: CompanyInfo = {
  name: "JABA – Soluciones en Aluminio, Cristal y Carpintería",
  tagline: "Diseño, fabricación e instalación",
  description:
    "Somos una empresa con más de 10 años de experiencia en la Ciudad de Guadalajara. Ofrecemos soluciones integrales en aluminio, vidrio y carpintería de alta calidad para toda clase de proyectos de construcción o remodelaciones.",
  mission:
    "Proporcionar a nuestros clientes las mejores opciones del mercado en diseño, fabricación e instalación de aluminio, cristal y carpintería, con materiales de calidad garantizada, precios accesibles y un alto sentido de responsabilidad en los tiempos de entrega.",
  vision:
    "Ser una empresa reconocida en la industria de la construcción residencial y comercial local por anteponer y dar cumplimiento a los requisitos del cliente y desarrollar a su personal.",
  qualityPolicy:
    "Convicción y compromiso de satisfacer y superar las expectativas de nuestros clientes impulsando una cultura de calidad basada en nuestros valores y la mejora continua de nuestros procesos de diseño, fabricación e instalación.",
};

export const servicesList: Service[] = [
  { id: "svc-ventanas", name: "Ventanas de Aluminio" },
  { id: "svc-puertas", name: "Puertas de Aluminio" },
  { id: "svc-corredizas", name: "Puertas Corredizas" },
  { id: "svc-domos", name: "Domos de Policarbonato / Cristal" },
  { id: "svc-canceles", name: "Canceles de baño" },
  { id: "svc-pergolados", name: "Pergolados" },
  { id: "svc-divisiones", name: "Divisiones de Oficina" },
  { id: "svc-cristal-templado", name: "Sistema de Cristal Templado" },
  { id: "svc-abatibles", name: "Puertas Abatibles" },
  { id: "svc-disenos", name: "Diseños Vanguardistas" },
  { id: "svc-carpinteria", name: "Carpintería" },
];

export const productCategories: ProductCategory[] = [
  {
    id: "pc-ventanas",
    name: "Ventanas",
    slug: "ventanas",
    image: "/images/proyectos/puertas/ventanas-2.jpg",
    description: "Ventanas de aluminio de alta calidad con diseño moderno.",
  },
  {
    id: "pc-domos",
    name: "Domos",
    slug: "domos",
    image: "/images/proyectos/domos/domos-6.jpg",
    description: "Domos de policarbonato y cristal para máxima iluminación.",
  },
  {
    id: "pc-canceles",
    name: "Canceles de baño",
    slug: "canceles",
    image: "/images/proyectos/canceles/cancel-4.jpg",
    description: "Canceles de baño modernos y funcionales.",
  },
  {
    id: "pc-pergolados",
    name: "Pergolados",
    slug: "pergolados",
    image: "/images/proyectos/pergolados/pergolado-1.jpeg",
    description: "Pergolados elegantes para exteriores.",
  },
  {
    id: "pc-divisiones",
    name: "Divisiones de oficina",
    slug: "divisiones",
    image: "/images/proyectos/divisiones/division-2.jpeg",
    description: "Divisiones modernas para espacios de oficina.",
  },
  {
    id: "pc-cristal-templado",
    name: "Sistemas de cristal templado",
    slug: "cristal-templado",
    image: "/images/proyectos/cristal-templado/cristal-1.jpeg",
    description: "Sistemas de cristal templado de alta seguridad.",
  },
  {
    id: "pc-abatibles",
    name: "Puertas abatibles",
    slug: "abatibles",
    image: "/images/proyectos/puertas-abatibles/abatible-3.jpeg",
    description: "Puertas abatibles de aluminio con diseño premium.",
  },
];

export const carpentryTitle = "Soluciones en Carpintería";
export const carpentryDescription =
  "Ofrecemos servicios especializados de carpintería para complementar tus proyectos de construcción y remodelación, combinando diseño, funcionalidad y acabados de alta calidad. Diseño, fabricación e instalación de muebles y elementos de carpintería a medida para proyectos residenciales y comerciales. Materiales de alta calidad con acabados modernos y funcionales.";

export const carpentryServices: CarpentryService[] = [
  { id: "cs-closets", name: "Closets y vestidores" },
  { id: "cs-cocinas", name: "Cocinas integrales" },
  { id: "cs-puertas", name: "Puertas de madera" },
  { id: "cs-muebles", name: "Muebles a medida" },
  { id: "cs-canceleria", name: "Cancelería de madera" },
  { id: "cs-acabados", name: "Acabados y recubrimientos" },
];

export const b2bSolutions: B2BSolution[] = [
  {
    id: "b2b-arquitectos",
    title: "Soluciones para arquitectos",
    description:
      "Subcontratar nuestros servicios le permitirá ahorrar tiempo y dinero ya que nos encargaremos de su proyecto de inicio a fin, incluyendo soluciones en aluminio, cristal y carpintería.",
    icon: "drafting-compass",
  },
  {
    id: "b2b-constructoras",
    title: "Soluciones para constructoras",
    description:
      "Ofrecemos calidad y rapidez en aluminio, cristal y carpintería para proyectos de gran tamaño.",
    icon: "building",
  },
  {
    id: "b2b-integral",
    title: "Apoyo integral",
    description:
      "DISEÑO, FABRICACIÓN E INSTALACIÓN en ALUMINIO, CRISTAL Y CARPINTERÍA.",
    icon: "layers",
  },
];

export const b2bSectionTitle = "Soluciones Empresariales";
export const b2bSectionSubtitle =
  "¿Por qué somos tu mejor opción?";

export const advantages: Advantage[] = [
  { id: "adv-1", text: "Garantía por escrito", icon: "file-check" },
  { id: "adv-2", text: "Sistema de Gestión de Calidad", icon: "clipboard-check" },
  { id: "adv-3", text: "Rapidez y seguridad", icon: "zap" },
  { id: "adv-4", text: "Precios competitivos", icon: "trending-down" },
  { id: "adv-5", text: "Amplia experiencia de +10 años", icon: "calendar" },
];

export const contactInfo: ContactInfo = {
  address:
    "Avenida 8 de Julio #3908. Col. Balcones del 4. Guadalajara, Jalisco, México. C.P. 44984.",
  email: "presupuestos@jaba.com.mx",
  phones: ["33 1977 7605", "33 1975 3530"],
  socialLinks: [
    {
      id: "sl-facebook",
      name: "Facebook",
      url: "https://www.facebook.com/solucionesjaba26/?rdid=7eA8Ds6KIuBkrIwU",
      icon: "facebook",
    },
    {
      id: "sl-instagram",
      name: "Instagram",
      url: "https://www.instagram.com/solucionesjabamx/?hl=es-la",
      icon: "instagram",
    },
    {
      id: "sl-tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@soluciones_jaba1",
      icon: "tiktok",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4429.648222349855!2d-103.3749249!3d20.6156163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adb21e3b6f83%3A0x61ba14825ecdacbc!2sSoluciones%20JABA%2C%20Aluminios%20y%20Cristales.%20Domos%2C%20Canceles%20de%20Ba%C3%B1o%2C%20Barandales%2C%20Ventanas%2C%20Puertas%20corredizas!5e0!3m2!1ses-419!2smx!4v1785454235318!5m2!1ses-419!2smx",
};

export const footerSections: FooterSection[] = [
  {
    title: "Mapa del Sitio",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Quiénes Somos", href: "#quienes-somos" },
      { label: "Productos", href: "#productos" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Ventanas", href: "#productos" },
      { label: "Puertas", href: "#productos" },
      { label: "Domos", href: "#productos" },
      { label: "Canceles de baño", href: "#productos" },
      { label: "Fachadas", href: "#productos" },
      { label: "Pergolados", href: "#productos" },
      { label: "Divisiones de oficina", href: "#productos" },
      { label: "Cristal templado", href: "#productos" },
      { label: "Puertas abatibles", href: "#productos" },
      { label: "Carpintería", href: "#carpinteria" },
    ],
  },
];

// ---------- Form Labels ----------

export const formLabels = {
  sectionTitle: "Solicita tu Cotización",
  sectionSubtitle:
    "Cuéntanos sobre tu proyecto y te contactaremos a la brevedad.",
  nameLabel: "Nombre completo",
  namePlaceholder: "Tu nombre",
  emailLabel: "Correo electrónico",
  emailPlaceholder: "tu@email.com",
  messageLabel: "Mensaje",
  messagePlaceholder: "Describe tu proyecto o necesidad...",
  submitText: "Enviar cotización",
  successMessage: "¡Gracias! Tu solicitud ha sido enviada correctamente.",
};

// ---------- Section Titles ----------

export const sectionTitles = {
  solutions: "¿Por qué elegirnos?",
  residentialWorks: "Trabajos Residenciales",
  philosophy: "Nuestra Filosofía",
  qualitySystem: "Sistema de Gestión de Calidad",
  aboutUs: "Quiénes Somos",
  products: "Nuestros Productos",
  carpentry: "Soluciones en Carpintería",
  b2bSolutions: "Soluciones Empresariales",
  contact: "Contacto",
  quote: "Solicita tu Cotización",
};
