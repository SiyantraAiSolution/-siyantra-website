import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

/**
 * Siyantra AI — Website Chat Assistant
 * --------------------------------------------------------------------------
 * Works out of the box with NO backend: a keyword-based assistant that answers
 * the most common questions and pushes visitors to book a consultation.
 *
 * UPGRADE TO REAL CLAUDE AI (recommended once you have a few clients):
 *   1. Create a serverless function (e.g. Vercel/Netlify) at /api/chat that
 *      holds your ANTHROPIC_API_KEY as a SERVER-SIDE secret and forwards the
 *      conversation to the Anthropic Messages API.
 *      NEVER put the API key in this front-end file — it would be public.
 *   2. Set USE_AI_BACKEND = true and the widget will POST to /api/chat.
 *   3. Keep the scripted answers below as a fallback if the backend errors.
 */
const USE_AI_BACKEND = false;
const AI_BACKEND_URL = "/api/chat";

const CONTACT_EMAIL = "info@siyantraaisolution.com";

type Msg = { role: "user" | "bot"; text: string; cta?: boolean };

const QUICK = [
  "What does Siyantra do?",
  "Fleet compliance tool",
  "Pricing",
  "Book a consultation",
];

function scriptedReply(input: string): Msg {
  const s = input.toLowerCase();

  if (/(^hi|^hey|^hello|good morning|good evening)/.test(s))
    return { role: "bot", text: "Hi! I'm the Siyantra assistant. I can tell you about our AI automation work, our fleet compliance tool, or help you book a consultation. What would you like to know?" };

  if (/(fleet|compliance|mot|tax|insurance|deadline|reminder|vehicle|van|lorry|hgv|cpc|licence|license|operator)/.test(s))
    return { role: "bot", text: "Our first product helps fleet operators never miss a renewal. It tracks every vehicle's MOT, road tax, insurance, operator licence and driver CPC, and sends automatic reminders before anything expires — so you avoid fines and vehicles being taken off the road. Want to see a quick demo?", cta: true };

  if (/(price|pricing|cost|how much|fee|charge|subscription|month)/.test(s))
    return { role: "bot", text: "Pricing depends on fleet size and is billed as a simple monthly subscription. The fastest way to get an exact figure for your fleet is a short call — shall I point you to booking one?", cta: true };

  if (/(book|consult|demo|call|meeting|talk to|speak to|human|contact|email|get started|sign up)/.test(s))
    return { role: "bot", text: `Happy to connect you. You can email us at ${CONTACT_EMAIL}, or use the contact form below — just hit the button and we'll reply within one business day.`, cta: true };

  if (/(what|who|about|do you do|service|offer|automation|ai)/.test(s))
    return { role: "bot", text: "Siyantra AI Solutions builds AI automation and intelligent systems for businesses — replacing manual, repetitive work with software that runs itself. We're currently focused on fleet and logistics operators, with our compliance and deadline-tracking tool. Want to hear more about that?", cta: true };

  if (/(location|where|based|uk|india)/.test(s))
    return { role: "bot", text: "We work with operators in the UK and India. Tell us your use case via the contact form and we'll take it from there.", cta: true };

  if (/(thank|thanks|cheers|great|ok|okay)/.test(s))
    return { role: "bot", text: "Anytime! If you'd like to take the next step, I can point you to booking a consultation.", cta: true };

  return { role: "bot", text: "Good question — for that one it's best to speak with the team directly. You can reach us at " + CONTACT_EMAIL + " or use the contact form below.", cta: true };
}

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi 👋 I'm the Siyantra assistant. Ask me about our AI automation work, our fleet compliance tool, or book a consultation." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setVal("");

    if (!USE_AI_BACKEND) {
      setMsgs((m) => [...m, scriptedReply(q)]);
      return;
    }

    // Optional real-AI path (requires the /api/chat backend described above)
    setBusy(true);
    try {
      const res = await fetch(AI_BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "bot", text: data.reply ?? "Sorry, I didn't catch that." }]);
    } catch {
      setMsgs((m) => [...m, scriptedReply(q)]);
    } finally {
      setBusy(false);
    }
  };

  const goContact = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Launcher */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6 text-primary-foreground" /> : <MessageCircle className="h-6 w-6 text-primary-foreground" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(92vw,380px)] glass-strong rounded-3xl overflow-hidden flex flex-col animate-fade-in-up" style={{ height: "min(70vh, 560px)" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
            <div className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">Siyantra Assistant</div>
              <div className="text-[11px] text-muted-foreground">Typically replies instantly</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "self-end max-w-[85%]" : "self-start max-w-[88%]"}>
                <div
                  className={
                    "px-4 py-2.5 rounded-2xl text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "bg-gradient-brand text-primary-foreground rounded-tr-sm"
                      : "glass rounded-tl-sm text-foreground/90")
                  }
                >
                  {m.text}
                </div>
                {m.cta && (
                  <button
                    onClick={goContact}
                    className="mt-2 text-xs font-medium text-primary-glow hover:underline"
                  >
                    → Book a consultation
                  </button>
                )}
              </div>
            ))}
            {busy && <div className="self-start text-xs text-muted-foreground px-2">typing…</div>}
            <div ref={endRef} />
          </div>

          {/* Quick replies */}
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {QUICK.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs border border-border/60 rounded-full px-3 py-1.5 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border/50 flex items-center gap-2">
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(val)}
              placeholder="Type your message…"
              className="flex-1 bg-background/50 border border-border/60 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-primary/40"
            />
            <button
              onClick={() => send(val)}
              aria-label="Send"
              className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
