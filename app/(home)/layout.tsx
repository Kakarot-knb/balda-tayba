import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Cairo } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  weight: ["400", "700", "900"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alisawly.com"),
  title: "Ali Sawly | علي صولي — Filmmaker & Director",
  description: "Official professional portfolio of Lebanese filmmaker and director Ali Sawly (علي صولي).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ali Sawly | علي صولي — Filmmaker & Director",
    description: "Official professional portfolio of Lebanese filmmaker and director Ali Sawly (علي صولي).",
    url: "https://alisawly.com",
    siteName: "Ali Sawly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Sawly | علي صولي — Filmmaker & Director",
    description: "Official professional portfolio of Lebanese filmmaker and director Ali Sawly (علي صولي).",
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${notoKufi.variable} ${cairo.variable}`}>
      <body className="font-body antialiased bg-primary-bg text-primary-text selection:bg-accent-red/90 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
