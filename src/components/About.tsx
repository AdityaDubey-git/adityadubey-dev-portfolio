import { MapPin, GraduationCap, Target, CircleCheck } from "lucide-react";
import { aboutParagraphs, profile } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GraduationCap, label: "Studying", value: "B.Sc. Computer Science" },
  { icon: Target, label: "Focus", value: "Data · ML · Software" },
  { icon: CircleCheck, label: "Status", value: profile.status },
];

export function About() {
  return (
    <Section id="about" eyebrow="Introduction" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <div
            className="rounded-3xl border border-border p-6"
            style={{ background: "var(--gradient-surface)" }}
          >
            <h3 className="text-lg font-semibold">Profile</h3>
            <ul className="mt-5 space-y-4">
              {facts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-3">
                  <span className="rounded-xl border border-border bg-secondary/60 p-2 text-primary">
                    <fact.icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {fact.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium">{fact.value}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground">
              Learn <span className="text-primary">→</span> Build <span className="text-primary">→</span>{" "}
              Analyze <span className="text-primary">→</span> Solve <span className="text-primary">→</span>{" "}
              Grow
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}