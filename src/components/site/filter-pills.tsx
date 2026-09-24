"use client";

type FilterPillsProps<T extends string> = {
  value: T;
  options: readonly { id: T; label: string }[];
  onChange: (id: T) => void;
  label: string;
};

export function FilterPills<T extends string>({
  value,
  options,
  onChange,
  label,
}: FilterPillsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            className={
              active
                ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                : "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary hover:text-product"
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
