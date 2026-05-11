import type { ImageSlot } from "@/data/site";
import ResponsiveImage from "./ResponsiveImage";

type HeroProps = {
  whatsappHref: string;
  image?: ImageSlot;
};

export default function Hero({ whatsappHref, image }: HeroProps) {
  return (
    <section id="home" className="bg-light">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-secondary">
            Soporte técnico en filtración
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Repuestos para filtración de combustible diésel, petróleo y fluidos industriales.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#3A4950] sm:text-lg">
            En Plus Tecnología atendemos requerimientos técnicos de filtración con una
            propuesta clara: entender tu necesidad, recomendar repuestos compatibles y
            ayudarte a cotizar rápido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-[#082D37] hover:shadow-lg hover:shadow-primary/25"
            >
              Solicitar cotización
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-md"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#D8E0E2] bg-white shadow-xl shadow-primary/10">
          {image ? (
            <ResponsiveImage image={image} className="h-56 w-full" sizes="(min-width: 768px) 50vw, 100vw" />
          ) : (
            <div className="relative h-56 overflow-hidden bg-primary" aria-hidden="true">
              <span className="absolute -left-10 top-10 h-28 w-56 rotate-[-18deg] rounded-full bg-secondary/70" />
              <span className="absolute right-8 top-8 h-24 w-24 rounded-full border-[14px] border-white/25" />
              <span className="absolute bottom-8 left-16 h-12 w-64 rounded-full bg-accent/80" />
              <span className="absolute bottom-0 right-0 h-28 w-40 rounded-tl-full bg-white/10" />
            </div>
          )}
          <div className="p-6">
            <h2 className="font-heading text-xl font-semibold text-primary">
              En qué te ayudamos
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#3A4950]">
              <li>Definición de repuestos para filtración de diésel y petróleo.</li>
              <li>Apoyo técnico para seleccionar líneas de filtración industrial.</li>
              <li>Atención por WhatsApp para consultas y cotizaciones.</li>
              <li>Propuestas enfocadas en tu requerimiento operativo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
