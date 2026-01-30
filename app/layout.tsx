import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Photo Gallery - Stunning Photography Collection",
    template: "%s | Photo Gallery",
  },

  description:
    "Discover stunning photography from around the world. Browse our curated collection of nature, landscape, and artistic photography.",

  keywords: [
    "photography",
    "gallery",
    "images",
    "nature",
    "landscape",
    "art",
  ],

  authors: [{ name: "Photo Gallery" }],
  creator: "Photo Gallery",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pinterest-gallery.vercel.app/",
    siteName: "Photo Gallery",
    title: "Photo Gallery - Stunning Photography Collection",
    description: "Discover stunning photography from around the world.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        width: 1200,
        height: 630,
        alt: "Photo Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery - Stunning Photography Collection",
    description: "Discover stunning photography from around the world.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "your-google-verification-code",
  },

  other: {
    "p:domain_verify": "ef4c207be8020ca2fc6a82b549e4ced8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YXLY6MVWGE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXLY6MVWGE');
          `}
        </Script>
      </body>
    </html>
  );
}
