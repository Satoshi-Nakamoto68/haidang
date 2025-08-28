"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Globe, Shirt, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-up">
            <span className="text-primary">Global Trade</span>
            <span className="text-muted-foreground mx-4">•</span>
            <span className="text-accent">Fashion Retail</span>
            <span className="text-muted-foreground mx-4">•</span>
            <span className="text-primary">Digital Growth</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in">
            HAI DANG IMPORT AND EXPORT LIMITED - Your trusted partner for international trade, premium fashion retail,
            and innovative digital advertising solutions.
          </p>

          {/* Three pillars showcase */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-scale-in group">
              <Globe className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Import-Export</h3>
              <p className="text-sm text-muted-foreground text-center">
                Global supply chain solutions and international trading expertise
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-scale-in group">
              <Shirt className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Fashion Store</h3>
              <p className="text-sm text-muted-foreground text-center">
                Premium fashion collections for men, women, and accessories
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-scale-in group">
              <TrendingUp className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Digital Ads</h3>
              <p className="text-sm text-muted-foreground text-center">
                Performance marketing and digital growth strategies
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-hover">
              <Link href="/fashion" className="flex items-center gap-2">
                Shop Fashion
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hover bg-transparent">
              <Link href="/services/import-export" className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
