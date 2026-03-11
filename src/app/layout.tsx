import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mapletech Labs | Custom Software Development Company",
  description:
    "Mapletech Labs builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Your strategic technology partner in Toronto, Canada.",
  keywords: "custom software development, web development, mobile app development, AI solutions, blockchain, Toronto, Canada",
  openGraph: {
    title: "Mapletech Labs | Custom Software Development Company",
    description: "Build software that fits your business perfectly. Expert custom development in AI, web, mobile, and blockchain.",
    url: "https://mapletechlabs.ca",
    siteName: "Mapletech Labs",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
