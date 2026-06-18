"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ImageSlot } from "@/data/site";
import MobileMenu from "./MobileMenu";

type NavItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  brandName: string;
  navItems: NavItem[];
  whatsappHref: string;
  logo?: ImageSlot;
};

function BrandMark() {
  return (
    <div
      aria-hidden
      className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/20 bg-white shadow-md shadow-primary/15"
    >
      <span className="absolute inset-y-1 left-1 w-1/2 rounded-full bg-secondary [clip-path:ellipse(88%_76%_at_96%_50%)]" />
      <span className="absolute inset-y-1 right-1 w-1/2 rounded-full bg-primary [clip-path:ellipse(88%_76%_at_4%_50%)]" />
    </div>
  );
}

export default function Navbar({ brandName, navItems, whatsappHref, logo }: NavbarProps) {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href || "#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        section: document.getElementById(item.href.replace("#", "")),
      }))
      .filter((item): item is { href: string; section: HTMLElement } =>
        Boolean(item.section),
      );

    if (sections.length === 0) {
      return;
    }

    let animationFrame = 0;

    function updateActiveSection() {
      const navbarOffset = 128;
      const viewportPosition = window.scrollY + navbarOffset;
      const pageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (pageBottom) {
        setActiveHref(sections[sections.length - 1].href);
        return;
      }

      const currentSection = sections.reduce((current, item) => {
        if (item.section.offsetTop <= viewportPosition) {
          return item;
        }

        return current;
      }, sections[0]);

      setActiveHref(currentSection.href);
    }

    function scheduleUpdate() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [navItems]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D8E0E2] bg-white/95 shadow-sm shadow-primary/5 backdrop-blur-sm">
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center justify-between px-6">
        <Link href="#home" className="flex items-center gap-3">
          {logo ? (
            <>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={192}
                height={84}
                className="h-auto w-36 object-contain sm:w-44 md:w-48"
                priority
              />
              <span className="sr-only">{brandName}</span>
            </>
          ) : (
            <>
              <BrandMark />
              <div className="leading-tight">
                <p className="font-heading text-lg font-bold tracking-tight text-primary">
                  {brandName}
                </p>
                <p className="text-xs text-[#5C6B73]">Filtración industrial y repuestos</p>
              </div>
            </>
          )}
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={() => setActiveHref(item.href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-light hover:text-primary hover:shadow-md hover:shadow-primary/10 ${
                    activeHref === item.href
                      ? "bg-light text-primary shadow-md shadow-primary/10"
                      : "text-foreground"
                  }`}
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
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-[#C2851F] hover:shadow-lg"
          >
            Solicitar cotización
          </a>
        </div>

        <MobileMenu
          brandName={brandName}
          navItems={navItems}
          whatsappHref={whatsappHref}
          activeHref={activeHref}
        />
      </div>
    </header>
  );
}
