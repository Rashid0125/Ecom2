import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock product data
const products = {
  "wall-art": [
    {
      id: 1,
      name: "Copper Tree of Life",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Handcrafted copper wall art depicting the tree of life, symbolizing growth and connection.",
    },
    {
      id: 4,
      name: "Metal Butterfly Wall Art",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Beautiful metal butterfly design that adds a touch of nature to your walls.",
    },
    {
      id: 5,
      name: "Geometric Metal Wall Decor",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Modern geometric metal wall art with a sophisticated finish.",
    },
    {
      id: 3,
      name: "Metal Mandala Wall Art",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Intricate metal mandala design, perfect for adding a touch of elegance to any wall.",
    },
    {
      id: 6,
      name: "Abstract Metal Wall Sculpture",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Contemporary abstract metal sculpture that makes a bold statement.",
    },
    {
      id: 7,
      name: "Mountain Range Metal Art",
      price: 119.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Serene mountain range design crafted in metal, perfect for nature lovers.",
    },
  ],
  "copper-bottles": [
    {
      id: 2,
      name: "Engraved Copper Bottle",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Premium copper bottle with intricate hand-engraved designs. Keeps water naturally pure.",
    },
    {
      id: 8,
      name: "Plain Copper Water Bottle",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Simple yet elegant copper water bottle for daily use.",
    },
    {
      id: 9,
      name: "Hammered Copper Bottle",
      price: 54.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Copper bottle with a beautiful hammered texture for a unique look.",
    },
    {
      id: 10,
      name: "Copper Bottle with Wooden Lid",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Copper bottle featuring a handcrafted wooden lid for an eco-friendly touch.",
    },
    {
      id: 11,
      name: "Copper Bottle Gift Set",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Set of two copper bottles with matching cups, perfect as a gift.",
    },
  ],
}

const categoryTitles = {
  "wall-art": "Metal Wall Art Collection",
  "copper-bottles": "Premium Copper Bottles",
}

const categoryDescriptions = {
  "wall-art":
    "Transform your space with our handcrafted metal wall art pieces. Each piece is meticulously designed and crafted to add elegance and character to your home.",
  "copper-bottles":
    "Discover the health benefits and timeless beauty of our copper bottles. Handcrafted with care, these bottles not only look stunning but also provide the natural benefits of copper.",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const productList = products[category as keyof typeof products] || []
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Products"
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions] || ""

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">{title}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-zinc-700">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Link href={`/products/${category}/${product.id}`}>
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
              <Button className="w-full bg-amber-800 hover:bg-amber-900">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

