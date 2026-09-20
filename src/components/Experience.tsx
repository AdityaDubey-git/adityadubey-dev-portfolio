import { experience } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Learning by doing"
      title="Internships & Training"
      lead="Virtual internships, boot camps, and training programs. I have not held formal full-time employment yet."
    >
      <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 70} className="relative">
            <span
              className="absolute -left-[1.85rem] top-6 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[2.35rem]"
              aria-hidden
            />
            <div className="border-b border-border bg-card/40 p-5 transition-colors hover:bg-secondary/50 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl">{item.title}</h3>
                <span className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.kind}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <li
                    key={tool}
                    className="border border-primary/25 px-3 py-1 text-xs text-primary"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}