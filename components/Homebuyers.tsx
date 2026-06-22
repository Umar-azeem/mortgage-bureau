"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/dist/client/link";

export default function Homebuyers() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      const video = videoRef.current;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setVideoError(true));
      }
      video.addEventListener("canplay", () => setIsVideoLoaded(true));
      video.addEventListener("error", () => setVideoError(true));
    }
  }, [videoError]);

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* ── BACKGROUND (video on desktop, image on mobile) ── */}

      {/* Mobile: static image */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/img/vi.png"
          alt="Los Angeles skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Desktop: background video */}
      <div className="hidden md:block absolute inset-0 z-0">
        {videoError ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/img/vi.png")' }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              loop
              muted
              playsInline
              poster="/img/houseVideo.mp4"
            >
              <source src="/img/houseVideo.mp4" type="video/mp4" />
            </video>
            {!isVideoLoaded && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/img/vi.png")' }}
              />
            )}
          </>
        )}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden relative z-10 flex flex-col min-h-screen">
        {/* Top: image fixed height */}
        <div className="relative w-full h-[220px]">
          <Image
            src="/img/vi.png"
            alt="Los Angeles skyline"
            width={100}
            height={100}
            className="w-full h-full object-cover "
            priority
          />
        </div>

        {/* Bottom: white bg, centered content */}
        <div className="flex-1 bg-white px-6 py-10 text-center flex flex-col items-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-700 mb-4">
            Personalized Mortgage Solutions For{" "}
          </p>

          <h2 className="text-[#1A2F5E] text-3xl font-bold tracking-wide uppercase leading-tight mb-6">
            First-Time Homebuyers
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-sm">
            At The Mortgage Bureau, we tailor your home loan experience to fit
            your timeline and needs. From flexible approvals to quick closings,
            we make the process smooth and convenient.
            <strong className="text-slate-800">
              Whether you have questions after hours or need weekend
              support,{" "}
            </strong>
            we’re here—responsive, reliable, .and ready when you are.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-sm">
            Learn more about our .
          </p>

          <p className="text-slate-600 text-sm mb-8 max-w-sm">
            Learn more about working with a{" "}
            <span className="underline font-semibold cursor-pointer text-slate-800">
              MORTGAGE BUREAU
            </span>
            .
          </p>

          <Button className="border-1  border-x-4 bg-transparent border-black hover:bg-[#1a4a70] text-black hover:text-white hover: px-10 py-7 text-lg rounded-none">
            <Link href="/mortgage" className="text-black hover:text-white">
              LEARN MORE
            </Link>
          </Button>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex relative z-10 min-h-screen items-center justify-end">
        <div className="w-full max-w-[460px] mr-0 lg:mr-16 xl:mr-24 bg-[#192E5C]/85 backdrop-blur-sm p-10 lg:p-12">
          <h2 className="text-white text-xl lg:text-2xl font-bold tracking-wider uppercase leading-tight mb-4">
            Personalized Mortgage Solutions For
          </h2>

          <p className="text-[#5bb8f5] text-lg lg:text-xl font-bold tracking-wider uppercase mb-6">
            First-Time Homebuyers
          </p>

          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            At The Mortgage Bureau, we tailor your home loan experience to fit
            your timeline and needs. From flexible approvals to quick closings,
            we make the process smooth and convenient. Whether you have
            questions after hours or need weekend support, we’re
            here—responsive, reliable, .
            <strong className="text-white">and ready when you are</strong>.
          </p>

          <p className="text-slate-200 text-sm mb-8">Learn more about our .</p>

          <Link href="/mortgage">
            <button className="border border-white text-white text-xs font-bold tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-[#1e3f5c] transition-colors w-full">
              mortgage programs
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        video {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </main>
  );
}
