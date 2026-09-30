# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js com TypeScript e Tailwind CSS, publicado na Vercel. O formulário usa React Hook Form e Zod, envia os contatos pelo Resend e mede conversões com PostHog. A infraestrutura prevista usa Registro.br e Cloudflare para domínio, DNS e segurança.

## Users

Pequenas e médias empresas que precisam melhorar processos ou presença digital, com atenção inicial a clínicas e empresas de saúde, engenharia e construção, logística, empresas B2B, prestadores de serviços e negócios dependentes de atendimento, orçamento ou processos manuais.

O visitante precisa entender rapidamente que tipo de problema a While Dreams resolve, avaliar se a empresa é uma parceira confiável e iniciar uma conversa sobre seu projeto.

## Product Purpose

A landing page institucional e comercial para transformar visitantes em oportunidades qualificadas. Ela apresenta serviços, problemas resolvidos, forma de trabalho, exemplos de projetos e o conceito da marca, conduzindo o visitante ao formulário ou ao WhatsApp.

O principal critério de sucesso é gerar leads qualificados. A experiência deve comunicar a proposta em poucos segundos e funcionar bem em dispositivos móveis e desktop.

## Positioning

A While Dreams transforma ideias e necessidades de negócio em tecnologia sob medida. Antes de desenvolver, procura entender o problema real e pode conectar sites, sistemas, automações, inteligência artificial e apoio complementar em marketing aos objetivos do negócio.

## Operating Context

O visitante pode chegar à página procurando melhorar a presença digital, eliminar planilhas e tarefas manuais, integrar ferramentas, facilitar pedidos de orçamento, organizar informações ou avaliar uma ideia de produto. O contato pode começar pelo formulário ou pelo WhatsApp.

## Capabilities and Constraints

- MVP com hero, serviços, problemas resolvidos, processo de trabalho, dois ou três exemplos de projetos, história da marca, CTA final, formulário, WhatsApp e analytics.
- Contato provisório por WhatsApp no número `+55 71 98690-1876` e pelo e-mail `devmosilva@gmail.com`; ambos devem ser fáceis de substituir posteriormente.
- Os projetos apresentados são “exemplos do que criamos”. Não devem usar clientes, depoimentos, resultados ou métricas inventadas.
- Formulário com nome, empresa, e-mail, WhatsApp, tipo de projeto e mensagem, validado no cliente e no servidor.
- Sem banco de dados, CMS, autenticação, painel administrativo, blog ou infraestrutura complexa na V1.
- SEO básico, Open Graph, sitemap, robots.txt, página 404, política de privacidade e eventos de conversão.
- O envio de e-mail depende de credenciais e domínio configurados no Resend. Analytics depende da chave de projeto do PostHog.

## Brand Commitments

- Nome: While Dreams.
- Mensagem central: “Transformamos ideias em tecnologia.”
- Origem do nome: o `while` da programação representa um processo que continua enquanto uma condição permanece verdadeira, traduzindo construção, melhoria e evolução contínua.
- Comunicação simples, profissional, direta e tecnológica, sem excesso de termos técnicos.
- Identidade oficial baseada em [`logo/logo_02.png`](./logo/logo_02.png), com símbolo em loop, azul e violeta, azul-marinho, preto suave e branco.
- A expressão visual deve ser tecnológica, minimalista, moderna, premium e confiável. Deve evitar a aparência de agência genérica, excesso de neon, robôs, cérebros de IA e interfaces dominadas por código.

## Evidence on Hand

- [`PRD.md`](./PRD.md): conteúdo, escopo, requisitos e critérios de sucesso da landing page.
- [`WhileDreams.md`](./WhileDreams.md): história e significado da marca.
- [`while-dreams-stack-v1.md`](./while-dreams-stack-v1.md): stack e arquitetura definidas para a V1.
- [`logo/logo_02.png`](./logo/logo_02.png): referência aprovada da identidade visual.
- Não há cases comerciais, depoimentos, métricas de clientes ou provas quantitativas disponíveis nesta etapa.

## Product Principles

1. Explicar a proposta com clareza antes de apresentar detalhes técnicos.
2. Relacionar cada serviço a problemas reais de negócio.
3. Facilitar o contato em todos os momentos de maior intenção.
4. Apresentar exemplos e capacidades com honestidade, sem fabricar prova social.
5. Adicionar complexidade técnica somente quando ela resolver uma necessidade real.

## Accessibility & Inclusion

A página deve usar HTML semântico, navegação por teclado, foco visível, contraste suficiente, rótulos claros e respeito às preferências de redução de movimento. O conteúdo deve permanecer compreensível sem depender apenas de cor, animação ou elementos decorativos.
