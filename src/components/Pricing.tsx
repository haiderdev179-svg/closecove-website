"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectTier?: (tier: "starter" | "growth") => void;
}

export function Pricing({ onSelectTier }: PricingProps) {
  const handleSelect = (tier: "starter" | "growth") => {
    if (onSelectTier) {
      onSelectTier(tier);
    }
    const formElement = document.getElementById("inquire");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA]"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
            04 / Transparent Investment
          </div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Straightforward pricing.
              <br />
              <span className="text-zinc-500 font-normal">
                No surprises or hidden retainers.
              </span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Local business owners shouldn't have to jump on high-pressure sales
              calls just to see a price tag.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards (Airy Light Cards with Polished Hover Micro-interactions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Tier */}
          <FadeIn delay={100} className="h-full">
            <div className="card-interactive h-full rounded-2xl bg-white border border-zinc-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-sm ring-1 ring-zinc-200/50">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Starter Tier
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                  Lead Capture & Booking
                </h3>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  Ideal for solo clinics, studios, and single-location businesses
                  aiming to never lose a missed phone call again.
                </p>

                <div className="mb-8 p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-zinc-950 tracking-tight">
                      $400
                    </span>
                    <span className="text-sm text-zinc-500">one-time setup</span>
                  </div>
                  <div className="text-sm text-zinc-800 mt-1 flex items-baseline gap-1">
                    <span className="font-semibold text-zinc-950">+$200</span>
                    <span className="text-zinc-500">/ month hosting & maintenance</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                    What is included:
                  </div>
                  {[
                    "24/7 Missed-Call AI Text-Back",
                    "Custom Website Booking Chat Agent",
                    "Google Calendar Sync",
                    "Up to 300 conversations per month",
                    "Instant SMS alerts for new leads",
                    "No long-term contract — cancel anytime",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-zinc-700"
                    >
                      <Check className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelect("starter")}
                className="btn-secondary w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-accent-glow"
              >
                <span>Select Starter Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </FadeIn>

          {/* Growth Tier (Recommended, Intensified Accent Border & Glow on Hover) */}
          <FadeIn delay={200} className="h-full">
            <div className="h-full rounded-2xl bg-white border-2 border-accent/75 hover:border-accent p-8 sm:p-10 flex flex-col justify-between relative shadow-md hover:shadow-xl hover:shadow-accent-glow hover:-translate-y-1 transition-all duration-300 ease-out ring-1 ring-accent/20">
              {/* Accent Badge */}
              <div className="absolute -top-3 right-8 px-3.5 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                Most Popular
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2 font-semibold">
                  Growth Tier
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                  Capture & Retention
                </h3>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  For growing practices and high-traffic gyms wanting to both
                  capture every new lead and systematically revive lapsed clients.
                </p>

                <div className="mb-8 p-4 rounded-xl bg-blue-50/60 border border-blue-100/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-zinc-950 tracking-tight">
                      $700
                    </span>
                    <span className="text-sm text-zinc-500">one-time setup</span>
                  </div>
                  <div className="text-sm text-zinc-800 mt-1 flex items-baseline gap-1">
                    <span className="font-semibold text-zinc-950">+$350</span>
                    <span className="text-zinc-500">/ month fully managed</span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                    What is included:
                  </div>
                  <div className="text-xs text-zinc-500 font-medium pb-1">
                    Everything in Starter, plus:
                  </div>
                  {[
                    "Automated Win-Back & Retention Workflows",
                    "Custom Lead Qualification & Screening Logic",
                    "Unlimited conversations per month",
                    "Monthly check-in call to review performance",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-zinc-800"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelect("growth")}
                className="btn-accent w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-accent-glow"
              >
                <span>Select Growth Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Reassurance footnote */}
        <FadeIn delay={300}>
          <div className="text-center mt-12 text-sm text-zinc-500">
            Need multi-location deployment or tailored custom integration?{" "}
            <a
              href="#inquire"
              className="text-zinc-950 font-medium underline underline-offset-4 hover:text-accent transition-colors duration-300"
            >
              Submit an inquiry below
            </a>{" "}
            and we'll formulate a custom scope.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
