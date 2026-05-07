import Link from "next/link";
import MobileMenu from "./MobileMenu";

type NavItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  brandName: string;
  navItems: NavItem[];
  whatsappHref: string;
};

function BrandMark() {
  return (
    <div
      aria-hidden
      className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/20 bg-white"
    >
      <span className="absolute inset-y-1 left-1 w-1/2 rounded-full bg-secondary [clip-path:ellipse(88%_76%_at_96%_50%)]" />
      <span className="absolute inset-y-1 right-1 w-1/2 rounded-full bg-primary [clip-path:ellipse(88%_76%_at_4%_50%)]" />
    </div>
  );
}

export default function Navbar({ brandName, navItems, whatsappHref }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D8E0E2] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="#home" className="flex items-center gap-3">
          <BrandMark />
          <div className="leading-tight">
            <p className="font-heading text-lg font-bold tracking-tight text-primary">
              Plus Tecnología
            </p>
            <p className="text-xs text-[#5C6B73]">Filtración industrial y repuestos</p>
          </div>
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#C2851F]"
          >
            Solicitar cotización
          </a>
        </div>

        <MobileMenu
          brandName={brandName}
          navItems={navItems}
          whatsappHref={whatsappHref}
        />
      </div>
    </header>
  );
}
