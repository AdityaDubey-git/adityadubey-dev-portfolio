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
      <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <article className="group h-full bg-card p-7 transition-colors hover:bg-secondary/60">
              <span className="inline-flex size-11 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-8 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}