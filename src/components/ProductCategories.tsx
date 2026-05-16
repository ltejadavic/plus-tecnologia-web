import { productCategories } from "@/data/products";
import ResponsiveImage from "./ResponsiveImage";

export default function ProductCategories() {
  return (
    <section id="productos" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Productos y servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Nuestras soluciones
          </h2>
          <p className="copy-justified mt-4 text-sm leading-6 text-[#3A4950]">
            Categorías técnicas de repuestos y soluciones para tratamiento y filtración
            de fluidos industriales líquidos y gaseosos. Las cotizaciones se preparan
            según especificación técnica y aplicación de cada cliente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-lg border border-[#D8E0E2] bg-light shadow-sm shadow-primary/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-primary/10"
            >
              {category.image ? (
                <ResponsiveImage
                  image={category.image}
                  className="h-40 w-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : null}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {category.title}
                </h3>
                <p className="copy-justified mt-3 text-sm leading-6 text-[#3A4950]">
                  {category.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-secondary hover:decoration-secondary"
                >
                  {category.ctaText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
