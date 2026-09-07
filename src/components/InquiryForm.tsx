"use client";

import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface InquiryFormProps {
  selectedTier?: "starter" | "growth" | null;
  onClearTier?: () => void;
}

export function InquiryForm({ selectedTier, onClearTier }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Gym / Fitness Studio",
    contact: "",
    challenge: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const businessTypes = [
    "Gym / Fitness Studio",
    "Dental / Medical Clinic",
    "Local Service / Trade",
    "E-commerce",
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
          ...formData,
          selectedTier: selectedTier
            ? selectedTier === "growth"
              ? "Growth Plan ($700 + $350/mo)"
              : "Starter Plan ($400 + $200/mo)"
            : "General Inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquire"
      className="py-24 md:py-32 px-6 border-t border-zinc-200/60 bg-gradient-to-b from-[#F5F7FA] to-[#FAFAFA] relative"
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
            05 / Get Started
          </div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Book a free 15-minute
              <br />
              <span className="text-zinc-500 font-normal">
                lead audit call.
              </span>
            </h2>
            <p className="text-zinc-600 text-base">
              Tell us a bit about your business. We'll examine your current
              response speed and show you exactly where leads are leaking.
            </p>
          </div>
        </FadeIn>

        {/* Inquiry Form Card (Clean White Surface with 1px Border & Soft Shadow) */}
        <FadeIn delay={150}>
          <div className="card-interactive rounded-2xl border border-zinc-200/80 bg-white p-8 sm:p-12 shadow-md relative overflow-hidden ring-1 ring-zinc-200/50">
            {/* Selected Plan indicator pill if chosen */}
            {selectedTier && !submitted && (
              <div className="mb-8 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>
                    Selected Interest:{" "}
                    <strong className="text-zinc-950 capitalize">
                      {selectedTier} Plan
                    </strong>
                  </span>
                </div>
                {onClearTier && (
                  <button
                    type="button"
                    onClick={onClearTier}
                    className="text-xs text-zinc-500 hover:text-zinc-900 underline cursor-pointer font-medium transition-colors duration-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}

            {submitted ? (
              /* Success State Card */
              <div className="py-12 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-accent shadow-xs">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  Inquiry Received!
                </h3>
                <p className="text-zinc-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thanks <span className="text-zinc-950 font-semibold">{formData.name}</span>. We've
                  noted details for <span className="text-zinc-950 font-semibold">{formData.businessName}</span>.
                  We'll review your lead flow and reach out within 4 business hours to lock in your call.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        businessName: "",
                        businessType: "Gym / Fitness Studio",
                        contact: "",
                        challenge: "",
                      });
                    }}
                    className="btn-secondary px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer shadow-sm hover:shadow-accent-glow"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Core Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-2"
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
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-2"
                    >
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      placeholder="Apex Athletic Club"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-2"
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
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm cursor-pointer"
                    >
                      {businessTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-white text-zinc-900"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-2"
                    >
                      Phone or Email *
                    </label>
                    <input
                      id="contact"
                      type="text"
                      required
                      placeholder="alex@apexclub.com or (555) 019-2834"
                      value={formData.contact}
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="block text-xs uppercase tracking-wider text-zinc-700 font-medium mb-2"
                  >
                    What's your biggest challenge with leads or bookings right now?
                  </label>
                  <textarea
                    id="challenge"
                    rows={4}
                    placeholder="e.g. Front desk misses calls during busy afternoon workouts, or people DM on Instagram and we take 4 hours to reply..."
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({ ...formData, challenge: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg input-studio text-sm placeholder:text-zinc-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm hover:shadow-accent-glow text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending details...</span>
                      </>
                    ) : (
                      <>
                        <span>Book a Free Call</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-xs text-zinc-400 pt-2">
                  No payment required • 100% confidential • Direct response within 4 hours
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
