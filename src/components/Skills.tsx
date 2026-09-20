import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills"
      lead="Technologies and concepts I work with across programming, data, and databases."
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="h-full bg-card p-6 transition-colors hover:bg-secondary/60">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border px-1 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}