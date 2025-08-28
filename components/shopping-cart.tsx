"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

export function ShoppingCartSheet() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Cotton Dress Shirt",
      price: 89,
      quantity: 1,
      image: "/white-dress-shirt.png",
      size: "L",
      color: "White",
    },
    {
      id: "2",
      name: "Elegant Evening Dress",
      price: 159,
      quantity: 1,
      image: "/black-evening-dress.png",
      size: "M",
      color: "Black",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative bg-transparent">
          <ShoppingCart className="w-4 h-4" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({itemCount} items)</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.size && <span>Size: {item.size}</span>}
                        {item.color && <span className="ml-2">Color: {item.color}</span>}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-semibold">${item.price}</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-6 h-6 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-6 h-6 p-0 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => removeItem(item.id)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total: ${total}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
