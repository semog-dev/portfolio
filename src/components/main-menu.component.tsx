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

const navItems = [
  { label: "Início", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Experiência", id: "experience" },
  { label: "Competências", id: "skills" },
  { label: "Contato", id: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function MainMenuComponent() {
  useEffect(() => {
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
          {navItems.map(({ label, id }) => (
            <DropdownMenuItem key={id} onSelect={() => scrollToSection(id)}>
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
