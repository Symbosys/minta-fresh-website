import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minta Fresh | Raw. Real. Delivered.",
  description: "Premium fresh meat and seafood delivered to your doorstep. Antibiotic-free, hormone-free, and ethically raised chicken, fish, and mutton.",
  keywords: "fresh meat, chicken, fish, seafood, mutton, delivery, Ranchi, India",
  icons: {
    icon: '/assets/logo/minta-logo.jpeg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo/minta-logo.jpeg" />
      </head>
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
