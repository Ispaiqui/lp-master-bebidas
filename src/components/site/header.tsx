"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#localizacao", label: "Localização" },
];

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setOpen(false);
    menuRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-2">
        <a
          href="#inicio"
          aria-label="Master Bebidas"
          className="inline-flex justify-self-start py-1"
        >
          <Logo className="text-3xl md:text-4xl" />
        </a>
        <nav
          aria-label="Seções da página"
          className="hidden items-center gap-6 text-sm xl:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-product"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="col-start-3 flex items-center justify-self-end gap-1">
          <button
            type="button"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            aria-label="Alternar tema claro e escuro"
            onClick={toggleTheme}
          >
            <Sun className="hidden dark:block" />
            <Moon className="block dark:hidden" />
          </button>
          <button
            ref={menuRef}
            type="button"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "xl:hidden",
            })}
            aria-expanded={open}
            aria-controls="menu-lateral"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
          <aside
            id="menu-lateral"
            role="dialog"
            aria-modal="true"
            aria-label="Seções da página"
            className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground"
          >
            <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
              <Logo className="text-2xl" />
              <button
                ref={closeRef}
                type="button"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                aria-label="Fechar menu"
                onClick={closeMenu}
              >
                <X />
              </button>
            </div>
            <nav aria-label="Seções da página" className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-base text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-product"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
