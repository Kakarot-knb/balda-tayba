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
  title: "Ali Sawly — Filmmaker / Director",
  description: "Official professional portfolio of Filmmaker and Director Ali Sawly.",
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
