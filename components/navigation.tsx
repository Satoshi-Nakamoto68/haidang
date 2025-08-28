"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag, Building2 } from "lucide-react"
import { ShoppingCartSheet } from "./shopping-cart"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder-logo-web.jpg"
              alt="HAI DANG"
              width={260}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent transition-colors">Services</button>
              <div className="absolute top-full left-0 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                <Link href="/services/import-export" className="block px-4 py-2 text-card-foreground hover:bg-muted">
                  Import-Export & Trading
                </Link>
                <Link
                  href="/services/digital-advertising"
                  className="block px-4 py-2 text-card-foreground hover:bg-muted"
                >
                  Digital Advertising
                </Link>
              </div>
            </div>
            <Link
              href="/fashion"
              className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="w-4 h-4" />
              Fashion Store
            </Link>
            <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="/compliance" className="text-foreground hover:text-accent transition-colors">
              Compliance
            </Link>
            <Link href="/news" className="text-foreground hover:text-accent transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button and Cart */}
          <div className="hidden md:flex items-center gap-3">
            {/* <ShoppingCartSheet /> */}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/fashion">Shop Fashion</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/services/import-export" className="text-foreground hover:text-accent transition-colors pl-4">
                Import-Export & Trading
              </Link>
              <Link
                href="/services/digital-advertising"
                className="text-foreground hover:text-accent transition-colors pl-4"
              >
                Digital Advertising
              </Link>
              <Link
                href="/fashion"
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                <ShoppingBag className="w-4 h-4" />
                Fashion Store
              </Link>
              <Link href="/projects" className="text-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/compliance" className="text-foreground hover:text-accent transition-colors">
                Compliance
              </Link>
              <Link href="/news" className="text-foreground hover:text-accent transition-colors">
                News
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                <Link href="/fashion">Shop Fashion</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
