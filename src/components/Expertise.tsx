import { expertise } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="What I do"
      title="Areas of Expertise"
      lead="The areas I'm actively developing through coursework, training, and projects."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <article
              className="group h-full rounded-3xl border border-border p-6 transition-transform hover:-translate-y-1"
              style={{ background: "var(--gradient-surface)" }}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-primary transition-colors group-hover:border-primary/60">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}