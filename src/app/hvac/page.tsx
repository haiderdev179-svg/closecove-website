"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import {
  Phone,
  PhoneOff,
  MessageSquare,
  CalendarCheck,
  Check,
  ArrowRight,
  Shield,
  Bell,
  UserPlus,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function HVACPage() {
  return (
    <main className="min-h-screen bg-[#EAF2F6] dark:bg-[#0a0a1a] text-[#10222F] dark:text-[#EAF2F6] overflow-x-hidden" style={{ lineHeight: 1.55 }}>
      <FunnelNavbar />
      <HeroSection />
      <HowItWorksSection />
      <HandoffSection />
      <PricingSection />
      <FounderSection />
      <FunnelFooter />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */
function FunnelNavbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#EAF2F6]/80 dark:bg-[#0a0a1a]/80 border-b border-[#10222F]/5 dark:border-white/5">
      <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/images/closecove-logo.png"
            alt="CloseCove"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-extrabold text-[22px] text-[#10222F] dark:text-[#EAF2F6]">
            CloseCove
          </span>
        </Link>
        <a
          href="https://www.closecove.com/#inquire"
          className="inline-block bg-[#10222F] dark:bg-[#EAF2F6] text-[#EAF2F6] dark:text-[#10222F] px-[18px] py-2.5 rounded-full font-medium text-[15px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Headline + Phone Demo + Phone Mockup
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-14 items-center">
        {/* Left — Copy */}
        <div className="flex-[1_1_460px]">
          <FadeIn>
            <h1 className="text-[clamp(36px,5.4vw,64px)] font-extrabold leading-[1.04] tracking-[-0.02em] mb-5">
              Stop losing tune-ups and install quotes after 4&nbsp;p.m.
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-[19px] text-[#3B5565] dark:text-[#8FA8B8] mb-7 max-w-[520px]">
              When your office is closed or your techs are out on jobs,
              CloseCove texts the caller back within about a minute and books
              the appointment.
            </p>
          </FadeIn>

          {/* Phone demo box */}
          <FadeIn delay={200}>
            <div className="flex items-center gap-4 bg-white dark:bg-white/5 border border-[#C3D8E3] dark:border-white/10 rounded-[18px] px-5 py-4 max-w-[480px] mb-6">
              {/* Pulsing phone icon */}
              <div className="relative w-[52px] h-[52px] flex-none">
                <span className="absolute inset-0 rounded-full bg-[#F26A21] animate-ping opacity-30" />
                <span className="absolute inset-0 rounded-full bg-[#F26A21] animate-ping opacity-20" style={{ animationDelay: "0.7s" }} />
                <span className="absolute inset-0 rounded-full bg-[#F26A21] animate-ping opacity-10" style={{ animationDelay: "1.4s" }} />
                <div className="absolute inset-0 rounded-full bg-[#F26A21] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#10222F]" />
                </div>
              </div>
              <div>
                <div className="text-sm text-[#3B5565] dark:text-[#8FA8B8]">Try it yourself</div>
                <a href="tel:+18889950954" className="font-extrabold text-[28px] text-[#10222F] dark:text-[#EAF2F6] no-underline tracking-tight">
                  +1 (888) 995-0954
                </a>
                <div className="text-sm text-[#3B5565] dark:text-[#8FA8B8]">
                  Call, let it ring, and a text arrives within about a minute.
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.closecove.com/#inquire"
                className="inline-block bg-[#F26A21] text-[#10222F] px-7 py-4 rounded-full font-medium text-[17px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
              >
                Book a 15-minute call
              </a>
              <span className="text-[15px] text-[#3B5565] dark:text-[#8FA8B8]">
                No contract. 30-day money-back guarantee.
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right — Phone Mockup */}
        <FadeIn delay={200} className="flex-[1_1_340px] flex justify-center relative">
          <PhoneMockup />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHONE MOCKUP — Full realistic conversation
   ═══════════════════════════════════════════════════════════════ */
function PhoneMockup() {
  const bubbleVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.6 + 0.3, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FFD7BD] dark:bg-orange-500/10 top-[60px] left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Phone frame */}
      <div className="relative w-[300px] h-[600px] bg-[#10222F] dark:bg-[#1a1a2e] rounded-[42px] p-2.5 shadow-2xl shadow-black/20">
        <div className="bg-white dark:bg-[#0f0f1a] rounded-[32px] h-full px-3.5 pt-4 pb-3 flex flex-col gap-2 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: "none" }}>
          {/* Header */}
          <p className="text-[11px] text-center text-[#5B7384] dark:text-gray-500 mb-1">
            Sample: Morgan Heating and Cooling
          </p>

          {/* 1. Missed call */}
          <motion.div custom={0} variants={bubbleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#FDE8E8] dark:bg-red-950/40 rounded-[14px] px-3 py-2.5 flex items-center gap-2.5 text-[13px]">
            <PhoneOff className="w-5 h-5 text-[#B3261E] dark:text-red-400 flex-none" />
            <div>
              <p className="font-medium text-[#7A1A14] dark:text-red-300">Missed call</p>
              <p className="text-[11px] text-[#7A1A14]/70 dark:text-red-400/60">6:42 p.m. · Unknown caller</p>
            </div>
          </motion.div>

          {/* 2. Bot */}
          <BotBubble i={1} variants={bubbleVariants}>
            Hi, thanks for calling Morgan Heating! Sorry we missed you. Is this a repair, a tune-up, or a new system quote?
          </BotBubble>

          {/* 3. Customer */}
          <CustomerBubble i={2} variants={bubbleVariants}>
            No heat upstairs
          </CustomerBubble>

          {/* 4. Bot */}
          <BotBubble i={3} variants={bubbleVariants}>
            Got it — is this a furnace or a heat pump?
          </BotBubble>

          {/* 5. Customer */}
          <CustomerBubble i={4} variants={bubbleVariants}>
            Furnace
          </CustomerBubble>

          {/* 6. Bot */}
          <BotBubble i={5} variants={bubbleVariants}>
            What day works best for you?
          </BotBubble>

          {/* 7. Customer */}
          <CustomerBubble i={6} variants={bubbleVariants}>
            Tomorrow if possible
          </CustomerBubble>

          {/* 8. Bot */}
          <BotBubble i={7} variants={bubbleVariants}>
            I have 8:30 a.m. or 2:00 p.m. tomorrow. Which works?
          </BotBubble>

          {/* 9. Customer */}
          <CustomerBubble i={8} variants={bubbleVariants}>
            8:30 works
          </CustomerBubble>

          {/* 10. Bot */}
          <BotBubble i={9} variants={bubbleVariants}>
            Great. Can I get your name and address?
          </BotBubble>

          {/* 11. Customer */}
          <CustomerBubble i={10} variants={bubbleVariants}>
            Mike Davis, 412 Oak Hill Dr
          </CustomerBubble>

          {/* 12. Bot */}
          <BotBubble i={11} variants={bubbleVariants}>
            And your email for the confirmation?
          </BotBubble>

          {/* 13. Customer */}
          <CustomerBubble i={12} variants={bubbleVariants}>
            mike@email.com
          </CustomerBubble>

          {/* 14. Booked confirmation */}
          <motion.div custom={13} variants={bubbleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#E4F4E8] dark:bg-green-950/40 border border-[#9BD0A8] dark:border-green-700 rounded-[14px] px-3 py-2.5 flex items-center gap-2.5 text-[13px]">
            <div className="w-5 h-5 rounded-full bg-[#1E7B3A] flex items-center justify-center flex-none">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <div>
              <p className="font-medium text-[#12461F] dark:text-green-300">Booked: tomorrow, 8:30 a.m.</p>
              <p className="text-[11px] text-[#12461F]/70 dark:text-green-400/60">Mike Davis · 412 Oak Hill Dr</p>
              <p className="text-[11px] text-[#12461F]/70 dark:text-green-400/60">Owner alerted instantly</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BotBubble({ children, i, variants }: { children: React.ReactNode; i: number; variants: Record<string, unknown> }) {
  return (
    <motion.div custom={i} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="bg-[#E3EEF4] dark:bg-[#1a2a38] rounded-2xl rounded-bl-sm px-3 py-2.5 text-[13px] text-[#10222F] dark:text-gray-200 max-w-[88%]">
      {children}
    </motion.div>
  );
}

function CustomerBubble({ children, i, variants }: { children: React.ReactNode; i: number; variants: Record<string, unknown> }) {
  return (
    <motion.div custom={i} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="bg-[#10222F] dark:bg-blue-600 text-white rounded-2xl rounded-br-sm px-3 py-2.5 text-[13px] max-w-[80%] self-end">
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS — 3 Cards with mini visual mockups
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-[1120px] mx-auto px-6">
        <FadeIn>
          <h2 className="font-extrabold text-[clamp(28px,4vw,42px)] tracking-[-0.01em] mb-10">
            What happens when you miss a call
          </h2>
        </FadeIn>

        <div className="flex flex-wrap gap-6">
          {/* Card 1 — Missed call */}
          <FadeIn delay={0} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] dark:bg-white/5 rounded-[20px] p-7 h-full">
              {/* Mini phone ringing visual */}
              <div className="bg-white dark:bg-white/10 rounded-xl p-4 mb-5 border border-[#C3D8E3]/50 dark:border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 flex-none">
                    <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#10222F] dark:text-[#EAF2F6]">Incoming call</p>
                    <p className="text-[11px] text-[#3B5565] dark:text-[#8FA8B8]">+1 (804) 555-0132</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-red-500 text-white text-[12px] font-medium text-center py-1.5 rounded-lg">
                    Decline
                  </div>
                  <div className="flex-1 bg-green-500 text-white text-[12px] font-medium text-center py-1.5 rounded-lg">
                    Accept
                  </div>
                </div>
                <p className="text-[11px] text-center text-red-500 dark:text-red-400 mt-2 font-medium">
                  ✕ Missed
                </p>
              </div>
              <h3 className="font-bold text-[22px] mb-2">
                A customer calls and you can&apos;t answer
              </h3>
              <p className="text-[#3B5565] dark:text-[#8FA8B8]">
                You&apos;re on a roof, under a furnace, or the office is closed.
                The call goes unanswered.
              </p>
            </div>
          </FadeIn>

          {/* Card 2 — Auto text */}
          <FadeIn delay={120} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] dark:bg-white/5 rounded-[20px] p-7 h-full">
              {/* Mini chat preview */}
              <div className="bg-white dark:bg-white/10 rounded-xl p-4 mb-5 border border-[#C3D8E3]/50 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-[#F26A21]" />
                  <p className="text-[11px] font-medium text-[#3B5565] dark:text-[#8FA8B8]">Auto-reply sent · 58s later</p>
                </div>
                <div className="bg-[#E3EEF4] dark:bg-[#1a2a38] rounded-xl rounded-bl-sm px-3 py-2 text-[12px] text-[#10222F] dark:text-gray-200 mb-2">
                  Hi! Sorry we missed your call. How can we help — repair, tune-up, or quote?
                </div>
                <div className="bg-[#10222F] dark:bg-blue-600 text-white rounded-xl rounded-br-sm px-3 py-2 text-[12px] max-w-[85%] ml-auto">
                  No heat. Can someone come out?
                </div>
              </div>
              <h3 className="font-bold text-[22px] mb-2">
                They get a text within about a minute
              </h3>
              <p className="text-[#3B5565] dark:text-[#8FA8B8]">
                CloseCove answers common questions and offers times from your
                calendar — before they call the next company.
              </p>
            </div>
          </FadeIn>

          {/* Card 3 — Booked alert */}
          <FadeIn delay={240} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] dark:bg-white/5 rounded-[20px] p-7 h-full">
              {/* Mini notification + calendar + dashboard visual */}
              <div className="bg-white dark:bg-white/10 rounded-xl p-4 mb-5 border border-[#C3D8E3]/50 dark:border-white/5 space-y-2.5">
                {/* Push notification */}
                <div className="bg-[#EAF2F6] dark:bg-white/5 rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <Bell className="w-4 h-4 text-[#F26A21] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#10222F] dark:text-[#EAF2F6]">New booking</p>
                    <p className="text-[10px] text-[#3B5565] dark:text-[#8FA8B8]">Mike Davis — Furnace repair, 8:30 a.m.</p>
                  </div>
                </div>
                {/* Calendar entry */}
                <div className="bg-[#E4F4E8] dark:bg-green-950/30 rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-[#1E7B3A] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#12461F] dark:text-green-300">Added to calendar</p>
                    <p className="text-[10px] text-[#12461F]/70 dark:text-green-400/60">Tomorrow · 8:30 a.m. · 412 Oak Hill Dr</p>
                  </div>
                </div>
                {/* Dashboard lead */}
                <div className="bg-[#E3EEF4] dark:bg-[#1a2a38] rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <UserPlus className="w-4 h-4 text-[#0066FF] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#10222F] dark:text-[#EAF2F6]">Lead added to dashboard</p>
                    <p className="text-[10px] text-[#3B5565] dark:text-[#8FA8B8]">mike@email.com · +1 (804) 555-0132</p>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-[22px] mb-2">
                You get an alert when it&apos;s booked
              </h3>
              <p className="text-[#3B5565] dark:text-[#8FA8B8]">
                A push notification, a calendar entry, and the lead in your
                dashboard — all automatic.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HANDOFF PROMISE
   ═══════════════════════════════════════════════════════════════ */
function HandoffSection() {
  return (
    <section className="py-[72px] bg-[#10222F] dark:bg-[#060612]">
      <div className="max-w-[880px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-start gap-5">
            <Shield className="w-10 h-10 text-[#F26A21] flex-none mt-1" />
            <p className="text-[clamp(26px,4vw,42px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#EAF2F6]">
              If it doesn&apos;t know the answer, it hands the conversation to
              you or your office.{" "}
              <span className="text-[#F26A21]">It never guesses.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRICING
   ═══════════════════════════════════════════════════════════════ */
function PricingSection() {
  const checks = [
    "No contract",
    "30-day money-back guarantee if you don’t see clear results",
    "Dashboard with missed calls and jobs booked",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-12 items-center">
        {/* Left */}
        <FadeIn className="flex-[1_1_320px]">
          <h2 className="font-extrabold text-[clamp(28px,4vw,42px)] tracking-[-0.01em] mb-4">
            Simple pricing
          </h2>
          <p className="text-[18px] text-[#3B5565] dark:text-[#8FA8B8] max-w-[440px]">
            Getting started is one short form, about 10 minutes. Your system is
            live in 7 to 10 business days.
          </p>
        </FadeIn>

        {/* Right — Card */}
        <FadeIn delay={150} className="flex-[1_1_340px]">
          <div className="bg-white dark:bg-white/5 border border-[#C3D8E3] dark:border-white/10 rounded-3xl p-8">
            <div className="font-extrabold text-[44px] leading-none">
              $300{" "}
              <span className="text-[18px] font-semibold text-[#3B5565] dark:text-[#8FA8B8]">
                setup
              </span>
            </div>
            <div className="font-extrabold text-[44px] leading-[1.2]">
              $150{" "}
              <span className="text-[18px] font-semibold text-[#3B5565] dark:text-[#8FA8B8]">
                per month after your first 30 days
              </span>
            </div>

            <div className="h-px bg-[#C3D8E3] dark:bg-white/10 my-5" />

            <div className="space-y-3 text-[17px]">
              {checks.map((txt) => (
                <div key={txt} className="flex gap-2.5 items-start">
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="flex-none mt-0.5">
                    <path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="#1E7B3A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOUNDER + CTA
   ═══════════════════════════════════════════════════════════════ */
function FounderSection() {
  return (
    <section id="book" className="py-16 md:py-20 bg-[#F26A21]">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-10 items-center">
        {/* Left — Haider */}
        <div className="flex-[1_1_420px] flex gap-5 items-center">
          <Image
            src="/images/haider.png"
            alt="Haider Ali — Founder, CloseCove"
            width={88}
            height={88}
            className="rounded-full object-cover flex-none border-2 border-[#10222F]/20"
          />
          <p className="text-[19px] max-w-[520px] text-[#10222F]">
            I&apos;m Haider, and I built CloseCove myself. We&apos;re onboarding
            our first local clients, which is why the guarantee is on us — not
            you.
          </p>
        </div>

        {/* Right — CTA */}
        <div className="flex-[1_1_280px]">
          <a
            href="https://www.closecove.com/#inquire"
            className="inline-block bg-[#10222F] text-[#EAF2F6] px-8 py-[18px] rounded-full font-medium text-[18px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
          >
            Book a 15-minute call
          </a>
          <div className="mt-3 text-[15px] text-[#10222F]">
            Or call the demo first:{" "}
            <a href="tel:+18889950954" className="font-semibold text-[#10222F] no-underline underline-offset-2 hover:underline">
              +1 (888) 995-0954
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function FunnelFooter() {
  return (
    <footer className="py-7 border-t border-[#10222F]/5 dark:border-white/5">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-6 text-sm text-[#3B5565] dark:text-[#8FA8B8]">
        <span>CloseCove</span>
        <a href="mailto:hello@closecove.com" className="no-underline hover:text-[#10222F] dark:hover:text-[#EAF2F6] transition-colors">
          hello@closecove.com
        </a>
        <a href="tel:+18889950954" className="no-underline hover:text-[#10222F] dark:hover:text-[#EAF2F6] transition-colors">
          +1 (888) 995-0954
        </a>
        <span className="ml-auto">© {new Date().getFullYear()} CloseCove</span>
      </div>
    </footer>
  );
}