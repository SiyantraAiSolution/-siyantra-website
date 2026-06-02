import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />

      {/* Floating orbs */}
      <div className="glow-orb h-[500px] w-[500px] -top-32 -left-20 bg-primary/30 animate-pulse-glow" />
      <div className="glow-orb h-[400px] w-[400px] top-1/3 -right-20 bg-accent-purple/30 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="glow-orb h-[300px] w-[300px] bottom-0 left-1/3 bg-accent-teal/20 animate-pulse-glow" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Enterprise AI Automation & Consulting
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight animate-fade-in-up">
            <span className="text-foreground">AI-Powered</span>
            <br />
            <span className="text-gradient-brand">Automation</span>{" "}
            <span className="text-foreground">for</span>
            <br />
            <span className="text-foreground">Modern Businesses</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Siyantra AI Solutions helps organizations replace manual work with intelligent automation
            and scalable digital systems — engineered for measurable outcomes.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="mailto:info@siyantraaisolution.com">
                Email Us
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {[
              { v: "Fleet", l: "Compliance & deadlines, automated" },
              { v: "0 missed", l: "Renewals — the goal for every client" },
              { v: "24/7", l: "Reminders working in the background" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 md:p-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-brand">
                  {s.v}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
