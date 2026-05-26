import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/sections/GridPattern";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  variant?: "white" | "muted" | "dark" | "gradient";
  grid?: boolean;
};

const variants = {
  white: "bg-white text-slate-900",
  muted: "bg-slate-50 text-slate-900",
  dark: "bg-slate-950 text-white",
  gradient:
    "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white",
};

export function SectionShell({
  children,
  className,
  innerClassName,
  id,
  variant = "white",
  grid = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-10 md:py-12", variants[variant], className)}
    >
      {grid ? <GridPattern className={variant === "dark" || variant === "gradient" ? "text-white/10" : ""} /> : null}
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
