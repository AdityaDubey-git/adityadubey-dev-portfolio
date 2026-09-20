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
      <div className="grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="group relative h-full bg-card p-7 transition-colors hover:bg-secondary/60 sm:p-10 lg:min-h-[420px]">
              <div className="flex items-center justify-between text-primary">
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Featured project</span>
                <Sparkles className="size-5" aria-hidden />
              </div>
              <h3 className="mt-12 text-4xl leading-none sm:text-5xl">{project.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mt-6">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="border border-primary/30 px-3 py-1 text-xs text-primary"
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
                      className="border border-border px-3 py-1 text-xs text-muted-foreground"
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
                       className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="size-4" aria-hidden /> GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                       className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
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