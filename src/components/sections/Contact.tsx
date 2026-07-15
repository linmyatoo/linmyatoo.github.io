"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Download,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";

interface ContactLinkItem {
  icon: React.ComponentType<{ size?: number; width?: number; height?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  isCustom: boolean;
}

const contactLinks: ContactLinkItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    isCustom: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Lin Myat Oo",
    href: personalInfo.linkedin,
    isCustom: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "linmyatoo & linmyatoo1",
    href: personalInfo.github,
    isCustom: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    isCustom: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined,
    isCustom: false,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const field = id.replace("contact-", "");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoSubject = encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's build intelligent robotics, AI pipelines, or modern web applications together"
          />
        </ScrollReveal>

        {/* Quick Connect Action Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 max-w-4xl mx-auto">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-3 rounded-2xl glass border border-primary/40 hover:border-primary text-text hover:text-primary transition-all flex items-center gap-2.5 text-xs sm:text-sm font-semibold shadow-md hover:shadow-primary/15 group scale-100 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={15} />
              </div>
              <span>Email Directly</span>
              <ArrowUpRight size={14} className="text-primary opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl glass border border-blue-500/40 hover:border-blue-500 text-text hover:text-blue-400 transition-all flex items-center gap-2.5 text-xs sm:text-sm font-semibold shadow-md hover:shadow-blue-500/15 group scale-100 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon width={15} height={15} />
              </div>
              <span>Message on LinkedIn</span>
              <ArrowUpRight size={14} className="text-blue-400 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="px-5 py-3 rounded-2xl glass border border-success/40 hover:border-success text-text hover:text-success transition-all flex items-center gap-2.5 text-xs sm:text-sm font-semibold shadow-md hover:shadow-success/15 group scale-100 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-lg bg-success/20 flex items-center justify-center text-success group-hover:scale-110 transition-transform">
                <Phone size={15} />
              </div>
              <span>Call / Phone</span>
              <ArrowUpRight size={14} className="text-success opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Contact Information */}
          <ScrollReveal variant="slide-left" delay={0.15} className="md:col-span-5 flex">
            <GlassCard className="h-full w-full flex flex-col justify-between border border-border/60 p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

              <div>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles size={14} /> Contact Information
                </div>
                <h3 className="text-2xl font-extrabold text-text mb-3">
                  Let&apos;s Connect
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8">
                  I am open to engineering roles, AI research collaborations, and freelance opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  {contactLinks.map(({ icon: Icon, label, value, href, isCustom }) => (
                    <div key={label} className="flex items-center gap-4 p-3.5 rounded-xl bg-card/60 border border-border/40 hover:border-primary/40 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                        {isCustom ? (
                          <Icon width={18} height={18} className="text-primary" />
                        ) : (
                          <Icon size={18} className="text-primary" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-text-muted">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-semibold text-text hover:text-primary transition-colors truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-text truncate">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  href={personalInfo.resumeUrl}
                  download="LinMyatOo_Resume"
                  variant="outline"
                  icon={<Download size={16} />}
                  className="w-full border-primary/40 hover:border-primary shadow-sm"
                >
                  Download Resume (.PDF)
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Simple Contact Form */}
          <ScrollReveal variant="slide-right" delay={0.2} className="md:col-span-7 flex">
            <GlassCard className="h-full w-full flex flex-col justify-between border border-border/60 p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

              <div>
                <h3 className="text-2xl font-extrabold text-text mb-2">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mb-6 leading-relaxed">
                  Have a question or proposal? Fill out the simple form below.
                </p>

                {submitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-card/90 border border-border/80 text-center space-y-5 my-auto animate-in fade-in zoom-in-95 duration-300">
                    <CheckCircle2 size={44} className="text-success mx-auto" />
                    <h4 className="text-xl font-bold text-text">
                      Message Formatted & Opened!
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                      Your default email client has been opened. Simply hit send to deliver your message to <strong className="text-primary">{personalInfo.email}</strong>.
                    </p>
                    <div className="pt-2">
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-text-muted mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-card/80 border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-medium"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-text-muted mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-card/80 border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-medium"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-text-muted mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-card/80 border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-medium"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-text-muted mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-card/80 border border-border text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none font-medium leading-relaxed"
                        placeholder="Your message..."
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        icon={<Send size={16} />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
