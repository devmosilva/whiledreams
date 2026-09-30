# Narrativa da landing — Design

**Spec**: `.specs/features/landing-narrative/spec.md`  
**Status**: Approved from PRD and Loop Essencial direction

## Architecture

The content below the hero is a sequence of four semantic modules rather than a uniform card grid:

1. `SolutionsSection` pairs the four capabilities with recognizable business problems.
2. `ProcessSection` turns the continuous line into the five-step delivery path.
3. `ProjectsSection` presents three explicitly demonstrative product scenarios.
4. `AboutSection` combines differentiators and the origin of the While Dreams name.

`app/page.tsx` remains the page composition root. Each module owns its content and semantic HTML; `app/globals.css` owns the shared visual system and responsive composition.

## Code reuse

| Existing element | How it is reused |
| --- | --- |
| `app/page.tsx:solutions` | Vocabulary and icon language for the service offering |
| `app/globals.css` tokens | Paper, ink, violet, muted text, borders and buttons |
| `DESIGN.md` | Typography, geometry, interaction and motion constraints |
| `PRD.md` sections 6–11 | Approved factual copy and content boundaries |

## Components

### SolutionsSection

- **Location**: `components/solutions-section.tsx`
- **Purpose**: connect each capability to practical business problems and surface marketing as complementary support.
- **Requirements**: `NARR-01`, `NARR-02`

### ProcessSection

- **Location**: `components/process-section.tsx`
- **Purpose**: explain Entendemos → Planejamos → Construímos → Publicamos → Evoluímos as one continuous system.
- **Requirements**: `NARR-03`

### ProjectsSection

- **Location**: `components/projects-section.tsx`
- **Purpose**: show three honest examples of what the studio can create without invented clients or metrics.
- **Requirements**: `NARR-04`

### AboutSection

- **Location**: `components/about-section.tsx`
- **Purpose**: present the five differentiators and explain the programming origin of the name.
- **Requirements**: `NARR-05`

## Responsive strategy

- Desktop uses asymmetric editorial compositions and a continuous vertical rhythm.
- Tablet reduces parallel columns before typography becomes cramped.
- Mobile becomes a single reading path; no horizontal carousel is required to understand content.
- Decorative lines remain `aria-hidden`; headings, lists and links remain semantic.

## Decisions

| Decision | Choice | Rationale |
| --- | --- | --- |
| Section structure | Four distinct editorial modules | Prevents generic repeated-card scaffolding |
| Project proof | Product scenarios labelled “exemplos” | Matches available evidence and avoids fabricated claims |
| Process marker | Ordered list with a continuous route | Sequence numbers carry real ordering information |
| Marketing | Inline complementary note | Preserves the four primary technology offers |

