import { ArrowRight, Database, PanelsTopLeft, Settings, Sparkles } from "lucide-react";
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
    className: "solution-sites",
    icon: PanelsTopLeft,
    title: "Sites",
    description: "Presença que gera resultados",
  },
  {
    className: "solution-systems",
    icon: Database,
    title: "Sistemas",
    description: "Soluções feitas para o seu negócio",
  },
  {
    className: "solution-automation",
    icon: Settings,
    title: "Automação",
    description: "Processos que trabalham por você",
  },
  {
    className: "solution-ai",
    icon: Sparkles,
    title: "IA aplicada",
    description: "Inteligência para decisões reais",
  },
];

function HeroNetwork() {
  return (
    <div className="hero-network" aria-label="Soluções conectadas da While Dreams">
      <div className="hero-symbol-frame" aria-hidden="true">
        <Image
          className="hero-symbol"
          src={brandSymbol}
          alt=""
          priority
          sizes="(max-width: 760px) 88vw, 42vw"
        />
      </div>
      <svg
        className="hero-network-lines"
        viewBox="0 0 1000 720"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ribbon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8175ff" />
            <stop offset="0.47" stopColor="#6554ee" />
            <stop offset="1" stopColor="#3428bd" />
          </linearGradient>
        </defs>
        <g className="network-desktop">
          <path className="ribbon-branch" d="M500 294 C610 294 545 85 640 85" />
          <path className="ribbon-branch" d="M520 344 C610 344 590 272 660 272" />
          <path className="ribbon-branch" d="M515 397 C610 397 610 460 670 460" />
          <path className="ribbon-branch" d="M490 446 C600 470 550 657 640 657" />
          <circle className="network-node" cx="640" cy="85" r="13" />
          <circle className="network-node" cx="660" cy="272" r="13" />
          <circle className="network-node" cx="670" cy="460" r="13" />
          <circle className="network-node" cx="640" cy="657" r="13" />
        </g>
        <g className="network-mobile">
          <path className="ribbon-branch" d="M450 250 C535 250 490 95 550 95" />
          <path className="ribbon-branch" d="M480 325 C530 325 520 270 570 270" />
          <path className="ribbon-branch" d="M470 330 C550 330 510 458 580 458" />
          <path className="ribbon-branch" d="M440 340 C555 390 485 655 550 655" />
          <circle className="network-node" cx="550" cy="95" r="13" />
          <circle className="network-node" cx="570" cy="270" r="13" />
          <circle className="network-node" cx="580" cy="458" r="13" />
          <circle className="network-node" cx="550" cy="655" r="13" />
        </g>
      </svg>

      {solutions.map(({ className, icon: Icon, title, description }) => (
        <div className={`solution-label ${className}`} key={title}>
          <Icon aria-hidden="true" size={34} strokeWidth={1.8} />
          <span>
            <strong>{title}</strong>
            <small>{description}</small>
          </span>
        </div>
      ))}
    </div>
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
          <p className="hero-proof" aria-label="Estratégia, produto e tecnologia">
            <span>Estratégia</span><i /> <span>Produto</span><i /> <span>Tecnologia</span>
          </p>
        </div>

        <HeroNetwork />
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
