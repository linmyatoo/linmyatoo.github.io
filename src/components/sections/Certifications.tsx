"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ShieldCheck, Trophy, ExternalLink, Award, Sparkles, CheckCircle2, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { certifications, personalInfo } from "@/lib/data";
import { LinkedinIcon } from "@/components/ui/Icons";

type TabFilter = "all" | "award" | "certification";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");

  const filteredItems = useMemo(() => {
    return certifications.filter((item) => {
      return (
        activeTab === "all" ||
        item.category === activeTab ||
        (!item.category && activeTab === "certification")
      );
    });
  }, [activeTab]);

  const awardsCount = useMemo(() => certifications.filter((c) => c.category === "award").length, []);
  const certsCount = useMemo(() => certifications.filter((c) => c.category !== "award").length, []);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Eye-catching trophy amber & tech blue ambient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-amber-500/8 via-transparent to-blue-500/8 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[110px] -z-10 pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[110px] -z-10 pointer-events-none animate-gradient-shift" />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Certifications & Honors"
            subtitle="National engineering honors, robotics competitions, and verified professional cloud & AI credentials"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "all"
                  ? "bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Sparkles size={15} />
              All Achievements ({certifications.length})
            </button>
            <button
              onClick={() => setActiveTab("award")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "award"
                  ? "bg-amber-600 text-white font-semibold shadow-md shadow-amber-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <Trophy size={15} className={activeTab === "award" ? "text-white" : "text-amber-600"} />
              Honors & Awards ({awardsCount})
            </button>
            <button
              onClick={() => setActiveTab("certification")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "certification"
                  ? "bg-teal-600 text-white font-semibold shadow-md shadow-teal-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm font-medium"
              }`}
            >
              <ShieldCheck size={15} className={activeTab === "certification" ? "text-white" : "text-teal-600"} />
              Professional Certifications ({certsCount})
            </button>
          </div>
        </ScrollReveal>

        {/* LinkedIn Verified Credentials Banner */}
        <ScrollReveal delay={0.2}>
          <div className="mb-12 max-w-3xl mx-auto">
            <a
              href={`${personalInfo.linkedin}/details/certifications/`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-blue-600 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-blue-700 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-teal-50/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 border border-blue-700 flex items-center justify-center text-white shrink-0 mx-auto sm:mx-0 group-hover:scale-110 transition-transform shadow-sm">
                    <LinkedinIcon width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2 group-hover:text-primary transition-colors font-heading">
                      Verified LinkedIn Credentials & Licenses
                      <ExternalLink size={15} className="text-primary opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">
                      Click to inspect all official verified certificates, course credentials, and digital badges live on my LinkedIn profile.
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-primary text-white shrink-0 shadow-md group-hover:bg-primary-dark transition-colors">
                  View on LinkedIn ↗
                </span>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isAward = item.category === "award";

            return (
              <ScrollReveal
                key={item.name}
                variant="fade-up"
                delay={index * 0.08}
              >
                <div className="bg-white border border-slate-200 shadow-sm rounded-xl h-full flex flex-col justify-between relative overflow-hidden group hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  {/* Certificate Image */}
                  {item.image && (
                    <div className="relative h-44 overflow-hidden border-b border-slate-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Decorative background glow */}
                  <div
                    className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-25 pointer-events-none ${
                      isAward ? "bg-amber-400" : "bg-primary"
                    }`}
                  />

                  <div className="p-6 sm:p-7">
                    {/* Header: Icon, Status Badge & Date */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border ${
                          isAward
                            ? "bg-amber-50 border-amber-200"
                            : "bg-blue-50 border-blue-200"
                        }`}
                      >
                        {isAward ? (
                          <Trophy size={22} className="text-amber-600" />
                        ) : (
                          <ShieldCheck size={22} className="text-primary" />
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {item.status && (
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 border ${
                              item.status === "Honored"
                                ? "bg-amber-50 text-amber-700 border-amber-200"
                                : item.status === "Completed"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-blue-50 text-blue-700 border-blue-200"
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
                          <span className="text-xs text-slate-500 font-semibold font-mono">
                            {item.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors font-heading">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary font-semibold mb-3">
                      {item.issuer}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Skills / Tech Covered & Links */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-200">
                        {item.skills.map((skill) => (
                          <Badge key={skill} variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 font-mono">
                        {isAward ? "National / University Honor" : "Industry Credential"}
                      </span>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors"
                        >
                          Verify Credential <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Empty state if filter yields 0 results */}
        {filteredItems.length === 0 && (
          <ScrollReveal>
            <GlassCard className="p-12 text-center max-w-md mx-auto">
              <Award className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-50" />
              <h4 className="text-base font-bold text-slate-900 mb-1 font-heading">No matches found</h4>
              <p className="text-xs text-slate-600 mb-4">
                No achievements found under &quot;
                {activeTab === "all" ? "All" : activeTab === "award" ? "Honors & Awards" : "Certifications"}&quot;.
              </p>
              <button
                onClick={() => setActiveTab("all")}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors cursor-pointer shadow-sm"
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
