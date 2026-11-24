import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed-call text-back for HVAC companies | CloseCove",
  description:
    "When your office is closed or your techs are out on jobs, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
  openGraph: {
    title: "Missed-call text-back for HVAC companies | CloseCove",
    description:
      "When your office is closed or your techs are out on jobs, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
    url: "https://www.closecove.com/hvac",
    images: [{ url: "https://closecove.com/images/og-hvac.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed-call text-back for HVAC companies | CloseCove",
    description:
      "When your office is closed or your techs are out on jobs, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
    images: ["https://closecove.com/images/og-hvac.png"],
  },
};

export default function HVACLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

