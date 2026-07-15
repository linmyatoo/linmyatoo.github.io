"use client";

import { useState, useMemo } from "react";
import { ShieldCheck, Trophy, ExternalLink, Award, Sparkles, Filter, CheckCircle2, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { certifications, personalInfo } from "@/lib/data";
import { LinkedinIcon } from "@/components/ui/Icons";

type TabFilter = "all" | "award" | "certification";

const filterSkills = [
  "All Skills",
  "Robotics",
  "Cloud Architecture",
  "Deep Learning",
  "Embedded Systems",
  "DevOps",
  "IoT",
  "Android",
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");

  const filteredItems = useMemo(() => {
    return certifications.filter((item) => {
      const matchesTab =
        activeTab === "all" ||
        item.category === activeTab ||
        (!item.category && activeTab === "certification");

      const matchesSkill =
        selectedSkill === "All Skills" ||
        (item.skills && item.skills.some((s) => s.toLowerCase().includes(selectedSkill.toLowerCase())));

      return matchesTab && matchesSkill;
    });
  }, [activeTab, selectedSkill]);

  const awardsCount = useMemo(() => certifications.filter((c) => c.category === "award").length, []);
  const certsCount = useMemo(() => certifications.filter((c) => c.category !== "award").length, []);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Certifications & Honors"
            subtitle="National competition awards, engineering honors, and professional industry credentials"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            <button
              onClick={() => {
                setActiveTab("all");
                setSelectedSkill("All Skills");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "all"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Sparkles size={15} />
              All Achievements ({certifications.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("award");
                setSelectedSkill("All Skills");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "award"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Trophy size={15} className={activeTab === "award" ? "text-black" : "text-yellow-400"} />
              Honors & Awards ({awardsCount})
            </button>
            <button
              onClick={() => {
                setActiveTab("certification");
                setSelectedSkill("All Skills");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "certification"
                  ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <ShieldCheck size={15} className={activeTab === "certification" ? "text-black" : "text-accent"} />
              Professional Certifications ({certsCount})
            </button>
          </div>
        </ScrollReveal>

        {/* Skill Filter Pills */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12 max-w-4xl mx-auto px-2">
            <span className="text-xs text-text-muted flex items-center gap-1.5 mr-2 font-medium">
              <Filter size={13} className="text-primary" /> Filter by topic:
            </span>
            {filterSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`text-xs px-3.5 py-1.5 rounded-lg transition-all font-medium ${
                  selectedSkill === skill
                    ? "bg-primary/20 text-primary border border-primary/40 shadow-sm"
                    : "bg-card/40 text-text-muted hover:text-text hover:bg-card/80 border border-border/30"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* LinkedIn Verified Credentials Banner */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12 max-w-3xl mx-auto">
            <a
              href={`${personalInfo.linkedin}/details/certifications/`}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass p-5 sm:p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all group shadow-lg hover:shadow-primary/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mx-auto sm:mx-0 group-hover:scale-110 transition-transform">
                    <LinkedinIcon width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text flex items-center justify-center sm:justify-start gap-2 group-hover:text-primary transition-colors">
                      Verified LinkedIn Credentials & Licenses
                      <ExternalLink size={15} className="text-primary opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted">
                      Click to inspect all official verified certificates, course credentials, and badges live on my LinkedIn profile.
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 text-white shrink-0 shadow-md group-hover:bg-blue-500 transition-colors">
                  View on LinkedIn ↗
                </span>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => {
            const isAward = item.category === "award";

            return (
              <ScrollReveal
                key={item.name}
                variant="fade-up"
                delay={index * 0.08}
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden group">
                  {/* Decorative background glow */}
                  <div
                    className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-25 pointer-events-none ${
                      isAward ? "bg-yellow-400" : "bg-primary"
                    }`}
                  />

                  <div>
                    {/* Header: Icon, Status Badge & Date */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${
                          isAward
                            ? "bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30"
                            : "bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30"
                        }`}
                      >
                        {isAward ? (
                          <Trophy size={22} className="text-yellow-400" />
                        ) : (
                          <ShieldCheck size={22} className="text-accent" />
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {item.status && (
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 border ${
                              item.status === "Honored"
                                ? "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                                : item.status === "Completed"
                                ? "bg-success/10 text-success border-success/20"
                                : "bg-primary/10 text-primary border-primary/20"
                            }`}
                          >
                            {item.status === "Honored" ? (
                              <Award size={11} />
                            ) : item.status === "Completed" ? (
                              <CheckCircle2 size={11} />
                            ) : (
                              <Clock size={11} />
                            )}
                            {item.status}
                          </span>
                        )}
                        {item.date && (
                          <span className="text-xs text-text-muted font-medium">
                            {item.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="text-base sm:text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary font-medium mb-3">
                      {item.issuer}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Skills / Tech Covered & Links */}
                  <div>
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-border/40">
                        {item.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={selectedSkill === skill ? "gradient" : "default"}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted/80">
                        {isAward ? "National / University Honor" : "Industry Credential"}
                      </span>

                      {isAward ? (
                        <a
                          href="#projects"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
                        >
                          View Related Project <ExternalLink size={12} />
                        </a>
                      ) : item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
                        >
                          Verify Credential <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-xs text-text-muted italic">
                          Preparation in progress
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Empty state if filter yields 0 results */}
        {filteredItems.length === 0 && (
          <ScrollReveal>
            <GlassCard className="p-12 text-center max-w-md mx-auto">
              <Award className="w-12 h-12 text-text-muted mx-auto mb-3 opacity-50" />
              <h4 className="text-base font-semibold text-text mb-1">No matches found</h4>
              <p className="text-xs text-text-muted mb-4">
                No achievements found matching the &quot;{selectedSkill}&quot; filter under &quot;
                {activeTab === "all" ? "All" : activeTab === "award" ? "Honors & Awards" : "Certifications"}&quot;.
              </p>
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSelectedSkill("All Skills");
                }}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </GlassCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
