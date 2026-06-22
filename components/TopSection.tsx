"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

const heroImages = [
  { src: "/img/m1.png", alt: "Colorado Mortgage Expert" },
  { src: "/img/m2.png", alt: "Colorado Mortgage Expert" },
  { src: "/img/m7.png", alt: "Colorado Mortgage Expert" },
  { src: "/img/m4.png", alt: "Colorado Mortgage Expert" },
  { src: "/img/m5.png", alt: "Colorado Mortgage Expert" },
 
 
];

function TopSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && contentRef.current) {
        const scrollY = window.scrollY;
        const translateY = scrollY * 0.4;
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Desktop Hero */}
      <section
        ref={heroRef}
        className="relative hidden sm:flex overflow-hidden min-h-[650px] md:min-h-[750px] lg:min-h-[800px]"
      >
        {/* Background Images with Slide Transition */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Animated Content */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-screen mx-auto px-4 py-10 md:py-16 lg:py-24 sm:px-6 lg:px-8 transition-transform duration-100 ease-out"
        >
          <div className="max-w-4xl mx-auto text-center mt-16">
            {/* Location Badge */}
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up">
              <MapPin className="w-5 h-5 text-[#1A2F5E]" />
              <span className="text-[#1A2F5E] font-semibold tracking-wide text-sm uppercase">
                Colorado's Trusted Mortgage Experts
              </span>
            </div>

            {/* Title */}
            <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4 animate-fade-in-up">
              Colorado's Trusted
              <br />
              <span className="font-semibold text-[#1A2F5E]">
                Mortgage Experts
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl font-light text-slate-200/90 leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              At The Mortgage Bureau, we make the path to homeownership clear,
              accessible, and tailored to you—built on a culture of giving:
              time, knowledge, and empathy.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#1A2F5E] flex-shrink-0" />
                <span className="text-sm text-slate-200">
                  New to the process?{" "}
                  <span className="text-white font-medium">
                    Patience & Education
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#1A2F5E] flex-shrink-0" />
                <span className="text-sm text-slate-200">
                  Know what you need?{" "}
                  <span className="text-white font-medium">
                    Speed & Responsiveness
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button className="bg-[#1A2F5E] hover:bg-[#1A2F5E] text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4a9eff]/30 border-0 group">
                <Link href="/contact" className="flex items-center gap-2">
                  APPLY FOR A LOAN
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button className="bg-transparent border-2 border-white/60 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 hover:border-white">
                <Link href="/about-us">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Image Counter / Indicator Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mobile Section - FULL HEIGHT FIX */}
      <section className="w-full md:hidden">
        {/* Full-height image container */}
        <div className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-[#1a2535]">
          {/* Sliding Images */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>

          {/* Mobile Content - Centered with proper spacing */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-10 text-center">
            {/* Location Badge */}
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up">
              <MapPin className="w-4 h-4 text-[#1A2F5E]" />
              <span className="text-[#1A2F5E] font-semibold text-xs tracking-wide uppercase">
                Colorado's Trusted Mortgage Experts
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[2.2rem] font-bold text-white leading-tight tracking-tight mb-4 animate-fade-in-up">
              Colorado's Trusted
              <br />
              <span className="text-[#1A2F5E]">Mortgage Experts</span>
            </h1>

            {/* Description */}
            <p className="text-sm text-slate-200/90 leading-relaxed mb-6 max-w-sm animate-fade-in-up animation-delay-200">
              At The Mortgage Bureau, we make the path to homeownership clear,
              accessible, and tailored to you—built on a culture of giving:
              time, knowledge, and empathy.
            </p>

            {/* Feature Points */}
            <div className="space-y-2.5 text-left w-full max-w-xs mb-6 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#1A2F5E] flex-shrink-0" />
                <span>
                  New to the process?{" "}
                  <span className="text-white font-semibold">
                    Patience & Education
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#1A2F5E] flex-shrink-0" />
                <span>
                  Know what you need?{" "}
                  <span className="text-white font-semibold">
                    Speed & Responsiveness
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="w-full max-w-xs space-y-3 animate-fade-in-up animation-delay-400">
              <button className="w-full bg-[#1A2F5E] hover:bg-[#1A2F5E] text-white font-semibold tracking-wide uppercase py-3.5 text-sm rounded-lg transition-all duration-300 shadow-lg shadow-[#4a9eff]/30 active:scale-95">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  APPLY FOR A LOAN
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </button>

              <button className="w-full border-2 border-white/60 hover:bg-white/10 text-white font-semibold tracking-wide uppercase py-3.5 text-sm rounded-lg transition-all duration-300 active:scale-95">
                <Link href="/about">LEARN MORE</Link>
              </button>
            </div>
          </div>

          {/* Image Indicator Dots - Mobile */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-8 h-1.5 bg-white rounded-full"
                    : "w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(4px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(12px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default TopSection;
