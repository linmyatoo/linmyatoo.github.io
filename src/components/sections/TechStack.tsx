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

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies and tools I work with"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStack.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",
                  activeCategory === category.name
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "glass text-text-muted hover:text-text hover:border-primary/30"
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
              <div className="glass rounded-xl p-4 text-center card-hover gradient-border group cursor-default">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <span className="text-lg font-bold gradient-text">
                    {item.name.substring(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-muted group-hover:text-text transition-colors duration-200">
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
