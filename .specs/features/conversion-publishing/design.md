# Conversão e publicação — Design

**Spec**: `spec.md`
**Status**: Aprovado pelas decisões do PRD e dados de contato fornecidos

## Fluxo

O visitante escolhe formulário (ação principal) ou WhatsApp (alternativa). O formulário valida com Zod no navegador e repete a validação em `/api/contact`; a rota envia texto simples pelo Resend. Credenciais ausentes ou falha de envio retornam erro recuperável sem revelar configuração interna. `contato@whiledreams.com.br` é o destino padrão, substituível por `CONTACT_TO_EMAIL`.

Analytics é opcional e só inicializa após aceite. A preferência fica no navegador; PostHog, GTM e Meta Pixel não são carregados antes do consentimento. Eventos não incluem conteúdo do formulário. A página de privacidade permite reabrir a escolha.

## Componentes

| Módulo | Responsabilidade | Requisitos |
| --- | --- | --- |
| `components/contact-section.tsx` | CTA, formulário e recuperação por WhatsApp | CONV-01–04 |
| `app/api/contact/route.ts` | Validação, honeypot e envio Resend | CONV-03–04, PUB-02 |
| `components/analytics-consent.tsx` | Consentimento e eventos não sensíveis | CONV-05 |
| `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `app/privacidade/page.tsx` | Descoberta, metadados e confiança | PUB-01–02 |

## Verificação

- Campos inválidos não enviam; a rota também rejeita payload inválido.
- Sem `RESEND_API_KEY`/`RESEND_FROM_EMAIL`, a página renderiza e o formulário oferece WhatsApp.
- Com configuração válida, o destino padrão ou `CONTACT_TO_EMAIL` recebe o lead.
- Sem aceite, nenhuma integração de analytics inicia. Metadados, sitemap, robots, 404 e privacidade respondem.
