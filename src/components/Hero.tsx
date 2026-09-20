import { ArrowRight, Mail, Download } from "lucide-react";
import { profile, quickFacts, socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import photoAsset from "@/assets/aditya-portfolio.png.asset.json";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal>
            <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Computer Science · Data · Technology</p>
            <h1 id="hero-heading" className="text-[clamp(4.4rem,11vw,9.5rem)] leading-[0.78]">
              ADITYA<br/><span className="italic text-primary">DUBEY</span>
            </h1>
            <p className="mt-9 max-w-xl border-l-2 border-primary pl-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View Projects <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Mail className="size-4" aria-hidden /> Let's Connect
              </a>
              {socialLinks.resume ? (
                <a
                  href={socialLinks.resume}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Download className="size-4" aria-hidden /> Download Resume
                </a>
              ) : null}
            </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative lg:col-span-5 lg:ml-6">
              <div className="overflow-hidden border border-border bg-card">
                <img
                  src={photoAsset.url}
                  alt={`Professional portrait of ${profile.name}`}
                  className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 left-4 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground sm:left-[-1rem]">{profile.location}</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="mt-24 border-y border-border">
          <ul className="grid grid-cols-2 lg:grid-cols-5">
            {quickFacts.map((fact) => (
              <li
                key={fact.label}
                className="min-h-28 border-b border-r border-border p-5 last:border-r-0 lg:border-b-0"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {fact.label}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug">{fact.value}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
