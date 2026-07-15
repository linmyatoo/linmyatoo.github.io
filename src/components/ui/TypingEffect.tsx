"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingEffectProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingEffect({
  strings = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className,
}: TypingEffectProps) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset index when strings array changes or shortens during hot reloads
  useEffect(() => {
    if (strings && stringIndex >= strings.length) {
      setStringIndex(0);
      setText("");
      setIsDeleting(false);
    }
  }, [strings, stringIndex]);

  const tick = useCallback(() => {
    if (!strings || strings.length === 0) return;
    const safeIndex = stringIndex % strings.length;
    const currentString = strings[safeIndex];
    if (!currentString) return;

    if (!isDeleting) {
      setText(currentString.substring(0, text.length + 1));
      if (text.length === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(currentString.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [text, stringIndex, isDeleting, strings, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      {text}
      <span className="typing-cursor" />
    </span>
  );
}
