"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  // isSale?: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card
      className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative cursor-pointer">
          <AspectRatio ratio={4 / 5}>
            <div className="relative h-full w-full bg-muted/20 border-b border-border overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
            </div>
          </AspectRatio>

          {/* Hover overlay with CTA */}
          <div className="pointer-events-none absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full rounded-md bg-gradient-to-t from-background/90 via-background/60 to-transparent p-3 backdrop-blur-sm border border-border/50">
              <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{product.category}</p>
              <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <Button size="sm" className="pointer-events-auto bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href={`/fashion/product/${product.id}`} aria-label={`View details for ${product.name}`}>
                    View details
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
            {/* {product.isSale && <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>} */}
          </div>

          {/* Action buttons */}
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button size="sm" variant="secondary" className="w-8 h-8 p-0" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
            </Button>
          </div>

          {/* Quick add to cart */}
          {/* <div
            className={`absolute bottom-2 left-2 right-2 transition-all duration-300 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div> */}
        </div>

        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          {/* <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div> */}
        </div>
      </CardContent>
    </Card>
  )
}
