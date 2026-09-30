# While Dreams — Stack Técnica da Landing Page

## Objetivo

Construir a landing page da **While Dreams** com uma stack moderna, profissional, simples de manter e com **custo inicial praticamente zero**, mantendo espaço para evolução futura.

> **WHILE DREAMS**  
> **Transformamos ideias em tecnologia.**

A prioridade da V1 é:

- publicar rápido;
- ter excelente performance;
- captar leads;
- medir conversões;
- manter deploy simples;
- evitar custos e complexidade antes de existir demanda real.

---

# 1. Stack principal

## Front-end

### Next.js + TypeScript

Responsável pela aplicação principal.

**Por que usar:**

- ótima base para SEO;
- suporta páginas estáticas e dinâmicas;
- permite evoluir a landing page para blog, portfólio, ferramentas e aplicações;
- boa integração com Vercel;
- TypeScript melhora manutenção e segurança do código.

**Uso inicial:**

- Landing page;
- páginas institucionais;
- portfólio/cases;
- formulário de contato;
- páginas legais.

---

## Estilização

### Tailwind CSS

Responsável pela construção visual e responsividade.

**Por que usar:**

- desenvolvimento rápido;
- excelente para design systems;
- fácil manutenção;
- ótimo suporte a responsividade;
- reduz necessidade de CSS espalhado pelo projeto.

### Componentes

Preferência inicial:

- componentes próprios;
- shadcn/ui apenas quando realmente ajudar.

Evitar adicionar bibliotecas de UI grandes sem necessidade.

---

# 2. Repositório e versionamento

## GitHub

Será o repositório oficial da While Dreams.

Estrutura sugerida:

```text
while-dreams/
├── app/
├── components/
├── public/
├── lib/
├── styles/
├── docs/
├── .env.example
├── README.md
└── package.json
```

### Branches

Para a V1:

```text
main
└── feature/*
```

Não é necessário criar um fluxo complexo de branches neste momento.

---

# 3. Deploy

## Vercel — Free

A Vercel será responsável pelo deploy da aplicação Next.js.

Fluxo:

```text
Código
  ↓
GitHub
  ↓
Vercel
  ↓
Produção
```

### Benefícios

- deploy automático;
- previews por Pull Request;
- HTTPS;
- integração nativa com Next.js;
- rollback simples;
- configuração de variáveis de ambiente.

### Regra inicial

Usar o plano gratuito enquanto os limites atenderem ao projeto.

Migrar para plano pago somente quando existir necessidade comercial ou técnica real.

---

# 4. Domínio

## Hostinger

O domínio principal `whiledreams.com.br` já está registrado na **Hostinger**.

### Estrutura prevista

```text
Hostinger (registro e renovação)
    ↓
Cloudflare DNS (se configurado)
    ↓
Vercel
```

Cloudflare permanece como opção planejada para DNS e segurança; confirmar sua configuração antes de alterar nameservers.

---

# 5. DNS e segurança

## Cloudflare — Free

A Cloudflare será utilizada principalmente para:

- gerenciamento de DNS;
- DNSSEC;
- regras básicas de segurança;
- proteção contra tráfego malicioso;
- redirects, quando necessário.

### Observação importante

Como a aplicação será hospedada na Vercel, evitar criar camadas de cache desnecessárias entre Cloudflare e Vercel na V1.

Começar usando o Cloudflare principalmente como **DNS e camada de segurança**.

Só ativar regras adicionais de proxy/cache quando existir um motivo técnico claro.

---

# 6. Analytics

## PostHog — recomendação principal

Para a While Dreams, a preferência inicial é utilizar **PostHog**.

### Medir

- visualizações;
- sessões;
- clique em CTA;
- clique no WhatsApp;
- envio de formulário;
- navegação entre seções;
- funil de conversão.

Eventos sugeridos:

```text
page_view
cta_clicked
whatsapp_clicked
contact_form_started
contact_form_submitted
portfolio_viewed
service_clicked
```

### Google Analytics 4

Pode ser adicionado posteriormente ou em paralelo caso exista necessidade de:

- Google Ads;
- relatórios tradicionais de marketing;
- integração com ecossistema Google.

### V1

Começar apenas com PostHog já é suficiente.

---

# 7. Formulário de contato

## React Hook Form + Zod

### React Hook Form

Gerenciamento do formulário.

### Zod

Validação dos dados.

Campos iniciais:

- Nome
- Empresa
- E-mail
- WhatsApp
- Tipo de projeto
- Mensagem

Tipos de projeto:

- Site / Landing Page
- Sistema personalizado
- Automação
- Inteligência Artificial
- Integração
- Ainda não sei

---

# 8. Envio de e-mail

## Resend — Free

Utilizar o Resend para receber os contatos enviados pela landing page.

Fluxo:

```text
Usuário
  ↓
Formulário
  ↓
Next.js
  ↓
Resend
  ↓
E-mail While Dreams
```

O formulário deverá utilizar uma rota segura no servidor.

Nunca expor credenciais do Resend no navegador.

---

# 9. WhatsApp

Adicionar CTA direto para WhatsApp.

Exemplo de fluxo:

```text
Quero falar sobre meu projeto
            ↓
         WhatsApp
```

A mensagem pode ser preenchida automaticamente:

> Olá! Conheci a While Dreams pelo site e gostaria de conversar sobre um projeto.

