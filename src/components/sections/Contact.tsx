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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative eye-catching mesh & circuit overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-t from-blue-50/60 via-white to-transparent">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/12 to-indigo-500/8 blur-[120px] animate-gradient-shift" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-teal-500/12 to-emerald-500/8 blur-[100px] animate-gradient-shift-reverse" />
        <div className="absolute inset-0 circuit-pattern opacity-50 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's collaborate on intelligent AI pipelines, DevOps platforms, robotics systems, or software engineering roles"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact Information */}
          <ScrollReveal variant="slide-left" delay={0.15} className="lg:col-span-5 flex">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl h-full w-full flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />

              <div>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                  <Sparkles size={14} /> Contact Information
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading">
                  Let&apos;s Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  I am open to software engineering roles, DevOps projects, AI/ML research collaborations, and consulting opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  {contactLinks.map(({ icon: Icon, label, value, href, isCustom }) => (
                    <div key={label} className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                        {isCustom ? (
                          <Icon width={18} height={18} className="text-primary" />
                        ) : (
                          <Icon size={18} className="text-primary" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-slate-500">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-bold text-slate-900 hover:text-primary transition-colors truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-slate-900 truncate">{value}</p>
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
                  className="w-full border-blue-200 hover:border-primary shadow-sm"
                >
                  Download Resume (.PDF)
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Simple Contact Form */}
          <ScrollReveal variant="slide-right" delay={0.2} className="lg:col-span-7 flex">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl h-full w-full flex flex-col justify-between p-6 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl -z-10" />

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 font-heading">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Have a technical question or job inquiry? Fill out the form below to connect instantly.
                </p>

                {submitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-5 my-auto animate-in fade-in zoom-in-95 duration-300">
                    <CheckCircle2 size={44} className="text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-slate-900 font-heading">
                      Message Formatted & Opened!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
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
                          className="block text-xs font-bold text-slate-700 mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-slate-700 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none font-medium leading-relaxed"
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
