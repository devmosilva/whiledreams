# Fundação visual e hero — Design

**Spec**: `.specs/features/visual-foundation/spec.md`  
**Status**: Approved from existing Impeccable direction

## Architecture

`Home` mantém conteúdo semântico. `BrandLogo` usa o asset oficial e texto HTML. `HeroNetwork` enquadra o PNG transparente como núcleo e desenha somente as quatro conexões em SVG. CSS controla a composição e os breakpoints.

## Reuse

| Existing element | Reuse |
| --- | --- |
| `app/page.tsx:solutions` | Fonte única dos quatro rótulos |
| `components/brand-logo.tsx` | Marca semântica reutilizável |
| `.impeccable/mocks/loop-essential-a.webp` | Referência de composição |
| `logo/while-dreams-simbolo-transparente.png` | Geometria e acabamento oficiais |

## Decisions

| Decision | Choice | Rationale |
| --- | --- | --- |
| Símbolo | PNG oficial importado pelo Next.js | Resolve a divergência geométrica sem redesenhar a marca |
| Conexões | SVG semântico decorativo | Escala com a viewport e mantém linhas nítidas |
| Wordmark | Texto HTML ao lado do símbolo | Mantém nitidez, acessibilidade e responsividade |
| Asset margin | Crop visual por wrapper CSS | Preserva o arquivo original fornecido |

