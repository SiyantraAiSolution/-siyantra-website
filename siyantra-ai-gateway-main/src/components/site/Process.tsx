import { Search, AlertTriangle, Workflow, Cog, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Audit & Analysis", desc: "Deep-dive into your current operations, systems, and data flows." },
  { icon: AlertTriangle, title: "Identify Inefficiencies", desc: "Pinpoint bottlenecks, manual overhead, and high-impact opportunities." },
  { icon: Workflow, title: "Design AI Workflows", desc: "Architect intelligent systems mapped to your business outcomes." },
  { icon: Cog, title: "Implementation", desc: "Deploy with precision — integrating AI into your existing stack." },
  { icon: TrendingUp, title: "Optimization & Scaling", desc: "Continuously refine performance and scale across the organization." },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-32 overflow-hidden bg-card/20">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
            <span className="h-px w-8 bg-primary-glow" />
            Our Process
            <span className="h-px w-8 bg-primary-glow" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            A proven path to <span className="text-gradient-brand">intelligent operations</span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-brand blur-xl opacity-50" />
                    <div className="relative h-24 w-24 rounded-2xl glass-strong flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary-glow" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-center text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-5 glass rounded-2xl p-6">
              <div className="relative shrink-0">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand/20 border border-primary/30 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary-glow" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
