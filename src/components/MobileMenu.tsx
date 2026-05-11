"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  brandName: string;
  navItems: NavItem[];
  whatsappHref: string;
};

export default function MobileMenu({
  brandName,
  navItems,
  whatsappHref,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D8E0E2] bg-white text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary hover:shadow-md"
      >
        <span className="sr-only">Menú</span>
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-[#D8E0E2] bg-white shadow-xl shadow-primary/10"
        >
          <nav aria-label="Navegación móvil" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition hover:bg-light hover:text-primary hover:shadow-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[#D8E0E2] pt-4">
              <p className="text-xs text-[#5C6B73]">{brandName}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-[#C2851F] hover:shadow-lg"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
