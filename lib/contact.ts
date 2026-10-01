import { z } from "zod";

export const contactEmail = "contato@whiledreams.com.br";
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "557183144623").replace(/\D/g, "");
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Gostaria de conversar sobre um projeto com a While Dreams.",
)}`;

export const projectTypes = [
  "Site / Landing Page",
  "Sistema personalizado",
  "Automação",
  "Inteligência Artificial",
  "Integração",
  "Marketing",
  "Ainda não sei",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120),
  company: z.string().trim().min(2, "Informe sua empresa.").max(120),
  email: z.email("Informe um e-mail válido.").max(254),
  whatsapp: z.string().trim().regex(/^\+?[\d\s()+-]{10,22}$/, "Informe um WhatsApp válido."),
  projectType: z.enum(projectTypes, "Selecione o tipo de projeto."),
  message: z.string().trim().min(10, "Conte um pouco mais sobre seu projeto.").max(3000),
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
