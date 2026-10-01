# Fundação visual e hero — Specification

## Problem statement

O hero existente comunica a oferta, mas a curva vetorial criada para representar a marca não preserva o símbolo oficial e invade a mensagem. A primeira dobra precisa recuperar a geometria real da While Dreams e manter leitura, conversão e responsividade.

## Goals

- [x] Tornar a promessa, a oferta e a ação principal compreensíveis na primeira dobra.
- [x] Usar o símbolo oficial sem rasterizar textos ou controles.
- [x] Preservar a composição em desktop e reorganizá-la com clareza no mobile.

## Out of scope

| Feature | Reason |
| --- | --- |
| Seções abaixo da dobra | Cobertas por F2 |
| Formulário e integrações | Cobertos por F3 |
| Alteração dos arquivos de logo | Assets fornecidos são fonte de verdade |

## P1 — Primeira dobra comercial

**User story**: Como visitante, quero entender em poucos segundos o que a While Dreams faz e como iniciar uma conversa.

**Acceptance criteria**:

1. WHEN a página abrir em desktop THEN o sistema SHALL exibir marca, navegação, headline, descrição, dois CTAs e quatro soluções sem sobreposição ilegível.
2. WHEN o visitante usar o CTA principal THEN o sistema SHALL apontar para `#contato`.
3. WHEN a viewport tiver até 760px THEN o sistema SHALL reorganizar conteúdo e arte sem overflow horizontal.
4. WHEN redução de movimento estiver ativa THEN o sistema SHALL remover transições não essenciais.

**Independent test**: capturas em 1672×941 e 390×844 mostram todo o conteúdo da primeira dobra legível e acionável.

## Edge cases

- WHEN a fonte demorar para carregar THEN o layout SHALL permanecer utilizável.
- WHEN o asset transparente incluir margem interna THEN o enquadramento SHALL preservar o símbolo sem alterar o arquivo.
- WHEN a navegação completa não couber THEN o sistema SHALL priorizar marca e CTA principal.

## Requirement traceability

| Requirement ID | Requirement | Status |
| --- | --- | --- |
| HERO-01 | Conteúdo e CTAs da primeira dobra | Verified |
| HERO-02 | Símbolo oficial e fita com quatro estações | Verified |
| HERO-03 | Layout responsivo sem overflow | Verified |
| HERO-04 | Acessibilidade básica e movimento reduzido | Verified |

**Coverage:** 4 total, 4 mapped, 0 unmapped.
