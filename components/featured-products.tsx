"use client"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const featuredProducts = [
  {
    id: 1,
    name: "Copper Tree of Life",
    category: "wall-art",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Handcrafted copper wall art depicting the tree of life, symbolizing growth and connection.",
  },
  {
    id: 2,
    name: "Engraved Copper Bottle",
    category: "copper-bottles",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium copper bottle with intricate hand-engraved designs. Keeps water naturally pure.",
  },
  {
    id: 3,
    name: "Metal Mandala Wall Art",
    category: "wall-art",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Intricate metal mandala design, perfect for adding a touch of elegance to any wall.",
  },
]

export default function FeaturedProducts() {
  const { toast } = useToast()

  const addToCart = (product: any) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <>
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link href={`/products/${product.category}/${product.id}`}>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-48 transition-all hover:scale-105"
            />
          </Link>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-zinc-500 line-clamp-2 mt-1">{product.description}</p>
            <p className="font-bold text-amber-800 mt-2">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => addToCart(product)} className="w-full bg-amber-800 hover:bg-amber-900">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

