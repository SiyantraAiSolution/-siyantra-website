import { Clock, DollarSign, Target, Zap, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Reclaim hundreds of hours every month by automating repetitive work." },
  { icon: DollarSign, title: "Reduce Costs", desc: "Cut operational expenses with intelligent process automation." },
  { icon: Target, title: "Increase Accuracy", desc: "Eliminate human error with AI-driven precision at scale." },
  { icon: Zap, title: "Improve Efficiency", desc: "Streamline workflows and accelerate decision velocity." },
  { icon: TrendingUp, title: "Scale Faster", desc: "Grow operations without linearly growing headcount." },
];

export const Benefits = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="glow-orb h-[500px] w-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-accent-teal/10" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
            <span className="h-px w-8 bg-primary-glow" />
            Why Siyantra
            <span className="h-px w-8 bg-primary-glow" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Outcomes that move the <span className="text-gradient-brand">bottom line</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 ${
                i === 3 ? "lg:col-start-1 lg:col-end-2" : ""
              } ${i === 4 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent-teal/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <b.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
