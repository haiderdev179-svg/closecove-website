"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const translateClass =
    direction === "up"
      ? isVisible
        ? "translate-y-0"
        : "translate-y-6"
      : "";

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "650ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
}
