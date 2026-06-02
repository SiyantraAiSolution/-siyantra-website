import { useState } from "react";
import { z } from "zod";
import { Mail, UserRound, Send, CheckCircle2, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(10, "Please share a bit more detail").max(1200),
});

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Deliver the enquiry to the inbox via the visitor's mail client.
    // This is a no-backend fallback so leads are never silently lost.
    // UPGRADE LATER: swap for a form backend (e.g. Web3Forms / Formspree)
    // so submissions arrive without the visitor needing a mail client.
    const subject = `New enquiry from ${parsed.data.name}`;
    const body =
      `Name: ${parsed.data.name}\n` +
      `Email: ${parsed.data.email}\n\n` +
      `${parsed.data.message}`;
    window.location.href =
      `mailto:info@siyantraaisolution.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setLoading(false);
    setSubmitted(true);
    toast({ title: "Opening your email…", description: "Just hit send and we'll reply within one business day." });
  };

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/siyantra-ai-solutions/", Icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/siyantraaisolutions/", Icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@siyantraaisolutions", Icon: Youtube },
    { name: "X (Twitter)", href: "https://x.com/Siyantraaisolut", Icon: Twitter },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="glow-orb h-[500px] w-[500px] -left-20 bottom-0 bg-primary/15" />
      <div className="glow-orb h-[400px] w-[400px] -right-20 top-0 bg-accent-purple/15" />

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary-glow mb-6">
              <span className="h-px w-8 bg-primary-glow" />
              Contact
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              Let's build your <span className="text-gradient-brand">AI-driven operations</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Reach out to discuss your use case. We'll respond within one business day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:info@siyantraaisolution.com"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:shadow-glow transition-all group"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email — General</p>
                  <p className="font-medium text-foreground group-hover:text-primary-glow transition-colors">
                    info@siyantraaisolution.com
                  </p>
                </div>
              </a>

              <a
                href="mailto:hari@siyantraaisolution.com"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 hover:shadow-glow transition-all group"
              >
                <div className="h-11 w-11 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                  <UserRound className="h-5 w-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Founder Direct</p>
                  <p className="font-medium text-foreground group-hover:text-primary-glow transition-colors">
                    hari@siyantraaisolution.com
                  </p>
                </div>
              </a>

              <div className="pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4">Connect with us</p>
                <div className="flex items-center gap-3">
                  {socials.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-primary/40 hover:text-primary-glow hover:-translate-y-0.5 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16 animate-fade-in-up">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-brand flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Thank you</h3>
                  <p className="mt-3 text-muted-foreground">
                    Your message reached our team. We'll respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" className="mt-2 bg-background/50 h-12" />
                    {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@company.com" className="mt-2 bg-background/50 h-12" />
                    {errors.email && <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Briefly describe the workflows or systems you're looking to automate."
                      className="mt-2 bg-background/50 resize-none"
                    />
                    {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : (
                      <>
                        Send message <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted by Siyantra AI Solutions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
