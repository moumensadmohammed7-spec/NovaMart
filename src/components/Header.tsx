"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User, Search, Menu, X, ChevronDown, MapPin, Heart, Bell, Store } from 'lucide-react';

const categories = [
  { id: 'electronics', name: 'Electronics', href: '/category/electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', href: '/category/fashion', icon: '👔' },
  { id: 'home', name: 'Home & Living', href: '/category/home', icon: '🏠' },
  { id: 'sports', name: 'Sports', href: '/category/sports', icon: '⚽' },
  { id: 'books', name: 'Books', href: '/category/books', icon: '📚' },
  { id: 'beauty', name: 'Beauty', href: '/category/beauty', icon: '💄' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Mock values
  const cartCount = 3;
  const wishlistCount = 5;
  const isAuthenticated = false;
  const isAdmin = false;

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/category', label: 'All Categories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="/orders" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Track Order</span>
              </Link>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden md:inline">Daily Deals</span>
                <span className="inline text-accent-300 font-medium">Up to 50% Off</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <Link href="tel:18006686278" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden lg:inline">1-800-NOVA-MART</span>
              </Link>
              <Link href="/privacy" className="hover:text-accent-300 transition-colors hidden md:inline">Help</Link>
              {!isAuthenticated ? (
                <Link href="/auth/login" className="font-medium hover:text-accent-300 transition-colors">Sign In</Link>
              ) : (
                <span>Welcome, John</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 md:gap-8 h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
              <Store className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold tracking-tight">
                <span className="text-primary-700">Nova</span>
                <span className="text-accent-500">Mart</span>
              </div>
              <div className="text-[10px] lg:text-xs text-gray-400 -mt-1 tracking-wide">Premium Marketplace</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center border-2 border-primary-500 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary-500/20 transition-all">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands, and more..."
                  className="flex-1 px-5 py-3 text-gray-900 placeholder:text-gray-400 outline-none bg-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-6 py-3 transition-all flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span className="hidden lg:inline font-medium">Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Mobile Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2.5 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="hidden lg:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-all"
              >
                <User className="w-6 h-6 text-gray-600" />
                <div className="hidden xl:block text-left">
                  <p className="text-xs text-gray-500">Hello, Sign in</p>
                  <p className="text-sm font-semibold text-gray-800">Account</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <div className="px-4 py-3 border-b border-gray-100 text-center">
                    {isAuthenticated ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                        <div className="text-left">
                          <p className="font-semibold">John Doe</p>
                          <p className="text-xs text-gray-500">john@example.com</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium text-gray-800 mb-3">Welcome to NovaMart</p>
                        <Link href="/auth/login" className="block w-full py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors">
                          Sign In / Register
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="py-2">
                    <Link href="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">My Orders</Link>
                    <Link href="/wishlist" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Wishlist</Link>
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 lg:p-2.5 text-gray-600 hover:text-accent-500 hover:bg-gray-100 rounded-xl transition-all"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {wishlistCount}
                </span>
              )}
              <span className="hidden lg:block text-xs text-center mt-1 block">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex flex-col items-center p-2 lg:p-2.5 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:block text-xs mt-1">Cart</span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className="md:hidden py-4 animate-slide-down">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 border-2 border-primary-500 rounded-xl focus:ring-2 focus:ring-primary-500/20 outline-none"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </form>
        )}

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1 h-12 border-t border-gray-100">
          <Link
            href="/category"
            className="flex items-center gap-2 px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-sm transition-colors"
          >
            <Menu className="w-4 h-4" />
            All Categories
          </Link>
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-xl font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Categories</p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <span>{cat.icon}</span>
                    <span className="text-sm">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 px-4">
              {!isAuthenticated ? (
                <Link
                  href="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 bg-primary-600 text-white text-center font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Sign In / Register
                </Link>
              ) : (
                <button className="flex items-center gap-2 text-red-600 font-medium">
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
