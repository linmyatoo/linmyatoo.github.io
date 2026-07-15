import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "bg-card text-text-muted border border-border",
    outline:
      "bg-transparent text-primary border border-primary/30",
    gradient:
      "bg-gradient-to-r from-primary/20 to-accent/20 text-accent border border-accent/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
