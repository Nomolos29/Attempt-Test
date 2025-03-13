import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My PWA",
  description: "A Next.js PWA example",
  manifest: "/manifest.webmanifest", // Link to the manifest file
  icons: {
    icon: "/icons/icon-192x192.png", // Default icon
    apple: "/icons/icon-192x192.png", // Apple touch icon
  },
};

// Add this viewport export
export const viewport: Viewport = {
  themeColor: "#000000", // Theme color for the PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="mb-20">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}