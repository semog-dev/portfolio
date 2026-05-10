"use client";

import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Início", href: "/", section: true },
  { label: "Projetos", href: "/projetos", section: false },
  { label: "Contato", href: "/contato", section: false },
];

export function MainMenuComponent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string, section: boolean) {
    if (section) return pathname === "/";
    return pathname === href;
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <nav className="flex h-14 items-center justify-between">
          <Link href="/" className="font-extrabold text-2xl">
            SEMOG<span className="text-red-500">DEV</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href, section }) => (
              <Button
                key={href}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  isActive(href, section) && "bg-accent text-accent-foreground"
                )}
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-input bg-background p-2 hover:bg-accent"
          >
            <MenuIcon className="size-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col border-l bg-background p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-md p-1 hover:bg-accent"
            >
              <XIcon className="size-4" />
            </button>

            <nav className="mt-10 flex flex-col gap-1">
              {navItems.map(({ label, href, section }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive(href, section) && "bg-accent text-accent-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
