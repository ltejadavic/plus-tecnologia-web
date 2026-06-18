import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import EnvironmentalClose from "@/components/EnvironmentalClose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import { company, navItems, pageImages, services } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        brandName={company.name}
        navItems={navItems}
        whatsappHref={company.whatsappHref}
        logo={company.logo}
      />
      <main id="main-content">
        <Hero whatsappHref={company.whatsappHref} image={pageImages.hero} />
        <About image={pageImages.about} />
        <ProductCategories />
        <Services items={services} />
        <ContactSection
          whatsappHref={company.whatsappHref}
          email={company.email}
        />
        <EnvironmentalClose image={pageImages.environment} />
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
