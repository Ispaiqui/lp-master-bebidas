export function PlaceholderSection({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-lg font-semibold text-foreground lg:text-xl">{title}</h2>
        <p className="text-muted-foreground">Conteúdo em breve.</p>
      </div>
    </section>
  );
}
