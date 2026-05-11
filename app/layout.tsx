import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mananagrawal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manan Agrawal | AI Research Engineer & Quantitative AI Researcher",
    template: "%s | Manan Agrawal",
  },
  description:
    "AI Research Engineer and Quantitative AI Researcher specializing in RAG systems, LLM architectures, agentic AI, and financial AI platforms. IEEE published researcher with 18+ publications and 60+ citations.",
  keywords: [
    "Manan Agrawal",
    "AI Research Engineer",
    "Machine Learning Engineer",
    "Quantitative AI Researcher",
    "GenAI Systems Engineer",
    "RAG Systems",
    "LLM",
    "Transformer",
    "Computer Vision",
    "Financial AI",
    "Agentic AI",
    "IEEE Publications",
    "Deep Learning",
    "NLP",
    "FAISS",
    "Vector Databases",
    "MLOps",
    "Portfolio",
  ],
  authors: [{ name: "Manan Agrawal", url: siteUrl }],
  creator: "Manan Agrawal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Manan Agrawal Portfolio",
    title: "Manan Agrawal | AI Research Engineer",
    description:
      "AI researcher and systems engineer building intelligent decision systems, RAG pipelines, quantitative AI platforms, and agentic architectures.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Manan Agrawal - AI Research Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Agrawal | AI Research Engineer",
    description:
      "AI researcher building intelligent decision systems, RAG pipelines, and quantitative AI platforms.",
    images: [`${siteUrl}/og-image.png`],
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
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-scholar-id" content="2vrZHA0AAAAJ" />
      </head>
      <body className="bg-black text-white antialiased">
        {/* Noise overlay for premium texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
