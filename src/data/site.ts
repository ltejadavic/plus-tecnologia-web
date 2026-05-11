export type ImageSlot = {
  src: string;
  alt: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image?: ImageSlot;
};

export const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export const company = {
  name: "Plus Tecnología",
  email: "ventas@plustecnologia.com",
  phone: "+51 999 999 999",
  whatsappHref:
    "https://wa.me/51999999999?text=Hola%20Plus%20Tecnolog%C3%ADa%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.",
};

export const pageImages: {
  hero?: ImageSlot;
  about?: ImageSlot;
  contact?: ImageSlot;
} = {
  // Add files under public/images and enable them here, for example:
  // hero: { src: "/images/hero-filtration.jpg", alt: "Sistema de filtración industrial" },
  // about: { src: "/images/equipo-tecnico.jpg", alt: "Técnico revisando componentes de filtración" },
  // contact: { src: "/images/contacto-repuestos.jpg", alt: "Repuestos de filtración listos para cotizar" },
};

export const services: ServiceItem[] = [
  {
    title: "Asesoría técnica en filtración",
    description:
      "Orientación para definir repuestos y configuraciones de filtración según el tipo de equipo y operación.",
    // image: { src: "/images/asesoria-filtracion.jpg", alt: "Asesoría técnica en filtración" },
  },
  {
    title: "Soporte para cotizaciones técnicas",
    description:
      "Levantamos tu requerimiento y proponemos opciones de suministro para filtros, separadores y componentes relacionados.",
    // image: { src: "/images/cotizacion-tecnica.jpg", alt: "Revisión de especificaciones para cotización" },
  },
  {
    title: "Selección de repuestos para diésel y petróleo",
    description:
      "Ayudamos a validar compatibilidades y especificaciones en líneas de combustible y fluidos industriales.",
    // image: { src: "/images/repuestos-diesel.jpg", alt: "Repuestos para filtración de combustible" },
  },
];
