import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function Logo({ className = "", showText = true, size = 28 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Abstract Mark: Cove arc embracing a decisive checkmark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
      >
        {/* Background containment circle - subtle light fill */}
        <circle cx="16" cy="16" r="15" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />
        
        {/* Outer protective cove/harbor arc */}
        <path
          d="M7 16C7 11.0294 11.0294 7 16 7C19.866 7 23.1611 9.44438 24.4285 12.9"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        
        {/* The closing loop & decisive checkmark (Accent) */}
        <path
          d="M11.5 17.5L14.8 20.8L23 11"
          stroke="#0066FF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower harbor floor completing the safe landing */}
        <path
          d="M8.2 20.5C9.8 23.3 12.7 25 16 25C20.9706 25 25 20.9706 25 16"
          stroke="#71717A"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="1 3"
          className="opacity-50"
        />
      </svg>

      {showText && (
        <span className="text-xl font-bold tracking-tight text-zinc-950 flex items-center font-sans">
          Close<span className="text-zinc-500 font-medium">Cove</span>
        </span>
      )}
    </div>
  );
}
