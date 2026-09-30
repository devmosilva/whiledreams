# Landing narrative

## Flow

The post-hero story is composed in `app/page.tsx:Home()` in this order:

1. `components/solutions-section.tsx:SolutionsSection()` — capabilities, business problems and complementary marketing support.
2. `components/process-section.tsx:ProcessSection()` — ordered five-step delivery route.
3. `components/projects-section.tsx:ProjectsSection()` — three demonstrative project scenarios.
4. `components/about-section.tsx:AboutSection()` — differentiators and brand origin.

## Content boundary

All claims come from `PRD.md` sections 6–11. Project scenarios must continue to be identified as examples until commercial cases exist. Form submission, WhatsApp tracking and the final contact surface belong to `.specs/features/conversion-publishing/spec.md`.

## Styling

The modules share tokens from `app/globals.css` but intentionally use different compositions: ledger, route, alternating showcase and editorial list/story. Preserve that variation when extending the page; a uniform card grid would break the approved Loop Essencial direction.

