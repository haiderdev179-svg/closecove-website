"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA]">
      {/* Ambient glow elements */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtitle / positioning pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 bg-white/80 backdrop-blur-sm text-xs uppercase tracking-widest text-zinc-600 mb-8 animate-fade-in shadow-sm hover:border-blue-500/30 hover:bg-white/90 transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-medium">AI Automation for Local Businesses</span>
        </div>

        {/* Staggered Entrance Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-zinc-950 leading-[1.08] mb-6">
          <span className="block animate-fade-in">
            Turn missed opportunities
          </span>
          <span className="block text-zinc-500 font-medium animate-fade-in animation-delay-100">
            into booked customers.
          </span>
        </h1>

        {/* Niche Value Proposition */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed mb-10 animate-fade-in animation-delay-200">
          AI systems that catch every inbound lead your gym, clinic, or shop
          would otherwise lose — responding in seconds and booking directly into
          your schedule 24/7.
        </p>

        {/* CTAs with polished hover states */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-300">
          <div className="relative w-full sm:w-auto">
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-lg border border-accent/60"
              animate={
                shouldReduceMotion
                  ? { opacity: 0.6 }
                  : { opacity: [0.25, 0.65, 0.25], scale: [1, 1.01, 1] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            />
            <a
              href="/#demo"
              className="btn-accent relative w-full sm:w-auto px-7 py-3.5 rounded-lg text-base font-semibold flex items-center justify-center gap-2.5 group cursor-pointer shadow-sm hover:shadow-accent-glow"
            >
              <span>See it in action</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
          <a
            href="/#inquire"
            className="btn-secondary w-full sm:w-auto px-7 py-3.5 rounded-lg text-base font-medium flex items-center justify-center cursor-pointer"
          >
            Book a free 15-min call
          </a>
        </div>

        {/* Subtle Credibility / Reality metrics */}
        <div className="pt-8 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-400">
          <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
            <CheckCircle2 className="w-4 h-4 text-zinc-800 shrink-0" />
            <span className="font-medium">&lt; 60s Lead Response Time</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
            <CheckCircle2 className="w-4 h-4 text-zinc-800 shrink-0" />
            <span className="font-medium">Direct Calendar Integration</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
            <CheckCircle2 className="w-4 h-4 text-zinc-800 shrink-0" />
            <span className="font-medium">No Extra Hiring Needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
