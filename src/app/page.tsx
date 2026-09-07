"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Offer } from "@/components/Offer";
import { DemoShowcase } from "@/components/DemoShowcase";
import { Pricing } from "@/components/Pricing";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<"starter" | "growth" | null>(
    null
  );

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-accent/15 selection:text-black">
      <Navbar />
      <Hero />
      <Problem />
      <Offer />
      <DemoShowcase />
      <Pricing onSelectTier={(tier) => setSelectedTier(tier)} />
      <InquiryForm
        selectedTier={selectedTier}
        onClearTier={() => setSelectedTier(null)}
      />
      <Footer />
    </main>
  );
}
