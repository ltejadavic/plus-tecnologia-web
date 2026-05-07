type ServiceItem = {
  title: string;
  description: string;
};

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
              className="rounded-lg border border-[#D8E0E2] bg-white p-5 shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#3A4950]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
