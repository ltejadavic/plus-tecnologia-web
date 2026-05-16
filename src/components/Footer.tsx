type FooterProps = {
  companyName: string;
  email: string;
  phone: string;
  whatsappHref: string;
};

export default function Footer({
  companyName,
  email,
  phone,
  whatsappHref,
}: FooterProps) {
  return (
    <footer className="bg-[#0A2F39]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 text-sm text-[#D7E5E8] md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-white">{companyName}</p>
          <p className="mt-3 leading-6">
            Soluciones en filtración industrial, repuestos y soporte técnico para
            tratamiento de fluidos en Oil & Gas, energía, minería y maquinaria industrial.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Navegación</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#home" className="transition hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="transition hover:text-white">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#productos" className="transition hover:text-white">
                Productos
              </a>
            </li>
            <li>
              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <address className="not-italic">
          <h3 className="font-heading text-base font-semibold text-white">Contacto</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${email}`} className="transition hover:text-white">
                {email}
              </a>
            </li>
            <li>
              <a href={`tel:${phone}`} className="transition hover:text-white">
                {phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp comercial
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 text-xs text-[#A7BCC2]">
          © {new Date().getFullYear()} {companyName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
