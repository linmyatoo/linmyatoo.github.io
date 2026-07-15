"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, GraduationCap, Calendar, Briefcase, FolderGit2, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo, education, spokenLanguages, projects, certifications } from "@/lib/data";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: "Years Coding", value: 6, suffix: "+", icon: Briefcase },
    { label: "Projects Built", value: projects.length, suffix: "", icon: FolderGit2 },
    { label: "Certifications", value: certifications.length, suffix: "", icon: Award },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Eye-catching background framing */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-blue-50/40 to-white/70 border-y border-slate-200/80 pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-500/10 via-teal-500/5 to-transparent blur-[110px] -z-10 pointer-events-none animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 diagonal-stripes opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="A glimpse into who I am and my passion for engineering"
            align="left"
          />
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 max-w-2xl">
            {stats.map(({ label, value, suffix, icon: Icon }) => (
              <div
                key={label}
                className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 text-center group hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-xs text-slate-600 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bio */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold mb-4 text-slate-900 font-heading">
                Who I Am
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <MapPin size={15} className="text-primary" />
                  {personalInfo.location}
                </span>
                {spokenLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200"
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal variant="slide-right" delay={0.2}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2 font-heading">
                <GraduationCap size={20} className="text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-slate-200 hover:border-primary transition-colors duration-300"
                  >
                    {edu.current && (
                      <span className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {!edu.current && (
                      <span className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-blue-600" />
                    )}
                    <h4 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-primary font-semibold">{edu.institution}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      {edu.program}
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-mono">
                      <Calendar size={11} />
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
