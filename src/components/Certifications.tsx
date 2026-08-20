import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      lead="Courses, training programs, and virtual internships I have completed."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 50}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card/70 p-5 transition-transform hover:-translate-y-1">
              <BadgeCheck className="size-5 text-primary" aria-hidden />
              <h3 className="mt-4 text-base font-semibold">{cert.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {cert.category}
              </p>
              {cert.url ? (
                <a
                  href={cert.url}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  View certificate <ExternalLink className="size-3.5" aria-hidden />
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}