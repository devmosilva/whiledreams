# Fundação visual e hero — Design

**Spec**: `.specs/features/visual-foundation/spec.md`  
**Status**: Approved from existing Impeccable direction

## Architecture

`Home` mantém conteúdo semântico. `BrandLogo` usa o asset oficial e texto HTML. `HeroTimeline` enquadra o PNG transparente no centro da fita horizontal, desenha a linha em SVG e apresenta quatro estações em lista ordenada. CSS controla a composição e os breakpoints.

## Reuse

| Existing element | Reuse |
| --- | --- |
| `app/page.tsx:solutions` | Fonte única dos quatro rótulos |
| `components/brand-logo.tsx` | Marca semântica reutilizável |
| `.impeccable/mocks/loop-essential-c.webp` | Referência de composição aprovada |
| `logo/while-dreams-simbolo-transparente.png` | Geometria e acabamento oficiais |

## Decisions

| Decision | Choice | Rationale |
| --- | --- | --- |
| Símbolo | PNG oficial importado pelo Next.js | Resolve a divergência geométrica sem redesenhar a marca |
| Fita horizontal | SVG decorativo | Escala com a viewport e mantém a linha nítida |
| Wordmark | Texto HTML ao lado do símbolo | Mantém nitidez, acessibilidade e responsividade |
| Asset margin | Crop visual por wrapper CSS | Preserva o arquivo original fornecido |
