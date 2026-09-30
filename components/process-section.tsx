const processSteps = [
  {
    title: "Entendemos",
    description: "Conhecemos seu negócio, o problema e o resultado que precisa mudar.",
  },
  {
    title: "Planejamos",
    description: "Definimos a solução, o escopo e a tecnologia que fazem sentido.",
  },
  {
    title: "Construímos",
    description: "Transformamos decisões em um produto digital claro e funcional.",
  },
  {
    title: "Publicamos",
    description: "Colocamos a solução em funcionamento com uma entrega responsável.",
  },
  {
    title: "Evoluímos",
    description: "Acompanhamos o uso e identificamos os próximos ciclos de melhoria.",
  },
];

export function ProcessSection() {
  return (
    <section className="narrative-section process-section" id="processo">
      <div className="section-intro process-intro">
        <h2>Da ideia à solução.</h2>
        <p>
          Um processo direto para reduzir incerteza, tomar boas decisões e construir
          no ritmo certo — com espaço para aprender e evoluir.
        </p>
      </div>

      <ol className="process-route">
        {processSteps.map((step, index) => (
          <li key={step.title}>
            <span className="process-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="process-node" aria-hidden="true" />
            <div className="process-copy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
