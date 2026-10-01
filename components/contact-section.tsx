"use client";

import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactEmail, contactSchema, projectTypes, whatsappUrl, type ContactInput } from "@/lib/contact";

type FieldName = "name" | "company" | "email" | "whatsapp" | "projectType" | "message";

export function ContactSection() {
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const [started, setStarted] = useState(false);
  const { register, handleSubmit, setError, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>();

  function track(event: string) {
    window.dispatchEvent(new CustomEvent("wd:analytics", { detail: { event } }));
  }

  async function submit(values: ContactInput) {
    setResult(null);
    const validated = contactSchema.safeParse(values);
    if (!validated.success) {
      for (const issue of validated.error.issues) {
        const field = issue.path[0] as FieldName;
        if (field) setError(field, { message: issue.message });
      }
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error);
      setResult({ ok: true, message: "Mensagem enviada. Vamos responder pelo contato informado." });
      track("contact_form_submitted");
      reset();
      setStarted(false);
    } catch (error) {
      setResult({
        ok: false,
        message: error instanceof Error ? error.message : "Não conseguimos enviar agora. Fale pelo WhatsApp.",
      });
    }
  }

  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-intro">
          <span className="eyebrow">O próximo passo</span>
          <h2 id="contact-title">Toda grande ideia começa com uma conversa.</h2>
          <p>Conte o que você imagina — mesmo que ainda esteja no começo. Vamos entender o desafio e pensar juntos no melhor caminho.</p>
          <a className="contact-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_clicked">
            Chamar no WhatsApp <ArrowUpRight aria-hidden="true" size={22} />
          </a>
          <a className="contact-email" href={`mailto:${contactEmail}`}><Mail aria-hidden="true" size={18} /> {contactEmail}</a>
        </div>

        <div className="contact-form-wrap">
          <div className="form-heading"><span>01 / CONTE SUA IDEIA</span><p>Respondemos de forma humana, sem compromisso.</p></div>
          <form onSubmit={handleSubmit(submit)} onFocusCapture={() => { if (!started) { setStarted(true); track("contact_form_started"); } }} noValidate>
            <div className="form-grid">
              <label>Seu nome <input autoComplete="name" {...register("name")} aria-invalid={!!errors.name} /><small>{errors.name?.message}</small></label>
              <label>Empresa <input autoComplete="organization" {...register("company")} aria-invalid={!!errors.company} /><small>{errors.company?.message}</small></label>
              <label>E-mail <input type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} /><small>{errors.email?.message}</small></label>
              <label>WhatsApp <input type="tel" autoComplete="tel" placeholder="(71) 99999-9999" {...register("whatsapp")} aria-invalid={!!errors.whatsapp} /><small>{errors.whatsapp?.message}</small></label>
            </div>
            <label>Tipo de projeto
              <select defaultValue="" {...register("projectType")} aria-invalid={!!errors.projectType}>
                <option value="" disabled>Selecione uma opção</option>
                {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
              <small>{errors.projectType?.message}</small>
            </label>
            <label>Conte brevemente sua ideia ou problema
              <textarea rows={5} placeholder="O que você gostaria de criar ou melhorar?" {...register("message")} aria-invalid={!!errors.message} />
              <small>{errors.message?.message}</small>
            </label>
            <div className="honeypot" aria-hidden="true"><label>Seu site <input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
            <p className="form-privacy">Usaremos seus dados apenas para responder sobre seu projeto. <Link href="/privacidade">Como tratamos seus dados</Link>.</p>
            <button className="button button-primary form-submit" type="submit" disabled={isSubmitting} data-analytics="cta_clicked"> {isSubmitting ? "Enviando..." : "Falar sobre meu projeto"} <ArrowRight aria-hidden="true" size={20} /></button>
            {result && <p className={`form-result ${result.ok ? "form-result-success" : "form-result-error"}`} role={result.ok ? "status" : "alert"}>{result.message}{!result.ok && <> <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_clicked">Abrir WhatsApp</a>.</>}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
