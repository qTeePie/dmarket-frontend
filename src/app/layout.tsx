import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D:Market",
  description: "Cursed market vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased">
        <Header title="dMrkt " subtitle="Cycle of Collect." />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer copyright="© 2025 Iz Kitz ❤️‍🔥" />
      </body>
    </html>
  );
}
