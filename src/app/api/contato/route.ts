import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: `Novo contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail" },
      { status: 500 }
    );
  }
}
