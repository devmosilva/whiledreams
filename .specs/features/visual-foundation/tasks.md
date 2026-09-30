# Fundação visual e hero — Tasks

**Status**: Done

## Execution plan

`T1 → T2 → T3`

## Tasks

### T1 — Registrar escopo e fonte visual

**Status**: Done

**Where**: `.specs/`  
**Depends on**: None  
**Requirement**: HERO-01..04  
**Done when**: spec, design, teste e estado registram a direção aprovada.  
**Tests**: documentation review  
**Gate**: none

### T2 — Integrar o símbolo oficial no hero

**Status**: Done

**Where**: `app/page.tsx`, `components/brand-logo.tsx`, `app/globals.css`  
**Depends on**: T1  
**Requirement**: HERO-01..04  
**Done when**: marca e rede usam o asset oficial; texto e controles não são rasterizados; desktop e mobile não apresentam overflow.  
**Tests**: visual + TypeScript  
**Gate**: build

### T3 — Revisar a primeira dobra

**Status**: Done

**Where**: `.impeccable/review/` and task status  
**Depends on**: T2  
**Requirement**: HERO-01..04  
**Done when**: capturas desktop e mobile passam por uma revisão agrupada e os defeitos materiais encontrados são corrigidos em uma rodada.  
**Tests**: visual  
**Gate**: visual

## Validation

| Task | Depends on | Diagram | Status |
| --- | --- | --- | --- |
| T1 | None | Start | ✅ |
| T2 | T1 | T1 → T2 | ✅ |
| T3 | T2 | T2 → T3 | ✅ |

| Task | Layer | Required | Declared | Status |
| --- | --- | --- | --- | --- |
| T1 | Documentation | Review | Review | ✅ |
| T2 | React/CSS | Visual + build | Visual + build | ✅ |
| T3 | Visual | Screenshot | Screenshot | ✅ |
