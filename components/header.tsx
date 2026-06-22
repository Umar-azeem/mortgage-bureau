"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2f5e] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1bb5a7]">
              <span className="text-lg font-bold text-white">MB</span>
            </div>
            <span className="hidden sm:inline text-lg font-bold">
              THE MORTGAGE BUREAU
            </span>
            <span className="inline sm:hidden text-base font-bold">MB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#1bb5a7] transition">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-[#1bb5a7] transition">
              About Us
            </Link>
            <Link
              href="/loan-programs"
              className="hover:text-[#1bb5a7] transition"
            >
              Loan Programs
            </Link>
            <Link
              href="/why-choose-us"
              className="hover:text-[#1bb5a7] transition"
            >
              Why Choose Us
            </Link>
            <Link href="/contact" className="hover:text-[#1bb5a7] transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded">
              SCHEDULE CONSULTATION
            </button>
            <button className="px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded">
              APPLY HERE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 px-2 hover:bg-[#141f3f] rounded"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block py-2 px-2 hover:bg-[#141f3f] rounded"
            >
              About Us
            </Link>
            <Link
              href="/loan-programs"
              className="block py-2 px-2 hover:bg-[#141f3f] rounded"
            >
              Loan Programs
            </Link>
            <Link
              href="/why-choose-us"
              className="block py-2 px-2 hover:bg-[#141f3f] rounded"
            >
              Why Choose Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-2 hover:bg-[#141f3f] rounded"
            >
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <button className="w-full px-3 py-2 border border-white text-white hover:bg-white hover:text-[#1a2f5e] transition-all duration-300 rounded text-sm font-medium relative overflow-hidden group">
                <span className="relative z-10">SCHEDULE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>

              <button className="w-full px-3 py-2 border border-white text-white hover:bg-white hover:text-[#1a2f5e] transition-all duration-300 rounded text-sm font-medium relative overflow-hidden group">
                <span className="relative z-10">APPLY</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
