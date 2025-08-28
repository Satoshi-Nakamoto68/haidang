import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HAI DANG IMPORT AND EXPORT LIMITED - Global Trade, Fashion Retail, Digital Growth",
  description:
    "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions. Registered in Wan Chai with global reach.",
  openGraph: {
    title: "HAI DANG IMPORT AND EXPORT LIMITED - Global Trade, Fashion Retail, Digital Growth",
    description:
      "Professional import-export company based in Hong Kong specializing in international trade, premium fashion retail, and digital advertising solutions.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
