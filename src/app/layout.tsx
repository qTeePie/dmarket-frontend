import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { WalletProvider } from "@/context/WalletContext";

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
        <WalletProvider>
          <Header title="dMrkt " subtitle="Cycle of Collect." />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer copyright="© 2025 dMrkt <3" />
        </WalletProvider>
      </body>
    </html>
  );
}
