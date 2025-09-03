"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingBag, Building2, Search, Sparkles, TrendingUp, Clock, Star } from "lucide-react"
import { ShoppingCartSheet } from "./shopping-cart"
import { products } from "@/lib/products"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = products
      .filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      )
      .slice(0, 6) // Limit to 6 results for better UX

    setSearchResults(results)
  }, [searchQuery])

  // Keyboard navigation for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setSearchQuery("")
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder-logo-web.jpg"
              alt="HAI DANG"
              width={260}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent transition-colors">Services</button>
              <div className="absolute top-full left-0 bg-card/90 backdrop-blur-md border border-border/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link href="/services/import-export" className="block px-4 py-2 text-card-foreground hover:bg-muted/50">
                  Import-Export & Trading
                </Link>
                <Link
                  href="/services/digital-advertising"
                  className="block px-4 py-2 text-card-foreground hover:bg-muted/50"
                >
                  Digital Advertising
                </Link>
              </div>
            </div>
            <Link
              href="/fashion"
              className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="w-4 h-4" />
              Fashion Store
            </Link>
            <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="/compliance" className="text-foreground hover:text-accent transition-colors">
              Compliance
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block relative" ref={searchRef}>
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products... "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="pl-10 pr-10 w-64 bg-background/50 backdrop-blur-sm border-border/50 focus:bg-background/80 transition-all duration-200"
                />
                {/* <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </div> */}
              </div>

              {/* Search Results Dropdown */}
              {isSearchOpen && (searchQuery.length > 0 || searchResults.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl overflow-hidden">
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/fashion/product/${product.id}`}
                            onClick={() => {
                              setIsSearchOpen(false)
                              setSearchQuery("")
                            }}
                            className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors group"
                          >
                            <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted/20 flex-shrink-0">
                              <Image
                                src={product.images[0] || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground group-hover:text-accent transition-colors truncate">
                                {product.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  {product.category}
                                </Badge>
                                {product.isNew && (
                                  <Badge className="bg-accent text-accent-foreground text-xs">
                                    New
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Star className="w-3 h-3 fill-current" />
                              <span className="text-xs">{product.rating}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : searchQuery.length > 0 ? (
                      <div className="p-6 text-center">
                        <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">No products found</p>
                        <p className="text-xs text-muted-foreground mt-1">Try different keywords</p>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">Popular Searches</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Dress Shirts", "Casual Wear", "Accessories", "New Arrivals"].map((term) => (
                            <button
                              key={term}
                              onClick={() => setSearchQuery(term)}
                              className="px-3 py-1 text-xs bg-muted/50 hover:bg-muted rounded-full transition-colors"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button and Cart */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/fashion">Shop Fashion</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {/* Mobile Search */}
            <div className="mb-4 relative" ref={searchRef}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="pl-10 bg-background/50 backdrop-blur-sm border-border/50"
                />
              </div>

              {/* Mobile Search Results */}
              {isSearchOpen && (searchQuery.length > 0 || searchResults.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl z-50">
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/fashion/product/${product.id}`}
                            onClick={() => {
                              setIsSearchOpen(false)
                              setSearchQuery("")
                              setIsOpen(false)
                            }}
                            className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors"
                          >
                            <div className="relative w-10 h-10 rounded-md overflow-hidden bg-muted/20 flex-shrink-0">
                              <Image
                                src={product.images[0] || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-foreground truncate text-sm">
                                {product.name}
                              </h4>
                              <Badge variant="secondary" className="text-xs mt-1">
                                {product.category}
                              </Badge>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : searchQuery.length > 0 ? (
                      <div className="p-4 text-center">
                        <Search className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">No products found</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/services/import-export" className="text-foreground hover:text-accent transition-colors pl-4">
                Import-Export & Trading
              </Link>
              <Link
                href="/services/digital-advertising"
                className="text-foreground hover:text-accent transition-colors pl-4"
              >
                Digital Advertising
              </Link>
              <Link
                href="/fashion"
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                <ShoppingBag className="w-4 h-4" />
                Fashion Store
              </Link>
              <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/compliance" className="text-foreground hover:text-accent transition-colors">
                Compliance
              </Link>
              <Link href="/news" className="text-foreground hover:text-accent transition-colors">
                News
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                <Link href="/fashion">Shop Fashion</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
