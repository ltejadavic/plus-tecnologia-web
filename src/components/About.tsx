import type { ImageSlot } from "@/data/site";
import ResponsiveImage from "./ResponsiveImage";

type AboutProps = {
  image?: ImageSlot;
};

export default function About({ image }: AboutProps) {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Un equipo pequeño enfocado en soporte técnico aplicado.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#3A4950]">
            Plus Tecnología nace para atender necesidades puntuales de filtración en
            combustible diésel, petróleo y fluidos industriales. Trabajamos con atención
            directa, lenguaje técnico claro y enfoque en cotizaciones bien definidas
            según cada aplicación.
          </p>
        </div>
        {image ? (
          <ResponsiveImage
            image={image}
            className="h-64 w-full rounded-lg border border-[#D8E0E2] object-cover shadow-xl shadow-primary/10"
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        ) : null}
      </div>
    </section>
  );
}
