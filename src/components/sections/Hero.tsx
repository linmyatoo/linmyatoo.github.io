"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Image from "next/image";
import TypingEffect from "@/components/ui/TypingEffect";
import Button from "@/components/ui/Button";
import { personalInfo, typingRoles } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-gradient-shift" />
        {/* Accent gradient orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-gradient-shift-reverse" />
        {/* Success gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-success/5 blur-[80px] animate-pulse-glow" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-primary/40 ring-offset-4 ring-offset-background">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Glow effect behind photo */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 animate-pulse-glow" />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-muted mb-6 h-8"
          >
            <TypingEffect strings={typingRoles} className="text-accent" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-text-muted text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.subtitle}. Passionate about{" "}
            <span className="text-primary">AI & Machine Learning</span>,{" "}
            <span className="text-accent">cloud architecture</span>, and
            building systems that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowDown size={18} />}
            >
              View Projects
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              download="LinMyatOo_Resume"
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
            >
              Download Resume
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              size="lg"
              icon={<Send size={18} />}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-text-muted/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
