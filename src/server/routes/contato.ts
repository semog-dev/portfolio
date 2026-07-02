import { type Request, type Response, Router } from 'express';
import { Resend } from 'resend';

export const contatoRouter = Router();

contatoRouter.post('/', async (req: Request, res: Response) => {
  const { nome, email, mensagem } = req.body ?? {};

  if (!nome || !email || !mensagem) {
    res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    return;
  }

  try {
    const resend = new Resend(process.env['RESEND_API_KEY']);
    await resend.emails.send({
      from: process.env['RESEND_FROM'] as string,
      to: process.env['RESEND_TO'] as string,
      subject: `Novo contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
});
