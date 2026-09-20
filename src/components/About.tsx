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
      <div className="grid gap-14 lg:grid-cols-[1.5fr_0.75fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="first:font-display first:text-3xl first:leading-tight first:text-foreground text-base leading-relaxed text-muted-foreground sm:first:text-4xl">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <div className="border-l border-border pl-6 sm:pl-8">
            <h3 className="text-2xl">Profile</h3>
            <ul className="mt-5 space-y-4">
              {facts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-3">
                  <span className="border border-border p-2 text-primary">
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
            <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
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