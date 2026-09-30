import { FileSearch2, Globe2, LayoutDashboard } from "lucide-react";

const projects = [
  {
    kind: "site",
    icon: Globe2,
    name: "Presença que converte",
    segment: "Site comercial",
    problem: "Uma empresa precisa apresentar seu valor e facilitar o primeiro contato.",
    solution:
      "Uma landing page rápida, responsiva e orientada a pedidos de orçamento.",
    features: ["UX responsiva", "Formulário", "WhatsApp", "Geração de leads"],
    technologies: ["Next.js", "TypeScript", "Analytics"],
  },
  {
    kind: "system",
    icon: LayoutDashboard,
    name: "Operação em um só lugar",
    segment: "Sistema personalizado",
    problem: "Informações e tarefas críticas estão distribuídas entre planilhas e mensagens.",
    solution:
      "Um ambiente central para acompanhar dados, responsáveis e etapas da operação.",
    features: ["Autenticação", "Dashboard", "Gestão de dados", "Fluxo operacional"],
    technologies: ["Aplicação web", "API", "Banco de dados"],
  },
  {
    kind: "ai",
    icon: FileSearch2,
    name: "Conhecimento consultável",
    segment: "IA aplicada a documentos",
    problem: "Encontrar uma resposta exige abrir e comparar documentos espalhados.",
    solution:
      "Uma busca assistida que recebe arquivos e ajuda a consultar o conteúdo com contexto.",
    features: ["Envio de documentos", "Busca contextual", "Respostas com fontes", "Histórico"],
    technologies: ["IA generativa", "Busca semântica", "Armazenamento seguro"],
  },
];

function ProjectPreview({ kind }: { kind: string }) {
  return (
    <div className={`project-preview project-preview-${kind}`} aria-hidden="true">
      <div className="preview-toolbar">
        <i />
        <i />
        <i />
      </div>
      {kind === "site" && (
        <div className="site-preview-body">
          <span className="preview-brand" />
          <span className="preview-nav" />
          <div className="preview-headline" />
          <div className="preview-copy" />
          <div className="preview-button" />
        </div>
      )}
      {kind === "system" && (
        <div className="system-preview-body">
          <div className="preview-sidebar"><i /><i /><i /><i /></div>
          <div className="preview-dashboard">
            <span className="preview-dashboard-title" />
            <div className="preview-dashboard-metrics"><i /><i /><i /></div>
            <div className="preview-dashboard-table"><i /><i /><i /><i /></div>
          </div>
        </div>
      )}
      {kind === "ai" && (
        <div className="ai-preview-body">
          <div className="preview-documents"><i /><i /><i /></div>
          <div className="preview-answer">
            <span />
            <p />
            <p />
            <p />
            <strong />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="narrative-section projects-section" id="projetos">
      <div className="section-intro projects-intro">
        <h2>Ideias que podem ganhar forma.</h2>
        <p>
          Três exemplos do que criamos. Cenários demonstrativos para tornar nossa
          capacidade concreta enquanto construímos os primeiros cases da While Dreams.
        </p>
      </div>

      <div className="project-showcase">
        {projects.map(({ kind, icon: Icon, name, segment, problem, solution, features, technologies }) => (
          <article className="project-row" key={name}>
            <ProjectPreview kind={kind} />
            <div className="project-content">
              <div className="project-title-line">
                <Icon aria-hidden="true" size={28} strokeWidth={1.7} />
                <div>
                  <h3>{name}</h3>
                  <p>{segment} · Exemplo demonstrativo</p>
                </div>
              </div>
              <dl className="project-definition">
                <div>
                  <dt>Problema</dt>
                  <dd>{problem}</dd>
                </div>
                <div>
                  <dt>Solução</dt>
                  <dd>{solution}</dd>
                </div>
              </dl>
              <div className="project-meta">
                <ul aria-label="Funcionalidades">
                  {features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p>{technologies.join(" · ")}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
