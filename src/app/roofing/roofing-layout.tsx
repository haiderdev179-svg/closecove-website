import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed-call text-back for roofers | CloseCove",
  description:
    "When you're on a roof and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
  openGraph: {
    title: "Missed-call text-back for roofers | CloseCove",
    description:
      "When you're on a roof and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
    url: "https://www.closecove.com/roofing",
    images: [{ url: "/images/og-roofing.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed-call text-back for roofers | CloseCove",
    description:
      "When you're on a roof and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
    images: ["/images/og-roofing.png"],
  },
};

export default function RoofingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
