import Image from "next/image";
import type { ImageSlot } from "@/data/site";

type EnvironmentalCloseProps = {
  image?: ImageSlot;
};

export default function EnvironmentalClose({ image }: EnvironmentalCloseProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A2F39]">
      {image ? (
        <Image
          src={image.src}
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-contain object-right opacity-50 blur-[1px] saturate-125"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2F39] via-[#0A2F39]/90 to-[#0A2F39]/35" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-secondary/35 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-12 md:py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#A8C8B4]">
            Eficiencia y entorno
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
            Soluciones técnicas orientadas a proteger activos y reducir impactos operativos.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#D7E5E8]">
            Una filtración bien seleccionada ayuda a cuidar equipos, controlar consumos y
            sostener operaciones industriales con criterios técnicos y objetivos medio ambientales claros.
          </p>
        </div>
      </div>
    </section>
  );
}
