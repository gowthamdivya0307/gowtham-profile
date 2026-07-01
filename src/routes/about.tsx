import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gowtham V" },
      { name: "description", content: "Software engineer who believes technology should be a bridge, not a barrier." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2021", title: "School foundation", body: "Completed 11th & 12th at Don Bosco School (State Board). First exposure to programming logic — the moment I realised code could automate the tedious." },
  { year: "2027", title: "B.Tech graduation", body: "Graduated with a Bachelor of Technology from Sri Sairam Institute of Technology. Built a strong foundation in C, Java, Python and core CS concepts." },
  { year: "2024", title: "AI internship", body: "Completed an internship at Plasmid Company in the AI domain (online). Developed a spam news detection project using AI tools — my first taste of applied machine learning." },
  { year: "2025", title: "B2G AI Hackathon", body: "Ranked 71st out of 500+ participants (top 15%) at the B2G AI Hackathon, Sri Sairam Engineering College. Evaluated on innovation, technical execution, and real-world problem-solving." },
  { year: "2025", title: "AI Safety Monitoring System", body: "Built an AI-Integrated Safety Monitoring System as a team member — developed the core AI model to distinguish safe vs dangerous conditions and integrated hardware sensors for real-time alerts." },
];

const experience = [
  {
    period: "2024",
    location: "Online · Remote",
    role: "AI Intern",
    company: "Plasmid Company",
    bullets: [
      "Developed a spam news detection project using AI/ML tools and Python.",
      "Worked end-to-end on data preprocessing, model training and evaluation.",
      "Strengthened skills in applied AI and real-world problem framing.",
    ],
  },
  {
    period: "2025 — HACKATHON",
    location: "Sri Sairam Engineering College",
    role: "Team Member · B2G AI Hackathon",
    company: "Ranked 71st / 500+ Participants",
    bullets: [
      "Ranked 71st out of 500+ participants — top 15% nationally.",
      "Evaluated on innovation, technical execution, and real-world problem-solving.",
      "Competed in a high-intensity national-level hackathon environment.",
    ],
  },
  {
    period: "ACADEMIC PROJECT",
    location: "Chennai, IN",
    role: "Team Member · Core AI Developer",
    company: "AI-Integrated Safety Monitoring System",
    bullets: [
      "Developed a smart safety sensor using AI to identify risks and prevent accidents.",
      "Built the core AI model to distinguish 'safe' vs 'dangerous' environmental conditions.",
      "Integrated hardware sensors with software for real-time data collection.",
      "Engineered a real-time data processing pipeline to emit immediate safety alerts.",
    ],
  },
  {
    period: "ACADEMIC PROJECT",
    location: "Chennai, IN",
    role: "Team Leader · Finance Tracker",
    company: "Personal Finance & Expense Tracker",
    bullets: [
      "Designed an application to help students monitor and categorise expenditures.",
      "Built the user interface to make adding expenses quick and easy.",
      "Programmed backend logic for totals, averages, and remaining balances.",
    ],
  },
];

const certs = [
  "B.Tech — Sri Sairam Institute of Technology (2023)",
  "AI Internship — Plasmid Company",
  "B2G AI Hackathon — Top 71 / 500+",
  "11th & 12th — Don Bosco School (2021)",
];

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <p className="section-label">/// 02 — ABOUT</p>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 mt-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
            Technology should be a <span className="text-gradient">bridge</span>, not a barrier.
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm Gowtham — a software engineer who builds in C, Java and Python with one goal: create software that optimizes efficiency and solves actual business headaches.
            </p>
            <p>
              I'm currently focused on how emerging AI can be integrated into core systems to make them smarter and more intuitive. I bring this mindset to every team I join — contributing to end-to-end engineering of solutions that make a tangible difference.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-surface/40 p-6">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
              <Award className="w-4 h-4" /> Education & Awards
            </div>
            <ul className="mt-5 space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((t) => (
              <div key={t.year} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary glow-primary" />
                <p className="font-mono text-xs tracking-widest text-primary">{t.year}</p>
                <h3 className="mt-1 text-2xl font-bold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <section className="mt-32">
        <p className="section-label">/// 03 — EXPERIENCE</p>
        <div className="mt-6 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-end">
          <h2 className="text-5xl md:text-6xl font-bold">Where I've shipped.</h2>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Internships, hackathons and academic projects where I owned outcomes — building the AI, the UI, and everything between.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {experience.map((e) => (
            <article key={e.role + e.company} className="rounded-2xl border border-border bg-surface/40 p-8 lg:p-10 grid lg:grid-cols-[260px_1fr] gap-8 hover:border-primary/40 transition-colors">
              <div>
                <p className="font-mono text-xs tracking-widest text-primary">{e.period}</p>
                <p className="mt-2 text-sm text-muted-foreground">📍 {e.location}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{e.role}</h3>
                <p className="text-muted-foreground mt-1">@ {e.company}</p>
                <ul className="mt-6 space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="mt-24 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-surface/40 p-8">
          <p className="section-label">/// SOFT SKILLS</p>
          <ul className="mt-5 space-y-3">
            {["Communication & Teamwork", "Problem Solving", "Time Management", "Multilingual — Tamil & English"].map((s) => (
              <li key={s} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />{s}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-surface/40 p-8">
          <p className="section-label">/// TECHNICAL SKILLS</p>
          <ul className="mt-5 space-y-3">
            {["Programming — C, Java, Python, HTML", "Frameworks — Flutter, React", "Tools — Git, Visual Studio Code, Antigravity", "AI/ML — Spam Detection, Safety Monitoring", "Data Visualization & Backend Logic"].map((s) => (
              <li key={s} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
