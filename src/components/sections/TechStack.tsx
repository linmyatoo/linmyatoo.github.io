"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techStack[0].name);
  const activeItems =
    techStack.find((c) => c.name === activeCategory)?.items ?? [];

  // Build ticker text from all tech items
  const allTechNames = techStack.flatMap((c) => c.items.map((i) => i.name));
  const tickerText = allTechNames.join("  ·  ");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Eye-catching ambient background & circuit pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-teal-500/8 via-transparent to-blue-500/8 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full bg-teal-500/10 blur-[100px] -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[100px] -z-10 pointer-events-none animate-gradient-shift" />
      <div className="absolute inset-0 circuit-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Tech Stack"
            subtitle="Core frameworks, DevOps platforms, and machine learning tools I rely on daily"
          />
        </ScrollReveal>

        {/* Ticker/Marquee */}
        <ScrollReveal delay={0.05}>
          <div className="overflow-hidden mb-12 relative border-y border-slate-200/80 py-3 bg-white/50">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-sm font-mono text-slate-400 tracking-wider px-2">
                {tickerText}  ·  {tickerText}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStack.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer",
                  activeCategory === category.name
                    ? "bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-105"
                    : "bg-white border border-slate-200 text-slate-600 font-medium hover:text-slate-900 hover:border-blue-300 shadow-sm"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {activeItems.map((item, index) => (
            <ScrollReveal key={item.name} variant="scale" delay={index * 0.05}>
              <div className="bg-white rounded-xl p-4 text-center card-hover border border-slate-200 shadow-sm group cursor-default">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300">
                  <span className="text-lg font-bold gradient-text">
                    {item.name.substring(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors duration-200">
                  {item.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
