export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-lg font-semibold text-foreground lg:text-xl">
          Onde estamos
        </h2>
        <p className="text-muted-foreground">
          Endereço da loja em breve.
        </p>
        <div
          aria-hidden="true"
          className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-border bg-muted text-sm text-muted-foreground"
        >
          Mapa
        </div>
      </div>
    </section>
  );
}
