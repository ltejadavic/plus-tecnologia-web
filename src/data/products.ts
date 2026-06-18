import { imageFolders, type ImageSlot } from "./site";

export type ProductCategory = {
  title: string;
  description: string;
  ctaText: string;
  image?: ImageSlot;
  images?: ImageSlot[];
};

const filterElementImages: ImageSlot[] = [
  {
    src: `${imageFolders.products}/elementos-filtrantes/elemento-filtrante-01.jpg`,
    alt: "Elemento filtrante industrial para remoción de partículas",
  },
  {
    src: `${imageFolders.products}/elementos-filtrantes/elemento-filtrante-02.jpg`,
    alt: "Cartucho filtrante industrial de reemplazo",
  },
  {
    src: `${imageFolders.products}/elementos-filtrantes/elemento-filtrante-03.jpg`,
    alt: "Elemento filtrante metálico para fluidos industriales",
  },
  {
    src: `${imageFolders.products}/elementos-filtrantes/elemento-filtrante-04.jpg`,
    alt: "Conjunto de elementos filtrantes para diferentes aplicaciones",
  },
];

const housingImages: ImageSlot[] = [
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-01.jpg`,
    alt: "Carcasa de filtración industrial",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-02.jpg`,
    alt: "Carcasa y componentes internos de filtración",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-03.jpg`,
    alt: "Interior de carcasa de filtración con elemento instalado",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-04.jpg`,
    alt: "Carcasa de filtración para fluidos industriales",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-05.jpg`,
    alt: "Filtro tipo carcasa para proceso industrial",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-06.jpg`,
    alt: "Carcasa de acero para filtración industrial",
  },
  {
    src: `${imageFolders.products}/carcasas-filtracion/carcasa-filtracion-07.jpg`,
    alt: "Carcasa vertical de filtración especializada",
  },
];

const packagedSolutionImages: ImageSlot[] = [
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-01.jpg`,
    alt: "Equipo paquetizado de filtración industrial",
  },
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-02.jpg`,
    alt: "Sistema móvil de filtración para fluidos industriales",
  },
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-03.jpg`,
    alt: "Equipo de filtración montado sobre estructura",
  },
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-04.jpg`,
    alt: "Skid de filtración para combustibles o lubricantes",
  },
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-05.jpg`,
    alt: "Sistema paquetizado para tratamiento de fluidos",
  },
  {
    src: `${imageFolders.products}/soluciones-paquetizadas/equipo-filtracion-06.jpg`,
    alt: "Equipo técnico de filtración para aplicación industrial",
  },
];

export const productCategories: ProductCategory[] = [
  {
    title: "Elementos filtrantes nominales y absolutos",
    description:
      "Elementos para la remoción de partículas sólidas en diversas corrientes de proceso. Incluye filtros canasto y coladores tipo strainer.",
    ctaText: "Solicitar cotización técnica",
    images: filterElementImages,
    // image: { src: "/images/products/elementos-filtrantes.jpg", alt: "Elementos filtrantes industriales" },
  },
  {
    title: "Elementos coalescentes líquido/líquido y líquido/gas",
    description:
      "Elementos separadores de líquidos en medio líquido y separadores de aerosoles en corrientes gaseosas, incluyendo demisters y cajas de chicanas.",
    ctaText: "Solicitar cotización técnica",
    images: filterElementImages.slice(1),
    // image: { src: "/images/products/elementos-coalescentes.jpg", alt: "Elementos coalescentes para filtración industrial" },
  },
  {
    title: "Carcasas de filtración",
    description:
      "Carcasas estándar de marcas reconocidas o dimensionadas a la necesidad del cliente, fabricadas en distintos materiales y bajo normas técnicas especificadas.",
    ctaText: "Solicitar cotización técnica",
    images: housingImages,
    // image: { src: "/images/products/carcasas-filtracion.jpg", alt: "Carcasas de filtración industrial" },
  },
  {
    title: "Soluciones de filtración paquetizadas",
    description:
      "Skids de recepción y despacho de combustibles o aceites lubricantes, además de skids para tratamiento de agua de bombeo.",
    ctaText: "Solicitar cotización técnica",
    images: packagedSolutionImages,
    // image: { src: "/images/products/skids-filtracion.jpg", alt: "Skids y soluciones de filtración paquetizadas" },
  },
  {
    title: "Repuestos para combustibles y fluidos industriales",
    description:
      "Repuestos para filtración de combustible diésel, petróleo, lubricantes y otros fluidos industriales en aplicaciones existentes o nuevos proyectos.",
    ctaText: "Solicitar cotización técnica",
    images: [
      filterElementImages[3],
      housingImages[1],
      housingImages[2],
      packagedSolutionImages[0],
    ],
    // image: { src: "/images/products/repuestos-combustibles-fluidos.jpg", alt: "Repuestos para filtración de combustibles y fluidos industriales" },
  },
  {
    title: "Servicio técnico aplicado",
    description:
      "Soporte técnico para levantamiento de información, selección de alternativas, instalación, mantenimiento y seguimiento de soluciones de filtración.",
    ctaText: "Solicitar cotización técnica",
    images: [
      packagedSolutionImages[1],
      packagedSolutionImages[3],
      housingImages[0],
      housingImages[4],
    ],
    // image: { src: "/images/products/servicios-tecnicos.jpg", alt: "Servicio técnico de filtración industrial" },
  },
];
