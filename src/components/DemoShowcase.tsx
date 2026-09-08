import React from "react";
import { FadeIn } from "./FadeIn";
import { ExternalLink, Check, MonitorSmartphone } from "lucide-react";

export function DemoShowcase() {
  const DEMO_URL = "https://fitflow-demo-xi.vercel.app";

  return (
    <section
      id="demo"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA] relative overflow-hidden"
    >
      {/* Ambient glow elements for demo section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
            03 / Live Working Demo
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
                Don't take our word for it.
                <br />
                <span className="text-zinc-500 font-normal">
                  Try the system right now.
                </span>
              </h2>
              <p className="text-lg text-zinc-600 font-normal max-w-xl">
                This is a real working example built for a high-intensity fitness
                club — test asking questions and booking a trial yourself.
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

        {/* Demo Showcase Container: Interactive Lift & Border Highlight */}
        <FadeIn delay={150}>
          <div className="card-interactive rounded-2xl border border-zinc-200/80 bg-white shadow-md overflow-hidden ring-1 ring-zinc-200/50">
            {/* Top Mockup Header */}
            <div className="px-6 py-4 border-b border-zinc-200/80 bg-zinc-50/90 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="ml-2 text-xs font-mono text-zinc-500 hidden sm:inline">
                  Client Example: FitFlow Fitness Club
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 bg-white px-3 py-1 rounded-md border border-zinc-200/80 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>fitflow-demo-xi.vercel.app</span>
              </div>
            </div>

            {/* Inner Content Grid */}
            <FadeIn delay={200}>
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 tracking-wider uppercase">
                    <MonitorSmartphone className="w-4 h-4 text-zinc-600" />
                    <span>Live AI Receptionist</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                    Experience how your prospects will be greeted, qualified, and booked.
                  </h3>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    Inside the FitFlow demo, we demonstrate how an automated conversational assistant handles class schedules, membership questions, and immediate trial class bookings so your team can stay focused on the people in front of them while the assistant handles incoming questions and trial bookings.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-zinc-900" />
                      </div>
                      <span>Ask about membership tiers, peak hours, or trainer credentials</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-zinc-900" />
                      </div>
                      <span>Walk through the frictionless 30-second trial booking flow</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-zinc-900" />
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
                      <span>Launch FitFlow Demo</span>
                      <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Visual Preview / Simulated Chat Card (Airy Light Gray Surface) */}
                <div className="lg:col-span-5 bg-zinc-50/80 border border-zinc-200/80 rounded-xl p-6 space-y-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                    Live Interaction Preview
                  </div>
                  
                  {/* Simulated message bubbles */}
                  <div className="space-y-3 font-sans text-xs sm:text-sm">
                    <div className="bg-white text-zinc-800 p-3 rounded-lg rounded-tl-none max-w-[85%] border border-zinc-200 shadow-xs">
                      Hi there! Looking to try a workout at FitFlow this week?
                    </div>
                    <div className="bg-zinc-200 text-zinc-900 font-medium p-3 rounded-lg rounded-tr-none ml-auto max-w-[85%] border border-zinc-300 shadow-xs">
                      Yes, what time is the morning HIIT class tomorrow?
                    </div>
                    <div className="bg-white text-zinc-800 p-3 rounded-lg rounded-tl-none max-w-[85%] border border-zinc-200 shadow-xs">
                      We have spots open at 7:00 AM and 8:30 AM. Would you like me to reserve your free first trial spot for the 7:00 AM class?
                    </div>
                    <div className="bg-zinc-200 text-zinc-900 font-medium p-3 rounded-lg rounded-tr-none ml-auto max-w-[85%] border border-zinc-300 shadow-xs">
                      7:00 AM works perfectly!
                    </div>
                    <div className="bg-white text-zinc-900 font-medium p-3 rounded-lg rounded-tl-none max-w-[85%] border border-zinc-200 shadow-xs flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>Locked in. Your trial's on the calendar.</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-200 text-center">
                    <span className="text-xs text-zinc-500 font-mono">
                      Your team stays focused while CloseCove handles incoming leads.
                    </span>
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
