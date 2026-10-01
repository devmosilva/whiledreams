import { ArrowRight } from "lucide-react";

const differentiators = [
  {
    title: "Tecnologia sob medida",
    description:
      "Não adaptamos o problema a uma ferramenta genérica. A solução acompanha a necessidade real.",
  },
  {
    title: "Visão de produto",
    description:
      "Antes de desenvolver, investigamos se a proposta resolve o problema e cria valor para quem usa.",
  },
  {
    title: "Tecnologia e marketing conectados",
    description:
      "Quando necessário, a solução digital pode caminhar junto à presença e à comunicação do negócio.",
  },
  {
    title: "Evolução contínua",
    description:
      "Publicar não encerra o trabalho. Produtos digitais melhoram com aprendizado, uso e novas oportunidades.",
  },
  {
    title: "Tecnologia moderna",
    description:
      "Escolhemos ferramentas atuais para construir experiências rápidas, seguras e preparadas para crescer.",
  },
];

export function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="narrative-section why-section">
        <div className="why-heading">
          <h2>Mais do que desenvolvimento.</h2>
          <p>
            A tecnologia é uma parte da resposta. Entendimento, escolhas de produto e
            continuidade transformam código em uma solução útil para o negócio.
          </p>
        </div>

        <div className="differentiator-list">
          {differentiators.map(({ title, description }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="brand-story">
        <div className="brand-story-token" aria-hidden="true">
          <span>while</span>
          <i />
        </div>
        <div className="brand-story-copy">
          <h2>Por que While Dreams?</h2>
          <p>
            O nome nasce de um conceito da programação. Um <code>while</code> mantém um
            processo acontecendo enquanto determinada condição continua verdadeira.
          </p>
          <p>
            Para nós, isso representa continuar criando, melhorando e evoluindo.
            Enquanto houver uma ideia que possa transformar um negócio, existe algo
            para construir.
          </p>
          <strong>While Dreams. Transformamos ideias em tecnologia.</strong>
          <a className="button brand-story-cta" href="#contato" data-analytics="cta_clicked">
            Quero tirar minha ideia do papel
            <ArrowRight aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
