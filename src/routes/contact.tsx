import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Let's build — Your Name" },
      { name: "description", content: "Have an idea worth shipping? I take on a small number of senior engineering engagements each quarter." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText("Gowthamdivya0307@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <p className="section-label">/// 06 — LET'S BUILD</p>
      <div className="mt-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
            Have a role<br />or project in mind?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
            I'm actively open to software engineering roles and collaborations — especially in AI integration, full-stack, and systems work. Drop a message and I'll reply within a day.
          </p>

          <button
            onClick={copy}
            className="mt-10 w-full max-w-md rounded-2xl border border-border bg-surface/40 hover:border-primary transition-colors p-5 flex items-center justify-between group"
          >
            <span className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              Gowthamdivya0307@gmail.com
            </span>
            {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />}
          </button>

          <div className="mt-4 max-w-md rounded-2xl border border-border bg-surface/40 p-5 flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-primary">PHONE</span>
            <span>+91 87780 22925</span>
          </div>

          <div className="mt-4 max-w-md rounded-2xl border border-border bg-surface/40 p-5 flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-primary">BASED IN</span>
            <span>Chennai, Tamil Nadu</span>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="https://github.com/gowthamdivya0307" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/gowtham-v-55a2222a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your Name" placeholder="Name" />
            <Field label="Email" placeholder="name@gmail.com" type="email" />
          </div>
          <div className="mt-5">
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Project Brief</label>
            <textarea
              required
              rows={6}
              placeholder="Tell me about your team, the problem, and the timeline…"
              className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">/// AVG. REPLY {"<"} 24H</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              <Send className="w-4 h-4" />
              {submitted ? "Sent — talk soon!" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
