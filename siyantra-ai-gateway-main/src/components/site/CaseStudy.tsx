import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CaseStudy = () => {
  return (
    <section id="case-study" className="relative py-32 overflow-hidden">
      <div className="container relative">
        <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-purple/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
                <span className="h-px w-8 bg-primary-glow" />
                What we're building
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                A compliance system so{" "}
                <span className="text-gradient-brand">no fleet ever misses a deadline</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Small fleet operators track MOT, road tax, insurance, operator licence
                and driver CPC renewals in their head or on paper — and a single missed
                date means fines or a vehicle off the road. We're building a tool that
                tracks every vehicle and document and sends automatic reminders before
                anything expires. It's being piloted now on a real working fleet.
              </p>

              <Button variant="glass" size="lg" className="mt-8" asChild>
                <a href="#contact">
                  Join the pilot <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "MOT", l: "Tax, insurance & licence dates tracked" },
                { v: "Auto", l: "Reminders before every deadline" },
                { v: "CPC", l: "Driver licence & CPC tracking" },
                { v: "1 view", l: "Whole fleet, one dashboard" },
              ].map((m) => (
                <div key={m.l} className="glass rounded-2xl p-6">
                  <div className="text-3xl font-display font-bold text-gradient-brand">{m.v}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
