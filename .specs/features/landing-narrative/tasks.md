# Narrativa da landing — Tasks

**Design**: `.specs/features/landing-narrative/design.md`  
**Status**: In Progress

## Execution plan

`T1 → T2 → T3 → T4 → T5 → T6`

## Task breakdown

### T1 — Define the narrative implementation plan

**Status**: Done  
**What**: Record component boundaries, content ownership and verification.  
**Where**: `.specs/features/landing-narrative/`  
**Depends on**: None  
**Requirement**: `NARR-01..06`  
**Tests**: Documentation review  
**Gate**: None

### T2 — Build services and problems module

**Status**: Pending  
**What**: Create the capability/problem section including complementary marketing support.  
**Where**: `components/solutions-section.tsx`, `app/globals.css`  
**Depends on**: T1  
**Reuses**: PRD copy and existing visual tokens  
**Requirement**: `NARR-01`, `NARR-02`, `NARR-06`  
**Tests**: Visual + TypeScript  
**Gate**: Quick

### T3 — Build process module

**Status**: Pending  
**What**: Create the ordered five-step continuous delivery path.  
**Where**: `components/process-section.tsx`, `app/globals.css`  
**Depends on**: T2  
**Reuses**: Existing violet ribbon language  
**Requirement**: `NARR-03`, `NARR-06`  
**Tests**: Visual + TypeScript  
**Gate**: Quick

### T4 — Build project examples module

**Status**: Pending  
**What**: Create three demonstrative project scenarios with problem, solution, capabilities and technology.  
**Where**: `components/projects-section.tsx`, `app/globals.css`  
**Depends on**: T3  
**Reuses**: PRD demo definitions  
**Requirement**: `NARR-04`, `NARR-06`  
**Tests**: Visual + TypeScript  
**Gate**: Quick

### T5 — Build differentiators and story module

**Status**: Pending  
**What**: Create the positioning principles and brand-origin close.  
**Where**: `components/about-section.tsx`, `app/globals.css`  
**Depends on**: T4  
**Reuses**: `WhileDreams.md` and PRD sections 10–11  
**Requirement**: `NARR-05`, `NARR-06`  
**Tests**: Visual + TypeScript  
**Gate**: Quick

### T6 — Integrate and visually validate narrative

**Status**: Pending  
**What**: Compose all modules in the home and perform bounded desktop/mobile review.  
**Where**: `app/page.tsx`, narrative components, `app/globals.css`, spec/state/notebook  
**Depends on**: T5  
**Requirement**: `NARR-01..06`  
**Tests**: Visual + production integration  
**Gate**: Build + Visual

## Diagram-definition cross-check

| Task | Depends on | Diagram shows | Status |
| --- | --- | --- | --- |
| T1 | None | Start | ✅ |
| T2 | T1 | T1 → T2 | ✅ |
| T3 | T2 | T2 → T3 | ✅ |
| T4 | T3 | T3 → T4 | ✅ |
| T5 | T4 | T4 → T5 | ✅ |
| T6 | T5 | T5 → T6 | ✅ |

## Test co-location validation

| Task | Layer | Matrix requires | Task says | Status |
| --- | --- | --- | --- | --- |
| T1 | Documentation | Review | Review | ✅ |
| T2 | React/CSS | Visual + TypeScript | Visual + TypeScript | ✅ |
| T3 | React/CSS | Visual + TypeScript | Visual + TypeScript | ✅ |
| T4 | React/CSS | Visual + TypeScript | Visual + TypeScript | ✅ |
| T5 | React/CSS | Visual + TypeScript | Visual + TypeScript | ✅ |
| T6 | Page integration | Visual + build | Visual + build | ✅ |

## Granularity check

| Task | Scope | Status |
| --- | --- | --- |
| T2 | One semantic module | ✅ |
| T3 | One semantic module | ✅ |
| T4 | One semantic module | ✅ |
| T5 | One semantic module | ✅ |
| T6 | One integration/review task | ✅ |

