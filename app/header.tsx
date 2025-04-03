"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/products/wall-art" className="text-lg font-semibold">
                Metal Wall Art
              </Link>
              <Link href="/products/copper-bottles" className="text-lg font-semibold">
                Copper Bottles
              </Link>
              <Link href="/about" className="text-lg font-semibold">
                About Us
              </Link>
              <Link href="/contact" className="text-lg font-semibold">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="ml-4 md:ml-0 flex items-center gap-2">
          <span className="text-xl font-bold">MetalCraft</span>
        </Link>

        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-amber-800">
            Home
          </Link>
          <Link href="/products/wall-art" className="font-medium transition-colors hover:text-amber-800">
            Metal Wall Art
          </Link>
          <Link href="/products/copper-bottles" className="font-medium transition-colors hover:text-amber-800">
            Copper Bottles
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-amber-800">
            About Us
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-amber-800">
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {isSearchOpen && !isMobile ? (
            <div className="relative">
              <Input
                placeholder="Search products..."
                className="w-[200px] md:w-[300px] pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-amber-800 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

