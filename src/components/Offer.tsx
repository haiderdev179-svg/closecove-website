import React from "react";
import { FadeIn } from "./FadeIn";
import { MessageSquareText, CalendarCheck, RefreshCw } from "lucide-react";

export function Offer() {
  const setSpotlightPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--x", `${x}%`);
    event.currentTarget.style.setProperty("--y", `${y}%`);
  };

  const cards = [
    {
      step: "01",
      icon: MessageSquareText,
      title: "Instant Lead Response",
      subtitle: "Chat + Missed-Call Text-Back",
      description:
        "The moment an inbound caller hangs up or a website visitor asks a question, our AI responds instantly via SMS or web chat — securing the lead before they contact a competitor.",
    },
    {
      step: "02",
      icon: CalendarCheck,
      title: "Automated Booking",
      subtitle: "Calendar-Integrated Self-Scheduling",
      description:
        "Converts curious inquiries into confirmed appointments directly in your calendar. The AI handles qualification, checks live open slots, and sends instant calendar invites 24 hours a day.",
    },
    {
      step: "03",
      icon: RefreshCw,
      title: "Win-Back & Retention",
      subtitle: "Lapsed Member Reactivation",
      description:
        "Automatically identifies quiet members or past patients who haven't visited in 30+ days and triggers personalized, low-friction re-engagement messages to reactivate lost revenue.",
    },
  ];

  return (
    <section
      id="offer"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA]"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
            02 / What We Build
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
            Three simple systems.
            <br />
            <span className="text-zinc-500 font-normal">
              Zero missed opportunities.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 font-normal max-w-2xl mb-16 leading-relaxed">
            We don't sell bloated software dashboards. We install autonomous
            lead capture and booking systems that work invisibly in the
            background using your existing phone numbers and calendar.
          </p>
        </FadeIn>

        {/* 3 Offer Cards with smooth card-interactive hover lift & border shift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 120} className="h-full">
                <div
                  className="card-interactive h-full p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between group transition-all duration-700 ease-in-out hover:bg-[#0A1628] hover:border-[#0A1628] hover:shadow-[0_16px_32px_-12px_rgba(10,22,40,0.45)]"
                  onMouseMove={setSpotlightPosition}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-zinc-50/80 border border-zinc-200/80 flex items-center justify-center text-zinc-900 transition-all duration-700 ease-in-out group-hover:bg-[#1F3D4D] group-hover:border-[#2B536D] group-hover:text-[#EAF3FF]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-zinc-400">
                        {card.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-950 mb-1.5 tracking-tight transition-colors duration-700 ease-in-out group-hover:text-white">
                      {card.title}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-4 transition-colors duration-700 ease-in-out group-hover:text-white/65">
                      {card.subtitle}
                    </div>

                    <p className="text-sm text-zinc-600 leading-relaxed font-normal transition-colors duration-700 ease-in-out group-hover:text-white/75">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-8 mt-6 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-700 ease-in-out group-hover:text-white/60 group-hover:border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 transition-colors duration-700 ease-in-out group-hover:bg-white/70" />
                    <span>Autonomous & fully managed</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
