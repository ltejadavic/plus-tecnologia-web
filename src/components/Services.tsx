import type { ServiceItem } from "@/data/site";
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
            Servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Soporte técnico especializado
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-[#D8E0E2] bg-white shadow-md shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15"
            >
              {item.image ? (
                <ResponsiveImage image={item.image} className="h-40 w-full" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              ) : null}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3A4950]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
