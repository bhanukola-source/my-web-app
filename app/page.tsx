"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "./actions";
import {
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Link,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  type: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fast, conversion-focused shopping experience with secure checkout and a flexible product catalog.",
    tags: ["Full-stack", "Frontend"],
    type: "Featured",
    accent: "from-lime-300 via-emerald-300 to-cyan-400",
  },
  {
    title: "Task Management App",
    description: "A focused workspace that helps teams plan work, track progress, and keep every project moving.",
    tags: ["Full-stack", "Product design"],
    type: "Featured",
    accent: "from-orange-300 via-rose-300 to-fuchsia-400",
  },
  {
    title: "Developer Portfolio",
    description: "A polished personal site that brings projects, technical strengths, and a clear point of view together.",
    tags: ["Frontend", "Product design"],
    type: "Personal project",
    accent: "from-sky-300 via-blue-400 to-violet-400",
  },
];

const skills = [
  { name: "React & Next.js", level: "Advanced", icon: Code2 },
  { name: "TypeScript", level: "Advanced", icon: Sparkles },
  { name: "Product design", level: "Advanced", icon: Globe2 },
  { name: "Node & APIs", level: "Comfortable", icon: ArrowUpRight },
  { name: "Design systems", level: "Advanced", icon: Check },
  { name: "Motion & interaction", level: "Comfortable", icon: Sparkles },
];

