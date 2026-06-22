"use client";
import { useState } from "react";
import Empty from "./empty";

const cards = [
  {
    title: "Honesty At Every Step",
    text: "At The Mortgage Bureau, transparency isn't a feature — it's a foundation. We keep you informed at every stage of the mortgage process, so you can move forward with confidence and clarity.",
  },
  {
    title: "Putting Your Homeownership First",
    text: "Your goals are our priority. Whether you're buying your first home or refinancing, we're here to simplify the process and deliver solutions that put your needs front and center.",
  },
  {
    title: "Colorado Expertise. National Capability.",
    text: "Based in Colorado, we bring deep local knowledge with the ability to serve clients across the country. Wherever you are, you can count on our expertise to guide your journey home.",
  },
];

export default function Experts() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-[#1a2f5e] pt-14 pb-32">
      {/* Heading */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide uppercase mb-5">
          YOUR COLORADO MORTGAGE EXPERTS
        </h2>
        <p className="text-white text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
          With extensive experience in VA, FHA, Conventional, and USDA loans—and
          proudly serving clients throughout Colorado and beyond—The Mortgage
          Bureau delivers trusted, personalized guidance with a broad reach and
          a local touch.
        </p>
      </div>

      {/* Cards — positioned to overflow the section bottom */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 top-32 md:top-2 right-0 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => {
            const isActive = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative cursor-pointer transition-all duration-300"
                style={{
                  // Slight shadow/border offset between cards
                  zIndex: isActive ? 10 : 1,
                }}
              >
                {/* Outer border/shadow wrapper (the light blue border visible in image) */}
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    border: isActive
                      ? "2px solid rgba(100,140,200,0.5)"
                      : "2px solid transparent",
                    boxShadow: isActive
                      ? "0 8px 30px rgba(0,0,0,0.25)"
                      : "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="h-full px-8 py-10 flex flex-col items-center text-center transition-all duration-300 min-h-[280px]"
                    style={{
                      backgroundColor: isActive ? "#1a2f5e" : "#ffffff",
                    }}
                  >
                    {/* Title */}
                    <h3
                      className="text-xl font-semibold mb-4 transition-colors duration-300"
                      style={{ color: isActive ? "#ffffff" : "#1a2f5e" }}
                    >
                      {card.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className="w-16 h-px mb-5 transition-colors duration-300"
                      style={{
                        backgroundColor: isActive
                          ? "rgba(255,255,255,0.4)"
                          : "#1a2f5e",
                      }}
                    />

                    {/* Body text */}
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.85)" : "#374151",
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </section>
  );
}
