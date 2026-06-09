import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const phone = data.get('phone')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const phoneRow = phone ? `<tr><td style="padding:6px 0;color:#666">Telefone</td><td style="padding:6px 0;font-weight:600;color:#1a1a2e">${phone}</td></tr>` : '';

  try {
    await resend.emails.send({
      from: import.meta.env.EMAIL_FROM,
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px">
          <h2 style="color:#1a1a2e;border-bottom:2px solid #e53e3e;padding-bottom:12px;margin-top:0">
            Novo contato pelo site
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr><td style="padding:6px 0;color:#666">Nome</td><td style="padding:6px 0;font-weight:600;color:#1a1a2e">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#666">E-mail</td><td style="padding:6px 0;font-weight:600;color:#1a1a2e">${email}</td></tr>
            ${phoneRow}
          </table>
          <div style="background:#fff;border-left:4px solid #e53e3e;padding:16px;border-radius:4px">
            <p style="margin:0 0 8px;color:#666;font-size:14px">Mensagem:</p>
            <p style="margin:0;color:#1a1a2e;line-height:1.6">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#999">
            Enviado via formulário em jstransportadora.com.br
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Falha ao enviar e-mail. Tente novamente.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
