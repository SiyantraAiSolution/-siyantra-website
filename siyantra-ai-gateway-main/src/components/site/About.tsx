import { Brain, Target, CheckCircle2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="glow-orb h-[500px] w-[500px] -left-32 top-1/4 bg-primary/15" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
              <span className="h-px w-8 bg-primary-glow" />
              About Siyantra
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Engineering the <span className="text-gradient-brand">intelligent enterprise</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Siyantra AI Solutions is an AI automation and consulting company focused on helping
              businesses transform their operations using intelligent systems and workflows. We
              combine deep technical expertise with strategic insight to deliver outcomes that scale.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "End-to-end AI strategy and execution",
                "Operational efficiency & cost reduction",
                "Future-proof, scalable architectures",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow mt-0.5 shrink-0" />
                  <p className="text-foreground/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 glass rounded-2xl p-6 flex items-center gap-5">
              <div className="h-14 w-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-xl text-primary-foreground">H</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Founded by Hari</p>
                <p className="text-sm text-muted-foreground">
                  Background in AI and Data Science
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "AI-First", desc: "Native intelligence in every workflow" },
                { icon: Target, label: "Outcome-Driven", desc: "Measurable ROI, every engagement" },
                { icon: CheckCircle2, label: "Enterprise-Grade", desc: "Security, scale, and reliability" },
                { icon: Brain, label: "Human-Centered", desc: "Augment teams, never replace them" },
              ].map((c, i) => (
                <div
                  key={c.label}
                  className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                  style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <c.icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{c.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
