import { strengths } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Strengths() {
  return (
    <Section id="strengths" eyebrow="Beyond code" title="Strengths">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.name} delay={i * 40}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40">
              <span className="rounded-xl border border-border bg-secondary/60 p-2 text-primary">
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