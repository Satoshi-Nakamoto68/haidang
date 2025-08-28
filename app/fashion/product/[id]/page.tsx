"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Truck, Shield, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getProductById } from "@/lib/products"

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>()
  const product = getProductById(String(params.id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen">
        <TrustBar />
        <Navigation />
        <main className="py-8">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground">Product not found.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-[80px_1fr] gap-4 items-start">
                {/* Vertical thumbnails on md+ */}
                <div className="hidden md:flex md:flex-col md:gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`overflow-hidden rounded-md border-2 ${
                        selectedImage === index ? "border-accent" : "border-border"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
                {/* Main image smaller */}
                <div className="overflow-hidden rounded-lg border border-border max-w-xl mx-auto w-full">
                  <Image
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    width={560}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Horizontal thumbnails on small screens */}
              <div className="grid grid-cols-4 gap-2 md:hidden">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-md border-2 ${
                      selectedImage === index ? "border-accent" : "border-border"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                {/* Breadcrumb and SKU for transparency */}
                <div className="text-sm text-muted-foreground mb-2">
                  <Link href="/">Home</Link> <span className="px-1">/</span>{" "}
                  <Link href="/fashion">Fashion</Link> <span className="px-1">/</span>{" "}
                  <span>{product.category}</span>
                  <span className="ml-2 text-xs text-muted-foreground">SKU: {product.id.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
                  {/* {product.isSale && <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>} */}
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-muted-foreground">{product.category}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                {/* <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span> */}
              </div>

              {/* Price */}
              {/* <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                {product.isSale && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    Save ${product.originalPrice! - product.price}
                  </Badge>
                )}
              </div> */}

              {/* Options */}
              <div className="space-y-4">
                {/* <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Quantity</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}
              </div>

              {/* Actions */}
              {/* <div className="flex gap-3">
                <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" disabled={!selectedSize}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" onClick={() => setIsLiked(!isLiked)}>
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div> */}

              {/* Key features inline for visibility */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-foreground mb-2">Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Assurance Section */}
          <div className="mt-10 rounded-lg border border-border p-4 bg-background/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Fast, secure shipping</p>
                  <p className="text-muted-foreground">Tracked worldwide delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Quality guaranteed</p>
                  <p className="text-muted-foreground">2-year warranty on defects</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Hassle-free returns</p>
                  <p className="text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
