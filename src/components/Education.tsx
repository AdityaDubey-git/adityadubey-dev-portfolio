import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  const Icon = education.icon;
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <Reveal>
        <article
          className="relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8"
          style={{ background: "var(--gradient-surface)" }}
        >
          <span className="absolute left-0 top-0 h-full w-1" style={{ background: "var(--gradient-accent)" }} aria-hidden />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-primary">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-primary">{education.institution}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.graduation}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {education.description}
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}