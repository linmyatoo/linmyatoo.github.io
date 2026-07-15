"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Sparkles, Cpu, Code2, Terminal, Smartphone, Cloud, X, BookOpen, Share2, Tag, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/data";
import { type BlogPost } from "@/types";

type BlogCategory = "all" | "Robotics & IoT" | "AI / ML" | "Full Stack" | "Mobile" | "DevOps & Backend";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "DevOps & Backend") {
        return post.category === "DevOps" || post.category === "Backend";
      }
      return post.category === activeCategory;
    });
  }, [activeCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Robotics & IoT":
        return <Cpu size={14} className="text-success" />;
      case "AI / ML":
        return <Code2 size={14} className="text-accent" />;
      case "Mobile":
        return <Smartphone size={14} className="text-purple-400" />;
      case "DevOps":
      case "Backend":
        return <Cloud size={14} className="text-yellow-400" />;
      default:
        return <Terminal size={14} className="text-primary" />;
    }
  };

  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Technical Articles & Insights"
            subtitle="In-depth engineering breakdowns on autonomous robotics, deep learning models, cloud architecture, and full-stack systems"
          />
        </ScrollReveal>

        {/* Category Filter Tabs */}
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
              <Sparkles size={14} />
              All Articles ({blogPosts.length})
            </button>
            <button
              onClick={() => setActiveCategory("Robotics & IoT")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "Robotics & IoT"
                  ? "bg-success text-black shadow-lg shadow-success/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Cpu size={14} className={activeCategory === "Robotics & IoT" ? "text-black" : "text-success"} />
              Robotics & IoT
            </button>
            <button
              onClick={() => setActiveCategory("AI / ML")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "AI / ML"
                  ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Code2 size={14} className={activeCategory === "AI / ML" ? "text-black" : "text-accent"} />
              AI & Machine Learning
            </button>
            <button
              onClick={() => setActiveCategory("Full Stack")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "Full Stack"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Terminal size={14} className={activeCategory === "Full Stack" ? "text-white" : "text-blue-400"} />
              Full Stack & Web
            </button>
            <button
              onClick={() => setActiveCategory("Mobile")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "Mobile"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Smartphone size={14} className={activeCategory === "Mobile" ? "text-white" : "text-purple-400"} />
              Mobile Engineering
            </button>
            <button
              onClick={() => setActiveCategory("DevOps & Backend")}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === "DevOps & Backend"
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/25 scale-105"
                  : "bg-card/70 text-text-muted hover:text-text hover:bg-card border border-border/50"
              }`}
            >
              <Cloud size={14} className={activeCategory === "DevOps & Backend" ? "text-black" : "text-yellow-400"} />
              DevOps & Backend
            </button>
          </div>
        </ScrollReveal>

        {/* Featured Article Hero Banner (if filtering All or matching category) */}
        {filteredPosts.length > 0 && filteredPosts[0].featured && activeCategory === "all" && (
          <ScrollReveal delay={0.15}>
            <div
              onClick={() => setSelectedPost(filteredPosts[0])}
              className="mb-12 glass-strong rounded-3xl border border-primary/40 p-6 sm:p-8 md:p-10 card-hover group cursor-pointer relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:bg-accent/20 transition-all duration-700" />

              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-md flex items-center gap-1.5">
                      <Sparkles size={13} /> Featured Article
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-card/80 text-success border border-success/30 flex items-center gap-1.5">
                      {getCategoryIcon(filteredPosts[0].category)}
                      {filteredPosts[0].category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Calendar size={13} /> {filteredPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Clock size={13} /> {filteredPosts[0].readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text mb-4 group-hover:text-primary transition-colors leading-tight">
                    {filteredPosts[0].title}
                  </h3>

                  <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {filteredPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                      Read Technical Breakdown <ArrowRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-80 shrink-0 bg-card/60 rounded-2xl border border-border/40 p-6 flex flex-col justify-between self-stretch shadow-inner">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-1.5">
                      <BookOpen size={14} className="text-accent" /> Key Architectural Highlights
                    </h4>
                    <ul className="space-y-3">
                      {filteredPosts[0].takeaways?.map((takeaway, idx) => (
                        <li key={idx} className="text-xs text-text/90 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 text-right">
                    <span className="text-[11px] font-mono text-primary/80">
                      Engineering Deep-Dive • 1000Hz PID
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPosts
            .filter((p) => !(activeCategory === "all" && p.featured && filteredPosts[0] === p))
            .map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.08} variant="fade-up">
                <GlassCard
                  onClick={() => setSelectedPost(post)}
                  className="overflow-hidden group cursor-pointer p-6 sm:p-7 h-full flex flex-col justify-between border border-border/40 hover:border-primary/50 transition-all duration-300"
                >
                  <div>
                    {/* Category and Read Time */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                        {getCategoryIcon(post.category)}
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted shrink-0">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/40">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-card/80 text-text-muted/80 border border-border/30 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-[11px] px-2 py-1 rounded-md bg-card/80 text-text-muted/60">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-text-muted/70 flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
        </div>



        {/* Interactive Article Quick-View Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="fixed inset-0 bg-background/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-strong rounded-3xl border border-primary/40 p-6 sm:p-8 md:p-10 z-10 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-card hover:bg-card/80 text-text-muted hover:text-text border border-border/40 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4 flex-wrap pr-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30 flex items-center gap-1.5">
                    {getCategoryIcon(selectedPost.category)}
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={13} /> {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock size={13} /> {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-text mb-4 leading-tight">
                  {selectedPost.title}
                </h2>

                <p className="text-base sm:text-lg text-primary/90 font-medium leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>

                <div className="h-px bg-gradient-to-r from-border via-border/60 to-transparent mb-6" />

                {selectedPost.content && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-accent" /> Technical Breakdown
                    </h4>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                      {selectedPost.content}
                    </p>
                  </div>
                )}

                {selectedPost.takeaways && selectedPost.takeaways.length > 0 && (
                  <div className="mb-8 bg-card/60 rounded-2xl border border-border/40 p-6">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                      <Sparkles size={16} /> Key Takeaways & Architecture Concepts
                    </h4>
                    <ul className="space-y-3">
                      {selectedPost.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="text-sm text-text/90 flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40">
                  <span className="text-xs text-text-muted font-mono">
                    Lin Myat Oo • Engineering Insights
                  </span>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button
                      onClick={() => setSelectedPost(null)}
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none"
                    >
                      Close Summary
                    </Button>
                    <Button
                      onClick={() => {
                        alert("Full publication link on Medium/Dev.to will be available shortly!");
                      }}
                      variant="primary"
                      size="sm"
                      icon={<Share2 size={14} />}
                      className="flex-1 sm:flex-none"
                    >
                      Share Article
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
