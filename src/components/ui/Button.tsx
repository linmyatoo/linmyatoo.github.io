import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  onClick,
  className,
  icon,
  type = "button",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:shadow-blue-600/20 hover:scale-[1.02] font-semibold",
    outline:
      "bg-white/80 text-slate-800 border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 shadow-sm font-semibold",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
