import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeadingProps) {
  if (align === "left") {
    return (
      <div className={cn("mb-16", className)}>
        <div className="flex items-stretch gap-4">
          <div className="accent-bar shrink-0 self-stretch" />
          <div>
            {label && (
              <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2 block">
                {label}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text">
              {title}
            </h2>
            {subtitle && (
              <p className="text-text-muted text-base mt-3 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("text-center mb-16", className)}>
      {label && (
        <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="section-divider w-24 mx-auto mt-6" />
    </div>
  );
}
