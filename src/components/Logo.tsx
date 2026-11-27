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
      {/* Same orange mark in both modes; dark lettering in light mode, white lettering in dark mode */}
      <Image
        src="/images/closecove-logo-hvac.png"
        alt="CloseCove"
        width={size * 4}
        height={size}
        className="h-[36px] w-auto transition-transform duration-200 hover:scale-105 dark:hidden"
        priority
      />
      <Image
        src="/images/closecove-logo-hvac-light.png"
        alt="CloseCove"
        width={size * 4}
        height={size}
        className="hidden h-[36px] w-auto transition-transform duration-200 hover:scale-105 dark:block"
        priority
      />
    </div>
  );
}