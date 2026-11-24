import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed-call text-back for electricians | CloseCove",
  description:
    "When you're on a job and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
  openGraph: {
    title: "Missed-call text-back for electricians | CloseCove",
    description:
      "When you're on a job and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
    url: "https://www.closecove.com/electrical",
    images: [{ url: "/images/og-electrical.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed-call text-back for electricians | CloseCove",
    description:
      "When you're on a job and can't answer, CloseCove texts the caller back within about a minute and books the estimate. $300 setup, no contract, 30-day money-back guarantee.",
    images: ["/images/og-electrical.png"],
  },
};

export default function ElectricalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
