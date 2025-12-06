"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/wiztecbd-logo.png" alt="WiztecBD Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/buy" className="text-sm font-medium hover:text-primary transition-colors">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium hover:text-primary transition-colors">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </Link>
            <Link href="/agents" className="text-sm font-medium hover:text-primary transition-colors">
              Agents
            </Link>
            <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors md:flex hidden items-center gap-2">
              <Heart className="h-5 w-5" />
              <span className="text-sm hidden lg:inline">Favourite</span>
            </button>
            <Link href="/login">
              <Button variant="default" size="sm" className="bg-[#701a3a] hover:bg-[#5a1630]">
                Login Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
