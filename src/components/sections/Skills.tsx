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
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Skills"
            subtitle="Proficiency levels across different technologies"
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
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "glass text-text-muted hover:text-text hover:border-primary/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Bars */}
        <div className="max-w-2xl mx-auto space-y-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.05}>
              <SkillBar name={skill.name} level={skill.level} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
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

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-card overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
