'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold">RE</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">RealEstate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">About Us</Link>
            <Link href="/buy" className="text-foreground hover:text-primary transition">Buy</Link>
            <Link href="/rent" className="text-foreground hover:text-primary transition">Rent</Link>
            <Link href="/sell" className="text-foreground hover:text-primary transition">Sell</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">Services</Link>
             <Link href="/contact" className="text-foreground hover:text-primary transition">Contact Us</Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            Log In
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary">Home</Link>
             <Link href="/about" className="block py-2 text-foreground hover:text-primary">About Us</Link>
            <Link href="/buy" className="block py-2 text-foreground hover:text-primary">Buy</Link>
            <Link href="/rent" className="block py-2 text-foreground hover:text-primary">Rent</Link>
            <Link href="/sell" className="block py-2 text-foreground hover:text-primary">Sell</Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-primary">Services</Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary">Contact Us</Link>

            <Link href="/contact" className="block py-3 mt-2 px-0 bg-primary text-primary-foreground rounded-lg text-center">Log In</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
