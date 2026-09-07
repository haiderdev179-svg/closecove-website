"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Problem", href: "#problem" },
    { name: "What We Do", href: "#offer" },
    { name: "Live Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg border-b border-zinc-200/60 ${
        isScrolled ? "py-3.5 shadow-sm bg-white/95" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group focus:outline-none">
          <Logo size={28} />
        </a>

        {/* Desktop Nav with Animated Hover Indicator */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-zinc-600 hover:text-zinc-950 transition-colors duration-200 font-medium tracking-tight py-1 group inline-flex flex-col items-center"
            >
              <span>{link.name}</span>
              {/* Subtle accent line indicator that animates in on hover */}
              <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#inquire"
            className="btn-accent px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white cursor-pointer group shadow-sm hover:shadow-accent-glow"
          >
            <span>Book a Free Call</span>
            <ArrowUpRight className="w-4 h-4 opacity-90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-600 hover:text-zinc-950 p-2 rounded-lg hover:bg-zinc-100/80 focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-zinc-200/60 px-6 py-6 animate-fade-in shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-zinc-700 hover:text-zinc-950 font-medium transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-200/60">
              <a
                href="#inquire"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-accent w-full py-2.5 rounded-lg text-center text-sm font-medium flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Book a Free Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
