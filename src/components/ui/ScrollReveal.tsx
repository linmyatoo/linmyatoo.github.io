"use client";

import { useRef, type ReactNode } from "react";
import { useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Lightweight scroll reveal using CSS animations + IntersectionObserver.
 * Replaces the old framer-motion based implementation to cut ~150-200KB
 * of JavaScript from the bundle for below-fold sections.
 */
export default function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${variant} ${isVisible ? "scroll-reveal--visible" : ""} ${className || ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
