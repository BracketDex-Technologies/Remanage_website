import { cn } from "@/lib/utils";

type GridPatternProps = {
  className?: string;
  id?: string;
};

export function GridPattern({ className, id = "sc-grid" }: GridPatternProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-slate-300/50", className)}
      aria-hidden
    >
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
