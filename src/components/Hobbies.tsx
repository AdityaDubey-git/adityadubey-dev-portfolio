import { hobbies } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Hobbies() {
  return (
    <Section
      id="hobbies"
      eyebrow="Off screen"
      title="Hobbies & Interests"
      lead="What keeps me curious, balanced, and growing outside of technical work."
    >
      <ul className="flex flex-wrap gap-3">
        {hobbies.map((hobby, i) => (
          <Reveal as="li" key={hobby.name} delay={i * 40}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary/40 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
              <hobby.icon className="size-4 text-primary" aria-hidden />
              {hobby.name}
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}