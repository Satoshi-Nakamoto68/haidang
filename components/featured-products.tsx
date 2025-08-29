"use client"

import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "1",
    name: "Premium Cotton Dress Shirt",
    price: 89,
    originalPrice: 120,
    image: "/elegant-white-dress-shirt-on-hanger.png",
    category: "Men's Fashion",
    isNew: true,
    isSale: true,
  },
  {
    id: "31",
    name: "Womens Top Ruffle Sleeve Blouses V Neck T Shirts Casual Outfit Bell Sleeve Tee",
    price: 89,
    originalPrice: 120,
    image: "/woman/6.jpg",
    category: "Women's Fashion",
    inStock: true,
    isNew: true,
  },
  {
    id: "51",
    name: "Men's Belt, Reversible Belt Adjustable For Gift Men 1.25”",
    price: 299,
    image: "/accessories/1.jpg",
    category: "Accessories",
  },
  {
    id: "12",
    name: "Men's Fashion Polo Shirts Vintage Striped Knitting Slim Fit Golf Shirts",
    price: 449,
    originalPrice: 599,
    image: "/men/12.jpg",
    category: "Men's Fashion",
    isSale: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Fashion</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium fashion pieces, carefully selected for style and quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/fashion" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
