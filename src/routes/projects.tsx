import { createFileRoute } from "@tanstack/react-router";
import { Target, Wrench, Zap, TrendingUp, ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Gowtham V" },
      { name: "description", content: "AI-integrated systems and full-stack projects broken down by Situation, Task, Action, Result." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    tags: ["AI/ML", "Python", "Hardware", "Real-time"],
    title: "AI-Integrated Safety Monitoring System",
    role: "Team Member · Core AI Developer",
    situation: "Industrial environments needed a smart way to identify hazardous conditions in real time, where traditional sensors were slow and produced too many false alarms.",
    task: "Build a smart safety sensor that uses AI to distinguish 'safe' vs 'dangerous' conditions and trigger immediate alerts — reliable enough to act on in milliseconds.",
    action: "Developed the core AI model for environmental classification and integrated hardware sensors with software for real-time data collection. Engineered a real-time data processing pipeline to feed the model and emit safety alerts.",
    result: "Reduced hazard response time from minutes to milliseconds. Achieved high detection accuracy and minimised false alarms. Project earned us rank 71 / 500+ at the B2G AI Hackathon (top 15%).",
    liveDemo: "https://ai-powered-safety-sensor.vercel.app/#/dashboard",
    code:"https://github.com/gowthamdivya0307/Ai_powered_safety_sensor.git",
  },
  {
    tags: ["Java", "UI", "Backend", "Data Viz"],
    title: "Personal Finance & Expense Tracker",
    role: "Team Leader",
    situation: "Students struggle to track where their money actually goes — small daily expenses, subscriptions, and snacks add up but feel invisible until the month ends.",
    task: "Design and ship a user-friendly application that helps students monitor and categorise expenditures, with visualisations that make spending patterns obvious at a glance.",
    action: "Built the user interface to make logging an expense quick (the friction is what kills tracking apps). Programmed backend logic to compute totals, averages and remaining balances. Added data visualisation so users could see patterns instantly.",
    result: "Helped users surface 'hidden' costs like duplicate subscriptions. Reduced overspending by giving a clear stop-sign when limits were hit. Saved users hours by automating calculations they used to do by hand.",
  },
  
];

function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <p className="section-label">/// 04 — SELECTED WORK</p>
      <h1 className="mt-6 text-5xl md:text-7xl font-bold">Proof, not promises.</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        Each project is broken down using the{" "}
        <span className="text-primary font-mono">S · T · A · R</span> framework — Situation, Task, Action, Result — so you can see the problem, the role, the work, and the outcome at a glance.
      </p>

      <div className="mt-16 space-y-8">
        {projects.map((p, i) => (
          <article key={p.title} className="rounded-3xl border border-border bg-surface/40 p-8 lg:p-10 hover:border-primary/40 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="chip">{String(i + 1).padStart(2, "0")} / FEATURED</span>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">{p.title}</h2>
            <p className="mt-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              ROLE · {p.role}
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <StarBlock icon={<Target className="w-3.5 h-3.5" />} label="Situation" body={p.situation} />
              <StarBlock icon={<Wrench className="w-3.5 h-3.5" />} label="Task" body={p.task} />
              <StarBlock icon={<Zap className="w-3.5 h-3.5" />} label="Action" body={p.action} />
              <StarBlock icon={<TrendingUp className="w-3.5 h-3.5" />} label="Result" body={p.result} highlight />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={p.liveDemo ?? "#"} target={p.liveDemo ? "_blank" : undefined} rel={p.liveDemo ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5" /> Live demo
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors">
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StarBlock({ icon, label, body, highlight }: { icon: React.ReactNode; label: string; body: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${highlight ? "border-primary/50 bg-primary/5" : "border-border bg-background/40"}`}>
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-primary uppercase">
        {icon} {label}
      </div>
      <p className="mt-3 leading-relaxed">{body}</p>
    </div>
  );
}
