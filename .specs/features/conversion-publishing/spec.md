# Conversão e publicação — Specification

## Goal

Entregar o caminho completo de contato e os requisitos técnicos de publicação definidos no PRD.

## P1 requirements

- `CONV-01`: CTA final e links de WhatsApp usam mensagem pré-preenchida e configuração substituível.
- `CONV-02`: formulário contém nome, empresa, e-mail, WhatsApp, tipo de projeto e mensagem.
- `CONV-03`: dados são validados no cliente e no servidor.
- `CONV-04`: envio por Resend mantém credenciais somente no servidor e comunica sucesso ou recuperação de erro.
- `CONV-05`: eventos PostHog cobrem visualização, CTAs, WhatsApp, início e envio do formulário.
- `PUB-01`: metadata, Open Graph, sitemap, robots, 404 e privacidade estão disponíveis.
- `PUB-02`: ausência de credenciais não quebra renderização nem expõe segredos.

## Out of scope

Banco de dados, CMS, autenticação, painel administrativo e blog não pertencem à V1.

