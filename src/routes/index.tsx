import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Sparkles, Download, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowtham V — Software Engineer | AI & Full-Stack" },
      { name: "description", content: "Software engineer building AI-integrated systems that solve real business problems. C, Java, Python." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { label: "Year graduated", value: "2023", suffix: "B.Tech" },
  { label: "Projects built", value: "2+", suffix: "shipped" },
  { label: "Hackathon rank", value: "71", suffix: "/ 500+" },
  { label: "Languages", value: "4", suffix: "fluent" },
];

const stack = ["C", "Java", "Python", "HTML", "Flutter", "React", "Git", "VS Code", "Antigravity", "AI/ML"];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <div className="chip mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities · 2026
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm Gowtham.{" "}
              <span className="text-gradient block mt-2">Building</span>
              <span className="block">software that</span>
              <span className="block">bridges, not blocks.</span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Software engineer focused on integrating emerging AI into core systems to make them smarter, safer, and more intuitive.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:opacity-90 transition-opacity glow-primary"
              >
                <Sparkles className="w-4 h-4" />
                See my projects
              </Link>
              <a
                href="/Gowtham-V-Resume.pdf"
                download="Gowtham-V-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 font-medium hover:bg-surface transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex gap-3">
                <a href="https://github.com/gowthamdivya0307" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/gowtham-v-55a2222a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:Gowthamdivya0307@gmail.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden sm:block h-px flex-1 bg-border" />
              <p className="font-mono text-xs text-muted-foreground tracking-widest hidden sm:flex items-center gap-2">
                <MapPin className="w-3 h-3" /> CHENNAI · TAMIL NADU
              </p>
            </div>
          </div>

          {/* Portrait card */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl opacity-50 blur-3xl" style={{ background: "var(--gradient-text)" }} />
            <div className="relative rounded-3xl border border-border bg-surface overflow-hidden">
              <img src={profileImg} alt="Gowtham V" className="w-full aspect-[4/5] object-cover" />

              <div className="absolute bottom-6 right-6 rounded-xl bg-background/80 backdrop-blur border border-border px-4 py-3">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest">STACK</p>
                <p className="font-display font-semibold">C · Java · Python</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <p className="font-mono text-[10px] text-primary tracking-widest">/// CURRENTLY</p>
                <div className="flex items-end justify-between mt-1">
                  <p className="font-display font-semibold text-lg">Exploring AI-integrated systems</p>
                  <p className="font-mono text-xs text-muted-foreground">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-2xl border border-border bg-surface/40 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="p-8">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{s.label}</p>
              <p className="mt-3 font-display font-bold text-5xl">
                {s.value}
                <span className="text-sm text-primary font-normal ml-2 font-mono">{s.suffix}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <p className="section-label text-center">/// SKILLS & TOOLS</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {stack.map((s) => (
            <span key={s} className="px-5 py-2.5 rounded-full border border-border bg-surface/40 font-mono text-sm hover:border-primary hover:text-primary transition-colors">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CTA preview */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">
        <div className="rounded-3xl border border-border bg-surface/40 p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative">
            <p className="section-label">/// LET'S BUILD</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Looking for a software engineer who ships?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I'm actively seeking full-time roles where I can contribute to end-to-end engineering of solutions that make a real difference.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
