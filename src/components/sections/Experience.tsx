"use client";

import { Briefcase, GraduationCap, Heart, Award, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/data";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  volunteer: Heart,
};

const typeColors = {
  work: "from-primary to-blue-400",
  education: "from-accent to-cyan-400",
  volunteer: "from-success to-emerald-400",
};

const typeLabels = {
  work: "Professional Experience",
  education: "Academic Background",
  volunteer: "Leadership & Volunteering",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Experience & Education"
            subtitle="My professional journey, academic background, and leadership milestones"
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type];
            const gradient = typeColors[exp.type];
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal
                key={index}
                variant={isLeft ? "slide-left" : "slide-right"}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex items-start gap-6 mb-12 ${
                    isLeft
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg border-2 border-background`}
                      title={typeLabels[exp.type]}
                    >
                      <Icon size={15} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    <div className="glass rounded-xl p-6 card-hover gradient-border relative group">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-[10px] font-semibold tracking-wider uppercase text-primary/90 mb-1 block">
                            {typeLabels[exp.type]}
                          </span>
                          <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-text-muted whitespace-nowrap bg-card/80 border border-border/50 px-2.5 py-1 rounded-md font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-text-muted mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="pt-3 border-t border-border/40">
                          <span className="text-xs font-semibold text-text/80 mb-2.5 flex items-center gap-1.5">
                            <Award size={13} className="text-yellow-400" />
                            Key Achievements & Honors
                          </span>
                          <ul className="space-y-2 mb-3">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-xs text-text-muted flex items-start gap-2 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                <span className="text-text/90">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a
                            href="#certifications"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors pt-1 group/link"
                          >
                            Explore in Certifications & Honors
                            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                          </a>
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
