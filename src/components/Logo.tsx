import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function Logo({ className = "", showText = true, size = 28 }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Light mode logo */}
      <Image
        src="/closecove-logo-full.svg"
        alt="CloseCove"
        width={size * 4}
        height={size}
        className="h-[36px] w-auto transition-transform duration-200 hover:scale-105 dark:hidden"
        priority
      />
      {/* Dark mode logo */}
      <Image
        src="/closecove-logo-full-dark.svg"
        alt="CloseCove"
        width={size * 4}
        height={size}
        className="h-[36px] w-auto transition-transform duration-200 hover:scale-105 hidden dark:block"
        priority
      />
    </div>
  );
}
