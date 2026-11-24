"use client";

import { useEffect } from "react";
import "lenis/dist/lenis.css";

/**
 * SmoothScroll — wraps the entire app in Lenis smooth scrolling.
 * Gives that buttery, momentum-based scroll feel like wearvexindustries.com.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let raf: number;
    let lenis: any; // eslint-disable-line @typescript-eslint/no-explicit-any

    async function init() {
      const Lenis = (await import("lenis")).default;

      /* Remove scroll-smooth from html — it conflicts with Lenis */
      document.documentElement.classList.remove("scroll-smooth");
      document.documentElement.style.scrollBehavior = "auto";

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function animate(time: number) {
        lenis.raf(time);
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
            lenis.scrollTo(target as HTMLElement, { offset: -80 });
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
