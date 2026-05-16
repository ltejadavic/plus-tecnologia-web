import type { ImageSlot } from "./site";

export type ProductCategory = {
  title: string;
  description: string;
  ctaText: string;
  image?: ImageSlot;
};

export const productCategories: ProductCategory[] = [
  {
    title: "Elementos filtrantes nominales y absolutos",
    description:
      "Elementos para la remoción de partículas sólidas en diversas corrientes de proceso. Incluye filtros canasto y coladores tipo strainer.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/elementos-filtrantes.jpg", alt: "Elementos filtrantes industriales" },
  },
  {
    title: "Elementos coalescentes líquido/líquido y líquido/gas",
    description:
      "Elementos separadores de líquidos en medio líquido y separadores de aerosoles en corrientes gaseosas, incluyendo demisters y cajas de chicanas.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/elementos-coalescentes.jpg", alt: "Elementos coalescentes para filtración industrial" },
  },
  {
    title: "Carcasas de filtración",
    description:
      "Carcasas estándar de marcas reconocidas o dimensionadas a la necesidad del cliente, fabricadas en distintos materiales y bajo normas técnicas especificadas.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/carcasas-filtracion.jpg", alt: "Carcasas de filtración industrial" },
  },
  {
    title: "Soluciones de filtración paquetizadas",
    description:
      "Skids de recepción y despacho de combustibles o aceites lubricantes, además de skids para tratamiento de agua de bombeo.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/skids-filtracion.jpg", alt: "Skids y soluciones de filtración paquetizadas" },
  },
  {
    title: "Repuestos para combustibles y fluidos industriales",
    description:
      "Repuestos para filtración de combustible diésel, petróleo, lubricantes y otros fluidos industriales en aplicaciones existentes o nuevos proyectos.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/repuestos-combustibles-fluidos.jpg", alt: "Repuestos para filtración de combustibles y fluidos industriales" },
  },
  {
    title: "Servicio técnico aplicado",
    description:
      "Soporte técnico para levantamiento de información, selección de alternativas, instalación, mantenimiento y seguimiento de soluciones de filtración.",
    ctaText: "Consultar disponibilidad",
    // image: { src: "/images/products/servicios-tecnicos.jpg", alt: "Servicio técnico de filtración industrial" },
  },
];
