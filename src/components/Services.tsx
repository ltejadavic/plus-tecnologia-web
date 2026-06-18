import type { ServiceItem } from "@/data/site";
import ImageCarousel from "./ImageCarousel";
import ResponsiveImage from "./ResponsiveImage";

type ServicesProps = {
  items: ServiceItem[];
};

export default function Services({ items }: ServicesProps) {
  return (
    <section id="servicios" className="bg-light">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Servicio técnico
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Soporte aplicado para cada etapa del requerimiento
          </h2>
          <p className="copy-justified mt-4 text-sm leading-6 text-[#3A4950]">
            No ofrecemos solo productos, acompañamos al cliente con ingeniería,
            asesoramiento, capacitación, mantenimiento y montaje para soluciones a medida.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-[#D8E0E2] bg-white shadow-md shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15"
            >
              {item.images?.length ? (
                <ImageCarousel
                  images={item.images}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : item.image ? (
                <ResponsiveImage
                  image={item.image}
                  className="aspect-[32/21] w-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                <p className="copy-justified mt-3 text-sm leading-6 text-[#3A4950]">
                  {item.description}
                </p>
                <div className="mt-auto pt-4">
                  <a
                    href="#contacto"
                    className="inline-flex w-fit items-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md"
                  >
                    Solicitar evaluación técnica
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
