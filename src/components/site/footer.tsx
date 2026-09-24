import { Logo } from "@/components/site/logo";

const INSTAGRAM_URL =
  "https://www.instagram.com/masterbebidassocorro?stkn=MXY4ZzVudHNvbWUxMA==";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8">
        <Logo aria-hidden className="text-2xl lg:text-3xl" />
        <p className="text-sm text-foreground">
          Master Bebidas — sempre com você
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-product"
        >
          <InstagramIcon className="size-5 shrink-0" />
          @masterbebidassocorro
        </a>
        <p className="text-xs text-muted-foreground">
          Venda e consumo proibidos para menores de 18 anos.
        </p>
      </div>
    </footer>
  );
}
