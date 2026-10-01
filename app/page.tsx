import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { SolutionsSection } from "@/components/solutions-section";
import { ContactSection } from "@/components/contact-section";
import { PrivacySettingsButton } from "@/components/privacy-settings-button";
import brandSymbol from "@/logo/while-dreams-simbolo-transparente.png";

const solutions = [
  {
    number: "01",
    title: "Sites",
    description: "Presença que gera oportunidades",
  },
  {
    number: "02",
    title: "Sistemas",
    description: "Soluções sob medida",
  },
  {
    number: "03",
    title: "Automação",
    description: "Processos que trabalham por você",
  },
  {
    number: "04",
    title: "IA aplicada",
    description: "Inteligência para decisões reais",
  },
];

function HeroTimeline() {
  return (
    <div className="hero-timeline">
      <svg
        className="hero-timeline-line"
        viewBox="0 0 1672 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7466fa" />
            <stop offset="0.5" stopColor="#5547e4" />
            <stop offset="1" stopColor="#7466fa" />
          </linearGradient>
        </defs>
        <path d="M0 84 H162 C218 84 231 48 289 48 H416 C474 48 484 84 548 84 H1112 C1174 84 1190 48 1245 48 H1340 C1399 48 1411 84 1478 84 H1672" />
      </svg>
      <div className="hero-timeline-symbol" aria-hidden="true">
        <Image src={brandSymbol} alt="" priority sizes="(max-width: 1100px) 30vw, 25vw" />
      </div>
      <ol className="hero-timeline-stations" aria-label="Soluções conectadas da While Dreams">
        {solutions.map(({ number, title, description }) => (
          <li key={title}>
            <span className="hero-timeline-node" aria-hidden="true" />
            <span className="hero-timeline-number">{number}</span>
            <strong>{title}</strong>
            <span className="hero-timeline-description">{description}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function MobileHeroSolutions() {
  return (
    <ul className="hero-mobile-solutions" aria-label="Soluções da While Dreams">
      {solutions.map(({ title }) => <li key={title}>{title}</li>)}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <header className="site-header">
          <a href="#inicio" className="brand-link" aria-label="While Dreams — início">
            <BrandLogo />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="button button-primary header-cta" href="#contato" data-analytics="cta_clicked">
            Conte sua ideia <ArrowRight aria-hidden="true" size={20} />
          </a>
        </header>

        <div className="hero-copy">
          <h1>
            <span>Transformamos</span>
            <span>ideias em</span>
            <span className="accent-word">tecnologia.</span>
          </h1>
          <p>
            Sites, sistemas personalizados, automações e soluções com IA para resolver
            problemas reais do seu negócio.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato" data-analytics="cta_clicked">
              Conte sua ideia <ArrowRight aria-hidden="true" size={20} />
            </a>
            <a className="button button-secondary" href="#solucoes">
              Conheça nossas soluções <ArrowRight aria-hidden="true" size={20} />
            </a>
          </div>
        </div>

        <HeroTimeline />
        <MobileHeroSolutions />
      </section>
      <SolutionsSection />
      <ProcessSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} While Dreams</span>
        <div><a href="/privacidade">Privacidade</a><PrivacySettingsButton /></div>
      </footer>
    </main>
  );
}
