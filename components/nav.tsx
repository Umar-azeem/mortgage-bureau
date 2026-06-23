"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Calendar,
  FileText,
  Home,
  Info,
  FileCheck,
  ThumbsUp,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Info },
    { href: "/loan-programs", label: "Loan Programs", icon: FileCheck },
    { href: "/why-choose-us", label: "Why Choose Us", icon: ThumbsUp },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a2f5e] text-white shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="The Mortgage Bureau Logo"
              width={100}
              height={100}
              className=" md:w-26 md:h-18 lg:w-28 lg:h-20 object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-tight">
              THE MORTGAGE BUREAU
            </span>
            <span className="block text-[10px] font-light tracking-widest text-white/60">
              COLORADO'S TRUSTED EXPERTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max mx-2 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-all hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/schedule">
            {" "}
            <Button
              variant="outline"
              className="group relative overflow-hidden border-white/40 text-white hover:border-white hover:bg-white hover:text-[#1a2f5e] transition-all duration-300 rounded-lg px-5 py-2.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                SCHEDULE
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="group relative overflow-hidden bg-[#1bb5a7] hover:bg-[#14998d] text-white transition-all duration-300 rounded-lg px-5 py-2.5 shadow-lg shadow-[#1bb5a7]/30 hover:shadow-xl hover:shadow-[#1bb5a7]/40">
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                APPLY NOW
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[350px] bg-[#1a2f5e] text-white border-white/10 p-0"
          >
            <div className="flex h-20 items-center border-b border-white/10 px-6">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <Image
                    src="/img/logo.png"
                    alt="The Mortgage Bureau Logo"
                    width={100}
                    height={100}
                    className=" w-28 h-20 object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-5 w-5 text-[#1bb5a7]" />
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 space-y-4 border-t border-white/30 pt-4">
  <Link href="/schedule" className="block">
    <Button className="w-full justify-center gap-2 border-black/80 text-black hover:bg-black hover:text-[#1a2f5e] transition-all duration-700 group relative overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        SCHEDULE
      </span>
      <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Button>
  </Link>

  <Link href="/contact" className="block">
    <Button className="w-full justify-center gap-2 bg-[#1bb5a7] hover:bg-[#14998d] text-white transition-all duration-300 shadow-lg shadow-[#1bb5a7]/30">
      <FileText className="h-4 w-4" />
      APPLY NOW
    </Button>
  </Link>
</div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
