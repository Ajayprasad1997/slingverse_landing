"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Database,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Cloud,
  Network,
  Users,
  ChartNoAxesCombined,
} from "lucide-react";
import Dashboard from "./Dashboard";
import ContactForm from "./ContactForm";
import { nav, features, industries, tech, benefits, faqs } from "@/lib/data";
function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-2.5 font-extrabold tracking-tight"
      aria-label="Slingverse home"
    >
         <Image
        src="/assets/images/slingverse-logo.svg"
        alt="Slingverse Logo"
        width={40}
        height={40}
        priority
        className="h-auto w-[40px] sm:w-[40px] object-contain"
      />
      {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-violet-500/20">
        <Network size={22} />
      </span> */}
      <span className={"text-xl " + (light ? "text-white" : "text-ink")}>
        sling<span className="text-accent">verse</span>
        <span className="text-accent">.</span>
      </span>
    </a>
  );
}
function Intro({
  tag,
  title,
  desc,
  center = false,
}: {
  tag: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div
      className={(center ? "mx-auto text-center" : "") + " mb-12 max-w-[680px]"}
    >
      <p className="eyebrow mb-4">{tag}</p>
      <h2 className="heading">{title}</h2>
      {desc && <p className="bodycopy mt-5">{desc}</p>}
    </div>
  );
}
export default function Landing() {
  const [scroll, setScroll] = useState(0),
    [menu, setMenu] = useState(false),
    [open, setOpen] = useState<number | null>(0);
  useEffect(() => {
    const handler = () => setScroll(window.scrollY);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <>
      <header
        className={
          "z-50 w-full transition-all duration-300 " +
          (scroll > 100
            ? "fixed top-0 glass shadow-sm"
            : "absolute top-0 bg-transparent")
        }
      >
        <div className="container-wide flex h-[82px] items-center justify-between gap-5">
          <Logo />
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex"
          >
            {nav.map(([t, h]) => (
              <a
                key={t}
                href={h}
                className="text-[13px] font-semibold text-slate-600 transition hover:text-accent"
              >
                {t}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="btn btn-primary hidden !px-5 !py-3 !text-sm lg:inline-flex"
          >
            Book a Demo <ArrowUpRight size={16} />
          </a>
          <button
            className="rounded-lg border p-2 lg:hidden"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav
            aria-label="Mobile navigation"
            className="glass border-t px-6 pb-5 lg:hidden"
          >
            {nav.map(([t, h]) => (
              <a
                onClick={() => setMenu(false)}
                className="block border-b py-3 text-sm font-semibold"
                key={t}
                href={h}
              >
                {t}
              </a>
            ))}
            <a
              onClick={() => setMenu(false)}
              className="btn btn-primary mt-4 w-full"
              href="#contact"
            >
              Book a Demo
            </a>
          </nav>
        )}
      </header>
      <main>
        <section
          id="home"
          className="hero-bg overflow-hidden pb-24 pt-40 lg:pb-28 lg:pt-48"
        >
          <div className="container-wide grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
            <div className="float-in">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold text-accent">
                <Sparkles size={14} /> BUILT AROUND YOUR BUSINESS{" "}
                <ChevronRight size={13} />
              </span>
              <h1 className="text-[42px] font-extrabold leading-[1.12] tracking-[-.055em] sm:text-[54px] lg:text-[58px]">
                One intelligent system.{" "}
                <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
                  Every business possibility.
                </span>
              </h1>
              <p className="bodycopy mt-7 max-w-xl">
                Custom ERP and CRM solutions that bring your teams, data and
                workflows together. Streamline operations, uncover insights and
                build a smarter way to grow.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Book a Demo <ArrowUpRight size={19} />
                </a>
                <a href="#features" className="btn btn-outline">
                  Explore Solutions <ArrowRight size={19} />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-accent" />
                  Custom-built systems
                </span>
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-accent" />
                  Secure architecture
                </span>
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-accent" />
                  Seamless integrations
                </span>
              </div>
            </div>
            <div className="relative float-in lg:translate-x-5">
              <div className="absolute -inset-7 rounded-full bg-violet-200/50 blur-3xl" />
              <div className="relative">
                <Dashboard />
              </div>
              <div className="absolute -bottom-7 -left-3 hidden rounded-xl border border-slate-100 bg-white p-3 shadow-soft sm:block">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                    <ChartNoAxesCombined size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold">Connected insights</p>
                    <p className="text-[10px] text-slate-400">
                      Sample dashboard experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-slate-100 bg-white py-9">
          <div className="container-wide">
            <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[.2em] text-slate-400">
              Designed for connected business teams · example sectors
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-lg font-extrabold tracking-tight text-slate-400">
              {[
                "PROPERTY",
                "HEALTHCARE",
                "LOGISTICS",
                "COMMERCE",
                "MANUFACTURING",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] text-slate-400">
              Sector labels are illustrative, not customer or partner
              endorsements.
            </p>
          </div>
        </section>
        <section id="features" className="section-pad container-wide">
          <Intro
            tag="WHAT WE BUILD"
            title="Powerful solutions for every moving part of your business."
            desc="Purpose-built modules designed to simplify the complex, connect departments and help your team focus on what matters."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span
                  className={
                    "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl " +
                    (i % 3 === 0
                      ? "bg-violet-100 text-accent"
                      : i % 3 === 1
                        ? "bg-cyan-50 text-sky-600"
                        : "bg-orange-50 text-orange-500")
                  }
                >
                  <f.icon size={23} />
                </span>
                <h3 className="mb-3 text-lg font-extrabold">{f.title}</h3>
                <p className="bodycopy !text-sm">{f.desc}</p>
                <a
                  className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-accent"
                  href="#contact"
                >
                  Discuss this solution <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="industries" className="section-pad bg-[#f7f9fe]">
          <div className="container-wide">
            <Intro
              center
              tag="INDUSTRIES WE SERVE"
              title="Built for the way your industry works."
              desc="We deploy normalized database architectures and secure portals across major service and industrial sectors."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((f, i) => (
                <a
                  href="#contact"
                  key={f.title}
                  className="card-hover group flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-accent">
                    <f.icon size={23} />
                  </span>
                  <strong className="flex-1 text-[15px]">{f.title}</strong>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-300 transition group-hover:text-accent"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section id="technology" className="section-pad container-wide">
          <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <Intro
                tag="OUR TECHNOLOGY"
                title="Engineered for today. Ready for tomorrow."
                desc="We construct dependable business backbones utilizing relational, non-relational, and cloud tools."
              />
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                <ShieldCheck className="text-accent" />
                Technology chosen around project requirements.
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="card-hover rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                >
                  <span className="mr-2 text-accent">✦</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad dark-gradient text-white">
          <div className="container-wide">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow !text-cyan">WHY SLINGVERSE</p>
              <h2 className="heading mt-4">
                Less complexity. More clarity. Better business.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Connect your people, processes and information through a
                solution designed to work as one.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="card-hover rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <b.icon className="mb-5 text-cyan" size={26} />
                  <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad container-wide">
          <Intro
            center
            tag="CONNECTED BY DESIGN"
            title="From scattered systems to one seamless workflow."
            desc="A practical view of how your data can flow between teams, platforms and decision-makers."
          />
          <div className="grid items-center gap-3 md:grid-cols-4">
            {[
              { icon: Users, t: "CRM", d: "Customer & sales data" },
              { icon: Database, t: "ERP", d: "Core business operations" },
              {
                icon: ChartNoAxesCombined,
                t: "Analytics",
                d: "Reports & insights",
              },
              { icon: Cloud, t: "Integrations", d: "External applications" },
            ].map((f, i) => (
              <div
                key={f.t}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft"
              >
                <f.icon size={27} className="mx-auto mb-4 text-accent" />
                <h3 className="font-extrabold">{f.t}</h3>
                <p className="mt-2 text-xs text-slate-500">{f.d}</p>
                {i < 3 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 z-10 hidden text-accent md:block"
                    size={25}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            Illustrative architecture. Actual data flow is tailored to each
            deployment.
          </p>
        </section>
        <section className="section-pad bg-[#f7f9fe]">
          <div className="container-wide">
            <Intro
              tag="ERP CAPABILITIES, CORE INDUSTRIES & SYSTEM INTEGRATIONS"
              title="Your operations. Unified and built to scale."
              desc="We build unified custom CRM dashboards, scalable enterprise ERP platforms, and cloud middleware synchronization tools."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "0",
                  "Recurring License Fees",
                  "Available with eligible custom-owned builds; hosting and support may cost extra.",
                ],
                [
                  "100%",
                  "System Centralization",
                  "Our design goal for agreed in-scope processes and connected data.",
                ],
                [
                  "3x+",
                  "Faster Operations Reporting",
                  "An aspirational improvement target; results depend on your baseline.",
                ],
                [
                  "∞",
                  "Scalability",
                  "Designed for expansion, subject to infrastructure and architecture limits.",
                ],
              ].map(([n, t, d]) => (
                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <p className="mb-3 text-4xl font-black tracking-tight text-accent">
                    {n}
                  </p>
                  <h3 className="text-base font-extrabold">{t}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="section-pad container-wide">
          <Intro
            center
            tag="FLEXIBLE ENGAGEMENTS"
            title="A solution that fits your stage of growth."
            desc="Indicative package scopes only. Every implementation is quoted after discovery; no public fixed pricing is implied."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                t: "Starter",
                d: "For teams ready to organize their core processes.",
                items: [
                  "Discovery & process mapping",
                  "Core CRM or ERP module",
                  "Essential dashboard",
                  "User roles & permissions",
                  "Deployment handover",
                ],
                cta: "Discuss Starter",
              },
              {
                t: "Growth",
                d: "For growing businesses with connected workflows.",
                items: [
                  "Everything in Starter scope",
                  "Multiple custom modules",
                  "Workflow automation",
                  "Integration assessment",
                  "Advanced reporting",
                  "Training & rollout plan",
                ],
                cta: "Discuss Growth",
                featured: true,
              },
              {
                t: "Enterprise",
                d: "For complex operations and bespoke architectures.",
                items: [
                  "Custom architecture planning",
                  "Multi-department workflows",
                  "Tailored integrations",
                  "Migration strategy",
                  "Security & access design",
                  "Optional support agreement",
                ],
                cta: "Request Custom Quote",
              },
            ].map((p) => (
              <article
                key={p.t}
                className={
                  "card-hover relative rounded-2xl border p-7 " +
                  (p.featured
                    ? "border-accent bg-[#f8f7ff] shadow-soft"
                    : "border-slate-200 bg-white")
                }
              >
                {p.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    POPULAR SCOPE
                  </span>
                )}
                <p className="eyebrow">{p.t}</p>
                <h3 className="mt-5 text-3xl font-extrabold">Custom quote</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-slate-500">
                  {p.d}
                </p>
                <a
                  href="#contact"
                  className={
                    "btn mt-5 w-full " +
                    (p.featured ? "btn-primary" : "btn-outline")
                  }
                >
                  {p.cta} <ArrowRight size={17} />
                </a>
                <div className="my-6 border-t" />
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Typical scope includes
                </p>
                <ul className="space-y-4">
                  {p.items.map((x) => (
                    <li className="flex gap-3 text-sm text-slate-600" key={x}>
                      <Check size={17} className="shrink-0 text-accent" />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="faq" className="section-pad bg-[#f7f9fe]">
          <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Intro
                tag="COMMON QUESTIONS"
                title="Everything you need to know."
                desc="Still have questions? Our team can walk you through your requirements and the best path forward."
              />
              <a
                href="mailto:contact@slingverse.in"
                className="btn btn-primary"
              >
                Ask a Question <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="space-y-3">
              {faqs.map(([q, a], i) => (
                <div
                  key={q}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <button
                    aria-expanded={open === i}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold sm:text-base"
                  >
                    {q}
                    <ChevronDown
                      size={19}
                      className={
                        "shrink-0 text-accent transition-transform " +
                        (open === i ? "rotate-180" : "")
                      }
                    />
                  </button>
                  {open === i && (
                    <p
                      id={`faq-${i}`}
                      className="px-5 pb-5 text-sm leading-7 text-slate-500"
                    >
                      {a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section-pad container-wide">
          <div className="grid overflow-hidden rounded-3xl border border-slate-100 shadow-soft lg:grid-cols-[.85fr_1.15fr]">
            <div className="dark-gradient p-8 text-white sm:p-12">
              <p className="eyebrow !text-cyan">LET'S BUILD SOMETHING BETTER</p>
              <h2 className="heading mt-5">
                Your next chapter starts with a conversation.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Tell us what you want to streamline. We'll discuss your goals,
                current tools and potential next steps.
              </p>
              <div className="mt-10 space-y-5">
                <a
                  className="flex items-center gap-3 text-sm hover:text-cyan"
                  href="mailto:contact@slingverse.in"
                >
                  <Mail size={19} className="text-cyan" />
                  contact@slingverse.in
                </a>
                <a
                  className="flex items-center gap-3 text-sm hover:text-cyan"
                  href="tel:+917044399907"
                >
                  <Phone size={19} className="text-cyan" />
                  +91 70443 99907
                </a>
              </div>
              <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="mb-3 text-cyan" />
                <p className="text-sm font-bold">
                  Built around your requirements.
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  A focused discovery process before implementation begins.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 sm:p-12">
              <h3 className="mb-2 text-2xl font-extrabold">
                Book a discovery call
              </h3>
              <p className="mb-8 text-sm text-slate-500">
                Share a few details about your project.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0a1730] py-14 text-white">
        <div className="container-wide">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo light />
              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                Custom CRM dashboards, enterprise ERP platforms and connected
                cloud business solutions.
              </p>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold">Quick Links</h3>
              <div className="space-y-3">
                {nav.slice(0, 6).map(([t, h]) => (
                  <a
                    className="block text-sm text-slate-400 hover:text-white"
                    href={h}
                    key={t}
                  >
                    {t}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold">Our Solutions</h3>
              <div className="space-y-3">
                {[
                  "Custom CRM",
                  "Enterprise ERP",
                  "Cloud Solutions",
                  "System Integrations",
                ].map((t) => (
                  <a
                    href="#features"
                    key={t}
                    className="block text-sm text-slate-400 hover:text-white"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold">Get in Touch</h3>
              <a
                href="mailto:contact@slingverse.in"
                className="mb-4 flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Mail size={16} />
                contact@slingverse.in
              </a>
              <a
                href="tel:+917044399907"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Phone size={16} />
                +91 70443 99907
              </a>
              <a href="#contact" className="btn btn-primary mt-6 !text-sm">
                Book a Demo <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()} Slingverse. All rights reserved.
            </span>
            <span>Built for connected business.</span>
          </div>
        </div>
      </footer>
      {scroll > 500 && (
        <a
          href="#contact"
          className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-xl bg-accent px-3 py-5 text-sm font-bold text-white shadow-xl transition hover:bg-[#4f40df] md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Book a Demo ↗
        </a>
      )}
      {scroll > 200 && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-accent"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
