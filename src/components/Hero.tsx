import { ArrowRight, Mail, Download } from "lucide-react";
import { profile, quickFacts, socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import photoAsset from "@/assets/aditya-portfolio.png.asset.json";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {profile.location}
            </p>
            <h1 id="hero-heading" className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Hi, I'm <span className="text-gradient">Aditya Dubey</span>.
            </h1>
            <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">{profile.title}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                View Projects <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Mail className="size-4" aria-hidden /> Let's Connect
              </a>
              {socialLinks.resume ? (
                <a
                  href={socialLinks.resume}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Download className="size-4" aria-hidden /> Download Resume
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="relative overflow-hidden rounded-3xl border border-border p-2"
              style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="rounded-[1.25rem] border border-border/70 bg-background/70">
                <img
                  src={photoAsset.url}
                  alt={`Professional portrait of ${profile.name}`}
                  className="aspect-[3/4] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="mt-16">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {quickFacts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-2xl border border-border bg-card/70 p-4 transition-transform hover:-translate-y-1"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold">{fact.value}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
