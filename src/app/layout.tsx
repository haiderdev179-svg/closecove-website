import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://closecove.com"),
  title: "CloseCove | Missed-call text-back for local service businesses",
  description:
    "When you can't answer, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
  keywords: [
    "Missed Call Text Back",
    "Local Business Automation",
    "Lead Capture",
    "Automated Booking",
    "CloseCove",
  ],
  authors: [{ name: "CloseCove" }],
  icons: {
    icon: "/closecove-favicon-32.png",
    apple: "/closecove-icon-512.png",
  },
  openGraph: {
    title: "CloseCove | Missed-call text-back for local service businesses",
    description:
      "When you can't answer, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
    url: "https://closecove.com",
    siteName: "CloseCove",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-closecove.png",
        width: 1200,
        height: 630,
        alt: "CloseCove — Missed-call text-back for local service businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloseCove | Missed-call text-back for local service businesses",
    description:
      "When you can't answer, CloseCove texts the caller back within 60 seconds and books the appointment. $300 setup, no contract, 30-day money-back guarantee.",
    images: ["/images/og-closecove.png"],
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0a0a1a] text-zinc-900 dark:text-[#f0f0f5] antialiased selection:bg-accent/15 selection:text-black dark:selection:text-white font-sans transition-colors duration-300">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}