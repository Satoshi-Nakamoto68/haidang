"use client"

import { useMemo, useState } from "react"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Grid, List } from "lucide-react"
import Link from "next/link"
import { products as catalog } from "@/lib/products"

// Categories to filter by
const categories = ["All", "Men's Fashion", "Women's Fashion", "Accessories"]

export default function FashionStorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [page, setPage] = useState(1)
  const pageSize = 8

  // Adapt catalog products to ProductCard shape
  const allProducts = useMemo(
    () =>
      catalog.map((p) => ({
        id: p.id,
        name: p.name,
        // Price isn't in catalog yet; set to 0 to satisfy type and hide display
        price: 0,
        image: p.images[0] || "/placeholder.svg",
        category: p.category,
        isNew: p.isNew,
        // isSale not present in catalog
      })),
    [],
  )

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const total = sortedProducts.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const currentPage = Math.min(page, totalPages)
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="mb-2 text-sm text-muted-foreground">
              <Link href="/">Home</Link> <span className="px-1">/</span> <span>Fashion</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Fashion Store</h1>
            <p className="text-lg text-muted-foreground">
              Discover our premium collection of fashion pieces for every occasion
            </p>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`${selectedCategory === category ? "bg-accent text-accent-foreground" : ""} cursor-pointer`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, total)} of {total}
              </span>
              {selectedCategory !== "All" && <Badge variant="secondary">{selectedCategory}</Badge>}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1 max-w-4xl mx-auto"
              }`}
            >
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                  Previous
                </Button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    className={currentPage === i + 1 ? "bg-accent text-accent-foreground" : ""}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
