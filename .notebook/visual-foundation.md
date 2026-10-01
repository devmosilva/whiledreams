# Visual foundation

## Sources of truth

- Product constraints: `PRODUCT.md`
- Approved surface direction: `.impeccable/home-surface.md`
- Durable design tokens and asset provenance: `DESIGN.md`
- Active implementation spec: `.specs/features/visual-foundation/`

## Implementation map

- Hero content and solution data: `app/page.tsx:Home()` and `app/page.tsx:HeroTimeline()`
- Responsive composition and tokens: `app/globals.css`
- Reusable wordmark: `components/brand-logo.tsx:BrandLogo()`
- Official symbol source: `logo/while-dreams-simbolo-transparente.png`

## Gotcha

The official transparent PNG is square and contains substantial internal transparent margin. Preserve the original file and crop it through its wrapper/background positioning; rebuilding the mark as an approximate SVG caused the hero drift recorded in `.impeccable/build/state.json`.

The horizontal hero layout based on `.impeccable/mocks/loop-essential-c.webp` was approved on 2026-10-01. The original branched composition remains in `.impeccable/mocks/loop-essential-a.webp` as history.
