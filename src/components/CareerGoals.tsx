import { ArrowDown } from "lucide-react";
import { roadmap, careerInterests } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function CareerGoals() {
  return (
    <Section
      id="goals"
      eyebrow="Direction"
      title="Career Goals"
      lead="A simple roadmap guiding how I'm building my career in data and technology."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <ol className="space-y-3">
          {roadmap.map((stage, i) => (
            <Reveal as="li" key={stage.step} delay={i * 80}>
              <div
                className="rounded-2xl border border-border p-5 transition-transform hover:-translate-y-1"
                style={{ background: "var(--gradient-surface)" }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="text-lg font-semibold">{stage.step}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
              {i < roadmap.length - 1 ? (
                <div className="flex justify-center py-1.5" aria-hidden>
                  <ArrowDown className="size-4 text-primary/70" />
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card/70 p-6">
            <h3 className="text-lg font-semibold">Career Interests</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {careerInterests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-primary"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}