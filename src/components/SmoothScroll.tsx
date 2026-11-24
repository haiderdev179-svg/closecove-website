"use client";

import { useEffect, useRef } from "react";

/**
 * SmoothScroll — wraps the entire app in Lenis smooth scrolling.
 * Gives that buttery, momentum-based scroll feel like wearvexindustries.com.
 *
 * Uses the `lenis` package (v1.x). Install with: npm install lenis
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);

  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let raf: number;

    async function init() {
      const Lenis = (await import("lenis")).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function animate(time: number) {
        lenis?.raf(time);
        raf = requestAnimationFrame(animate);
      }

      raf = requestAnimationFrame(animate);

      /* Handle anchor links — scroll smoothly to #id targets */
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = (anchor as HTMLAnchorElement).getAttribute("href");
          if (!href || href === "#") return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis?.scrollTo(target as HTMLElement, { offset: -80 });
          }
        });
      });
    }

    init();

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
