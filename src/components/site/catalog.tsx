"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FilterPills } from "@/components/site/filter-pills";
import {
  catalog,
  type CatalogItem,
  type CatalogOccasion,
} from "@/data/catalog";

type OccasionFilter = "todos" | CatalogOccasion;

const OCCASION_OPTIONS = [
  { id: "todos", label: "Todos" },
  { id: "churrasco", label: "Churrasco" },
  { id: "jantar", label: "Jantar" },
  { id: "presente", label: "Presente" },
] as const;

function ProductCard({ item }: { item: CatalogItem }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted transition-colors hover:border-primary">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.name}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 280px"
            quality={90}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <p className="px-4 text-center text-sm text-muted-foreground">
            Imagem do item
          </p>
        )}
      </div>
      <h3 className="text-sm font-medium text-product sm:text-base">{item.name}</h3>
    </article>
  );
}

function ProductGroup({
  title,
  items,
}: {
  title: string;
  items: CatalogItem[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-foreground lg:text-xl">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Catalog() {
  const [occasion, setOccasion] = useState<OccasionFilter>("todos");

  const visible = useMemo(() => {
    if (occasion === "todos") {
      return catalog;
    }
    return catalog.filter((item) => item.occasions.includes(occasion));
  }, [occasion]);

  const beers = visible.filter((item) => item.category === "cerveja");
  const drinks = visible.filter((item) => item.category === "bebida");

  return (
    <section id="produtos" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:py-12 lg:gap-12 lg:py-16">
        <FilterPills
          label="Ocasião"
          value={occasion}
          options={OCCASION_OPTIONS}
          onChange={setOccasion}
        />
        <ProductGroup title="Cervejas" items={beers} />
        <ProductGroup title="Bebidas" items={drinks} />
      </div>
    </section>
  );
}
