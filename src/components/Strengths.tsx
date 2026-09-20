import { strengths } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Strengths() {
  return (
    <Section id="strengths" eyebrow="Beyond code" title="Strengths">
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.name} delay={i * 40}>
            <div className="flex h-full items-start gap-4 bg-card p-5 transition-colors hover:bg-secondary/60">
              <span className="border border-border p-2 text-primary">
                <s.icon className="size-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold">{s.name}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {s.line}
                </span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}