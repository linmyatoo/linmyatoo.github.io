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
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore my open-source GitHub repositories, cross-platform mobile apps, AI models, and robotics systems"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Sparkles size={15} />
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("software")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "software"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Terminal size={15} className={activeCategory === "software" ? "text-white" : "text-blue-400"} />
              Software & Web ({softwareCount})
            </button>
            <button
              onClick={() => setActiveCategory("mobile")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "mobile"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Smartphone size={15} className={activeCategory === "mobile" ? "text-white" : "text-purple-400"} />
              Mobile Apps ({mobileCount})
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "ai"
                  ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Code2 size={15} className={activeCategory === "ai" ? "text-black" : "text-accent"} />
              AI & Machine Learning ({aiCount})
            </button>
            <button
              onClick={() => setActiveCategory("hardware")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "hardware"
                  ? "bg-success text-black shadow-lg shadow-success/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Cpu size={15} className={activeCategory === "hardware" ? "text-black" : "text-success"} />
              Robotics & IoT ({hardwareCount})
            </button>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.08} variant="fade-up">
              <GlassCard className="overflow-hidden group p-0 h-full flex flex-col justify-between">
                <div>
                  {/* Project Banner Image or Code Header */}
                  {project.image ? (
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-success border border-success/30 backdrop-blur-md flex items-center gap-1.5">
                          <Cpu size={12} />
                          Robotics Engineering
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-card via-primary/10 to-accent/10 border-b border-border/40 flex flex-col justify-between p-6 group-hover:from-card group-hover:via-primary/20 transition-all duration-500">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-background/80 text-primary border border-primary/30 backdrop-blur-md flex items-center gap-1.5">
                          <FolderGit2 size={12} className="text-accent" />
                          {project.category === "ai"
                            ? "AI & Computer Vision"
                            : project.category === "mobile"
                            ? "Mobile Application"
                            : "Open Source Repository"}
                        </span>
                        {typeof project.stars === "number" && project.stars > 0 && (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center gap-1">
                            <Star size={11} />
                            {project.stars}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-center my-auto">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                          {project.category === "ai" ? (
                            <Code2 size={32} className="text-accent" />
                          ) : project.category === "mobile" ? (
                            <Smartphone size={32} className="text-purple-400" />
                          ) : (
                            <Terminal size={32} className="text-primary" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-text-muted/70">
                        <span className="font-mono">
                          {project.github
                            ? project.github.replace("https://", "").replace("http://", "").split("/").slice(0, 2).join("/")
                            : "github.com/linmyatoo"}
                        </span>
                        <span>{project.technologies[0]}</span>
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-text mb-2.5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-5 leading-relaxed">
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
                    <span className="text-xs text-text-muted/60 font-medium py-1">
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
            subtitle="Community involvement, organizations, and extracurricular activities"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <ScrollReveal key={activity.title} variant="scale" delay={index * 0.05}>
              <div className="glass rounded-xl overflow-hidden card-hover gradient-border group">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-text mb-1">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-text-muted">
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
