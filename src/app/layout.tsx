import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Plus Tecnología | Filtración Industrial",
    template: "%s | Plus Tecnología",
  },
  applicationName: "Plus Tecnología",
  description:
    "Repuestos y servicios especializados para sistemas de filtración, combustible y fluidos industriales.",
  keywords: [
    "Plus Tecnología",
    "filtración industrial",
    "filtros para combustible",
    "filtración diésel",
    "filtración de petróleo",
    "separadores agua combustible",
    "repuestos de filtración",
    "cotización de filtros",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Plus Tecnología | Filtración Industrial",
    description:
      "Soporte técnico y repuestos para sistemas de filtración de combustible diésel, petróleo y fluidos industriales.",
    type: "website",
    locale: "es_PE",
    siteName: "Plus Tecnología",
  },
  twitter: {
    card: "summary",
    title: "Plus Tecnología | Filtración Industrial",
    description:
      "Repuestos y soporte técnico para filtración de combustible diésel, petróleo y fluidos industriales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
