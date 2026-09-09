import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
