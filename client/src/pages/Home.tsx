import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";
import { toast } from "sonner";

const frontendSkills = [
  { name: "React", short: "Re", color: "#61dafb" },
  { name: "TypeScript", short: "TS", color: "#3178c6" },
  { name: "JavaScript", short: "JS", color: "#f0db4f" },
  { name: "HTML5", short: "<>", color: "#e34f26" },
  { name: "CSS3", short: "#", color: "#1572b6" },
  { name: "Tailwind CSS", short: "Tw", color: "#38bdf8" },
];

const backendSkills = [
  { name: "Node.js", short: "N", color: "#68a063" },
  { name: "Express", short: "Ex", color: "#252525" },
  { name: "MongoDB", short: "M", color: "#4db33d" },
  { name: "PostgreSQL", short: "Pg", color: "#4169e1" },
  { name: "Firebase", short: "Fi", color: "#ffca28" },
  { name: "REST APIs", short: "↗", color: "#f97316" },
];

const allSkills = [...frontendSkills, ...backendSkills];

const additionalSkills = [
  "Responsive Design",
  "Authentication",
  "UI / UX Thinking",
  "Git & GitHub",
  "Agile Workflow",
  "Performance",
  "Problem Solving",
  "Continuous Learning",
];

const projects = [
  {
    title: "AstroGuardian AI",
    description:
      "A space-mission control dashboard with telemetry, crew and system monitoring, hazard panels, rover navigation, shuttle status, and an AI mission copilot powered by Google Gemini.",
    tags: ["React", "TypeScript", "Express", "Gemini AI"],
    accent: "from-blue-600 to-cyan-400",
    demo: "https://astroguardianai.vercel.app",
    repo: "https://github.com/NumairAITokens404/AstrogaurdianAI.git",
  },
  {
    title: "FSOC",
    description:
      "An ML/CV pipeline for a Unity-based free-space optical communication test environment, detecting and tracking optical beacons through preprocessing, CNN classification, temporal verification, and Kalman tracking.",
    tags: ["Python", "OpenCV", "PyTorch", "FastAPI"],
    accent: "from-violet-600 to-fuchsia-400",
    demo: null,
    repo: "https://github.com/sidnim12/fsoc-ml-cv.git",
  },
  {
    title: "CICS",
    description:
      "A Reddit-style internal social platform for MGIT students with college-email access, community feeds, rooms, profiles, multiple post types, voting, direct messaging, and admin moderation.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    accent: "from-emerald-500 to-teal-300",
    demo: "https://cics1.vercel.app",
    repo: "https://github.com/RamaChandra53/CICS.git",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sent, setSent] = useState(false);
  const [heroText, setHeroText] = useState("Numair");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const phrases = [
      "Numair",
      "Full Stack Developer",
      "Software Engineer",
      "Problem Solver",
    ];
    let phraseIndex = 0;
    let index = phrases[0].length;
    let deleting = true;
    let pauseTicks = 0;

    const interval = window.setInterval(() => {
      const phrase = phrases[phraseIndex];

      if (pauseTicks > 0) {
        pauseTicks -= 1;
        return;
      }

      if (deleting && index > 0) {
        index -= 1;
        setHeroText(phrase.slice(0, index));
        return;
      }

      if (deleting && index === 0) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        deleting = false;
        return;
      }

      if (!deleting && index < phrase.length) {
        index += 1;
        setHeroText(phrase.slice(0, index));
        return;
      }

      if (!deleting && index === phrase.length) {
        deleting = true;
        pauseTicks = 12;
      }
    }, 115);

    return () => window.clearInterval(interval);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Message ready to send", {
      description:
        "Thanks for reaching out — Numair will get back to you soon.",
    });
    event.currentTarget.reset();
  };

  const handleNav = () => setMenuOpen(false);

  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-[#fbfcff] text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a
            href="#top"
            onClick={handleNav}
            className="group flex items-center gap-3"
            aria-label="Numair home"
          >
            <span className="font-display text-2xl font-black tracking-[-0.04em] text-slate-950">
              Numair
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-base font-semibold text-slate-500 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={darkMode}
              aria-label={
                darkMode ? "Switch to light theme" : "Switch to dark theme"
              }
              onClick={() => setDarkMode(value => !value)}
              className={`theme-switch ${darkMode ? "is-dark" : "is-light"}`}
            >
              <span className="theme-switch-track">
                <Moon size={14} />
                <Sun size={14} />
                <span className="theme-switch-thumb" />
              </span>
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(value => !value)}
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200/70 bg-white px-5 py-5 lg:hidden">
            <nav
              className="container flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNav}
                  className="rounded-xl px-3 py-3 text-lg font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section relative flex min-h-[720px] items-center overflow-hidden pt-24">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid" />
          <div className="container relative z-10 py-24 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Hi, I&apos;m
            </p>
            <h1 className="hero-type font-display text-[clamp(3.8rem,9vw,7.7rem)] font-black leading-[0.92] tracking-[-0.075em] text-slate-950">
              {heroText}
              <span className="type-caret" aria-hidden="true" />
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Full-stack developer crafting thoughtful digital experiences with
              modern technologies, strong foundations, and a curiosity for
              what&apos;s next.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#projects"
                className="button-primary group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_28px_rgba(37,99,235,0.23)] transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View my work{" "}
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
              >
                Let&apos;s connect <ChevronRight size={16} />
              </a>
            </div>
            <div className="mt-20 flex items-center justify-center gap-3 text-xs font-semibold text-slate-400">
              <span className="h-px w-10 bg-slate-300" /> Scroll to explore{" "}
              <ArrowDown size={14} className="animate-bounce" />{" "}
              <span className="h-px w-10 bg-slate-300" />
            </div>
          </div>
        </section>

        <section id="about" className="section-padding relative bg-white">
          <div className="container">
            <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="about-card absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-cyan-100" />
                <div className="relative overflow-hidden rounded-[1.8rem] border border-blue-100 bg-slate-50 p-3 shadow-[0_24px_70px_rgba(30,64,175,0.13)]">
                  <div className="avatar-stage flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_12%,#dbeafe_0,#eff6ff_40%,#e0f2fe_100%)]">
                    <div className="avatar-glow" />
                    <img
                      src="/profile.png"
                      alt="Numair"
                      className="relative z-10 h-[86%] w-[86%] rounded-[2rem] object-cover object-center shadow-2xl grayscale-[0.12] transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-2 pb-1 pt-4">
                    <div>
                      <p className="font-display text-lg font-black tracking-[-0.04em] text-slate-950">
                        Numair
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Full-stack developer
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                      Open to learn
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="section-kicker">About me</div>
                <h2 className="section-title mt-5 max-w-xl">
                  I build for the web, and I&apos;m always learning what comes
                  next.
                </h2>
                <div className="mt-7 space-y-5 text-base leading-7 text-slate-500">
                  <p>
                    I&apos;m a full-stack developer exploring different domains,
                    building projects, and learning along the way. I enjoy
                    turning ideas into clear, reliable experiences that feel
                    good to use.
                  </p>
                  <p>
                    My work spans interfaces, APIs, and the systems that connect
                    them. I care about clean details, accessible interactions,
                    and making each new build a little better than the last.
                  </p>
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      toast.info("Resume upload coming soon", {
                        description:
                          "The portfolio is ready for your resume whenever you are.",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    <Download size={16} /> Download resume
                  </button>
                  <a
                    href="https://github.com/NumairAITokens404"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
                  >
                    <Github size={16} /> GitHub profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding bg-[#f5f8ff]">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="section-kicker justify-center">
                Technical skills
              </div>
              <h2 className="section-title mt-5">
                Tools I use to bring ideas to life.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-500">
                A growing toolkit across frontend development, backend systems,
                and the habits that make good products possible.
              </p>
            </div>
            <div className="mt-14 space-y-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
              <div className="marquee-row marquee-left">
                <div className="marquee-track">
                  {[...allSkills, ...allSkills].map((skill, index) => (
                    <span
                      key={`left-${skill.name}-${index}`}
                      className="marquee-chip"
                    >
                      <span
                        className="marquee-dot"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="marquee-row marquee-right">
                <div className="marquee-track">
                  {[...allSkills, ...allSkills]
                    .reverse()
                    .map((skill, index) => (
                      <span
                        key={`right-${skill.name}-${index}`}
                        className="marquee-chip"
                      >
                        <span
                          className="marquee-dot"
                          style={{ backgroundColor: skill.color }}
                        />
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="beyond-stack-card mt-6 rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_12px_40px_rgba(30,64,175,0.04)] sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="beyond-stack-copy">
                  <h3 className="font-display text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                    Beyond the stack
                  </h3>
                  <p className="mt-3 text-lg leading-8 text-slate-500">
                    The practices that shape how I approach a project.
                  </p>
                </div>
                <div className="flex max-w-2xl flex-wrap gap-2.5">
                  {additionalSkills.map(skill => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding bg-white">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="section-kicker">Featured projects</div>
                <h2 className="section-title mt-5 max-w-2xl">
                  A few things I&apos;ve been building.
                </h2>
              </div>
              <a
                href="https://github.com/NumairAITokens404"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
              >
                See all on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {projects.map(project => (
                <article
                  key={project.title}
                  className="project-card group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(30,64,175,0.13)]"
                >
                  <div
                    className={`project-visual relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}
                  >
                    <div className="project-window absolute bottom-[-20px] left-7 right-7 h-32 rounded-t-[1.1rem] border border-white/30 bg-white/80 p-3 shadow-2xl backdrop-blur-sm transition duration-300 group-hover:translate-y-[-8px]">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-300" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      </div>
                      <div className="mt-4 grid grid-cols-[0.65fr_1fr] gap-2">
                        <div className="rounded-md bg-slate-200/70" />
                        <div className="space-y-2">
                          <div className="h-2 w-3/4 rounded bg-slate-300/80" />
                          <div className="h-2 w-full rounded bg-slate-200" />
                          <div className="h-2 w-4/5 rounded bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 min-h-[96px] text-base leading-7 text-slate-500">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                        >
                          Live demo <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-600">
                          In progress
                        </span>
                      )}
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-blue-600"
                      >
                        <Github size={15} /> View code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="section-kicker">Get in touch</div>
                <h2 className="section-title mt-5">
                  Have an idea? Let&apos;s make it real.
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                  Whether you&apos;re building something new, looking for a
                  collaborator, or just want to say hello, my inbox is open.
                </p>
                <div className="mt-9 space-y-4">
                  <a
                    href="mailto:numairkhanworks@gmail.com"
                    className="contact-line group flex items-center gap-4"
                  >
                    <span className="icon-badge bg-blue-50 text-blue-600">
                      <Mail size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        Email
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-700 group-hover:text-blue-600">
                        numairkhanworks@gmail.com
                      </span>
                    </span>
                  </a>
                  <div className="contact-line flex items-center gap-4">
                    <span className="icon-badge bg-violet-50 text-violet-600">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        Based in
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-700">
                        Hyderabad, Telangana
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mt-9 flex gap-3">
                  <a
                    href="https://github.com/NumairAITokens404"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="social-button"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/numair-khan-13899b382"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="social-button"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:numairkhanworks@gmail.com"
                    aria-label="Email"
                    className="social-button"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="rounded-[1.75rem] border border-slate-200 bg-[#f8faff] p-6 shadow-[0_15px_42px_rgba(30,64,175,0.06)] sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-label">
                    Name
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="field-input"
                    />
                  </label>
                  <label className="field-label">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="field-input"
                    />
                  </label>
                </div>
                <label className="field-label mt-5">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Your message"
                    className="field-input resize-none"
                  />
                </label>
                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_22px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    {sent ? "Message sent" : "Send message"}{" "}
                    {sent ? <Check size={16} /> : <Send size={16} />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`site-footer border-t py-9 ${darkMode ? "site-footer-dark text-white" : "site-footer-light text-slate-950"}`}
      >
        <div className="container">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div>
                <span className="block font-display text-lg font-black tracking-[-0.04em]">
                  Numair
                </span>
                <span className="mt-1 block text-sm text-slate-400">
                  Full Stack Developer
                </span>
              </div>
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/NumairAITokens404"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/numair-khan-13899b382"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:numairkhanworks@gmail.com"
                aria-label="Email"
                className="footer-social"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="footer-bottom mt-8 flex flex-col gap-4 border-t pt-6 text-xs font-medium sm:flex-row sm:items-center sm:justify-between">
            <p>© Numair. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
              <a href="#top" className="transition hover:text-white">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
