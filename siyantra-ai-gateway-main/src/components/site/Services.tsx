import { Bot, GitBranch, Lightbulb, Code2, Rocket, Globe, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Solutions",
    desc: "Automate repetitive tasks and workflows using state-of-the-art AI tools and intelligent agents.",
  },
  {
    icon: GitBranch,
    title: "Workflow Optimization",
    desc: "Improve business efficiency by redesigning processes with data-driven insights and automation.",
  },
  {
    icon: Lightbulb,
    title: "AI Consulting & Implementation",
    desc: "End-to-end AI integration — from strategy and architecture to deployment and adoption.",
  },
  {
    icon: Code2,
    title: "Custom Software & Systems",
    desc: "Build scalable web platforms, internal tools, and automation systems tailored to your operations.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    desc: "Modernize core business operations with cloud, data, and AI-native technology stacks.",
  },
  {
    icon: Globe,
    title: "Social Media & Web Solutions",
    desc: "Strategic support for digital presence, web platforms, and customer-facing experiences.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="glow-orb h-[600px] w-[600px] -right-40 top-1/3 bg-accent-purple/15" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
            <span className="h-px w-8 bg-primary-glow" />
            What We Do
            <span className="h-px w-8 bg-primary-glow" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Services built for the <span className="text-gradient-brand">AI-native era</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From strategy to deployment, Siyantra AI Solutions delivers intelligent systems
            that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant overflow-hidden"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-px -right-px h-32 w-32 bg-gradient-brand opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent-purple/20 border border-primary/20 flex items-center justify-center mb-6">
                  <s.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
