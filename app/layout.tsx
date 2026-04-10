import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maintenance-volt.com"),
  title: {
    default: "صيانة فولت | Volt Maintenance",
    template: "%s",
  },
  description:
    "شركة فولت للصيانة - أفضل خدمات صيانة وتصليح الأجهزة المنزلية في عمان، الأردن.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "krNmWU2WKXziwb4emr4GtIVhQ2hTVrYMFPe6lOz6gFw",
  },
  openGraph: {
    siteName: "Volt Maintenance | صيانة فولت",
    images: [
      {
        url: "/logo_png-01.png",
        width: 800,
        height: 600,
        alt: "Volt Maintenance - صيانة أجهزة منزلية عمان",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo_png-01.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
      suppressHydrationWarning
    >
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
