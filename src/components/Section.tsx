import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("border-t border-border py-20 sm:py-28 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-5 lg:grid-cols-[0.42fr_1fr] lg:items-end">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {id === "about" ? "01" : id === "education" ? "02" : id === "skills" ? "03" : id === "expertise" ? "04" : id === "projects" ? "05" : id === "experience" ? "06" : id === "certifications" ? "07" : id === "goals" ? "08" : id === "strengths" ? "09" : "10"} — {eyebrow}
            </p>
          ) : null}
          <div>
            <h2 id={`${id}-heading`} className="text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h2>
            {lead ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
          </div>
        </Reveal>
        <div className="mt-14 lg:mt-20">{children}</div>
      </div>
    </section>
  );
}