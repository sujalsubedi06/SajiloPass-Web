import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YatraPass",
  description: "🇳🇵 Nepal's Smart Mobility Platform (Under Development)",
  applicationName: "YatraPass",
  keywords: [
    "Nepal",
    "Bus",
    "Travel",
    "Transit",
    "QR Ticket",
    "Digital Pass",
    "YatraPass",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}