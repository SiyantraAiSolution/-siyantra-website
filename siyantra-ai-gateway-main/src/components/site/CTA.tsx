import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container relative">
        <div className="relative max-w-5xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-brand opacity-[0.08]" />
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-brand blur-3xl opacity-30 animate-pulse-glow" />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Ready to <span className="text-gradient-brand">automate</span>
              <br />your business?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's design the AI-powered operations that will define your next decade of growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#services">View our services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
