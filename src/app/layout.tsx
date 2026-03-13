import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800","900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mapletech Labs | Custom Software Development Company",
  description:
    "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Your strategic technology partner in Toronto, Canada.",
  keywords: "custom software development, web development, mobile app development, AI solutions, blockchain, Toronto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
