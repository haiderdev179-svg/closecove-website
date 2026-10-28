import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 dark-section dark:bg-none dark:!bg-[#0f0f24] py-16 px-6 relative overflow-hidden">
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
          <a href="/#problem" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>The Problem</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="/#offer" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>What We Do</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="/#demo" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Live Demo</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="/#pricing" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Pricing</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <a href="/#inquire" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Contact</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </a>
          <Link href="/privacy" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Privacy Policy</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </Link>
          <Link href="/terms" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>Terms &amp; Conditions</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </Link>
          <Link href="/faq" className="relative hover:text-white transition-colors duration-200 py-1 group">
            <span>FAQ</span>
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
          </Link>
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
            href="https://www.facebook.com/profile.php?id=61594550660142"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-white/10 hover:text-white text-white/50 transition-all duration-200 hover:-translate-y-0.5"
            title="Facebook"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/closecoveagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-white/10 hover:text-white text-white/50 transition-all duration-200 hover:-translate-y-0.5"
            title="Instagram"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
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
          Built for local service businesses that don't want to miss a lead.
        </div>
      </div>
    </footer>
  );
}