import Image from "next/image";
import type { ImageSlot } from "@/data/site";

type CTASectionProps = {
  whatsappHref: string;
  image?: ImageSlot;
};

export default function CTASection({ whatsappHref, image }: CTASectionProps) {
  return (
    <section id="cotizar" className="relative overflow-hidden bg-primary">
      {image ? (
        <Image
          src={image.src}
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-35 mix-blend-luminosity"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#A8C8B4]">
            Cotizaciones
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white">
            Solicita tu cotización técnica
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#D7E5E8]">
            Escríbenos por WhatsApp o completa el formulario con tu necesidad de
            filtración industrial. Revisaremos la información técnica y te contactaremos
            con una propuesta acorde al requerimiento.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#C2851F] hover:shadow-lg"
          >
            Cotizar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
          >
            Ir al formulario
          </a>
        </div>
      </div>
    </section>
  );
}
