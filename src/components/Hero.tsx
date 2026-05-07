type HeroProps = {
  whatsappHref: string;
};

export default function Hero({ whatsappHref }: HeroProps) {
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
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#082D37]"
            >
              Solicitar cotización
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-[#D8E0E2] bg-white p-6 shadow-sm">
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
    </section>
  );
}
