"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Resend } from "resend";

export default function Page() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div>
      <section id="home" className="mt-4">
        <h1 className="text-xl">Olá, meu nome é Fernando</h1>
        <h2 className="text-7xl font-black">
          Desenvolvedor Fullstack com ênfase na plataforma{" "}
          <span className="text-red-500">.NET</span>
        </h2>
        <div className="flex gap-2 mt-5">
          <Button variant={"outline"} size={"icon-lg"}>
            <Link href={"https://www.github.com/semog-dev"} target="_blank">
              <LuGithub />
            </Link>
          </Button>

          <Button variant={"outline"} size={"icon-lg"}>
            <Link
              href={"https://www.linkedin.com/in/fernando-pereira-7172a6151/"}
              target="_blank"
            >
              <LuLinkedin />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="mt-4">
        <h1 className="text-xl">Sobre mim</h1>
        <div className="flex gap-4">
          <h2 className="text-7xl font-black">
            Minha Jornada como{" "}
            <span className="text-red-500">Desenvolvedor</span>
          </h2>
          <div className="flex flex-col justify-between">
            <p className="text-xl">
              Eu sou Fernando Gomes, um Desenvolvedor Fullstack na cidade de São
              Paulo, dedicado a criar experiências digitais que não apenas são
              amigáveis ao usuário, mas também altamente eficientes.
            </p>
            <Button variant={"outline"}>
              <Link href={"#contact"}>Entre em contato comigo</Link>
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Image
            src={"/images/foto.jpg"}
            alt="Foto de perfil"
            width={400}
            height={400}
            className="rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <p className="text-xl">
              Desde criança me interesso por computadores, quando terminei o
              ensino médio cursei técnico em informática com ênfase em
              programação na ETEC Albert Einstein, porém por motivos pessoais
              não concluí. Passaram-se alguns anos voltei para a ETEC para
              cursar Técnico em Eletrônica, consegui alguns trabalhos nessa área
              mas ainda minha paixão era a programação então cursei Análise e
              desenvolvimento de sistemas na Faculdade Impacta onde consegui
              minha primeira oportunidade em uma pequena empresa chamada
              Softclever, trabalhei 6 meses como estagiário e 1 ano e meio como
              programador junior, atuei na criação e manutenção de um ERP
              utilizando Delphi e Firebird, logo em seguida comecei a trabalhar
              na Integraltrust, onde estou atualmente.
            </p>
            <Button variant={"outline"}>
              <a
                href="/docs/curriculo.pdf"
                target="_blank"
                rel="noopener"
                download
                className="flex items-center gap-2"
              >
                Baixar CV <DownloadIcon />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="experience" className="mt-4">
        <h1 className="text-xl">Experiência</h1>
        <div className="flex gap-4 mt-2">
          <Card>
            <CardHeader>
              <CardTitle>Soft Clever</CardTitle>
              <CardDescription>06/2021 - 12/2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Atuei como Desenvolvedor Delphi, criando soluções inteligentes
                para empresas (ERP).
              </p>
              <p>Tecnologias utilizadas: Delphi, Firebird, Datasnap, Asp.NET</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integral Trust</CardTitle>
              <CardDescription>12/2022 - atualmente</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Atuo como Desenvolvedor Fullstack, criando soluções inteligentes
                para o FIDC (Fundo de investimento de direitos creditórios)
              </p>
              <p>
                Tecnologias utilizadas: .NET Core, Asp.NET, Entity Framework,
                Angular, SQL Server
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="mt-4">
        <h1 className="text-xl">Competências</h1>
        <div className="mt-2">
          <ul className="flex gap-4">
            <li>.NET</li>
            <li>C#</li>
            <li>Entity Framework</li>
            <li>Git</li>
            <li>Angular</li>
            <li>NextJS</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="mt-4">
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
            <Link href="mailto:semogdev.pereira@hotmail.com" target="_blank">
              <Button variant="outline" size="icon">
                <LuMail />
              </Button>
            </Link>
            <Link href="https://github.com/semog-dev" target="_blank">
              <Button variant="outline" size="icon">
                <LuGithub />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fernando-pereira-7172a6151/"
              target="_blank"
            >
              <Button variant="outline" size="icon">
                <LuLinkedin />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
