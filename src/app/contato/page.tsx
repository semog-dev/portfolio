"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    setStatus("Enviando...");

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setForm({ nome: "", email: "", mensagem: "" });
    } else {
      setStatus("Erro ao enviar. Tente novamente.");
    }
    setEnviando(false);
  };

  return (
    <section className="mt-4">
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Entre em Contato</h1>
          <p className="text-muted-foreground">
            Fale comigo para oportunidades, colaborações ou apenas para dizer
            olá 👋
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nome</label>
            <Input
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">E-mail</label>
            <Input
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mensagem</label>
            <Textarea
              name="mensagem"
              placeholder="Escreva sua mensagem..."
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar mensagem"}
          </Button>

          {status && <p className="text-center text-green-500">{status}</p>}
        </form>

        <div className="flex justify-center gap-4 pt-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:semogdev.pereira@hotmail.com" target="_blank">
              <LuMail />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/semog-dev" target="_blank">
              <LuGithub />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/fernando-pereira-7172a6151/"
              target="_blank"
            >
              <LuLinkedin />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
