import { Mail } from "lucide-react";
import Image from "next/image";
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
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center bg-white shrink-0">
                <Image
                  src="/images/lmo1.jpeg"
                  alt="Lin Myat Oo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
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
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary shadow-sm transition-all duration-200"
              >
                {isCustom ? <Icon width={18} height={18} /> : <Icon size={18} />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-sm text-center md:text-right">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
