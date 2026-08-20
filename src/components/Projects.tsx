import { Github, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects"
      lead="Practical builds where I apply what I'm learning to real problems."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article
              className="group relative h-full overflow-hidden rounded-3xl border border-border p-6 transition-transform hover:-translate-y-1 sm:p-8"
              style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-elegant)" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full opacity-15 blur-3xl transition-opacity group-hover:opacity-30"
                style={{ background: "var(--gradient-accent)" }}
                aria-hidden
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-primary">
                <Sparkles className="size-3.5" aria-hidden /> Machine Learning
              </span>
              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-6">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Key concepts
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.concepts.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {project.github || project.demo ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <Github className="size-4" aria-hidden /> GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      <ExternalLink className="size-4" aria-hidden /> Live Demo
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}