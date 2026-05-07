import { productCategories } from "@/data/products";

export default function ProductCategories() {
  return (
    <section id="productos" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Productos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Categorías técnicas de repuestos
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#3A4950]">
            Mostramos líneas de producto, no precios. Las cotizaciones se preparan según
            especificación técnica y aplicación de cada cliente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-[#D8E0E2] bg-light p-5"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#3A4950]">{category.description}</p>
              <a
                href="#contacto"
                className="mt-4 inline-flex text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
              >
                {category.ctaText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
