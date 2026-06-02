import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/siyantra-mark.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#case-study", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <img
              src={logoMark}
              alt="Siyantra AI Solutions"
              className="h-9 w-auto transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-sm tracking-tight">Siyantra</span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">AI Solutions</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden h-10 w-10 rounded-lg glass flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-5 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" size="sm" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Book Consultation</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
