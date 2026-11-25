"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   US TIMEZONE OPTIONS (IANA)
   ═══════════════════════════════════════════════════════════════ */
const US_TIMEZONES = [
  { value: "America/New_York", label: "Eastern Time" },
  { value: "America/Chicago", label: "Central Time" },
  { value: "America/Denver", label: "Mountain Time" },
  { value: "America/Los_Angeles", label: "Pacific Time" },
  { value: "America/Phoenix", label: "Arizona (no DST)" },
  { value: "America/Anchorage", label: "Alaska Time" },
  { value: "Pacific/Honolulu", label: "Hawaii Time" },
];

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM",
];

interface InquiryFormProps {
  selectedTier?: "starter" | "growth" | null;
  onClearTier?: () => void;
}

export function InquiryForm({ selectedTier, onClearTier }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    challenge: "",
    smsConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [detectedTz, setDetectedTz] = useState(false);

  /* Auto-detect visitor timezone on mount */
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz !== "UTC" && US_TIMEZONES.some((t) => t.value === tz)) {
        setFormData((prev) => ({ ...prev, timezone: tz }));
        setDetectedTz(true);
      }
    } catch {
      /* Detection failed — leave blank, user must pick */
    }
  }, []);

  /* Get tomorrow's date as min for date picker */
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const businessTypes = [
    "HVAC",
    "Plumbing",
    "Roofing",
    "Electrical",
    "Garage Door",
    "Pest Control",
    "Landscaping",
    "Tree Service",
    "Painting",
    "Fitness / Gym",
    "Salon & Spa",
    "Home Services",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          businessType: formData.businessType,
          phone: formData.phone,
          email: formData.email,
          contact: formData.email,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          timezone: formData.timezone,
          challenge: formData.challenge,
          smsConsent: formData.smsConsent,
          selectedTier: selectedTier
            ? selectedTier === "growth"
              ? "Growth Plan ($650 + $250/mo)"
              : "Starter Plan ($300 + $150/mo)"
            : "General Inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Format date for display */
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  };

  /* Get timezone label */
  const tzLabel = US_TIMEZONES.find((t) => t.value === formData.timezone)?.label || formData.timezone;

  return (
    <section
      id="inquire"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 dark:border-transparent bg-gradient-to-b from-[#EAF2F6] to-[#F2F7FA] dark:from-[#0f0f24] dark:to-[#0f0f24] relative"
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-white/35 font-semibold mb-3">
            05 / Get Started
          </div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
              Request a free 15-minute
              <br />
              <span className="text-zinc-500 dark:text-white/45 font-normal">
                call.
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-white/50 text-base">
              Tell us a bit about your business and we'll show you how the
              system would handle your missed calls.
            </p>
          </div>
        </FadeIn>

        {/* Inquiry Form Card */}
        <FadeIn delay={150}>
          <div className="card-interactive rounded-2xl border border-zinc-200/80 dark:border-transparent bg-white dark:bg-white/[0.04] p-8 sm:p-12 shadow-md dark:shadow-none relative overflow-hidden ring-1 ring-zinc-200/50 dark:ring-transparent">
            {/* Selected Plan indicator pill if chosen */}
            {selectedTier && !submitted && (
              <div className="mb-8 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-800 dark:text-white/70">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>
                    Selected Interest:{" "}
                    <strong className="text-zinc-950 dark:text-white capitalize">
                      {selectedTier} Plan
                    </strong>
                  </span>
                </div>
                {onClearTier && (
                  <button
                    type="button"
                    onClick={onClearTier}
                    className="text-xs text-zinc-500 dark:text-white/40 hover:text-zinc-900 dark:hover:text-white underline cursor-pointer font-medium transition-colors duration-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}

            {submitted ? (
              /* Success State Card */
              <div className="py-12 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-accent/10 border border-orange-100 dark:border-accent/20 flex items-center justify-center mx-auto text-accent shadow-xs dark:shadow-none">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight">
                  Request Received!
                </h3>
                <p className="text-zinc-600 dark:text-white/50 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thanks <span className="text-zinc-950 dark:text-white font-semibold">{formData.name}</span>. We&apos;ve
                  got the details for <span className="text-zinc-950 dark:text-white font-semibold">{formData.businessName}</span>.
                  {formData.preferredDate && formData.preferredTime && (
                    <> Your preferred time is {formatDate(formData.preferredDate)} at {formData.preferredTime} {tzLabel}.</>
                  )}
                  {" "}We&apos;ll confirm your call by email within one business day.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        businessName: "",
                        businessType: "",
                        phone: "",
                        email: "",
                        preferredDate: "",
                        preferredTime: "",
                        timezone: "",
                        challenge: "",
                        smsConsent: false,
                      });
                    }}
                    className="btn-secondary px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer shadow-sm hover:shadow-accent-glow"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Core Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 dark:placeholder:text-white/25 dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      placeholder="Summit Roofing"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 dark:placeholder:text-white/25 dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      required
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm cursor-pointer dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    >
                      <option value="" disabled className="text-zinc-400">
                        Select your trade
                      </option>
                      {businessTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-white dark:bg-[#1a1a2e] text-zinc-900 dark:text-white"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 dark:placeholder:text-white/25 dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@summitroofing.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 dark:placeholder:text-white/25 dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                  />
                </div>

                {/* Preferred date + time + timezone */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      required
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08] [color-scheme:light] dark:[color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm cursor-pointer dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    >
                      <option value="" disabled className="text-zinc-400">Select time</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot} className="bg-white dark:bg-[#1a1a2e] text-zinc-900 dark:text-white">{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timezone"
                      className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                    >
                      Time Zone *
                    </label>
                    <select
                      id="timezone"
                      required
                      value={formData.timezone}
                      onChange={(e) =>
                        setFormData({ ...formData, timezone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm cursor-pointer dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08]"
                    >
                      <option value="" disabled className="text-zinc-400">
                        {detectedTz ? "Detected" : "Select zone"}
                      </option>
                      {US_TIMEZONES.map((tz) => (
                        <option key={tz.value} value={tz.value} className="bg-white dark:bg-[#1a1a2e] text-zinc-900 dark:text-white">{tz.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-xs uppercase tracking-wider text-zinc-700 dark:text-white/50 font-medium mb-2"
                  >
                    What&apos;s your biggest challenge with leads or bookings right now?
                  </label>
                  <textarea
                    id="challenge"
                    rows={4}
                    placeholder="e.g. Front desk misses calls during busy hours, or people message us and we take 4 hours to reply..."
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({ ...formData, challenge: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 dark:placeholder:text-white/25 dark:text-white dark:bg-white/[0.05] dark:border-white/[0.08] resize-none"
                  />
                </div>

                {/* SMS Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    id="smsConsent"
                    type="checkbox"
                    required
                    checked={formData.smsConsent}
                    onChange={(e) =>
                      setFormData({ ...formData, smsConsent: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-zinc-300 dark:border-white/20 text-accent focus:ring-accent/50 cursor-pointer accent-[#F26A21]"
                  />
                  <label
                    htmlFor="smsConsent"
                    className="text-xs text-zinc-600 dark:text-white/50 leading-relaxed cursor-pointer"
                  >
                    I agree to receive SMS messages and calls from CloseCove regarding my inquiry, appointment reminders, and service updates. Message &amp; data rates may apply. Reply STOP to opt out at any time.{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-accent hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm hover:shadow-accent-glow text-[#10222F]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Request your call</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-xs text-zinc-400 dark:text-white/30 pt-2">
                  No payment required · 100% confidential · We&apos;ll confirm within one business day
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}