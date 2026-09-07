import React from "react";
import { FadeIn } from "./FadeIn";
import { PhoneMissed, Clock3, UserX } from "lucide-react";

export function Problem() {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 px-6 border-t border-white/10 dark-section relative overflow-hidden"
    >
      {/* Ambient glow elements for dark section */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
            01 / The Problem
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            You don't have a traffic problem.
            <br />
            <span className="text-white/60 font-normal">
              You have a lead leak.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-normal mb-16 max-w-3xl">
            Every week, high-intent prospects call, text, or message your
            business while you’re coaching clients, treating patients, or
            closed for the night. Faster response means significantly higher conversion.
            When your response takes hours, that revenue quietly walks down the street to your competitor.
          </p>
        </FadeIn>

        {/* 3 Problem Cards with defensible claims & hover polish */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100} className="h-full">
            <div className="dark-card h-full p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
                  <PhoneMissed className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Unanswered Calls
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Most calls during busy hours or after closing go unanswered.
                  Callers rarely leave voicemails — they move on to the next listing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-white/50">
                Key takeaway: Most calls during busy hours go unanswered
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="h-full">
            <div className="dark-card h-full p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
                  <Clock3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Delayed Inquiries
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Inquiries that sit unanswered lose momentum quickly. Leads that
                  don't hear back within a day rarely convert.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-white/50">
                Key takeaway: Leads that don't hear back within a day rarely convert
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="h-full">
            <div className="dark-card h-full p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5">
                  <UserX className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Silent Member Churn
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Members and regular patients quietly stop booking without a
                  word. Consistent follow-up directly grows repeat and referral revenue.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-white/50">
                Key takeaway: Consistent follow-up directly grows repeat and referral revenue
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
