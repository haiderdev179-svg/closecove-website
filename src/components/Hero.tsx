"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA] dark:from-[#0a0a1a] dark:to-[#0a0a1a]">
      {/* Ambient glow elements */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtitle / positioning pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.05] backdrop-blur-sm text-xs uppercase tracking-widest mb-8 animate-fade-in shadow-sm dark:shadow-none transition-all duration-300 font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_3px_rgba(0,102,255,0.7)]" />
          <span><span className="text-zinc-900 dark:text-white/80">AI Automation</span> <span className="text-zinc-400 dark:text-white/40">for Local Businesses</span></span>
        </div>

        {/* Staggered Entrance Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-zinc-950 dark:text-white leading-[1.08] mb-6">
          <span className="block animate-fade-in">
            Turn missed opportunities
          </span>
          <span className="block text-zinc-500 dark:text-white/45 font-medium animate-fade-in animation-delay-100">
            into booked customers.
          </span>
        </h1>

        {/* Niche Value Proposition */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-white/50 font-normal leading-relaxed mb-10 animate-fade-in animation-delay-200">
          AI systems that catch every inbound lead your local business
          would otherwise lose — responding in seconds and booking directly into
          your schedule 24/7.
        </p>

        {/* CTAs with polished hover states */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in animation-delay-300">
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
              href="/#watch"
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

        {/* Explainer video — loads only when the visitor presses play */}
        <div
          id="watch"
          className="relative max-w-4xl mx-auto mb-14 rounded-2xl overflow-hidden border border-zinc-200 dark:border-transparent shadow-xl dark:shadow-none scroll-mt-28 animate-fade-in animation-delay-300 cursor-pointer group/video"
          onClick={!isPlaying ? handlePlay : undefined}
        >
          {/* Poster overlay — light bg, mixed text, wave footer */}
          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex flex-col bg-[#EDF2F7]/80 backdrop-blur-[16px]">
              {/* Center content */}
              <div className="flex-1 flex flex-col items-center justify-center pb-5">
                <h3 className="text-2xl sm:text-4xl md:text-[56px] font-extrabold tracking-tight leading-tight text-center px-5">
                  <span className="mr-2">🎬</span>
                  <span className="text-zinc-900">See </span>
                  <span className="text-accent">CloseCove </span>
                  <span className="text-zinc-900">in </span>
                  <span className="text-accent">Action</span>
                </h3>
                <div className="mt-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent flex items-center justify-center group-hover/video:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* Wave + footer bar */}
              <div className="w-full mt-auto">
                <svg viewBox="0 0 800 50" preserveAspectRatio="none" className="block w-full h-[30px]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,35 C150,10 350,48 500,30 C650,10 750,40 800,25 L800,50 L0,50 Z" fill="#0066FF"/>
                </svg>
                <div className="bg-accent px-5 py-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 text-[11px] text-white font-medium">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      <span>closecove.com</span>
                    </div>
                    <div className="w-px h-3.5 bg-white/40" />
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                      <span>hello@closecove.com</span>
                    </div>
                  </div>
                  <div className="text-right text-white">
                    <div className="text-lg font-bold leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>CloseCove</div>
                    <div className="text-[8px] opacity-85 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>More Leads. Loyal Customers. Real Growth.</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-auto block aspect-video"
            controls={isPlaying}
            playsInline
            preload="none"
            aria-label="CloseCove explainer video"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/videos/closecove-explainer-web.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Subtle Credibility / Reality metrics */}
        <div className="pt-8 border-t border-zinc-200 dark:border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-400">
          <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-white/55 text-sm">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">&lt; 30s Lead Response Time</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-white/55 text-sm">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">Direct Calendar Integration</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-white/55 text-sm">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span className="font-medium">No Extra Hiring Needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
