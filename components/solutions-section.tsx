import {
  ArrowRight,
  Database,
  PanelsTopLeft,
  Settings,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: PanelsTopLeft,
    title: "Sites e landing pages",
    description:
      "Experiências digitais modernas, rápidas e pensadas para transformar atenção em oportunidades.",
    outcome: "Presença, clareza e geração de leads",
  },
  {
    icon: Database,
    title: "Sistemas personalizados",
    description:
      "Plataformas, painéis e portais desenhados em torno da operação real da sua empresa.",
    outcome: "Informação organizada e processos sob controle",
  },
  {
    icon: Settings,
    title: "Automação e integrações",
    description:
      "Ferramentas conectadas e tarefas repetitivas automatizadas para reduzir o trabalho manual.",
    outcome: "Mais ritmo, menos retrabalho",
  },
  {
    icon: Sparkles,
    title: "Inteligência Artificial",
    description:
      "IA aplicada a atendimento, documentos, busca de informações e processos internos — quando ela realmente faz sentido.",
    outcome: "Decisões mais rápidas e conhecimento acessível",
  },
];

const businessProblems = [
  "Processos importantes ainda dependem de planilhas",
  "Pedir um orçamento é difícil para o seu cliente",
  "A equipe perde tempo com tarefas repetitivas",
  "Sistemas e ferramentas não conversam entre si",
  "Informações ficam espalhadas e difíceis de encontrar",
  "Existe uma ideia de produto, mas o caminho não está claro",
  "A empresa quer usar IA sem criar tecnologia sem propósito",
];

export function SolutionsSection() {
  return (
    <section className="narrative-section solutions-section" id="solucoes">
      <div className="section-intro">
        <h2>Tecnologia construída para o seu negócio.</h2>
        <p>
          Partimos do problema, não da ferramenta. Cada solução combina produto,
          tecnologia e contexto para mover uma parte real da sua operação.
        </p>
      </div>

      <div className="capability-ledger">
        {capabilities.map(({ icon: Icon, title, description, outcome }) => (
          <article className="capability-row" key={title}>
            <div className="capability-title">
              <Icon aria-hidden="true" size={30} strokeWidth={1.7} />
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <strong>{outcome}</strong>
          </article>
        ))}
      </div>

      <div className="problem-field">
        <div className="problem-copy">
          <h2>Quando a tecnologia certa ainda não existe, nós construímos.</h2>
          <p>
            O ponto de partida pode ser um gargalo claro ou apenas a sensação de que
            o processo atual já não acompanha o negócio.
          </p>
          <a className="button problem-cta" href="#contato">
            Tenho um problema para resolver
            <ArrowRight aria-hidden="true" size={20} />
          </a>
        </div>

        <ul className="problem-list">
          {businessProblems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </div>

      <aside className="marketing-note">
        <strong>Apoio em marketing, quando o projeto pedir.</strong>
        <p>
          Podemos conectar presença digital, comunicação e divulgação à solução
          construída — como serviço complementar, conforme a necessidade do projeto.
        </p>
      </aside>
    </section>
  );
}
