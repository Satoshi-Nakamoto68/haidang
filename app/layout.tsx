import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "HAI DANG IMPORT AND EXPORT LIMITED - Global Trade, Fashion Retail, Digital Growth",
    template: "%s | HAI DANG IMPORT AND EXPORT LIMITED",
  },
  description:
    "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions. Registered in Wan Chai with global reach.",
  generator: "v0.app",
  keywords: [
    "import export Hong Kong",
    "international trade",
    "fashion retail",
    "digital advertising",
    "supply chain management",
    "e-commerce fashion",
    "Hong Kong trading company",
    "Wan Chai business",
    "global commerce",
    "premium fashion",
    "digital marketing services",
    "trade logistics",
  ],
  authors: [{ name: "HAI DANG IMPORT AND EXPORT LIMITED" }],
  creator: "HAI DANG IMPORT AND EXPORT LIMITED",
  publisher: "HAI DANG IMPORT AND EXPORT LIMITED",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://haidangimex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HAI DANG IMPORT AND EXPORT LIMITED - Global Trade, Fashion Retail, Digital Growth",
    description:
      "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions.",
    url: "https://haidangimex.com",
    siteName: "HAI DANG IMPORT AND EXPORT LIMITED",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAI DANG IMPORT AND EXPORT LIMITED - Hong Kong Trading Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAI DANG IMPORT AND EXPORT LIMITED - Global Trade & Fashion",
    description:
      "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HAI DANG IMPORT AND EXPORT LIMITED",
              url: "https://haidangimex.com",
              logo: "https://haidangimex.com/logo.png",
              description:
                "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8/F., China Hong Kong Tower, 8-12 Hennessy Road",
                addressLocality: "Wan Chai",
                addressRegion: "Hong Kong",
                addressCountry: "HK",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+852-xxxx-xxxx",
                  contactType: "customer service",
                  email: "info@haidangimex.com",
                },
              ],
              sameAs: ["https://www.linkedin.com/company/haidangimex", "https://www.facebook.com/haidangimex"],
              foundingDate: "2020",
              numberOfEmployees: "50+",
              areaServed: "Worldwide",
              serviceType: ["Import-Export Trading", "Fashion Retail", "Digital Advertising"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
