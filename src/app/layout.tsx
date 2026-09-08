import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://closecove.com"),
  title: "CloseCove — Turn Missed Opportunities Into Booked Customers",
  description:
    "AI automation systems that catch every lead your gym, clinic, or shop would otherwise lose. Instant 60-second response, autonomous booking, and retention.",
  keywords: [
    "AI Automation",
    "Local Business Automation",
    "Lead Capture",
    "Missed Call Text Back",
    "Automated Booking",
    "CloseCove",
  ],
  authors: [{ name: "CloseCove" }],
  icons: {
    icon: "/closecove-favicon-32.png",
    apple: "/closecove-icon-512.png",
  },
  openGraph: {
    title: "CloseCove — Turn Missed Opportunities Into Booked Customers",
    description:
      "AI systems that catch every lead your gym, clinic, or shop would otherwise lose.",
    url: "https://closecove.com",
    siteName: "CloseCove",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/closecove-icon-512.png",
        width: 512,
        height: 512,
        alt: "CloseCove logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-accent/15 selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
