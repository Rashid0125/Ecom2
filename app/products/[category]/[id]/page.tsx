"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Mock product data - in a real app, this would come from an API or database
const allProducts = {
  "wall-art": [
    {
      id: 1,
      name: "Copper Tree of Life",
      price: 129.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Handcrafted copper wall art depicting the tree of life, symbolizing growth and connection. This intricate piece is made from high-quality copper and features detailed branches and leaves that catch the light beautifully. Each piece is handmade by our skilled artisans, ensuring that no two are exactly alike.",
      dimensions: '24" x 24"',
      weight: "3.5 lbs",
      material: "Pure Copper",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 3,
      name: "Metal Mandala Wall Art",
      price: 89.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Intricate metal mandala design, perfect for adding a touch of elegance to any wall. This beautiful mandala is crafted with precision and attention to detail, creating a mesmerizing pattern that draws the eye. The metal construction ensures durability while maintaining a lightweight profile for easy hanging.",
      dimensions: '20" diameter',
      weight: "2.8 lbs",
      material: "Iron with copper finish",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 4,
      name: "Metal Butterfly Wall Art",
      price: 79.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Beautiful metal butterfly design that adds a touch of nature to your walls. This delicate yet sturdy piece captures the grace and beauty of butterflies in flight. The metal construction catches and reflects light, creating a dynamic display that changes throughout the day.",
      dimensions: '18" x 14"',
      weight: "2.2 lbs",
      material: "Brass with patina finish",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 5,
      name: "Geometric Metal Wall Decor",
      price: 99.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Modern geometric metal wall art with a sophisticated finish. This contemporary piece features clean lines and geometric shapes that create a bold visual statement. Perfect for modern and minimalist interiors, this wall art adds depth and interest to any space.",
      dimensions: '30" x 15"',
      weight: "3.2 lbs",
      material: "Steel with matte black finish",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 6,
      name: "Abstract Metal Wall Sculpture",
      price: 149.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Contemporary abstract metal sculpture that makes a bold statement. This unique piece combines various metal elements in an abstract composition that catches the eye and sparks conversation. The multi-dimensional design creates interesting shadows and highlights depending on the lighting.",
      dimensions: '36" x 24"',
      weight: "4.5 lbs",
      material: "Mixed metals with brushed finish",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 7,
      name: "Mountain Range Metal Art",
      price: 119.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Serene mountain range design crafted in metal, perfect for nature lovers. This peaceful landscape captures the majesty of mountain peaks in durable metal. The layered design adds depth and dimension, creating a sense of perspective that draws the viewer in.",
      dimensions: '32" x 18"',
      weight: "3.8 lbs",
      material: "Copper and steel",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
  ],
  "copper-bottles": [
    {
      id: 2,
      name: "Engraved Copper Bottle",
      price: 49.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Premium copper bottle with intricate hand-engraved designs. Keeps water naturally pure. This bottle is crafted from high-quality copper and features traditional hand-engraved patterns that showcase the skill of our artisans. Copper naturally ionizes water, making it more alkaline and beneficial for health.",
      capacity: "750 ml",
      weight: "0.9 lbs",
      material: "99.5% Pure Copper",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 8,
      name: "Plain Copper Water Bottle",
      price: 39.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Simple yet elegant copper water bottle for daily use. This sleek, minimalist design focuses on functionality while maintaining the natural beauty of copper. The bottle is seamless to prevent leakage and is perfect for those who appreciate understated elegance.",
      capacity: "1000 ml",
      weight: "1.1 lbs",
      material: "Pure Copper",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 9,
      name: "Hammered Copper Bottle",
      price: 54.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Copper bottle with a beautiful hammered texture for a unique look. The hammered finish not only enhances the visual appeal but also strengthens the bottle. Each hammer mark is made by hand, creating a one-of-a-kind pattern that catches the light beautifully.",
      capacity: "850 ml",
      weight: "1.0 lbs",
      material: "Pure Copper",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 10,
      name: "Copper Bottle with Wooden Lid",
      price: 59.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Copper bottle featuring a handcrafted wooden lid for an eco-friendly touch. This bottle combines the health benefits of copper with the natural warmth of wood. The wooden lid provides a secure seal and adds a touch of organic elegance to the design.",
      capacity: "950 ml",
      weight: "1.2 lbs",
      material: "Pure Copper with Teak Wood Lid",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
    {
      id: 11,
      name: "Copper Bottle Gift Set",
      price: 89.99,
      image: "/placeholder.svg?height=600&width=600",
      description:
        "Set of two copper bottles with matching cups, perfect as a gift. This elegant set comes beautifully packaged and ready to give. The bottles and cups are made from high-quality copper and feature complementary designs that work together harmoniously.",
      capacity: "750 ml each bottle, 100 ml each cup",
      weight: "2.5 lbs (total set)",
      material: "Pure Copper",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
    },
  ],
}

export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const productId = Number.parseInt(id)

  // Find the product in the appropriate category
  const products = allProducts[category as keyof typeof allProducts] || []
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { toast } = useToast()

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
        <Link href="/products">
          <Button>Return to Products</Button>
        </Link>
      </div>
    )
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href={`/products/${category}`}
        className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {category === "wall-art" ? "Wall Art" : "Copper Bottles"}
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <img
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`border rounded-md overflow-hidden ${activeImage === index ? "ring-2 ring-amber-800" : ""}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-auto aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-amber-900">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="space-y-2">
              {category === "wall-art" ? (
                <>
                  <li className="flex justify-between">
                    <span className="text-zinc-500">Dimensions</span>
                    <span>{product.dimensions}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-500">Weight</span>
                    <span>{product.weight}</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex justify-between">
                    <span className="text-zinc-500">Capacity</span>
                    <span>{product.capacity}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-zinc-500">Weight</span>
                    <span>{product.weight}</span>
                  </li>
                </>
              )}
              <li className="flex justify-between">
                <span className="text-zinc-500">Material</span>
                <span>{product.material}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-16 text-center">{quantity}</div>
              <Button variant="outline" size="icon" onClick={incrementQuantity} className="h-10 w-10">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button onClick={addToCart} className="w-full bg-amber-800 hover:bg-amber-900">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

