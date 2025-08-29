"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams } from "next/navigation"
import { TrustBar } from "@/components/trust-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Truck, Shield, RotateCcw, Heart, Share2, ShoppingCart, X, ZoomIn, ZoomOut, RotateCw, Download, ArrowLeft, ArrowRight, Maximize2, Info, Eye, CheckCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getProductById, products as catalog } from "@/lib/products"

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>()
  const product = getProductById(String(params.id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  
  // Image zoom modal state
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [showImageInfo, setShowImageInfo] = useState(false)

  // Related products carousel state
  const [currentSlide, setCurrentSlide] = useState(0)

  // Get related products from the same category
  const relatedProducts = useMemo(() => {
    if (!product) return []
    return catalog
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 8) // Limit to 8 related products
  }, [product])

  // Keyboard navigation
  useEffect(() => {
    if (!isZoomModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeZoomModal()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowUp':
          handleZoomIn()
          break
        case 'ArrowDown':
          handleZoomOut()
          break
        case '0':
          resetZoom()
          break
        case 'i':
          setShowImageInfo(prev => !prev)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isZoomModalOpen])

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

  // Image zoom modal handlers
  const openZoomModal = () => {
    console.log('Opening zoom modal...')
    setIsZoomModalOpen(true)
    setZoomLevel(2) // Start with 2x zoom for immediate zoom effect
    setImagePosition({ x: 0, y: 0 })
    setShowImageInfo(false)
  }
  const closeZoomModal = () => {
    setIsZoomModalOpen(false)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
    setShowImageInfo(false)
  }

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.5, 8))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.5, 0.3))
  const resetZoom = () => {
    setZoomLevel(2) // Reset to 2x zoom instead of 1x
    setImagePosition({ x: 0, y: 0 })
  }

  const nextImage = () => setSelectedImage(prev => (prev + 1) % product.images.length)
  const prevImage = () => setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  // Related products carousel handlers
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(relatedProducts.length / 4))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(relatedProducts.length / 4)) % Math.ceil(relatedProducts.length / 4))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <div className="min-h-screen">
      <TrustBar />
      <Navigation />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images - Fixed Dimensions */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-[80px_1fr] gap-4 items-start">
                {/* Vertical thumbnails on md+ */}
                <div className="hidden md:flex md:flex-col md:gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`overflow-hidden rounded-md border-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
                        selectedImage === index ? "border-accent ring-2 ring-accent/20" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
                
                {/* Main image with fixed dimensions and click to zoom */}
                <div className="overflow-hidden rounded-lg border border-border bg-muted/30 relative group">
                  <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] cursor-zoom-in">
                    <Image
                      src={product.images[selectedImage] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-200 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      priority
                    />
                    
                    {/* Clickable overlay for zoom */}
                    <div 
                      className="absolute inset-0 cursor-zoom-in z-10"
                      onClick={openZoomModal}
                      onMouseEnter={() => {}}
                    />
                    
                    {/* Debug indicator */}
                    {/* <div className="absolute top-2 right-2 z-20 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Modal: {isZoomModalOpen ? 'OPEN' : 'CLOSED'}
                    </div> */}
                    
                    {/* Zoom overlay indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-black/50 text-white px-3 py-2 rounded-full flex items-center gap-2">
                        <Maximize2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Click to zoom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Horizontal thumbnails on small screens */}
              <div className="grid grid-cols-4 gap-2 md:hidden">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
                      selectedImage === index ? "border-accent ring-2 ring-accent/20" : "border-border hover:border-accent/50"
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
            <div className="space-y-6 lg:space-y-8">
              <div>
                {/* Enhanced Breadcrumb and SKU */}
                <div className="text-sm text-muted-foreground mb-4">
                  <Link href="/" className="hover:text-accent transition-colors duration-200">Home</Link> 
                  <span className="px-2 text-muted-foreground/50">/</span>{" "}
                  <Link href="/fashion" className="hover:text-accent transition-colors duration-200">Fashion</Link> 
                  <span className="px-2 text-muted-foreground/50">/</span>{" "}
                  <span className="text-foreground font-medium">{product.category}</span>
                  <span className="ml-3 text-xs bg-muted px-2 py-1 rounded-full">SKU: {product.id.toUpperCase()}</span>
                </div>
                
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground animate-pulse">
                      ✨ New Arrival
                    </Badge>
                  )}
                  {/* {product.isSale && <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>} */}
                </div>
                
                {/* Product Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">{product.name}</h1>
                <p className="text-lg text-muted-foreground font-medium">{product.category}</p>
                
                {/* Description */}
                <p className="mt-4 text-muted-foreground leading-relaxed text-base">{product.description}</p>
              </div>

              {/* Enhanced Rating */}
              <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {product.rating}/5 rating
                </span>
                {/* <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span> */}
              </div>

              {/* Price Section */}
              {/* <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
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

              {/* Enhanced Options */}
              <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Select Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full h-12 bg-background border-border hover:border-accent/50 transition-colors duration-200">
                      <SelectValue placeholder="Choose your size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem 
                          key={size} 
                          value={size}
                          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors duration-150 py-3"
                        >
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity Selector */}
                {/* <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Quantity</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                    <SelectTrigger className="w-24 h-12 bg-background border-border hover:border-accent/50 transition-colors duration-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem 
                          key={i + 1} 
                          value={(i + 1).toString()}
                          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                        >
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}
              </div>

              {/* Enhanced Actions */}
              {/* <div className="flex gap-3">
                <button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                        disabled={!selectedSize}>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  className="p-3 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current text-red-500" : "text-muted-foreground"}`} />
                </button>
                <button className="p-3 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-200">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div> */}

              {/* Enhanced Features */}
              <div className="p-4 bg-muted/20 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Key Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Product Assurance Section */}
          <div className="mt-12 rounded-xl border border-border p-6 bg-gradient-to-r from-muted/30 to-muted/50">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Why Choose Our Products?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-200">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Fast, Secure Shipping</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Tracked worldwide delivery with insurance coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-200">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Quality Guaranteed</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">2-year warranty on manufacturing defects</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-200">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hassle-free Returns</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">30-day return policy with free return shipping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-accent rounded-full"></div>
                  <h2 className="text-2xl font-bold text-foreground">Related Products</h2>
                  <Badge variant="secondary" className="ml-2">
                    {relatedProducts.length} items
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    title="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === Math.ceil(relatedProducts.length / 4) - 1}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    title="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Related Products Carousel */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(relatedProducts.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {relatedProducts.slice(slideIndex * 4, (slideIndex + 1) * 4).map((relatedProduct) => (
                        <Link
                          key={relatedProduct.id}
                          href={`/fashion/product/${relatedProduct.id}`}
                          className="group block"
                        >
                          <div className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            {/* Product Image */}
                            <div className="relative aspect-square overflow-hidden bg-muted/30">
                              <Image
                                src={relatedProduct.images[0] || "/placeholder.svg"}
                                alt={relatedProduct.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              />
                              
                              {/* Overlay with badges */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              {relatedProduct.isNew && (
                                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground animate-pulse">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  New
                                </Badge>
                              )}
                              
                              {/* Quick view button */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 text-foreground px-4 py-2 rounded-full font-medium text-sm">
                                  View Product
                                </div>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                              <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                                {relatedProduct.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">{relatedProduct.category}</p>
                              
                              {/* Rating */}
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < Math.floor(relatedProduct.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  {relatedProduct.rating}/5
                                </span>
                              </div>

                              {/* Features preview */}
                              <div className="flex flex-wrap gap-1">
                                {relatedProduct.features.slice(0, 2).map((feature, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                  {Array.from({ length: Math.ceil(relatedProducts.length / 4) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-accent scale-125' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      title={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* View All Products Button */}
              <div className="text-center mt-8">
                <Link
                  href="/fashion"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:scale-105"
                >
                  <Sparkles className="w-4 h-4" />
                  View All {product.category} Products
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Enhanced Image Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
          {/* <div className="text-white text-2xl mb-4">Modal is open!</div> */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Header with product info */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-white/80 text-sm">{product.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowImageInfo(prev => !prev)}
                    className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                    title="Image Information (I)"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeZoomModal}
                    className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                    title="Close (ESC)"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image information panel */}
            {showImageInfo && (
              <div className="absolute top-20 left-4 z-30 bg-white/95 backdrop-blur-sm rounded-xl p-4 max-w-sm shadow-2xl">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-accent" />
                  Image Details
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Current Image:</span>
                    <span className="font-medium">{selectedImage + 1} of {product.images.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zoom Level:</span>
                    <span className="font-medium">{zoomLevel.toFixed(1)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product SKU:</span>
                    <span className="font-medium">{product.id.toUpperCase()}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      Use mouse wheel to zoom • Drag to pan • Arrow keys to navigate • I for info • ESC to close
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation arrows with enhanced styling */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/20 text-white rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              title="Previous Image (←)"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/20 text-white rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              title="Next Image (→)"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Enhanced Zoom controls */}
            <div className="absolute top-20 left-4 z-10 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="p-3 bg-white/20 text-white rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-200 backdrop-blur-sm cursor-pointer"
                title="Zoom In (↑ or Mouse wheel up)"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-3 bg-white/20 text-white rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-200 backdrop-blur-sm cursor-pointer"
                title="Zoom Out (↓ or Mouse wheel down)"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={resetZoom}
                className="p-3 bg-white/20 text-white rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-200 backdrop-blur-sm cursor-pointer"
                title="Reset to 2x Zoom (0)"
              >
                <RotateCw className="w-5 h-5" />
              </button>
            </div>

            {/* Image counter with enhanced styling */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {selectedImage + 1} of {product.images.length}
              </span>
            </div>

            {/* Main zoomed image */}
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              style={{ cursor: zoomLevel > 1 ? 'grab' : 'default' }}
            >
              <div
                className="relative transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                }}
              >
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={800}
                  height={1000}
                  className="max-w-none object-contain"
                  priority
                />
              </div>
              
              {/* Zoom level indicator */}
              <div className="absolute top-32 left-4 z-10 px-3 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                {zoomLevel.toFixed(1)}x
              </div>
              
              {/* Welcome zoom message */}
              <div className="absolute top-40 left-4 z-10 px-4 py-3 bg-accent/90 text-accent-foreground rounded-lg text-sm font-medium animate-pulse">
                ✨ Image zoomed in! Use mouse wheel or buttons to adjust
              </div>
            </div>

            {/* Enhanced Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-3 bg:white/20 backdrop-blur-sm rounded-2xl">
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg border-2 transition-all duration-200 hover:scale-110 cursor-pointer ${
                      selectedImage === index 
                        ? "border-accent ring-2 ring-accent/50 shadow-lg shadow-accent/25" 
                        : "border-white/30 hover:border-white/50"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={60}
                      height={60}
                      className="w-15 h-15 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced keyboard shortcuts hint */}
            <div className="absolute bottom-6 right-6 z-10 px-4 py-2 bg-white/20 backdrop-blur-sm text-white/90 rounded-lg text-xs max-w-xs">
              <div className="font-medium mb-1">Keyboard Shortcuts:</div>
              <div className="space-y-1 text-white/80">
                <div>• Arrow keys: Navigate images</div>
                <div>• ↑↓: Zoom in/out</div>
                <div>• 0: Reset zoom</div>
                <div>• I: Show info</div>
                <div>• ESC: Close modal</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
