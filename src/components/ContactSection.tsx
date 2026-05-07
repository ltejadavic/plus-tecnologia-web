const needOptions = [
  "Repuestos de filtración",
  "Servicio técnico",
  "Filtración de diésel/petróleo",
  "Otro",
];

type ContactSectionProps = {
  whatsappHref: string;
  email: string;
};

const LABEL_CLASS = "mb-2 block text-sm font-medium text-foreground";
const FIELD_CLASS =
  "w-full rounded-md border border-[#CBD4D8] px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

// Ready to swap later with Formspree, Resend or /api/contact.
const FORM_CONFIG = {
  action: "#",
  method: "post" as const,
};

export default function ContactSection({ whatsappHref, email }: ContactSectionProps) {
  return (
    <section id="contacto" className="bg-light">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Contacto
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary">
            Solicita una cotización
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#3A4950]">
            Completa el formulario con tu requerimiento técnico. También puedes escribirnos
            por WhatsApp o por correo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <form
            action={FORM_CONFIG.action}
            method={FORM_CONFIG.method}
            className="grid gap-4 rounded-lg border border-[#D8E0E2] bg-white p-6 shadow-sm md:grid-cols-2"
            aria-describedby="contact-form-help"
          >
            <input type="hidden" name="_source" value="website-contact-form" />
            <div>
              <label htmlFor="name" className={LABEL_CLASS}>
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="company" className={LABEL_CLASS}>
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                autoComplete="organization"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label htmlFor="phone" className={LABEL_CLASS}>
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={FIELD_CLASS}
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="needType"
                className={LABEL_CLASS}
              >
                Tipo de necesidad
              </label>
              <select
                id="needType"
                name="needType"
                required
                className={`${FIELD_CLASS} bg-white`}
              >
                <option value="">Selecciona una opción</option>
                {needOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className={LABEL_CLASS}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${FIELD_CLASS} resize-y`}
              />
            </div>
            <div className="md:col-span-2">
              <p id="contact-form-help" className="mb-3 text-xs text-[#5C6B73]">
                Completa todos los campos para enviar una solicitud de cotización.
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#082D37] sm:w-auto"
              >
                Enviar solicitud de cotización
              </button>
            </div>
          </form>

          <aside className="rounded-lg border border-[#D8E0E2] bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-primary">
              Canales de contacto
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#3A4950]">
              Si prefieres una atención rápida, usa WhatsApp. Si no, envíanos un correo
              con tu requerimiento.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#C2851F]"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={`mailto:${email}?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Plus%20Tecnolog%C3%ADa`}
                className="inline-flex items-center justify-center rounded-md border border-primary/30 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                Enviar por correo
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
