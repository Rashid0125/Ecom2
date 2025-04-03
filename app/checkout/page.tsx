"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

// Mock cart summary data - in a real app, this would be managed with context or state management
const cartSummary = {
  subtotal: 229.97,
  shipping: 15.0,
  total: 244.97,
  items: [
    {
      id: 1,
      name: "Copper Tree of Life",
      price: 129.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Engraved Copper Bottle",
      price: 49.99,
      quantity: 2,
    },
  ],
}

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Link href="/cart" className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-amber-900">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Shipping Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input id="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP / Postal Code</Label>
                    <Input id="zip" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" required placeholder="XXXX XXXX XXXX XXXX" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" required placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" required placeholder="XXX" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900">
                  <Lock className="mr-2 h-4 w-4" />
                  Place Order
                </Button>
                <p className="text-sm text-center mt-4 text-zinc-500">
                  Your payment information is encrypted and secure.
                </p>
              </div>
            </div>
          </form>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-4">
                {cartSummary.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} <span className="text-zinc-500">x{item.quantity}</span>
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <Separator />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${cartSummary.shipping.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${cartSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

