"use client";

import { Briefcase, GraduationCap, Heart, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/data";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  volunteer: Heart,
};

const typeColors = {
  work: "from-blue-600 to-indigo-600",
  education: "from-teal-600 to-emerald-600",
  volunteer: "from-amber-500 to-orange-500",
};

const typeLabels = {
  work: "Professional Experience",
  education: "Academic Background",
  volunteer: "Leadership & Volunteering",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Eye-catching background framing */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-slate-50/80 to-white/70 border-y border-slate-200/80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-500/10 via-teal-500/8 to-transparent blur-[120px] -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 diagonal-stripes opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Experience & Education"
            subtitle="My software engineering roles, university education, and technical leadership"
            align="left"
          />
        </ScrollReveal>

        {/* Timeline — single column, numbered */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 timeline-line" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type];
            const gradient = typeColors[exp.type];
            return (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={index * 0.1}
              >
                <div className="relative flex items-start gap-6 mb-12 pl-16 md:pl-20">
                  {/* Number + Icon */}
                  <div className="absolute left-0 z-10 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md border-2 border-white`}
                      title={typeLabels[exp.type]}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1">
                    <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 card-hover relative group">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-primary mb-1 block font-mono">
                            {typeLabels[exp.type]}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors font-heading">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-slate-700 font-semibold sm:whitespace-nowrap bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md font-mono self-start">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="pt-3 border-t border-slate-200">
                          <span className="text-xs font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                            <Award size={14} className="text-accent" />
                            Key Achievements & Honors
                          </span>
                          <ul className="space-y-2 mb-3">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed font-medium"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                <span className="text-slate-800">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
