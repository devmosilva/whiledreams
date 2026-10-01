# Publicação

1. Publique a aplicação Next.js em uma plataforma compatível com rotas de servidor (a Vercel está prevista no `PRODUCT.md`). Configure `NEXT_PUBLIC_SITE_URL=https://whiledreams.com.br`. O número e a mensagem de WhatsApp podem ser substituídos por `NEXT_PUBLIC_WHATSAPP_NUMBER` e `NEXT_PUBLIC_WHATSAPP_MESSAGE`.
2. Verifique `whiledreams.com.br` no Resend, publique os registros DNS solicitados no painel da Hostinger e configure `RESEND_API_KEY` e `RESEND_FROM_EMAIL`. O remetente deve usar o domínio verificado. `CONTACT_TO_EMAIL` é opcional; o padrão é `contato@whiledreams.com.br`.
3. Opcionalmente, informe `NEXT_PUBLIC_POSTHOG_KEY`/`NEXT_PUBLIC_POSTHOG_HOST`, `NEXT_PUBLIC_GTM_ID` e `NEXT_PUBLIC_META_PIXEL_ID`. Essas integrações só iniciam após consentimento do visitante.
4. Aponte o domínio na Hostinger para o destino indicado pela plataforma de hospedagem e confirme HTTPS, envio real de formulário, recebimento de e-mail, sitemap, robots e imagem de compartilhamento na URL publicada.

Não coloque a chave do Resend em uma variável `NEXT_PUBLIC_` nem versionada no repositório. Sem as credenciais, o formulário mostra uma alternativa por WhatsApp e o restante da página continua funcionando.
