import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Empowering The Nation - Professional Courses & Skill Development",
    template: "%s | Empowering The Nation"
  },
  description: `
      Transform your career with our comprehensive online courses. Learn gardening, 
      first aid, sewing, cooking, child care, and life skills. Professional 
      certification programs for career advancement and personal growth. Join 
      thousands of successful graduates.
  `,
  keywords: [
    "online courses",
    "professional training",
    "skill development",
    "gardening courses",
    "first aid training",
    "sewing courses",
    "cooking classes",
    "child care training",
    "life skills",
    "career development",
    "certification programs",
    "vocational training",
    "empowerment",
    "education",
    "learning platform",
    "empowering the nation"
  ],
  authors: [{ name: "Empowering The Nation" }],
  creator: "Empowering The Nation",
  publisher: "Empowering The Nation",
  category: "Education",
  classification: "Educational Platform",
  metadataBase: new URL("https://empoweringthenation.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Empowering The Nation - Professional Courses & Skill Development",
    description: "Transform your career with our comprehensive online courses. Learn gardening, first aid, sewing, cooking, child care, and life skills. Professional certification programs for career advancement.",
    siteName: "Empowering The Nation",
    images: [
      {
        url: "/logo-full.svg",
        width: 1200,
        height: 630,
        alt: "Empowering The Nation - Professional Courses Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowering The Nation - Professional Courses & Skill Development",
    description: "Transform your career with our comprehensive online courses. Learn gardening, first aid, sewing, cooking, and more.",
    images: ["/logo-full.svg"],
    creator: "@EmpoweringNation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  other: {
    "application-name": "Empowering The Nation",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Empowering The Nation",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
          <Toaster position="top-center"/>
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
