"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LegalPage } from "@/components/LegalPage";
import { useState } from "react";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Starter typically takes 5–7 business days. Growth typically takes 8–10 business days, since it includes additional automation logic that needs more testing. Exact timelines are confirmed once we understand your specific setup.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Service is billed month-to-month with no long-term contract.",
  },
  {
    question:
      "What if I want to cancel after paying the deposit, before it's finished?",
    answer:
      "The deposit covers work already completed up to that point and is non-refundable once building has started, but you won't owe anything further if you decide not to continue. No monthly fee ever starts unless your system actually goes live.",
  },
  {
    question: "Will this sound robotic to my customers?",
    answer:
      "It's built to respond in plain, natural language rather than scripted replies — you can test this yourself on our live demo.",
  },
  {
    question: "What if the AI gives a wrong answer?",
    answer:
      "The system is built to stay within your actual business information (hours, pricing, services). If a question falls outside what it knows, it says so and offers to have a person follow up, rather than guessing.",
  },
  {
    question: "Do I need a new phone number?",
    answer:
      "Not necessarily — in most cases we can route the system through your existing number. We'll confirm the right approach once we understand your current phone setup.",
  },
  {
    question: "Is my customer data safe?",
    answer:
      "The system only uses the data needed to provide the service, and we do not sell or share your customer data. Once you engage our services, we'll walk you through exactly which providers process data and what's stored.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "Monitoring and fixing issues is included as part of your monthly service, not billed separately.",
  },
  {
    question: "How do I reach you if something goes wrong?",
    answer:
      "You can reach me directly by email at hello@closecove.com. I aim to respond to urgent issues the same business day. I'm a small, hands-on operation rather than a large call center — you're reaching someone who knows your system directly.",
  },
  {
    question:
      "Can you build something custom, outside the Starter and Growth packages?",
    answer:
      "Possibly. Share what you need and we'll follow up on whether it's feasible and what it would cost, rather than quoting on the spot.",
  },
  {
    question: "How much does this cost?",
    answer:
      "See our Pricing page for current Starter and Growth rates. If your needs don't fit either package exactly, reach out and we'll figure out what makes sense.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <LegalPage>
      <div className="space-y-8 text-zinc-700">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Frequently Asked Questions
          </h1>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="group rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full cursor-pointer list-none p-5 md:p-6 text-left text-lg font-semibold text-zinc-900 flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, opacity: isOpen ? 1 : 0.7 }}
                    transition={
                      shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }
                    }
                    className="text-zinc-500"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={
                        shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }
                      }
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-base leading-7 text-zinc-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </LegalPage>
  );
}
