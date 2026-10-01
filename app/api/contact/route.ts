import { Resend } from "resend";
import { contactEmail, contactSchema } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 12_000) {
    return Response.json({ error: "Mensagem muito grande." }, { status: 413 });
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 12_000) {
      return Response.json({ error: "Mensagem muito grande." }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return Response.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json({ error: "Revise os campos do formulário." }, { status: 400 });
  }

  // Campo invisível para visitantes: descarta preenchimentos automatizados sem enviar e-mail.
  if (parsed.data.website) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json(
      { error: "O formulário está temporariamente indisponível. Fale conosco pelo WhatsApp." },
      { status: 503 },
    );
  }

  const { name, company, email, whatsapp, projectType, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? contactEmail;

  try {
    const result = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo projeto While Dreams — ${projectType}`,
      text: [
        `Nome: ${name}`,
        `Empresa: ${company}`,
        `E-mail: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Tipo de projeto: ${projectType}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    if (result.error) throw new Error("Resend delivery failed");
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Não conseguimos enviar agora. Tente novamente ou fale pelo WhatsApp." },
      { status: 502 },
    );
  }
}
