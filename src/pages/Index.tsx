import { ThemeProvider } from "next-themes";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhyUsSection from "@/components/why-us-section";
import CapabilitiesSection from "@/components/capabilities-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <WhyUsSection />
          <CapabilitiesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
