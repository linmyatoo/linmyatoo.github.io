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
      "bg-slate-100/80 text-slate-700 border border-slate-200/80 font-medium",
    outline:
      "bg-blue-50/60 text-blue-700 border border-blue-200 font-semibold",
    gradient:
      "bg-gradient-to-r from-blue-50 to-teal-50 text-teal-800 border border-teal-200/80 font-semibold",
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
