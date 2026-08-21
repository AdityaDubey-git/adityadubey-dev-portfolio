import { Mail, Linkedin, Github, FileText, Phone } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const buttons = [
    { label: "Email Me", href: socialLinks.email, icon: Mail, primary: true },
    { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
    { label: "GitHub", href: socialLinks.github, icon: Github },
    { label: "Resume", href: socialLinks.resume, icon: FileText },
  ].filter((b) => Boolean(b.href));

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] border border-border px-6 py-14 text-center sm:px-12"
            style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-elegant)" }}
          >
            <div
              className="pointer-events-none absolute -top-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <h2 id="contact-heading" className="relative mt-4 text-3xl font-bold sm:text-5xl">
              Let's Build Something Together
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I'm always interested in learning opportunities, internships, projects, collaborations,
              and conversations around technology.
            </p>

            {buttons.length > 0 ? (
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                {buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    className={
                      b.primary
                        ? "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                        : "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                    }
                  >
                    <b.icon className="size-4" aria-hidden /> {b.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="relative mx-auto mt-9 max-w-md rounded-2xl border border-border bg-background/60 px-5 py-4 text-sm text-muted-foreground">
                Contact links coming soon — email, LinkedIn, GitHub, and resume will appear here once
                they're added.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}