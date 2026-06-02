const logos = [
  "NEXORA", "QUANTIVE", "ARCWAVE", "NORTHBYTE", "HELIXOS", "FINTRAQ", "OMNIVUS", "ZENITH LABS",
];

export const TrustStrip = () => {
  return (
    <section className="relative py-16 border-y border-border/50 bg-card/30">
      <div className="container">
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-10">
          Trusted by growing businesses and startups
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-10 flex items-center justify-center text-xl md:text-2xl font-display font-semibold tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
