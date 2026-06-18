export type ImageSlot = {
  src: string;
  alt: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image?: ImageSlot;
  images?: ImageSlot[];
};

export const imageFolders = {
  logos: "/images/logos",
  pages: "/images/pages",
  products: "/images/products",
  services: "/images/services",
} as const;

export const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export const company = {
  name: "Plus Tecnología EIRL",
  email: "ventas@plustecnologia.com",
  phone: "+51 999 999 999",
  // Add a logo file under public/images/logos and enable it here, for example:
  // logo: { src: `${imageFolders.logos}/plus-tecnologia-logo.svg`, alt: "Logo de Plus Tecnología EIRL" },
  logo: {
    src: `${imageFolders.logos}/image.png`,
    alt: "Logo de Plus Tecnología EIRL",
  },
  whatsappHref:
    "https://wa.me/51999999999?text=Hola%20Plus%20Tecnolog%C3%ADa%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.",
};

export const pageImages: {
  hero?: ImageSlot;
  about?: ImageSlot;
  environment?: ImageSlot;
} = {
  // Add files under public/images/pages and enable them here, for example:
  // hero: { src: `${imageFolders.pages}/hero-filtration.jpg`, alt: "Sistema de filtración industrial" },
  // about: { src: `${imageFolders.pages}/equipo-tecnico.jpg`, alt: "Técnico revisando componentes de filtración" },
  // contact: { src: `${imageFolders.pages}/contacto-repuestos.jpg`, alt: "Repuestos de filtración listos para cotizar" },
  hero: {
    src: `${imageFolders.pages}/hero-planta-fluidos.jpg`,
    alt: "Planta industrial de tratamiento de fluidos con tuberías y equipos de proceso",
  },
  about: {
    src: `${imageFolders.pages}/about-planta-industrial.jpg`,
    alt: "Vista aérea de planta industrial para procesamiento de fluidos",
  },
  environment: {
    src: `${imageFolders.pages}/environment-rana-banner.jpg`,
    alt: "Rana verde sobre una hoja como referencia visual al entorno natural",
  },
};

export const services: ServiceItem[] = [
  {
    title: "Ingeniería",
    description:
      "Dimensionamiento, diseño y cálculo de recipientes sometidos a presión, plantas de tratamiento de combustibles, lubricantes, químicos y fluidos industriales.",
    images: [
      {
        src: `${imageFolders.services}/ingenieria/ingenieria-plano-01.jpg`,
        alt: "Plano técnico de carcasa vertical de filtración",
      },
      {
        src: `${imageFolders.services}/ingenieria/ingenieria-plano-02.jpg`,
        alt: "Vista dimensionada de carcasa industrial para ingeniería",
      },
      {
        src: `${imageFolders.services}/ingenieria/ingenieria-corte-01.jpg`,
        alt: "Corte técnico de carcasa de filtro con elemento interno",
      },
      {
        src: `${imageFolders.services}/ingenieria/ingenieria-equipo-01.jpg`,
        alt: "Equipo de filtración montado sobre skid para evaluación técnica",
      },
    ],
    // image: { src: `${imageFolders.services}/ingenieria-filtracion.jpg`, alt: "Ingeniería para sistemas de filtración industrial" },
  },
  {
    title: "Asesoramiento y capacitación",
    description:
      "Acompañamiento para comprender los aspectos críticos del tratamiento de fluidos y elegir soluciones que beneficien al cliente y al medio ambiente.",
    images: [
      {
        src: `${imageFolders.services}/asesoramiento-capacitacion/asesoramiento-elementos-01.jpg`,
        alt: "Elementos filtrantes usados para selección técnica",
      },
      {
        src: `${imageFolders.services}/asesoramiento-capacitacion/asesoramiento-carcasa-01.jpg`,
        alt: "Interior de carcasa de filtración para asesoramiento técnico",
      },
      {
        src: `${imageFolders.services}/asesoramiento-capacitacion/asesoramiento-equipo-01.jpg`,
        alt: "Equipo móvil de filtración para capacitación operativa",
      },
    ],
    // image: { src: `${imageFolders.services}/asesoramiento-capacitacion.jpg`, alt: "Asesoramiento técnico en tratamiento de fluidos" },
  },
  {
    title: "Mantenimiento y montaje",
    description:
      "Servicios de mantenimiento, instalación y montaje electromecánico con personal calificado y homologado bajo norma ASME.",
    images: [
      {
        src: `${imageFolders.services}/mantenimiento-montaje/mantenimiento-filtracion-01.jpg`,
        alt: "Componente de filtración para mantenimiento industrial",
      },
      {
        src: `${imageFolders.services}/mantenimiento-montaje/mantenimiento-filtracion-02.jpg`,
        alt: "Carcasa y accesorio de filtración para montaje",
      },
      {
        src: `${imageFolders.services}/mantenimiento-montaje/mantenimiento-filtracion-03.jpg`,
        alt: "Equipo de filtración para mantenimiento y montaje",
      },
    ],
    // image: { src: `${imageFolders.services}/mantenimiento-montaje.jpg`, alt: "Mantenimiento y montaje de sistemas industriales" },
  },
];
