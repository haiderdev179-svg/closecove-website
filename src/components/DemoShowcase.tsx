import React from "react";
import { FadeIn } from "./FadeIn";
import { ExternalLink, Check, MonitorSmartphone } from "lucide-react";

export function DemoShowcase() {
  const DEMO_URL = "https://demo.closecove.com/";

  return (
    <section
      id="demo"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 dark:border-transparent bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA] dark:from-[#0f0f24] dark:to-[#0f0f24] relative overflow-hidden"
    >
      {/* Ambient glow elements for demo section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-white/35 font-semibold mb-3">
            03 / Live Working Demo
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
                Don't take our word for it.
                <br />
                <span className="text-zinc-500 dark:text-white/45 font-normal">
                  Try the system right now.
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-white/50 font-normal max-w-xl">
                This is a real working example — pick your industry inside the demo
                and test asking questions or booking an appointment yourself.
              </p>
            </div>
            <div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-6 py-3.5 rounded-lg text-base font-semibold inline-flex items-center gap-2 group whitespace-nowrap cursor-pointer shadow-sm hover:shadow-accent-glow"
              >
                <span>Launch Demo</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Demo Showcase Container */}
        <FadeIn delay={150}>
          <div className="card-interactive rounded-2xl border border-zinc-200/80 dark:border-transparent bg-white dark:bg-[#1a1a3a] shadow-md dark:shadow-none overflow-hidden ring-1 ring-zinc-200/50 dark:ring-transparent">
            {/* Top Mockup Header */}
            <div className="px-6 py-4 border-b border-zinc-200/80 dark:border-white/[0.06] bg-zinc-50/90 dark:bg-white/[0.03] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-white/40 hidden sm:inline">
                  Demo: See It In Action
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-white/60 bg-white dark:bg-white/[0.05] px-3 py-1 rounded-md border border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>demo.closecove.com</span>
              </div>
            </div>

            {/* Inner Content Grid */}
            <FadeIn delay={200}>
              <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Looping product preview */}
                <div className="lg:col-span-7 lg:order-last">
                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-white/[0.06] shadow-lg bg-[#0F172A]">
                    <video
                      className="w-full h-auto block aspect-video"
                      src="/videos/closecove-demo-loop.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="Example: CloseCove texts back a missed call, books the appointment, alerts the owner and adds it to the calendar"
                    />
                  </div>
                  <p className="mt-3 text-xs text-zinc-500 dark:text-white/35 text-center">
                    Example conversation · missed call → booked → owner alerted → on the calendar
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-white/40 tracking-wider uppercase">
                    <MonitorSmartphone className="w-4 h-4 text-zinc-600 dark:text-white/50" />
                    <span>Live AI Receptionist Demo</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight">
                    Experience how your prospects will be greeted, qualified, and booked.
                  </h3>

                  <p className="text-zinc-600 dark:text-white/50 text-sm sm:text-base leading-relaxed">
                    Inside this live demo, we demonstrate how an automated conversational assistant handles service questions, availability, and instant bookings so your team can stay focused on the people in front of them while the assistant handles incoming questions and appointments.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-sm text-zinc-700 dark:text-white/55">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span>Ask about services, pricing, or availability</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-zinc-700 dark:text-white/55">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span>Walk through the frictionless booking flow</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-zinc-700 dark:text-white/55">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span>Inspect the autonomous calendar reservation confirmation</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-accent-glow"
                    >
                      <span>Launch Demo</span>
                      <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
