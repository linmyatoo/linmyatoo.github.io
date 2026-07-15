import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.github, label: "GitHub", isCustom: true },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn", isCustom: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", isCustom: false },
  ];

  return (
    <footer className="relative border-t border-border/50">
      {/* Gradient divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text-blue">
              {personalInfo.name.split(" ")[0]}
              <span className="text-text-muted font-light">.dev</span>
            </span>
            <p className="text-text-muted text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, isCustom }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={label}
                className="p-2.5 rounded-xl glass text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
              >
                {isCustom ? <Icon width={18} height={18} /> : <Icon size={18} />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-sm text-center md:text-right">
            <p className="flex items-center gap-1">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 mt-1 text-xs">
              Built with <Heart size={12} className="text-red-500" /> using
              Next.js + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
