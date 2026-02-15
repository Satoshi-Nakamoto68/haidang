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

// export default function HomePage() {
  // return (
    // <div className="min-h-screen">
      // <TrustBar />
      // <Navigation />
      // <main>
        // <HeroSection />
        // <FeaturedProducts />
      // </main>
      // <Footer />
      // <ScrollToTop />
    // </div>
  // )
// }

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4">404</h1>
      <p className="text-xl md:text-2xl opacity-80 mb-6">
        Website not found hahah
      </p>
      <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
        Go Home
      </button>
    </div>
  )
}

