export type Product = {
  id: string
  name: string
  images: string[]
  category: string
  description: string
  features: string[]
  sizes: string[]
  rating: number
  inStock: boolean
  isNew: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Cotton Dress Shirt",
    images: [
      "/elegant-white-dress-shirt-front-view.png",
      "/elegant-white-dress-shirt-back-view.png",
      "/elegant-white-dress-shirt-detail-collar.png",
      "/elegant-white-dress-shirt-on-model.png",
    ],
    category: "Men's Fashion",
    description:
      "Crafted from premium 100% cotton, this dress shirt combines classic elegance with modern comfort. Perfect for business meetings, formal events, or any occasion where you want to look your best.",
    features: [
      "100% Premium Cotton",
      "Non-iron finish",
      "Classic fit",
      "French seams",
      "Mother-of-pearl buttons",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}


