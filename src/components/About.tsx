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
            Un equipo altamente calificado con experiencia en tratamiento de fluidos y microfiltración industrial.
          </h2>
          <p className="copy-justified mt-5 text-base leading-7 text-[#3A4950]">
            Plus Tecnología nace para atender necesidades específicas en el
            tratamiento y filtración de fluidos industriales líquidos y gaseosos en los
            sectores Oil & Gas, generación de energía y maquinaria industrial.
          </p>
          <p className="copy-justified mt-4 text-base leading-7 text-[#3A4950]">
            Desde 1999 al servicio de la industria nacional e internacional, con atención directa, lenguaje claro y enfoque de protección de activos FTAP y maximizar sus costos operativos CAPEX.
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
