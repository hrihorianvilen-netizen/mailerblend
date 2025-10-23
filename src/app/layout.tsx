import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WebSiteSchema } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MailJet - Email & SMS Marketing Platform",
  description: "Customer communications tool for growing teams. Manage email campaigns, SMS, and customer conversations in a smart & automated way.",
  icons: {
    icon: [
      { url: '/Mailerblend-favicon-16×16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Mailerblend-favicon-32×32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Mailerblend-favicon-64×64.png', sizes: '64x64', type: 'image/png' },
      { url: '/Mailerblend-favicon-128×128.png', sizes: '128x128', type: 'image/png' },
      { url: '/Mailerblend-favicon-256×256.png', sizes: '256x256', type: 'image/png' },
      { url: '/Mailerblend-favicon-512×512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/Mailerblend-favicon-256×256.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebSiteSchema />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8A42F3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
