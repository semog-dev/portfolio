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

export function MainMenuComponent() {
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
          <DropdownMenuItem>Início</DropdownMenuItem>
          <DropdownMenuItem>Sobre</DropdownMenuItem>
          <DropdownMenuItem>Projetos</DropdownMenuItem>
          <DropdownMenuItem>Contato</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
