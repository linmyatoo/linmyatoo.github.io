"use client";

import { useState, useRef, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Eye-catching background framing */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-slate-50/70 to-white/80 border-y border-slate-200/80 pointer-events-none" />
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-l from-blue-500/10 to-transparent blur-[110px] -z-10 pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-teal-500/10 to-transparent blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Quantitative assessment across AI, Machine Learning, DevOps, and backend engineering"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-105"
                    : "bg-white border border-slate-200 text-slate-600 font-medium hover:text-slate-900 hover:border-blue-300 shadow-sm"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Rings Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} variant="scale" delay={index * 0.05}>
              <SkillRing name={skill.name} level={skill.level} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillRing({ name, level }: { name: string; level: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="6"
          />
          {/* Progress ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="url(#skillGradient)"
            strokeDasharray={circumference}
            strokeDashoffset={inView ? offset : circumference}
            className="transition-all duration-[1.5s] ease-out"
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold font-heading text-slate-900">
            {inView ? level : 0}%
          </span>
        </div>
      </div>
      <span className="mt-4 text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors text-center">
        {name}
      </span>
    </div>
  );
}
