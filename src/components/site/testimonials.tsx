import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "size-5 fill-product text-product"
              : "size-5 fill-none text-muted-foreground"
          }
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-lg font-semibold text-foreground lg:text-xl">
          Avaliações
        </h2>
        <div className="px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            aria-label="Avaliações de clientes"
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <article className="flex h-full flex-col gap-4 rounded-xl border border-border p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="sr-only">{item.rating} de 5</p>
                      <Stars rating={item.rating} />
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious size="icon" />
            <CarouselNext size="icon" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
