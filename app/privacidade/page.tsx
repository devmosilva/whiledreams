import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "@/lib/contact";
import { PrivacySettingsButton } from "@/components/privacy-settings-button";

export const metadata: Metadata = {
  title: "Privacidade | While Dreams",
  description: "Como a While Dreams trata os dados enviados pelo formulário e as preferências de métricas.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return <main className="simple-page privacy-page">
    <Link href="/" className="back-link">← Voltar ao início</Link>
    <span className="eyebrow">Privacidade</span>
    <h1>Seus dados merecem clareza.</h1>
    <p>Esta página explica como usamos as informações fornecidas neste site. Última atualização: 30 de setembro de 2026.</p>
    <h2>Contato pelo formulário</h2>
    <p>Ao enviar uma mensagem, recebemos seu nome, empresa, e-mail, WhatsApp, tipo de projeto e descrição da ideia. Usamos esses dados para responder e conversar sobre sua solicitação. O envio é processado pelo Resend; não vendemos essas informações.</p>
    <h2>Métricas opcionais</h2>
    <p>Com sua autorização, podemos carregar PostHog, Google Tag Manager e Meta Pixel para medir visitas e ações no site. Sem aceite, essas integrações não são iniciadas. Os eventos de conversão não incluem o texto nem os dados pessoais do formulário.</p>
    <PrivacySettingsButton />
    <h2>Seus direitos e contato</h2>
    <p>Para pedir acesso, correção ou exclusão dos dados enviados, escreva para <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Também pode solicitar informações sobre o tratamento por esse canal. Responderemos conforme a legislação aplicável.</p>
    <h2>Links externos</h2>
    <p>O botão de WhatsApp abre um serviço externo, sujeito às práticas de privacidade dele.</p>
  </main>;
}
