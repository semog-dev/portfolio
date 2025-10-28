"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useEffect } from "react";

export function MainMenuComponent() {
  useEffect(() => {
    // habilita scroll suave globalmente (opcional)
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <nav className="flex justify-between my-2">
      <Link href="/" className="font-extrabold text-3xl">
        <strong>
          SEMOG
          <span className="text-red-500">DEV</span>
        </strong>
      </Link>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Button variant={"outline"} size={"icon-lg"}>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a
              href={"#home"}
              onClick={(e) => {
                e.preventDefault(); // previne o comportamento padrão
                const el = document.getElementById("home");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Início
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href={"#about"}
              onClick={(e) => {
                e.preventDefault(); // previne o comportamento padrão
                const el = document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Sobre
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href={"#experience"}
              onClick={(e) => {
                e.preventDefault(); // previne o comportamento padrão
                const el = document.getElementById("experience");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experiência
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href={"#skills"}
              onClick={(e) => {
                e.preventDefault(); // previne o comportamento padrão
                const el = document.getElementById("skills");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Competências
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href={"#contact"}
              onClick={(e) => {
                e.preventDefault(); // previne o comportamento padrão
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contato
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
