import { Logo } from "@/components/site/logo";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:py-12 lg:gap-8 lg:py-16">
        <Logo aria-hidden className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl" />
        <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Aqui tem: qualidade, variedade e o melhor preço!
        </h1>
      </div>
    </section>
  );
}
