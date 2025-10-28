"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Page() {
  return (
    <div>
      <div className="mt-2">
        <h1 className="text-xl">Olá, meu nome é Fernando</h1>
        <h2 className="text-7xl font-black">
          Desenvolvedor Fullstack com ênfase na plataforma{" "}
          <span className="text-red-500">.NET</span>
        </h2>
        <div className="flex gap-2 mt-5">
          <Button variant={"outline"} size={"icon-lg"}>
            <Link href={"https://www.github.com/semog-dev"} target="blank">
              <LuGithub />
            </Link>
          </Button>

          <Button variant={"outline"} size={"icon-lg"}>
            <Link
              href={"https://www.linkedin.com/in/fernando-pereira-7172a6151/"}
              target="blank"
            >
              <LuLinkedin />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-2">
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
            <Button variant={"outline"}>Entre em contato comigo</Button>
          </div>
        </div>
      </div>

      <div>
        <Image src={"/images/foto.jpg"} alt="Foto de perfil" />
      </div>
    </div>
  );
}
