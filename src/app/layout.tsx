import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundImage from "@/components/background-image";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dami.run"),
  title: {
    default: "Damī | AI Dummy Data Builder",
    template: "%s | Damī",
  },
  description:
    "Damī helps teams design and generate realistic dummy JSON data using OpenAI or Gemini with schema-aware validation.",
  keywords: [
    "dummy data generator",
    "json builder",
    "test data",
    "OpenAI",
    "Gemini",
    "QA",
  ],
  openGraph: {
    title: "Damī | AI Dummy Data Builder",
    description:
      "Design field blueprints, choose your AI model, and export realistic JSON samples for QA, demos, and tests.",
    url: "https://dami.run",
    siteName: "Damī",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Damī dummy data builder preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damī | AI Dummy Data Builder",
    description:
      "Generate schema-accurate dummy data powered by OpenAI and Gemini.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundImage />
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
