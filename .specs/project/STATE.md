# Project State

## Current

- Data: 2026-10-01
- Features concluídas no código: F1 — Fundação visual e hero; F2 — Narrativa e prova de capacidade; F3 — Conversão e publicação
- Próxima etapa: configurar hospedagem, domínio e credenciais; validar o contato na URL final
- Direção aprovada: Loop Essencial / composição horizontal “fita panorâmica”
- Hero desktop e mobile implementado em `app/page.tsx` e `app/globals.css`

## Decisions

- O arquivo `logo/while-dreams-simbolo-transparente.png` é a fonte visual do símbolo no hero e no cabeçalho.
- A fita horizontal para serviços é vetorial para preservar responsividade; no mobile, os serviços viram uma lista compacta.
- O asset original não será recortado ou sobrescrito; o enquadramento é feito em CSS.
- A V1 foi separada em três specs para não acoplar direção visual, conteúdo e integrações.
- Dados atuais de contato e domínio estão em `contatos.md`; o domínio `whiledreams.com.br` está registrado na Hostinger.
- O destino dos leads via Resend ainda deve ser alinhado à configuração verificada do domínio.

## Blockers

- Credenciais do Resend e PostHog ainda dependem de variáveis de ambiente.
- O build Turbopack, o typecheck e o lint passaram na revisão do hero horizontal; o lint mantém um aviso preexistente em `postcss.config.mjs`.

## Deferred

- Configuração externa: Vercel, DNS, domínio verificado no Resend e teste real do formulário.

## Lessons learned

- A aproximação vetorial do símbolo gerava a maior divergência do hero; usar o PNG transparente oficial como núcleo removeu essa fonte de drift.
- Capturas contra o servidor Next.js de desenvolvimento não podem aguardar `networkidle` por causa do HMR; `scripts/capture.mjs` usa `domcontentloaded` com espera determinística.
- A narrativa abaixo da dobra usa quatro módulos semânticos independentes e é composta em `app/page.tsx`; o conteúdo permanece local a cada módulo para facilitar revisão e evolução.
