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
          <DropdownMenuItem asChild>
            <Link href={"#home"}>Início</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"#about"}>Sobre</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"#experience"}>Experiência</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"#skills"}>Competências</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"#contact"}>Contato</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
