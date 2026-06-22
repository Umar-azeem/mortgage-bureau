import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2f5e] leading-tight">
              COLORADO&apos;S TRUSTED MORTGAGE EXPERTS
            </h1>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">At The Mortgage Bureau,</span> we make the path to homeownership <span className="font-bold">clear, accessible, and tailored to you</span>&mdash;built on a culture of giving: <span className="font-bold">time, knowledge, and empathy.</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">If you&apos;re new to the process,</span> you&apos;ll get patience, education, and calm&mdash;questions welcomed.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold">If you already know what you need,</span> you&apos;ll get speed and responsiveness&mdash;high-touch execution matched to your pace.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/schedule">
             <button className="px-8 py-3 bg-white border-2 border-[#1a2f5e] text-[#1a2f5e] font-bold rounded hover:bg-[#1a2f5e] hover:text-white transition">
                SCHEDULE A FREE CONSULTATION
              </button>
              </Link> 
              <Link href="/contact">
             <button className="px-8 py-3 bg-white border-2 border-[#1a2f5e] text-[#1a2f5e] font-bold rounded hover:bg-[#1a2f5e] hover:text-white transition">
                APPLY FOR A LOAN NOW
              </button>
              </Link> 
             
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E]  aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/img/mb.png"
                    alt="MB"
                    fill
                    className="object-cover"
                  />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
