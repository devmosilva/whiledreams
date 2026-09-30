# Project State

## Current

- Data: 2026-09-30
- Features concluídas: F1 — Fundação visual e hero; F2 — Narrativa e prova de capacidade
- Próxima feature: F3 — Conversão e publicação
- Direção aprovada: Loop Essencial / composição “Símbolo modular”
- Implementação encontrada: hero desktop e mobile parcial em `app/page.tsx` e `app/globals.css`

## Decisions

- O arquivo `logo/while-dreams-simbolo-transparente.png` é a fonte visual do símbolo no hero e no cabeçalho.
- As ramificações para serviços continuam vetoriais para preservar responsividade.
- O asset original não será recortado ou sobrescrito; o enquadramento é feito em CSS.
- A V1 foi separada em três specs para não acoplar direção visual, conteúdo e integrações.

## Blockers

- Credenciais do Resend e PostHog ainda dependem de variáveis de ambiente.
- O build Turbopack passou antes do ajuste final do cabeçalho, mas as tentativas finais falharam no ambiente ao criar o processo interno do PostCSS (`binding to a port: EPERM`). `typecheck` e lint continuam verdes; o fallback Webpack do Next 16 falha ao interpretar o `--showConfig` do TypeScript 6.

## Deferred

- F3: formulário, API, analytics, SEO complementar e páginas legais.

## Lessons learned

- A aproximação vetorial do símbolo gerava a maior divergência do hero; usar o PNG transparente oficial como núcleo removeu essa fonte de drift.
- Capturas contra o servidor Next.js de desenvolvimento não podem aguardar `networkidle` por causa do HMR; `scripts/capture.mjs` usa `domcontentloaded` com espera determinística.
- A narrativa abaixo da dobra usa quatro módulos semânticos independentes e é composta em `app/page.tsx`; o conteúdo permanece local a cada módulo para facilitar revisão e evolução.
