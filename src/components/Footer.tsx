import { profile } from "@/data/portfolio";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">{profile.name}<span className="text-primary">.</span></p>
          <p className="mt-1 text-xs text-muted-foreground">{profile.title}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                   className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 w-full max-w-7xl px-5 text-xs text-muted-foreground sm:px-8">
        © 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}