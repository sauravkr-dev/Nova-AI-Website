import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Mic, Bot, Globe, Music, Newspaper, MonitorSmartphone, Languages, Zap, LayoutDashboard,
  Download, Github, Star, Menu, X, ChevronDown, Check, ArrowRight, Bug, Lightbulb,
  FolderGit2, Mail, Linkedin, Globe2, ArrowUp, Sparkles, ShieldCheck, Cpu, HardDrive,
  FileText, BookOpen, Play,
} from "lucide-react";
import novaLogo from "@/assets/nova-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import shotChat from "@/assets/screenshot-chat.jpg";
import shotVoice from "@/assets/screenshot-voice.jpg";
import shotNews from "@/assets/screenshot-news.jpg";
import shotMusic from "@/assets/screenshot-music.jpg";
import shotAIChat from "@/assets/screenshot-ai-chat.jpg";
import shotSystem from "@/assets/screenshot-system.jpg";
import sauravPhoto from "@/assets/saurav.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* -------------------- Utility components -------------------- */

function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.65 0.22 285 / 0.08), transparent 40%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}

function Particles({ count = 30 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 15,
        opacity: 0.3 + Math.random() * 0.5,
        key: i,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.key}
          className="absolute rounded-full bg-nova-blue"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 8px currentColor",
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Blob({ className = "", color = "var(--nova-purple)" }: { className?: string; color?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl animate-float-slow ${className}`}
      style={{ background: color, opacity: 0.35 }}
    />
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-nova-cyan" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GradientButton({
  children, href = "#", variant = "primary", icon,
}: { children: ReactNode; href?: string; variant?: "primary" | "ghost"; icon?: ReactNode }) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_oklch(0.65_0.22_285/0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_15px_50px_-8px_oklch(0.65_0.22_285/0.8)] sm:px-7 sm:py-3.5 sm:text-base"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        {icon}
        <span className="relative">{children}</span>
      </a>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center justify-center ..."
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

/* -------------------- Nav -------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Project Journey", href: "#roadmap" },
  { label: "Developer", href: "#developer" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-lg" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <img src={novaLogo} alt="Nova AI logo" width={36} height={36} className="h-9 w-9 drop-shadow-[0_0_15px_oklch(0.65_0.22_285/0.6)]" />
            <span className="text-lg font-bold tracking-tight">Nova <span className="text-gradient-brand">AI</span></span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_-4px_oklch(0.65_0.22_285/0.6)] transition hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-3 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------- Hero -------------------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <Blob className="left-[-10%] top-20 h-[400px] w-[400px]" color="oklch(0.55 0.22 265)" />
      <Blob className="right-[-10%] top-40 h-[500px] w-[500px]" color="oklch(0.55 0.22 305)" />
      <Particles count={35} />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 font-medium text-nova-cyan">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-nova-cyan" /> v0.9.0 Beta
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 font-medium text-muted-foreground">
            Released July 2026
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 font-semibold text-white">
            BETA
          </span>
        </div>

        <div className="relative mx-auto mb-8 h-56 w-56 sm:h-64 sm:w-64">
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand blur-2xl opacity-70" />
          <img
            src={novaLogo}
            alt="Nova AI"
            width={128}
            height={128}
            className="relative h-full w-full animate-float drop-shadow-[0_0_40px_oklch(0.65_0.22_285/0.8)]"
          />
        </div>

        <h1 className="animate-fade-up text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Meet <span className="text-gradient-brand animate-gradient">Nova AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Your personal desktop AI assistant that listens, understands and gets things done.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <GradientButton href="#download" icon={<Download className="h-4 w-4" />}>Download Beta</GradientButton>
          <GradientButton href="https://github.com/sauravkr-dev/Nova-AI-Voice-assistant" variant="ghost" icon={<Star className="h-4 w-4 text-nova-cyan" />}>
            View on GitHub
          </GradientButton>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
          {[
            { k: "v0.9.0", v: "Current Version" },
            { k: "Open Source", v: "MIT License" },
            { k: "Windows", v: "10 & 11" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-gradient sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Features -------------------- */

const FEATURES = [
  { icon: Mic, title: "Voice Recognition", desc: "Wake word detection, natural speech recognition, multiple languages.", tint: "from-blue-500/20 to-cyan-500/20" },
  { icon: Bot, title: "AI Assistant", desc: "Conversational AI, question answering, intelligent responses.", tint: "from-purple-500/20 to-fuchsia-500/20" },
  { icon: Globe, title: "Browser Automation", desc: "Open websites, search Google, open YouTube, browser productivity.", tint: "from-indigo-500/20 to-blue-500/20" },
  { icon: Music, title: "Music Control", desc: "Play songs, voice-controlled playback on demand.", tint: "from-pink-500/20 to-purple-500/20" },
  { icon: Newspaper, title: "News Reader", desc: "Reads latest headlines with interactive news continuation.", tint: "from-cyan-500/20 to-blue-500/20" },
  { icon: MonitorSmartphone, title: "Desktop Automation", desc: "Launch applications, system commands, desktop productivity.", tint: "from-violet-500/20 to-purple-500/20" },
  { icon: Languages, title: "Multilingual Support", desc: "English, Hindi and future language expansion.", tint: "from-blue-500/20 to-purple-500/20" },
  { icon: Zap, title: "Fast Performance", desc: "Optimized Python architecture with a modular codebase.", tint: "from-yellow-500/20 to-orange-500/20" },
  { icon: LayoutDashboard, title: "Modern Desktop GUI", desc: "Beautiful desktop experience, chat interface, live status updates.", tint: "from-fuchsia-500/20 to-pink-500/20" },
];

function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Blob className="left-[50%] top-40 h-[400px] w-[400px] -translate-x-1/2" color="oklch(0.5 0.2 285)" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you'd want in an <span className="text-gradient-brand">AI companion</span></>}
          subtitle="Nova AI blends conversational intelligence, desktop automation, and productivity tools into one seamless voice-first experience."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:glow"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${f.tint} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-[0_0_20px_-4px_oklch(0.65_0.22_285/0.6)]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Screenshots -------------------- */

const SHOTS = [
  { title: "Nova Chat Interface", src: shotChat },
  { title: "Voice Command", src: shotVoice },
  { title: "Music Control", src: shotMusic },
  { title: "System Control", src: shotSystem },
  { title: "News Reader (Coming Soon)", src: shotNews },
  { title: "AI Chat (Coming Soon)", src: shotAIChat },
];

function Screenshots() {
  const [active, setActive] = useState(0);
  return (
    <section id="screenshots" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Screenshots"
          title={<>A glimpse of <span className="text-gradient-brand">Nova in action</span></>}
          subtitle="Every surface has been crafted for clarity, speed and focus."
        />
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-2 shadow-2xl">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground">{SHOTS[active].title}</span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <img
                key={active}
                src={SHOTS[active].src}
                alt={SHOTS[active].title}
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full animate-fade-up object-contain"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SHOTS.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                  i === active
                    ? "bg-gradient-brand text-white shadow-[0_0_20px_-4px_oklch(0.65_0.22_285/0.6)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- How it works -------------------- */

const STEPS = [
  { n: "01", t: "Download Nova AI", d: "Grab the Windows installer." },
  { n: "02", t: "Install Windows App", d: "One-click setup, ready in seconds." },
  { n: "03", t: "Launch Nova", d: "Fire up the desktop assistant." },
  { n: "04", t: 'Say "Nova"', d: "Wake word activates the assistant." },
  { n: "05", t: "Interact naturally", d: "Chat, command, and automate." },
];

function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <Blob className="right-[5%] top-20 h-[350px] w-[350px]" color="oklch(0.5 0.22 260)" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title={<>Up and running in <span className="text-gradient-brand">under a minute</span></>}
        />
        <div className="mt-16 grid gap-5 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="glass h-full rounded-2xl p-5">
                <div className="text-xs font-bold text-nova-cyan">{s.n}</div>
                <div className="mt-2 font-semibold">{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute right-[-16px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-nova-cyan md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Download -------------------- */

function DownloadSection() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-12">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
          <Blob className="left-[-10%] top-[-10%] h-72 w-72" color="oklch(0.55 0.22 265)" />
          <Blob className="right-[-10%] bottom-[-10%] h-72 w-72" color="oklch(0.55 0.22 305)" />

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-nova-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-nova-cyan animate-pulse-glow" />
                Active Development
              </div>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Download <span className="text-gradient-brand">Nova AI</span> Beta</h2>
              <p className="mt-3 text-muted-foreground">Download the latest Beta version of Nova AI for Windows.</p>

              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Current Version", "v0.9.0 Beta"],
                  ["Last Updated", "July 2026"],
                  ["Platform", "Windows 10 & Windows 11"],
                  ["Architecture", "64-bit"],
                ].map(([k, v]) => (
                  <div key={k} className="glass rounded-xl p-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                    <dd className="mt-0.5 font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <a href="https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/releases/download/v0.9.0/NovaAI.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-gradient-brand p-4 text-white shadow-[0_15px_50px_-10px_oklch(0.65_0.22_285/0.7)] transition hover:scale-[1.02]">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Windows Installer · 64-bit</div>
                  <div className="font-semibold">Download Windows</div>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              {[
                { icon: FileText, label: "Release Notes", href:"https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/releases/latest"},
                { icon: BookOpen, label: "Installation Guide", href: "https://github.com/sauravkr-dev/Nova-AI-Voice-assistant#-windows-installation"},
                { icon: Github, label: "GitHub Releases", href:"https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/releases" },
              ].map((b) => (
                <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:border-white/20 hover:bg-white/5">
                  <b.icon className="h-5 w-5 text-nova-cyan" />
                  <span className="font-medium">{b.label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* System requirements */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="text-lg font-semibold">System Requirements</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: MonitorSmartphone, t: "Windows 10 or 11" },
                { icon: Cpu, t: "64-bit processor" },
                { icon: HardDrive, t: "4 GB RAM minimum" },
                { icon: Mic, t: "Microphone required" },
                { icon: Globe2, t: "Internet connection required for AI & News features" },
                { icon: ShieldCheck, t: "MIT license" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3 rounded-xl glass p-3 text-sm">
                  <r.icon className="h-4 w-4 text-nova-cyan" />
                  {r.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Why Nova (comparison) -------------------- */

const NOVA_PROS = [
  "Voice Assistant", "AI Chat", "Browser Automation", "Music", "News",
  "Desktop Automation", "Wake Word", "Modern UI",
];
const TRAD = ["Limited", "Basic", "No Automation", "Less Flexible"];

function WhyNova() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Nova AI"
          title={<>Built for a <span className="text-gradient-brand">smarter desktop</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8">
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
            <div className="flex items-center gap-3">
              <img src={novaLogo} alt="" width={40} height={40} className="h-10 w-10" />
              <h3 className="text-2xl font-bold text-gradient-brand">Nova AI</h3>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {NOVA_PROS.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-brand">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl glass p-8 opacity-80">
            <h3 className="text-2xl font-bold text-muted-foreground">Traditional Assistant</h3>
            <ul className="mt-6 space-y-2">
              {TRAD.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-destructive/70" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Project Journey -------------------- */

function ProjectJourney() {
  const milestones = [
    "Nova project started",
    "Wake Word Detection",
    "Voice Recognition",
    "Browser Automation",
    "AI Integration",
    "Music Control",
    "News Reader",
    "Desktop GUI",
    "Public Beta Release",
  ];

  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Project Journey"
          title={<>Building Nova <span className="text-gradient-brand">one step at a time</span></>}
        />
        <div className="mt-14">
          <div className="rounded-3xl glass-strong p-6 sm:p-8">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-semibold text-white">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-white" />
              2026
            </div>
            <div className="relative">
              <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-nova-cyan/40 via-nova-purple/40 to-transparent" />
              <ul className="space-y-4">
                {milestones.map((m) => (
                  <li key={m} className="relative flex items-center gap-4 pl-1">
                    <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-white shadow-[0_0_15px_-3px_oklch(0.65_0.22_285/0.6)]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm sm:text-base">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              "Nova AI will continue evolving as I learn and build new features."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Development Status -------------------- */

function DevelopmentStatus() {
  const features = [
    "Desktop GUI",
    "Voice Assistant",
    "AI Chat (Coming soon)",
    "Wake Word Detection",
    "Browser Automation",
    "News Reader (Coming soon)",
    "Music Control",
    "Multilingual Support",
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Development Status"
          title={<>Current state of <span className="text-gradient-brand">Nova AI</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl glass-strong p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-white">v0.9.0 Beta</span>
              <span className="text-xs text-muted-foreground">Current Version</span>
            </div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-400" />
              Actively maintained personal project
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nova AI is continuously improved whenever new ideas, features or fixes are implemented.
              There is no fixed roadmap or release schedule.
              This project is developed independently in my free time.
            </p>
          </div>
          <div className="rounded-3xl glass p-6 sm:p-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Implemented Features</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-nova-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Open source -------------------- */

function OpenSource() {
  const actions = [
    {
      icon: Star,
      label: "Star Repository",
      href: "https://github.com/sauravkr-dev/Nova-AI-Voice-assistant",
      primary: true,
    },
    {
      icon: Bug,
      label: "Report Bug",
      href: "https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/issues",
    },
    {
      icon: Lightbulb,
      label: "Request Feature",
      href: "https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/issues/new/choose",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 text-center sm:p-14">
          <Blob
            className="left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
            color="oklch(0.55 0.22 285)"
          />

          <Github className="mx-auto h-14 w-14 text-foreground" />

          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Open Source <span className="text-gradient-brand">Project</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Nova AI is an open-source personal project.
            Feedback, suggestions and contributions are always welcome.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((a) =>
              a.primary ? (
                <GradientButton
                  key={a.label}
                  href={a.href}
                  icon={<a.icon className="h-4 w-4" />}
                >
                  {a.label}
                </GradientButton>
              ) : (
                <GradientButton
                  key={a.label}
                  href={a.href}
                  variant="ghost"
                  icon={<a.icon className="h-4 w-4 text-nova-cyan" />}
                >
                  {a.label}
                </GradientButton>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Developer -------------------- */

function Developer() {
  return (
    <section id="developer" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Developer" title={<>Meet the Developer</>} />
        <div className="mt-14 rounded-3xl glass-strong p-8 sm:p-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="relative shrink-0">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand blur-xl opacity-70" />
              <img
                src={sauravPhoto}
                alt="Saurav Kumar"
                className="relative h-32 w-32 rounded-full object-cover border-4 border-white/10 shadow-[0_0_40px_rgba(120,90,255,0.5)]"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold">Saurav Kumar</h3>
              <p className="mt-1 text-sm font-medium text-nova-cyan">B.Tech Student &amp; Aspiring AI &amp; Software Developer</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hi, I'm Saurav Kumar.
                I'm a B.Tech student and aspiring AI &amp; Software Developer passionate about building intelligent desktop applications,
                automation tools and AI-powered software.
                Nova AI is one of my personal projects where I experiment with modern AI technologies and software architecture.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/sauravkr-dev" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sauravkr-dev" },
                  { icon: Globe2, label: "Portfolio", href: "https://sauravkr-dev-portfolio.netlify.app" },
                  { icon: Mail, label: "Email", href: "mailto:sauravkr.dev@gmail.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target = "_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:border-white/20 hover:bg-white/5">
                    <s.icon className="h-4 w-4 text-nova-cyan" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */

const FAQS = [
  { q: "What is Nova AI?", a: "Nova AI is a personal desktop AI voice assistant project developed by Saurav Kumar. It combines conversational AI, desktop automation, browser control, productivity tools and intelligent assistance in a modern Windows app." },
  { q: "Is Nova AI free?", a: "Yes. Nova AI is open source under the MIT license and free to use." },
  { q: "Does it work offline?", a: "Core voice recognition and desktop automation work locally. AI chat and news features require an internet connection." },
  { q: "What operating systems are supported?", a: "Windows 10 and Windows 11 (64-bit) are supported today. Nova AI is currently built for Windows." },
  { q: "Can I contribute?", a: "Absolutely — feedback, suggestions and contributions are always welcome on GitHub." },
  { q: "How do I install Nova?", a: "Download the latest installer from the Download section or GitHub Releases page., run it, launch Nova and say the wake word to begin." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title={<>Frequently asked questions</>} />
        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl glass">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="animate-fade-up border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Contact -------------------- */

function Contact() {
  const items = [
    { icon: Github, label: "GitHub", value: "sauravkr-dev",href: "https://github.com/sauravkr-dev" },
    { icon: Linkedin, label: "LinkedIn", value: "sauravkr-dev",href: "https://www.linkedin.com/in/sauravkr-dev" },
    { icon: Globe2, label: "Portfolio", value: "sauravkr-dev-portfolio.netlify.app",href: "https://sauravkr-dev-portfolio.netlify.app/" },
    { icon: Mail, label: "Email", value: "sauravkr.dev@gmail.com", href: "mailto:sauravkr.dev@gmail.com", },
  ];
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title={<>Get in <span className="text-gradient-brand">touch</span></>} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {items.map((i) => (
            <a key={i.label} href={i.href} target = "_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:border-white/20 hover:bg-white/5 hover:glow">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
                <div className="truncate font-medium">{i.value}</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Footer -------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={novaLogo} alt="Nova AI" width={36} height={36} className="h-9 w-9" />
            <div>
              <div className="font-bold">Nova <span className="text-gradient-brand">AI</span></div>
              <div className="text-xs text-muted-foreground">Independent Personal Project</div>
              <div className="text-xs text-muted-foreground">Made with <span className="text-red-400">❤️</span> by Saurav Kumar</div>
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              {label: "GitHub", href: "https://github.com/sauravkr-dev",}, 
            {label: "LinkedIn", href: "https://www.linkedin.com/in/sauravkr-dev"}, 
            {label: "Portfolio", href: "https://sauravkr-dev-portfolio.netlify.app",},
            {label: "License", href: "https://github.com/sauravkr-dev/Nova-AI-Voice-assistant/blob/main/LICENSE",
            },
             ].map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">
                  {item.label}
                  </a>
              </li>
            ))}
          </ul> 
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nova AI · Open source under the MIT License
        </div>
      </div>
    </footer>
  );
}

/* -------------------- Back-to-top -------------------- */

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-[0_10px_40px_-10px_oklch(0.65_0.22_285/0.7)] transition hover:scale-110"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* -------------------- Page -------------------- */

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CursorGlow />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-radial)" }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <DownloadSection />
        <WhyNova />
        <ProjectJourney />
        <DevelopmentStatus />
        <OpenSource />
        <Developer />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
