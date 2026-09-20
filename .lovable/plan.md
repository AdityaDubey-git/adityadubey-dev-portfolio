# Dark Editorial Portfolio Redesign

## Design direction
Transform the existing portfolio into the selected dark editorial style without rebuilding its content or removing functionality.

- Deep navy background, darker navy surfaces, crisp white text, and restrained mint accents
- Instrument Serif for expressive editorial headings and Work Sans for readable supporting text
- Bold asymmetric composition inspired by the selected prototype, softened for a professional student portfolio
- Minimal gradients, no decorative glow blobs, fewer pill-shaped elements, and sharper geometry

## Page changes

### Navigation and introduction
- Refine the fixed navigation into a clean editorial bar with a stronger name mark, concise desktop links, and the existing mobile menu
- Recompose the first screen as an asymmetric portrait-led layout with an oversized two-line name, concise professional label, existing introduction, and current action links
- Present location and opportunity status as purposeful annotations around the portrait
- Replace the row of small cards with a full-width facts band separated by fine rules

### Content sections
- Introduce consistent numbered editorial headings, stronger typography, and generous spacing across all sections
- Rework About into a story-led layout with large opening copy and a quieter profile facts column
- Present Education as a structured editorial record rather than a floating card
- Simplify Skills and Expertise into clean bordered grids with restrained mint highlights
- Give Projects the strongest hierarchy: one large featured project with clear technology, concept, and link areas
- Restyle Experience as a precise vertical timeline
- Give Certifications, Goals, Strengths, and Hobbies distinct but related layouts so the page feels varied rather than repetitive

### Contact and footer
- Preserve EmailJS sending, validation, success/error notifications, email, LinkedIn, and phone links
- Restyle the contact form with editorial labels, underline-led fields, a strong submit action, and visible direct-contact options
- Simplify the footer into a compact closing line and navigation

## Motion and interaction
- Keep the existing lightweight reveal system, adjusting it to subtle fade-and-rise text motion
- Add restrained image zoom, line movement, border changes, and small lifts on hover
- Preserve keyboard focus states and reduced-motion behavior

## Responsive quality
- Adapt oversized typography, asymmetric grids, navigation, portrait annotations, facts, and forms for mobile
- Ensure long headings, labels, and contact details wrap without overlap or horizontal scrolling

## Technical details
- Update semantic color, typography, shadow, and motion tokens in the global design system
- Load the selected fonts through the document head
- Refactor existing presentation components in place; keep centralized portfolio data unchanged
- Use existing React, Tailwind, Lucide, and lightweight reveal utilities; add no heavy animation dependency
- Verify the page at desktop and mobile sizes, check interactions, and confirm the current build remains healthy
