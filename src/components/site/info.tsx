import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function Info() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:py-16">
        <p className="max-w-2xl text-lg leading-relaxed text-foreground">
          Na Master Bebidas você encontra qualidade, variedade e aquele preço
          que cabe no bolso.
        </p>
        <p id="horario" className="scroll-mt-20 text-sm text-muted-foreground">
          Aberto das 10h às 22h
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#produtos"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Pedir agora
          </a>
          <a
            href="#horario"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Retirar na loja
          </a>
        </div>
      </div>
    </section>
  );
}
