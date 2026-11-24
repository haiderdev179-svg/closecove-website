import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed-call text-back for plumbers | CloseCove",
  description:
    "When you can't answer, CloseCove texts the caller back within 60 seconds, sorts urgent from routine, and books the visit. $300 setup, no contract, 30-day money-back guarantee.",
  openGraph: {
    title: "Missed-call text-back for plumbers | CloseCove",
    description:
      "When you can't answer, CloseCove texts the caller back within 60 seconds, sorts urgent from routine, and books the visit. $300 setup, no contract, 30-day money-back guarantee.",
    url: "https://www.closecove.com/plumbing",
    images: [{ url: "https://closecove.com/images/og-plumbing.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed-call text-back for plumbers | CloseCove",
    description:
      "When you can't answer, CloseCove texts the caller back within 60 seconds, sorts urgent from routine, and books the visit. $300 setup, no contract, 30-day money-back guarantee.",
    images: ["https://closecove.com/images/og-plumbing.png"],
  },
};

export default function PlumbingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

