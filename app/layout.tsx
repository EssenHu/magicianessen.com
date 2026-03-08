import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sparkles from "@/components/Sparkles";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magician Essen | Bay Area Magic & Entertainment",
  description:
    "Professional magician for corporate events, private parties, and weddings in the Bay Area. Fun, energetic performances with a luxury touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#14141c]">
        <div className="page-bg" aria-hidden />
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
          <Sparkles />
        </div>
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