Registrar o clique como evento no PostHog.

---

# 10. SEO

A V1 deverá possuir:

- title;
- meta description;
- canonical;
- Open Graph;
- sitemap;
- robots.txt;
- favicon;
- metadata por página;
- headings organizados;
- HTML semântico;
- imagens otimizadas.

### Schema.org

Adicionar posteriormente quando houver conteúdo suficiente.

Possíveis tipos:

```text
Organization
ProfessionalService
WebSite
```

---

# 11. Performance

Objetivo:

Manter a página leve e rápida.

Boas práticas:

- usar `next/image`;
- otimizar fontes;
- evitar vídeos pesados no hero;
- lazy loading;
- limitar dependências JavaScript;
- utilizar componentes server-side quando fizer sentido;
- evitar animações excessivas.

A landing page deve priorizar conversão antes de efeitos visuais.

---

# 12. Qualidade de código

Adicionar desde o início:

### ESLint

Padronização e análise do código.

### Prettier

Formatação automática.

### TypeScript Strict

Preferencialmente manter configuração strict.

### Variáveis de ambiente

Criar:

```text
.env.local
.env.example
```

Nunca versionar credenciais.

---

# 13. Segurança básica

V1:

- HTTPS;
- validação server-side;
- sanitização dos inputs;
- proteção contra spam;
- rate limiting do formulário, se necessário;
- variáveis de ambiente protegidas;
- nenhuma chave privada no front-end.

### Anti-spam

Começar com mecanismos simples.

Se houver abuso, adicionar posteriormente:

- Cloudflare Turnstile.

Não adicionar CAPTCHA tradicional sem necessidade.

---

# 14. Monitoramento

Inicialmente utilizar:

- logs da Vercel;
- PostHog;
- alertas básicos da própria infraestrutura.

## Sentry

Não é necessário na primeira versão.

Adicionar quando:

- a aplicação crescer;
- surgirem funcionalidades mais complexas;
- houver clientes dependendo da plataforma.

---

# 15. Banco de dados

## Não utilizar na V1

A landing page inicialmente não precisa de banco de dados.

Fluxo de lead:

```text
Formulário
   ↓
Resend
   ↓
E-mail
```

Se futuramente for necessário armazenar leads, usuários ou dados:

### Sugestão

```text
Supabase + PostgreSQL
```

Mas apenas quando existir necessidade real.

---

# 16. CMS

## Não utilizar na V1

Os conteúdos iniciais podem ficar diretamente no código.

Adicionar CMS apenas quando houver:

- muitos cases;
- blog;
- atualizações frequentes feitas por pessoas não técnicas;
- equipe de marketing publicando conteúdo.

Possíveis opções futuras:

- Sanity;
- Payload;
- Contentful.

---

# 17. Arquitetura inicial

```text
                         Hostinger
                              │
                              ▼
                         Cloudflare
                     DNS / Segurança
                              │
                              ▼
                           Vercel
                              │
                              ▼
                 Next.js + TypeScript
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
          PostHog           Resend          WhatsApp
         Analytics          Leads            CTA
```

---

# 18. Stack final — V1

| Área | Tecnologia |
|---|---|
| Framework | Next.js |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Componentes | Próprios + shadcn/ui quando necessário |
| Formulários | React Hook Form |
| Validação | Zod |
| Hospedagem | Vercel Free |
| Domínio | Hostinger (`whiledreams.com.br`) |
| DNS | Cloudflare Free |
| Analytics | PostHog Free |
| E-mail | Resend Free |
| Repositório | GitHub |
| CI/CD | GitHub + Vercel |
| SEO | Next.js Metadata |
| Anti-spam | Cloudflare Turnstile, se necessário |

---

# 19. Custos iniciais

## Obrigatório

- Registro do domínio `.com.br`.

## Custo zero inicialmente

- GitHub;
- Vercel;
- Cloudflare;
- PostHog;
- Resend;
- Next.js;
- Tailwind;
- React Hook Form;
- Zod.

Os serviços gratuitos possuem limites próprios e devem ser reavaliados conforme o crescimento do projeto.

---

# 20. O que NÃO adicionar agora

Evitar na primeira versão:

- VPS;
- Docker em produção;
- Kubernetes;
- Redis;
- filas;
- backend separado;
- microserviços;
- banco de dados sem necessidade;
- CMS;
- autenticação;
- painel administrativo;
- observabilidade complexa;
- arquitetura multi-cloud.

A regra da While Dreams será:

> **Só adicionamos complexidade quando ela resolve um problema real.**

---

# 21. Próximos passos

1. Criar repositório no GitHub.
2. Inicializar projeto Next.js + TypeScript.
3. Configurar Tailwind.
4. Criar estrutura visual da landing page.
5. Criar formulário com React Hook Form + Zod.
6. Integrar Resend.
7. Adicionar CTA do WhatsApp.
8. Configurar PostHog.
9. Publicar na Vercel.
10. Apontar o domínio existente para a Vercel e configurar DNS conforme a topologia escolhida.
11. Validar SEO, responsividade e performance.
12. Iniciar prospecção.

---

## Princípio técnico

A infraestrutura inicial da While Dreams deve ser suficientemente profissional para representar a empresa, mas simples o bastante para não gerar custos ou manutenção antes de existir demanda.

**Primeiro validar. Depois escalar.**