const filters = ["All", "Frontend", "Full-stack", "Product design"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

  async function handleFormAction(formData: FormData) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);

      startTransition(() => {
        if (result.success) {
          setSubmitted(true);
          setToast("Thanks! Your message has been sent.");
        } else {
          setToast(result.error ?? "Failed to submit message.");
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="overflow-hidden bg-[#111311] text-[#f2f1e9]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between border-b border-white/10 py-6">
          <a href="#" className="font-mono text-sm font-bold tracking-tight text-[#d9ff55]">BT / 2024</a>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#work">Work</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-[#d9ff55] hover:text-[#d9ff55] sm:block">
            Let&apos;s talk <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5" />
          </a>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/20 p-2 md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="flex flex-col gap-4 border-b border-white/10 py-5 text-sm text-white/70 md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}

        <section className="relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3 text-sm text-[#d9ff55]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#d9ff55]" />Available for select projects</div>
            <h1 className="max-w-4xl text-[clamp(3.7rem,9vw,8.7rem)] font-semibold leading-[.87] tracking-[-.09em]">Bhanu Teja, <span className="text-[#d9ff55]">Full-Stack Developer.</span></h1>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-white/55">I&apos;m Bhanu Teja — a Full-Stack Developer focused on creating fast, accessible, and scalable digital experiences.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-[#d9ff55] px-6 py-3 text-sm font-semibold text-[#111311] transition hover:bg-white">See my work <ArrowUpRight className="ml-2 inline h-4 w-4" /></a>
              <a href="#about" className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white">More about me</a>
            </div>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-[440px] lg:h-[500px]">
            <div className="absolute inset-8 rotate-6 rounded-[2rem] bg-gradient-to-br from-[#d9ff55]/70 to-[#20352a] blur-3xl" />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/15 bg-[#252a24]">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#d9ff55] opacity-80 blur-sm" />
              <div className="absolute -bottom-12 -left-8 h-72 w-72 rounded-full bg-[#314c86] opacity-80 blur-sm" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,transparent_0_18%,rgba(17,19,17,.45)_19%_20%,transparent_21%)] opacity-80" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><span className="font-mono text-xs uppercase tracking-[.2em] text-white/60">Full-stack / focused</span><span className="text-5xl font-semibold tracking-[-.1em] text-white/90">BT</span></div>
            </div>
          </div>
          <div className="absolute -bottom-4 right-0 hidden rotate-90 font-mono text-[10px] uppercase tracking-[.3em] text-white/30 lg:block">Scroll to explore</div>
        </section>

        <section id="about" className="grid gap-10 border-t border-white/10 py-24 md:grid-cols-[.55fr_1fr] md:gap-20">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-[#d9ff55]">01 / About me</p>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">I care about the space between a good idea and a great experience.</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55">I&apos;m a full-stack developer focused on creating fast, accessible, and scalable digital experiences. I enjoy turning complex requirements into reliable products with clean interfaces and thoughtful engineering.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[["8+", "years learning"], ["24", "projects built"], ["12", "happy teams"]].map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-3xl font-semibold tracking-[-.06em] text-[#d9ff55]">{number}</p><p className="mt-2 text-xs uppercase tracking-wider text-white/40">{label}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-white/10 py-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="font-mono text-xs uppercase tracking-[.22em] text-[#d9ff55]">02 / Selected work</p><h2 className="mt-5 text-4xl font-medium tracking-[-.06em] sm:text-6xl">A few things I&apos;ve made.</h2></div>
            <div className="flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-xs transition ${activeFilter === filter ? "bg-[#d9ff55] font-semibold text-[#111311]" : "border border-white/15 text-white/55 hover:border-white/50 hover:text-white"}`}>{filter}</button>)}</div>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article key={project.title} className={`group ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={`relative min-h-[280px] overflow-hidden rounded-3xl bg-gradient-to-br ${project.accent} p-6 text-[#111311] transition duration-500 group-hover:-translate-y-1 ${index === 0 ? "lg:min-h-[390px]" : ""}`}>
                  <span className="rounded-full bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">{project.type}</span>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><p className="max-w-[220px] text-sm font-medium">{project.description}</p><span className="rounded-full bg-[#111311] p-3 text-[#d9ff55] transition group-hover:rotate-45"><ArrowUpRight size={18} /></span></div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4"><h3 className="text-xl font-medium">{project.title}</h3><div className="flex flex-wrap justify-end gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs text-white/40">{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/10 py-24 md:grid-cols-[.55fr_1fr] md:gap-20">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-[#d9ff55]">03 / Skills & tools</p>
          <div className="grid gap-3 sm:grid-cols-2">{skills.map(({ name, level, icon: Icon }) => <div key={name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:border-[#d9ff55]/60"><div className="flex items-center gap-3"><Icon size={17} className="text-[#d9ff55]" /><span>{name}</span></div><span className="text-xs text-white/35">{level}</span></div>)}</div>
        </section>

        <section id="contact" className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-[.8fr_1.2fr] md:gap-24">
          <div><p className="font-mono text-xs uppercase tracking-[.22em] text-[#d9ff55]">04 / Get in touch</p><h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-.07em] sm:text-7xl">Have a good one? Let&apos;s make it real.</h2><div className="mt-10 flex gap-4"><a aria-label="GitHub" href="#" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff55] hover:text-[#d9ff55]"><Code2 size={18} /></a><a aria-label="LinkedIn" href="#" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff55] hover:text-[#d9ff55]"><Link size={18} /></a><a aria-label="Email" href="mailto:hello@bhanu-teja.dev" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff55] hover:text-[#d9ff55]"><Mail size={18} /></a></div></div>
          <form action={handleFormAction} className="space-y-5">
            <label className="block"><span className="mb-2 block text-xs uppercase tracking-wider text-white/40">Your name</span><input required name="name" className="w-full border-b border-white/20 bg-transparent py-3 outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]" placeholder="Jane Smith" /></label>
            <label className="block"><span className="mb-2 block text-xs uppercase tracking-wider text-white/40">Email address</span><input required type="email" name="email" className="w-full border-b border-white/20 bg-transparent py-3 outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]" placeholder="jane@company.com" /></label>
            <label className="block"><span className="mb-2 block text-xs uppercase tracking-wider text-white/40">Tell me a little about it</span><textarea required name="message" rows={4} className="w-full resize-none border-b border-white/20 bg-transparent py-3 outline-none transition placeholder:text-white/20 focus:border-[#d9ff55]" placeholder="I have an idea..." /></label>
            <button disabled={isPending || isSubmitting} type="submit" className="rounded-full bg-[#d9ff55] px-6 py-3 text-sm font-semibold text-[#111311] transition hover:bg-white disabled:cursor-wait disabled:opacity-60">{isPending || isSubmitting ? "Sending..." : submitted ? <>Message noted <Check className="ml-2 inline h-4 w-4" /></> : <>Send message <ArrowUpRight className="ml-2 inline h-4 w-4" /></>}</button>
          </form>
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/35 sm:flex-row"><span>© 2024 Bhanu Teja. Made with intention.</span><a href="#" className="transition hover:text-[#d9ff55]">Back to top ↑</a></footer>
      </div>
      {toast && (
        <div role="status" className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-4 rounded-2xl border border-[#d9ff55]/40 bg-[#252a24] px-5 py-4 text-sm text-white shadow-2xl shadow-black/30">
          <span className={`h-2 w-2 shrink-0 rounded-full ${submitted ? "bg-[#d9ff55]" : "bg-red-400"}`} />
          <span className="flex-1">{toast}</span>
          <button type="button" aria-label="Dismiss notification" onClick={() => setToast(null)} className="text-white/50 transition hover:text-white">×</button>
        </div>
      )}
    </main>
  );
}