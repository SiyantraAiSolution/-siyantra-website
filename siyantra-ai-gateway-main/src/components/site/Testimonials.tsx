import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Siyantra AI Solutions reimagined our back-office operations. We're processing 3× the volume with the same team, and our error rate dropped to near zero.",
    name: "Anika Verma",
    role: "COO, Fintech Scale-up",
  },
  {
    quote:
      "Their team didn't just deliver software — they delivered a strategic capability. AI is now embedded across every function of our business.",
    name: "Marcus Hale",
    role: "CEO, Logistics Enterprise",
  },
  {
    quote:
      "Pragmatic, fast, and deeply technical. Siyantra translated AI hype into real, measurable cost savings within the first quarter.",
    name: "Priya Raman",
    role: "VP Operations, Retail Group",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-card/20">
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
            <span className="h-px w-8 bg-primary-glow" />
            Client Voices
            <span className="h-px w-8 bg-primary-glow" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Trusted by leaders who <span className="text-gradient-brand">ship outcomes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-primary-glow/60 mb-5" />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
