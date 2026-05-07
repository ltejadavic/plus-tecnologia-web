import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  {
    title: "Asesoría técnica en filtración",
    description:
      "Orientación para definir repuestos y configuraciones de filtración según el tipo de equipo y operación.",
  },
  {
    title: "Soporte para cotizaciones técnicas",
    description:
      "Levantamos tu requerimiento y proponemos opciones de suministro para filtros, separadores y componentes relacionados.",
  },
  {
    title: "Selección de repuestos para diésel y petróleo",
    description:
      "Ayudamos a validar compatibilidades y especificaciones en líneas de combustible y fluidos industriales.",
  },
];

const company = {
  name: "Plus Tecnología",
  email: "ventas@plustecnologia.com",
  phone: "+51 999 999 999",
  whatsappHref:
    "https://wa.me/51999999999?text=Hola%20Plus%20Tecnolog%C3%ADa%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        brandName={company.name}
        navItems={navItems}
        whatsappHref={company.whatsappHref}
      />
      <main id="main-content">
        <Hero whatsappHref={company.whatsappHref} />
        <About />
        <ProductCategories />
        <Services items={services} />
        <CTASection whatsappHref={company.whatsappHref} />
        <ContactSection
          whatsappHref={company.whatsappHref}
          email={company.email}
        />
      </main>
      <Footer
        companyName={company.name}
        email={company.email}
        phone={company.phone}
        whatsappHref={company.whatsappHref}
      />
    </div>
  );
}
