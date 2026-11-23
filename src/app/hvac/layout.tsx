import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed-Call Text-Back for HVAC | CloseCove",
  description:
    "Never lose an HVAC lead to a missed call again. CloseCove texts your caller back, collects the job details, and books the appointment — all automatically.",
  openGraph: {
    title: "Missed-Call Text-Back for HVAC | CloseCove",
    description:
      "Never lose an HVAC lead to a missed call again. CloseCove texts your caller back, collects the job details, and books the appointment — all automatically.",
    url: "https://www.closecove.com/hvac",
    siteName: "CloseCove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missed-Call Text-Back for HVAC | CloseCove",
    description:
      "Never lose an HVAC lead to a missed call again. CloseCove texts your caller back, collects the job details, and books the appointment — all automatically.",
  },
};

export default function HVACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
