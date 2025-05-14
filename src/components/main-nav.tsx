"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky shadow-md top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold">
            IT
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">
            IT System Solutions
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Who We Are
          </Link>
          <Link
            href="/what-we-offer"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            What We Offer
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r text-white from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background shadow-lg md:hidden">
            <nav className="container flex flex-col py-4 space-y-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/who-we-are"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/what-we-offer"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Offer
              </Link>
              <Link
                href="/portfolio"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
