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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Eye-catching layered background lighting & engineering mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary tech blue light sweep */}
        <div className="absolute top-[15%] left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent blur-[120px] animate-gradient-shift" />
        {/* Neural teal light sweep */}
        <div className="absolute bottom-[20%] right-[10%] w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-teal-500/15 via-emerald-500/10 to-transparent blur-[110px] animate-gradient-shift-reverse" />
        {/* DevOps amber accent glow */}
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-gradient-to-r from-amber-500/8 via-orange-500/5 to-transparent blur-[90px] animate-pulse-glow" />
        {/* Crisp Technical Grid & Circuit overlay */}
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute inset-0 dot-pattern opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content — Left */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-heading text-slate-900"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 font-semibold mb-6 h-8 font-mono"
            >
              <TypingEffect strings={typingRoles} className="text-primary" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-slate-600 text-lg max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto font-normal"
            >
              {personalInfo.subtitle}. Passionate about{" "}
              <span className="text-primary font-semibold">AI & Machine Learning</span>,{" "}
              <span className="text-accent font-semibold">DevOps & Cloud Architecture</span>, and
              building resilient systems that scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
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

          {/* Profile Photo — Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative order-1 lg:order-2 shrink-0"
          >
            <div className="relative">
              {/* Soft glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/15 via-teal-500/10 to-blue-500/15 blur-2xl animate-pulse-glow" />
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-2xl border border-slate-200">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative orbit dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 animate-float" />
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full bg-blue-600 shadow-lg shadow-blue-600/30 animate-float" style={{ animationDelay: "1s" }} />
            </div>
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
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
