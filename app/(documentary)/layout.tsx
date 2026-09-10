import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import PageLoader from "@/components/PageLoader";

const mandisaFont = localFont({
  src: "../fonts/alfont_com_mandisaa.ttf",
  variable: "--font-mandisa",
  display: "swap",
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
  icons: {
    icon: "/images/urlogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${mandisaFont.variable}`}>
      <body className="font-body antialiased bg-primary-bg text-primary-text selection:bg-accent-red/90 selection:text-white">
        <PageLoader />
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
