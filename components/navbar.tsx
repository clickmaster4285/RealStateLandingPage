'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/buy', label: 'Buy' },
    { href: '/rent', label: 'Rent' },
    { href: '/sell', label: 'Sell' },
    { href: '/services', label: 'Services' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/#case-study', label: 'Case Study' },
  ];

  const activeStyle = "text-primary underline decoration-primary underline-offset-4 font-semibold transition";
  const inactiveStyle = "text-foreground hover:text-primary transition";
  const transparentInactiveStyle = "text-white hover:text-primary transition";

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  const getLinkStyle = (href: string) => {
    const active = isActive(href);
    if (active) return activeStyle;
    if (!isScrolled) return transparentInactiveStyle;
    return inactiveStyle;
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background border-b border-border shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold">PR</span>
            </div>
            <span className={`font-bold text-xl hidden sm:inline transition-colors duration-300 ${
              !isScrolled ? 'text-white' : 'text-foreground'
            }`}>
              PropertyPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={getLinkStyle(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`hidden sm:inline px-6 py-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-primary text-white hover:bg-white/90 shadow-lg'
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${!isScrolled ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${!isScrolled ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 ${!isScrolled ? 'bg-black/80 backdrop-blur-md rounded-lg mt-2' : 'border-t border-border'}`}>
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`block py-2 px-2 ${getLinkStyle(item.href)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`block py-3 mt-2 px-2 rounded-lg text-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}