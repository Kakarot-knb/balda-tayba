import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Cairo } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import PageLoader from "@/components/PageLoader";

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
  title: "بلدةٌ طيبة — فيلم وثائقي | Ali Sawly",
  description: "فيلم وثائقي يستكشف علاقة الإنسان بأرضه، من قرية الطيبة في جنوب لبنان. مشروع تخرّج سينمائي للمخرج علي صولي (Ali Sawly).",
  alternates: {
    canonical: "/baldatayba",
  },
  openGraph: {
    title: "بلدةٌ طيبة — فيلم وثائقي | Ali Sawly",
    description: "فيلم وثائقي يستكشف علاقة الإنسان بأرضه، من قرية الطيبة في جنوب لبنان. مشروع تخرّج سينمائي للمخرج علي صولي (Ali Sawly).",
    url: "https://alisawly.com/baldatayba",
    siteName: "Ali Sawly",
    locale: "ar_LB",
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "بلدةٌ طيبة — فيلم وثائقي | Ali Sawly",
    description: "فيلم وثائقي يستكشف علاقة الإنسان بأرضه، من قرية الطيبة في جنوب لبنان. مشروع تخرّج سينمائي للمخرج علي صولي (Ali Sawly).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoKufi.variable} ${cairo.variable}`}>
      <body className="font-body antialiased bg-primary-bg text-primary-text selection:bg-accent-red/90 selection:text-white">
        <PageLoader />
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
