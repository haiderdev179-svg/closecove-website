import React from "react";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 dark-section py-16 px-6 relative overflow-hidden">
      {/* Ambient glow elements for footer */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        <div className="space-y-3">
          <Image
            src="/closecove-icon-512.png"
            alt="CloseCove"
            width={32}
            height={32}
            className="transition-transform duration-200 hover:scale-105"
          />
          <p className="text-xs text-white/60 max-w-sm leading-relaxed">
            Turn missed opportunities into booked customers. AI lead capture &
            autonomous scheduling systems for local businesses.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-white/70">
          <a href="#problem" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>The Problem</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="#offer" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>What We Do</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="#demo" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Live Demo</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="#pricing" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Pricing</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="#inquire" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Contact</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
        </div>

        {/* Contact info & back to top */}
        <div className="flex items-center gap-4 text-xs text-white/70">
          <a
            href="mailto:hello@closecove.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 p-1 group"
          >
            <Mail className="w-3.5 h-3.5 text-white/50 group-hover:text-accent transition-colors duration-200" />
            <span>hello@closecove.com</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="#"
            className="p-1.5 rounded-md hover:bg-white/10 hover:text-white text-white/50 transition-all duration-200 hover:-translate-y-0.5"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 relative z-10">
        <div>
          © {new Date().getFullYear()} CloseCove (closecove.com). All rights reserved.
        </div>
        <div>
          Built for high-intent local service providers, gyms, and medical clinics.
        </div>
      </div>
    </footer>
  );
}
