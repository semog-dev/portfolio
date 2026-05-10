import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const skillGroups = [
  {
    category: "Backend",
    skills: [".NET", "C#", "Entity Framework", "SQL Server", "RabbitMQ", "Delphi"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "Next.js", "Flutter", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Ferramentas",
    skills: ["Git", "Docker", "SQL Server Management Studio", "Visual Studio"],
  },
];

export default function Page() {
  return (
    <div>
      <section id="home" className="mt-4">
        <h1 className="text-xl">Olá, meu nome é Fernando</h1>
        <h2 className="text-3xl font-black md:text-7xl">
          Desenvolvedor Fullstack com ênfase na plataforma{" "}
          <span className="text-red-500">.NET</span>
        </h2>
        <div className="flex gap-2 mt-5">
          <Button variant="outline" size="icon-lg" asChild>
            <Link href="https://www.github.com/semog-dev" target="_blank">
              <LuGithub />
            </Link>
          </Button>
          <Button variant="outline" size="icon-lg" asChild>
            <Link
              href="https://www.linkedin.com/in/fernando-pereira-7172a6151/"
              target="_blank"
            >
              <LuLinkedin />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="mt-12">
        <h1 className="text-xl">Sobre mim</h1>
        <div className="text-3xl flex gap-4 flex-col md:flex-row">
          <h2 className="font-black md:text-7xl">
            Minha Jornada como{" "}
            <span className="text-red-500">Desenvolvedor</span>
          </h2>
          <div className="flex flex-col justify-between gap-4">
            <p className="text-xl">
              Eu sou Fernando Gomes, um Desenvolvedor Fullstack na cidade de São
              Paulo, dedicado a criar experiências digitais que não apenas são
              amigáveis ao usuário, mas também altamente eficientes.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contato">Entre em contato comigo</Link>
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4 flex-col md:flex-row">
          <Image
            src="/images/foto.jpg"
            alt="Foto de perfil"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-between gap-4">
            <p className="text-xl">
              Desde criança me interesso por computadores. Ao terminar o ensino
              médio, cursei Técnico em Informática com ênfase em programação na
              ETEC Albert Einstein, mas por motivos pessoais não concluí.
            </p>
            <p className="text-xl">
              Alguns anos depois, retornei à ETEC para cursar Técnico em
              Eletrônica e consegui alguns trabalhos nessa área. Ainda assim,
              minha paixão pela programação falou mais alto e cursei Análise e
              Desenvolvimento de Sistemas na Faculdade Impacta.
            </p>
            <p className="text-xl">
              Foi lá que conquistei minha primeira oportunidade, na Softclever,
              onde atuei por 6 meses como estagiário e 1 ano e meio como
              programador júnior, desenvolvendo e mantendo um ERP com Delphi e
              Firebird. Em seguida, ingressei na Integraltrust, onde atuo
              atualmente.
            </p>
            <Button variant="outline" asChild>
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

      <section id="experience" className="mt-12">
        <h1 className="text-xl">Experiência</h1>
        <div className="flex gap-4 mt-2 flex-col md:flex-row">
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

      <section id="skills" className="mt-12">
        <h1 className="text-xl">Competências</h1>
        <div className="flex flex-col gap-4 mt-2">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">{category}</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
