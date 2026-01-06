import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silver Talkies",
  description: "Open this link in the Silver Talkies app to explore events and connect with members.",
  openGraph: {
    title: "Silver Talkies",
    description: "Tap to view details in the Silver Talkies app.",
    images: ["/og.png"],
    url: "https://silver-talkies-care.vercel.app",
    siteName: "Silver Talkies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silver Talkies",
    description: "View this content in the Silver Talkies app.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
