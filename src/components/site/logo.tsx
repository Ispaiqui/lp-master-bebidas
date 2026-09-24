import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-center leading-none select-none",
        className,
      )}
      {...props}
    >
      <span className="font-logo uppercase tracking-tight text-foreground">
        Master
      </span>
      <span className="-mt-[0.42em] -rotate-6 font-script text-[0.52em] text-product dark:[text-shadow:0_0_0.1em_var(--product),0_0_0.35em_var(--primary)]">
        Bebidas
      </span>
    </span>
  );
}
