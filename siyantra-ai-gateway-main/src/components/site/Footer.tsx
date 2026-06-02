import { Linkedin, Instagram, Youtube, Twitter, Mail, UserRound } from "lucide-react";
import logoFull from "@/assets/siyantra-logo.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-16 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2.5 mb-5">
              <img src={logoFull} alt="Siyantra AI Solutions" className="h-16 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Siyantra AI Solutions is an enterprise AI automation and consulting partner —
              engineering intelligent systems for modern businesses, startups, and organizations.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#top" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-foreground transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-5">
              <li>
                <a
                  href="mailto:info@siyantraaisolution.com"
                  className="inline-flex items-center gap-2 hover:text-primary-glow transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@siyantraaisolution.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:hari@siyantraaisolution.com"
                  className="inline-flex items-center gap-2 hover:text-primary-glow transition-colors"
                >
                  <UserRound className="h-4 w-4" />
                  hari@siyantraaisolution.com
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/company/siyantra-ai-solutions/", Icon: Linkedin },
                { name: "Instagram", href: "https://www.instagram.com/siyantraaisolutions/", Icon: Instagram },
                { name: "YouTube", href: "https://youtube.com/@siyantraaisolutions", Icon: Youtube },
                { name: "X (Twitter)", href: "https://x.com/Siyantraaisolut", Icon: Twitter },
              ].map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:border-primary/40 hover:text-primary-glow hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Siyantra AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
