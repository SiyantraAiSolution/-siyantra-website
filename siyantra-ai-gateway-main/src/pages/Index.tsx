import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Benefits } from "@/components/site/Benefits";
import { CaseStudy } from "@/components/site/CaseStudy";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";

// NOTE: TrustStrip (fake client logos) and Testimonials (fabricated client
// quotes) were removed — the company has no clients yet and fake proof is a
// serious credibility/legal risk. Add them back only with REAL clients.

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Benefits />
      <CaseStudy />
      <CTA />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
