import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  const Icon = education.icon;
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <Reveal>
        <article className="relative overflow-hidden border-y border-border py-8 sm:py-10">
          <span className="absolute left-0 top-0 h-full w-1 bg-primary" aria-hidden />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="inline-flex size-12 shrink-0 items-center justify-center border border-border text-primary">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <h3 className="text-3xl">{education.degree}</h3>
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