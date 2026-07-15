"use client";

import { MapPin, GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo, education, spokenLanguages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="A glimpse into who I am and what drives me"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bio */}
          <ScrollReveal variant="slide-left" delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-semibold mb-4 text-text">
                Who I Am
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-text-muted">
                  <MapPin size={14} className="text-primary" />
                  {personalInfo.location}
                </span>
                {spokenLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card text-xs text-text-muted border border-border"
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
              <h3 className="text-xl font-semibold mb-6 text-text flex items-center gap-2">
                <GraduationCap size={20} className="text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    {edu.current && (
                      <span className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-success animate-pulse" />
                    )}
                    {!edu.current && (
                      <span className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary/50" />
                    )}
                    <h4 className="text-sm font-semibold text-text">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-primary">{edu.institution}</p>
                    <p className="text-xs text-text-muted mt-1">
                      {edu.program}
                    </p>
                    <p className="text-xs text-text-muted flex items-center gap-1 mt-1">
                      <Calendar size={10} />
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
