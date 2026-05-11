import type { ImageSlot } from "./site";

export type ProductCategory = {
  title: string;
  description: string;
  ctaText: string;
  image?: ImageSlot;
};

export const productCategories: ProductCategory[] = [
  {
    title: "Elementos filtrantes",
    description:
      "Elementos de recambio para mantener el rendimiento y la protección del sistema.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/elementos-filtrantes.jpg", alt: "Elementos filtrantes industriales" },
  },
  {
    title: "Filtros para combustible",
    description:
      "Soluciones de filtración para líneas de combustible en aplicaciones diésel y petróleo.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/filtros-combustible.jpg", alt: "Filtros para combustible diésel" },
  },
  {
    title: "Separadores agua-combustible",
    description:
      "Repuestos para remover agua y contaminantes del combustible en condiciones exigentes.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/separadores-agua-combustible.jpg", alt: "Separadores agua-combustible" },
  },
  {
    title: "Carcasas y portafiltros",
    description:
      "Componentes de soporte para montaje y operación segura de sistemas de filtración.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/carcasas-portafiltros.jpg", alt: "Carcasas y portafiltros industriales" },
  },
  {
    title: "Repuestos y accesorios",
    description:
      "Piezas complementarias para mantenimiento preventivo y ajustes de instalación.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/repuestos-accesorios.jpg", alt: "Repuestos y accesorios de filtración" },
  },
  {
    title: "Servicios técnicos",
    description:
      "Acompañamiento técnico para selección de repuestos y atención de requerimientos.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/servicios-tecnicos.jpg", alt: "Servicio técnico de filtración industrial" },
  },
];
