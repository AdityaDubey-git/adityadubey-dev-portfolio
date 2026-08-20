import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { CareerGoals } from "@/components/CareerGoals";
import { Strengths } from "@/components/Strengths";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Aditya Dubey | Computer Science Student | Data & Technology Portfolio";
const description =
  "Portfolio of Aditya Dubey, a B.Sc. Computer Science student at MIT ACSC, Pune, interested in Python, Data Analytics, Data Science, SQL, Machine Learning, and Software Development.";
const imageUrl = "https://id-preview--0df295fd-c1bd-42e7-a486-fb7bd1843dc7.lovable.app/__l5e/assets-v1/316ca9ba-840e-462e-bc5a-d51667177add/aditya-portfolio.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: imageUrl },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aditya Dubey",
          jobTitle: "B.Sc. Computer Science Student",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "MIT ACSC, Pune" },
          knowsAbout: ["Python", "Data Analytics", "SQL", "Machine Learning", "C++", "Data Visualization"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Expertise />
        <Projects />
        <Experience />
        <Certifications />
        <CareerGoals />
        <Strengths />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
