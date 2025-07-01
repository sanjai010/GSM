// app/layout.tsx
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: "Global Studio Media | Media Production Company",
  description:
    "From pixels to presence — we help brands grow with reels, websites, and strategy that convert.",
  keywords: [
    "Global Studio Media",
    "media production",
    "web design",
    "branding",
    "content creation",
    "video editing",
    "social media marketing",
    "digital marketing agency India",
    "creative agency",
  ],
  authors: [{ name: "Global Studio Media", url: "https://globalstudiomedia.com" }],
  creator: "Global Studio Media",
  openGraph: {
    title: "Global Studio Media | Media Production Company",
    description:
      "From social media reels to full-scale digital launches, GSM makes you global.",
    url: "https://globalstudiomedia.com",
    siteName: "Global Studio Media",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Global Studio Media Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Studio Media | Media Production Company",
    description:
      "Build your brand with reels, websites, and marketing that perform.",
    creator: "@globalstudiomedia",
    images: ["/images/og-cover.jpg"],
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
        {/* External Fonts & Icons */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* ✅ Google Analytics (Only loads in production) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-9MH5E29ZD1"
              strategy="afterInteractive"
            />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-9MH5E29ZD1');
                `,
              }}
            />
            {/* Optional: JSON-LD Structured Data */}
            <Script
              id="json-ld"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Global Studio Media",
                  url: "https://globalstudiomedia.com",
                  logo: "https://globalstudiomedia.com/images/logo.png",
                  sameAs: [
                    "https://www.instagram.com/globalstudiomedia/",
                    "https://www.linkedin.com/in/globalstudio-media-1a8a1a370/",
                  ],
                }),
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}

        {/* Your custom app.js script */}
        <Script src="/app.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
