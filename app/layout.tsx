import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Photo Gallery - Stunning Photography Collection',
    template: '%s | Photo Gallery'
  },
  description: 'Discover stunning photography from around the world. Browse our curated collection of nature, landscape, and artistic photography.',
  keywords: ['photography', 'gallery', 'images', 'nature', 'landscape', 'art'],
  authors: [{ name: 'Photo Gallery' }],
  creator: 'Photo Gallery',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Photo Gallery',
    title: 'Photo Gallery - Stunning Photography Collection',
    description: 'Discover stunning photography from around the world.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
        width: 1200,
        height: 630,
        alt: 'Photo Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery - Stunning Photography Collection',
    description: 'Discover stunning photography from around the world.',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="pinterest" content="nopin" description="This site is not affiliated with Pinterest" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
