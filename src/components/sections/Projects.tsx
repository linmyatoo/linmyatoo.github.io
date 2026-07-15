"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Code2, FolderGit2, Star, Cpu, Sparkles, Terminal, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, activities } from "@/lib/data";

type CategoryTab = "all" | "software" | "mobile" | "ai" | "hardware";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory === "all") return true;
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  const softwareCount = useMemo(() => projects.filter((p) => p.category === "software").length, []);
  const mobileCount = useMemo(() => projects.filter((p) => p.category === "mobile").length, []);
  const aiCount = useMemo(() => projects.filter((p) => p.category === "ai").length, []);
  const hardwareCount = useMemo(() => projects.filter((p) => p.category === "hardware").length, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Eye-catching ambient background & grid pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/8 via-transparent to-amber-500/5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/12 via-indigo-500/8 to-transparent blur-[120px] -z-10 pointer-events-none animate-gradient-shift" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-teal-500/12 via-blue-500/8 to-transparent blur-[110px] -z-10 pointer-events-none animate-gradient-shift-reverse" />
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore my open-source repositories, AI pipelines, cross-platform mobile apps, and robotics systems"
            align="left"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Sparkles size={15} />
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("software")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "software"
                  ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Terminal size={15} className={activeCategory === "software" ? "text-white" : "text-blue-600"} />
              Software & Web ({softwareCount})
            </button>
            <button
              onClick={() => setActiveCategory("mobile")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "mobile"
                  ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Smartphone size={15} className={activeCategory === "mobile" ? "text-white" : "text-indigo-600"} />
              Mobile Apps ({mobileCount})
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "ai"
                  ? "bg-teal-600 text-white font-semibold shadow-md shadow-teal-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Code2 size={15} className={activeCategory === "ai" ? "text-white" : "text-teal-600"} />
              AI & Machine Learning ({aiCount})
            </button>
            <button
              onClick={() => setActiveCategory("hardware")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === "hardware"
                  ? "bg-amber-600 text-white font-semibold shadow-md shadow-amber-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Cpu size={15} className={activeCategory === "hardware" ? "text-white" : "text-amber-600"} />
              Robotics & IoT ({hardwareCount})
            </button>
          </div>
        </ScrollReveal>

        {/* Project Cards — Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.08}
              variant="fade-up"
            >
              <GlassCard className="overflow-hidden group p-0 h-full flex flex-col justify-between">
                <div>
                  {/* Code-editor style header bar */}
                  {project.image ? (
                    <div className="relative h-52 overflow-hidden border-b border-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-emerald-800 border border-emerald-200 shadow-sm backdrop-blur-md flex items-center gap-1.5">
                          <Cpu size={12} className="text-emerald-600" />
                          Robotics Engineering
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden bg-slate-50/80 border-b border-slate-200 group-hover:bg-blue-50/30 transition-all duration-500">
                      {/* Code editor window dots */}
                      <div className="px-5 py-3 flex items-center gap-2 border-b border-slate-200/80 bg-slate-100/60">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-3 text-[11px] font-mono font-semibold text-slate-500">
                          {project.technologies[0]}
                        </span>
                      </div>

                      <div className="p-6 pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-primary border border-slate-200 shadow-sm flex items-center gap-1.5">
                            <FolderGit2 size={12} className="text-accent" />
                            {project.category === "ai"
                              ? "AI & Computer Vision"
                              : project.category === "mobile"
                              ? "Mobile Application"
                              : "Open Source Repository"}
                          </span>
                          {typeof project.stars === "number" && project.stars > 0 && (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Star size={11} className="text-amber-500 fill-amber-500" />
                              {project.stars}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-center py-2">
                          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-400 transition-all duration-500">
                            {project.category === "ai" ? (
                              <Code2 size={28} className="text-teal-600" />
                            ) : project.category === "mobile" ? (
                              <Smartphone size={28} className="text-indigo-600" />
                            ) : (
                              <Terminal size={28} className="text-primary" />
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500 mt-4">
                          <span className="font-mono font-medium">
                            {project.github
                              ? project.github.replace("https://", "").replace("http://", "").split("/").slice(0, 2).join("/")
                              : "github.com/linmyatoo"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="outline"
                      size="sm"
                      icon={<GithubIcon width={14} height={14} />}
                    >
                      View on GitHub
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button
                      href={project.liveDemo}
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink size={14} />}
                    >
                      Live Demo
                    </Button>
                  )}
                  {!project.github && !project.liveDemo && (
                    <span className="text-xs text-slate-500 font-medium py-1">
                      University Exhibition / Hardware Prototype
                    </span>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Activities Section */}
        <ScrollReveal>
          <SectionHeading
            title="Activities & Leadership"
            subtitle="Community involvement, engineering leadership, and academic organizations"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <ScrollReveal key={activity.title} variant="scale" delay={index * 0.05}>
              <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden card-hover group">
                <div className="relative h-40 overflow-hidden border-b border-slate-100">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 font-heading">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
