"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

interface LazySectionWrapperProps {
  children: ReactNode;
  height?: string;
}

export default function LazySectionWrapper({ children, height = "100vh" }: LazySectionWrapperProps) {
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Load slightly before it comes into view (rootMargin)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRendered(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "300px" } // Load when within 300px of viewport
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  // Before rendering, keep a placeholder with the expected height
  // to avoid huge layout shifts when it loads.
  if (!hasRendered) {
    return <div ref={ref} style={{ minHeight: height }} />;
  }

  return <div ref={ref}>{children}</div>;
}
