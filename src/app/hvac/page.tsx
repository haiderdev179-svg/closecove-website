"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import {
  Phone,
  PhoneOff,
  MessageSquare,
  CalendarCheck,
  Check,
  Shield,
  Bell,
  UserPlus,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function HVACPage() {
  return (
    <main className="min-h-screen bg-[#EAF2F6] text-[#10222F] overflow-x-hidden" style={{ lineHeight: 1.55 }}>
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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#EAF2F6]/80 border-b border-[#10222F]/5">
      <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <Image
            src="/images/closecove-logo-hvac.png"
            alt="CloseCove"
            width={180}
            height={40}
            className="h-9 w-auto"
          />
        </Link>
        <a
          href="#book"
          className="inline-block bg-[#10222F] text-[#EAF2F6] px-[18px] py-2.5 rounded-full font-medium text-[15px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
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
            <p className="text-[19px] text-[#3B5565] mb-7 max-w-[520px]">
              When your office is closed or your techs are out on jobs,
              CloseCove texts the caller back within 60 seconds and books
              the appointment.
            </p>
          </FadeIn>

          {/* Phone demo box */}
          <FadeIn delay={200}>
            <div className="flex items-center gap-4 bg-white border border-[#C3D8E3] rounded-[18px] px-5 py-4 max-w-[480px] mb-6">
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
                <div className="text-sm text-[#3B5565]">Try it yourself</div>
                <a href="tel:+18889950954" className="font-extrabold text-[28px] text-[#10222F] no-underline tracking-tight">
                  +1 (888) 995-0954
                </a>
                <div className="text-sm text-[#3B5565]">
                  Call, let it ring, and a text arrives within 60 seconds.
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#book"
                className="inline-block bg-[#F26A21] text-[#10222F] px-7 py-4 rounded-full font-medium text-[17px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
              >
                Book a 15-minute call
              </a>
              <span className="text-[15px] text-[#3B5565]">
                No contract. First month free.
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right — Phone Mockup (static preview, links to demo) */}
        <FadeIn delay={200} className="flex-[1_1_340px] flex justify-center relative">
          <PhoneMockup />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHONE MOCKUP — Collects details: issue, day, name, address, email
   ═══════════════════════════════════════════════════════════════ */
function PhoneMockup() {
  const bv: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 1.2 + 0.3, duration: 0.5, ease: [0, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="relative">
      <p className="text-[11px] uppercase tracking-[1.5px] text-[#3B5565] font-medium text-center mb-3">Sample conversation</p>
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#FFD7BD] top-[90px] left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative w-[340px] bg-[#10222F] rounded-[42px] p-3 shadow-2xl shadow-black/20">
        <div className="bg-white rounded-[32px] px-4 pt-4 pb-4 flex flex-col gap-[6px]">
          <p className="text-[12px] text-center text-[#5B7384] mb-0.5">Morgan Heating and Cooling</p>

          {/* Missed call */}
          <motion.div custom={0} variants={bv} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#FDE8E8] rounded-[12px] px-3 py-1.5 flex items-center gap-2.5 text-[13px]">
            <PhoneOff className="w-5 h-5 text-[#B3261E] flex-none" />
            <div>
              <p className="font-semibold text-[#7A1A14] text-[13px]">Missed call</p>
              <p className="text-[10px] text-[#7A1A14]/60">6:42 p.m.</p>
            </div>
          </motion.div>

          <Bot i={1} v={bv}>Hi! Sorry we missed you. Is this for a repair, tune-up, or new system?</Bot>
          <Cust i={2} v={bv}>Furnace won&apos;t turn on</Cust>
          <Bot i={3} v={bv}>What day works best for a tech visit?</Bot>
          <Cust i={4} v={bv}>Tomorrow morning if possible</Cust>
          <Bot i={5} v={bv}>8:30 a.m. is open. Can I get your name and address?</Bot>
          <Cust i={6} v={bv}>Mike Davis, 412 Oak Hill Dr</Cust>
          <Bot i={7} v={bv}>And your email for the confirmation?</Bot>
          <Cust i={8} v={bv}>mike@email.com</Cust>

          {/* Booked */}
          <motion.div custom={9} variants={bv} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#E4F4E8] border border-[#9BD0A8] rounded-[12px] px-3 py-1.5 flex items-center gap-2.5 text-[13px]">
            <div className="w-5 h-5 rounded-full bg-[#1E7B3A] flex items-center justify-center flex-none">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <div>
              <p className="font-semibold text-[#12461F] text-[13px]">Booked: tomorrow, 8:30 a.m.</p>
              <p className="text-[10px] text-[#12461F]/60">Confirmation sent to mike@email.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Bot({ children, i, v }: { children: React.ReactNode; i: number; v: Variants }) {
  return (
    <motion.div custom={i} variants={v} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="bg-[#E3EEF4] rounded-xl rounded-bl-sm px-3 py-1.5 text-[13px] leading-[1.4] text-[#10222F] max-w-[88%]">
      {children}
    </motion.div>
  );
}

function Cust({ children, i, v }: { children: React.ReactNode; i: number; v: Variants }) {
  return (
    <motion.div custom={i} variants={v} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="bg-[#10222F] text-white rounded-xl rounded-br-sm px-3 py-1.5 text-[13px] leading-[1.4] max-w-[75%] self-end">
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS — 3 Cards with mini visual mockups
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <FadeIn>
          <h2 className="font-extrabold text-[clamp(28px,4vw,42px)] tracking-[-0.01em] mb-10">
            What happens when you miss a call
          </h2>
        </FadeIn>

        <div className="flex flex-wrap gap-6">
          {/* Card 1 — Missed call */}
          <FadeIn delay={0} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] rounded-[20px] p-7 h-full">
              <div className="bg-white rounded-xl p-4 mb-5 border border-[#C3D8E3]/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 flex-none">
                    <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-red-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#10222F]">Incoming call</p>
                    <p className="text-[11px] text-[#3B5565]">+1 (804) 555-0132</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-red-500 text-white text-[12px] font-medium text-center py-1.5 rounded-lg">Decline</div>
                  <div className="flex-1 bg-green-500 text-white text-[12px] font-medium text-center py-1.5 rounded-lg">Accept</div>
                </div>
                <p className="text-[11px] text-center text-red-500 mt-2 font-medium">✕ Missed</p>
              </div>
              <h3 className="font-bold text-[22px] mb-2">A customer calls and you can&apos;t answer</h3>
              <p className="text-[#3B5565]">You&apos;re on a roof, under a furnace, or the office is closed. The call goes unanswered.</p>
            </div>
          </FadeIn>

          {/* Card 2 — Auto text */}
          <FadeIn delay={120} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] rounded-[20px] p-7 h-full">
              <div className="bg-white rounded-xl p-4 mb-5 border border-[#C3D8E3]/50">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-[#F26A21]" />
                  <p className="text-[11px] font-medium text-[#3B5565]">Auto-reply sent · 58s later</p>
                </div>
                <div className="bg-[#E3EEF4] rounded-xl rounded-bl-sm px-3 py-2 text-[12px] text-[#10222F] mb-2">
                  Hi! Sorry we missed your call. How can we help — repair, tune-up, or quote?
                </div>
                <div className="bg-[#10222F] text-white rounded-xl rounded-br-sm px-3 py-2 text-[12px] max-w-[85%] ml-auto">
                  No heat. Can someone come out?
                </div>
              </div>
              <h3 className="font-bold text-[22px] mb-2">They get a text within 60 seconds</h3>
              <p className="text-[#3B5565]">CloseCove answers common questions and offers times from your calendar — before they call the next company.</p>
            </div>
          </FadeIn>

          {/* Card 3 — Booked alert */}
          <FadeIn delay={240} className="flex-[1_1_280px]">
            <div className="bg-[#EAF2F6] rounded-[20px] p-7 h-full">
              <div className="bg-white rounded-xl p-4 mb-5 border border-[#C3D8E3]/50 space-y-2.5">
                <div className="bg-[#EAF2F6] rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <Bell className="w-4 h-4 text-[#F26A21] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#10222F]">New booking</p>
                    <p className="text-[10px] text-[#3B5565]">Mike Davis — Furnace repair, 8:30 a.m.</p>
                  </div>
                </div>
                <div className="bg-[#E4F4E8] rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-[#1E7B3A] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#12461F]">Added to calendar</p>
                    <p className="text-[10px] text-[#12461F]/70">Tomorrow · 8:30 a.m. · 412 Oak Hill Dr</p>
                  </div>
                </div>
                <div className="bg-[#E3EEF4] rounded-lg px-3 py-2 flex items-center gap-2.5">
                  <UserPlus className="w-4 h-4 text-[#0066FF] flex-none" />
                  <div>
                    <p className="text-[11px] font-semibold text-[#10222F]">Lead added to dashboard</p>
                    <p className="text-[10px] text-[#3B5565]">mike@email.com · +1 (804) 555-0132</p>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-[22px] mb-2">You get an alert when it&apos;s booked</h3>
              <p className="text-[#3B5565]">A push notification, a calendar entry, and the lead in your dashboard — all automatic.</p>
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
    <section className="py-[72px] bg-[#10222F]">
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
   PRICING — Polished card
   ═══════════════════════════════════════════════════════════════ */
function PricingSection() {
  const checks = [
    "Automatic text-back within 60 seconds",
    "Smart conversation that books appointments",
    "Dashboard with missed calls and jobs booked",
    "Instant alerts when a job is booked",
    "No contract — cancel anytime",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-12 lg:gap-20 items-start">
        {/* Left */}
        <FadeIn className="flex-[1_1_320px] pt-4">
          <h2 className="font-extrabold text-[clamp(28px,4vw,42px)] tracking-[-0.01em] mb-4">
            Simple pricing
          </h2>
          <p className="text-[18px] text-[#3B5565] max-w-[440px] leading-relaxed">
            One short form, about 10 minutes. Your system is live in 7–10
            business days.
          </p>
        </FadeIn>

        {/* Right — Dark premium card */}
        <FadeIn delay={150} className="flex-[1_1_380px]">
          <div className="bg-[#10222F] rounded-[24px] p-8 md:p-10 shadow-2xl shadow-black/20">
            {/* Split prices */}
            <div className="flex justify-between items-start mb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[1px] text-[#8FA8B8] mb-1">Setup</p>
                <p className="font-extrabold text-[42px] leading-none tracking-tight text-white">$300</p>
              </div>
              <div className="w-px bg-[#3B5565] self-stretch mx-4" />
              <div>
                <p className="text-[11px] uppercase tracking-[1px] text-[#8FA8B8] mb-1">Monthly</p>
                <p className="font-extrabold text-[42px] leading-none tracking-tight text-white">$150</p>
              </div>
            </div>

            <p className="text-[13px] text-[#8FA8B8] mb-6 pb-6 border-b border-[#3B5565]">
              Your first month of service is free. No contract — cancel anytime.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {checks.map((txt) => (
                <div key={txt} className="flex gap-3 items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
                    <path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#F26A21" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[14px] text-[#C3D8E3]">{txt}</span>
                </div>
              ))}
            </div>

            {/* 30-day guarantee */}
            <div className="flex items-center gap-2 mb-6 bg-[#1E7B3A]/15 rounded-xl px-4 py-3">
              <Shield className="w-5 h-5 text-[#4ADE80] flex-none" />
              <span className="text-[13px] text-[#4ADE80] font-medium">$300 setup fee refunded if no clear results in 30 days</span>
            </div>

            {/* CTA */}
            <a
              href="#book"
              className="block bg-[#F26A21] text-white text-center px-7 py-4 rounded-full font-semibold text-[17px] no-underline transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
            >
              Get started
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOUNDER + BOOKING FORM
   ═══════════════════════════════════════════════════════════════ */
function FounderSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contact: "",
    challenge: "",
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          businessType: "HVAC",
          selectedTier: "HVAC Funnel — Starter Plan ($300 + $150/mo)",
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to submit inquiry.");
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="py-16 md:py-24 bg-[#10222F]">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Founder intro */}
        <FadeIn>
          <div className="flex gap-5 items-center mb-12 max-w-[640px]">
            <Image
              src="/images/haider.png"
              alt="Haider Ali — Founder, CloseCove"
              width={72}
              height={72}
              className="rounded-full object-cover flex-none border-2 border-white/20"
            />
            <p className="text-[17px] text-[#C3D8E3]">
              I&apos;m Haider, and I built CloseCove myself. We&apos;re onboarding
              our first local clients, which is why the guarantee is on us — not
              you.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap gap-12 lg:gap-20 items-start">
          {/* Left — Form */}
          <FadeIn className="flex-[1_1_420px]">
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,38px)] tracking-[-0.01em] text-white mb-2">
              Book a free 15-minute call
            </h2>
            <p className="text-[16px] text-[#8FA8B8] mb-8">
              Tell us about your HVAC business. We&apos;ll show you exactly where
              leads are slipping through.
            </p>

            {submitted ? (
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1E7B3A]/20 border border-[#1E7B3A]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#4ADE80]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thanks, {formData.name}!</h3>
                <p className="text-[#8FA8B8] text-[15px] max-w-md mx-auto">
                  We&apos;ve got the details for {formData.businessName}. We&apos;ll
                  confirm your 15-minute call by email within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <input type="hidden" name="businessType" value="HVAC" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] uppercase tracking-wider text-[#8FA8B8] font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name" type="text" required placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#F26A21]/50 focus:ring-1 focus:ring-[#F26A21]/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-[11px] uppercase tracking-wider text-[#8FA8B8] font-medium mb-1.5">
                      Business Name *
                    </label>
                    <input
                      id="businessName" type="text" required placeholder="Morgan Heating & Cooling"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#F26A21]/50 focus:ring-1 focus:ring-[#F26A21]/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact" className="block text-[11px] uppercase tracking-wider text-[#8FA8B8] font-medium mb-1.5">
                    Phone or Email *
                  </label>
                  <input
                    id="contact" type="text" required placeholder="alex@morganheating.com or (555) 123-4567"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#F26A21]/50 focus:ring-1 focus:ring-[#F26A21]/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-[11px] uppercase tracking-wider text-[#8FA8B8] font-medium mb-1.5">
                    What&apos;s your biggest challenge with missed calls?
                  </label>
                  <textarea
                    id="challenge" rows={3}
                    placeholder="e.g. We miss calls after 5 p.m. and on weekends, customers call the next company..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#F26A21]/50 focus:ring-1 focus:ring-[#F26A21]/30 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="smsConsent" type="checkbox" required
                    checked={formData.smsConsent}
                    onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-white/20 accent-[#F26A21] cursor-pointer"
                  />
                  <label htmlFor="smsConsent" className="text-[11px] text-[#8FA8B8] leading-relaxed cursor-pointer">
                    I agree to receive SMS messages and calls from CloseCove regarding my inquiry,
                    appointment reminders, and service updates. Message &amp; data rates may apply.
                    Reply STOP to opt out at any time.{" "}
                    <a href="/privacy" target="_blank" className="text-[#F26A21] hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-[#F26A21] text-white py-4 rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-150 ease-in-out hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /><span>Sending...</span></>
                  ) : (
                    <><span>Book a free call</span><ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#8FA8B8]/60 pt-1">
                  No payment required · 100% confidential · Response within 4 hours
                </p>
              </form>
            )}
          </FadeIn>

          {/* Right — Demo phone + secondary CTA */}
          <FadeIn delay={150} className="flex-[1_1_300px]">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-[20px] mb-3">Want to see it first?</h3>
              <p className="text-[#8FA8B8] text-[15px] mb-6 leading-relaxed">
                Call our demo line. Let it ring, hang up, and watch the
                text arrive on your phone within 60 seconds.
              </p>
              <div className="flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4">
                <div className="relative w-[44px] h-[44px] flex-none">
                  <span className="absolute inset-0 rounded-full bg-[#F26A21] animate-ping opacity-20" />
                  <div className="absolute inset-0 rounded-full bg-[#F26A21] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <a href="tel:+18889950954" className="font-extrabold text-[22px] text-white no-underline tracking-tight">
                    (888) 995-0954
                  </a>
                  <p className="text-[12px] text-[#8FA8B8]">Free demo — no signup needed</p>
                </div>
              </div>
            </div>
          </FadeIn>
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
    <footer className="py-7 border-t border-[#10222F]/5">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-6 text-sm text-[#3B5565]">
        <span>CloseCove</span>
        <a href="mailto:hello@closecove.com" className="no-underline hover:text-[#10222F] transition-colors">
          hello@closecove.com
        </a>
        <a href="tel:+18889950954" className="no-underline hover:text-[#10222F] transition-colors">
          +1 (888) 995-0954
        </a>
        <span className="ml-auto">© {new Date().getFullYear()} CloseCove</span>
      </div>
    </footer>
  );
}