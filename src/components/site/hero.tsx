import { Logo } from "@/components/site/logo";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:py-16">
        <Logo aria-hidden className="text-8xl sm:text-9xl" />
        <h1 className="max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Aqui tem: qualidade, variedade e o melhor preço!
        </h1>
      </div>
    </section>
  );
}
