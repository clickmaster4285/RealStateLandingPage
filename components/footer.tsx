'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RE</span>
              </div>
              <span className="font-bold text-lg">RealEstate</span>
            </div>
            <p className="text-muted-foreground text-sm">Your trusted partner in finding the perfect property.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/buy" className="text-muted-foreground hover:text-primary transition">Buy</Link></li>
              <li><Link href="/rent" className="text-muted-foreground hover:text-primary transition">Rent</Link></li>
              <li><Link href="/sell" className="text-muted-foreground hover:text-primary transition">Sell</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition">Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition">About</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition">Careers</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@realestate.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Property St<br />Real City, RC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 RealEstate. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-primary transition">Terms</Link>
              <Link href="/" className="hover:text-primary transition">Privacy</Link>
              <Link href="/" className="hover:text-primary transition">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
