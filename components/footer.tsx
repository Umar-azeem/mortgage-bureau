import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2f5e] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
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
                <span className="text-base md:text-lg font-bold text-white leading-tight">
                  THE MORTGAGE BUREAU
                </span>
                <span className="block text-[8px] md:text-[10px] font-light text-white/60 tracking-widest">
                  COLORADO'S TRUSTED EXPERTS
                </span>
              </div>
            </Link>
            {/* Contact Info */}
            <div className="text-sm text-white flex flex-wrap items-center gap-2">
              <span>(303) 929-4700</span>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:mike@themortgagebureau.com"
                className="hover:underline"
              >
                mike@themortgagebureau.com
              </a>
            </div>

            {/* Address */}
            <div className="text-sm text-white">
              6825 E Tennessee Ave Suite 415 Denver, CO 80224
            </div>

            {/* License Status */}
            <div className="text-sm text-white">
              To check the license status of your mortgage broker, visit
            </div>
            <div>
              <Link
                href="#"
                className="border border-white text-white text-sm px-5 py-2 inline-block hover:bg-white hover:text-[#1a2f5e] transition rounded-sm"
              >
                Licence Status
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/TeamKillmeyer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1a2f5e] transition text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lender_mike_killmeyer/"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1a2f5e] transition text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mikekillmeyer/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1a2f5e] transition text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Google Map */}
          <div className="w-full lg:w-[420px] h-[270px] flex-shrink-0 rounded overflow-hidden">
            <iframe
              title="The Mortgage Bureau Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.123!2d-104.9144!3d39.7131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7c1e2e2e2e2f%3A0x1234567890abcdef!2s6825%20E%20Tennessee%20Ave%20Suite%20415%2C%20Denver%2C%20CO%2080224!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500/40" />

      {/* Bottom Nav */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold tracking-wide mb-5">
          <Link href="/" className="hover:text-[#1bb5a7] transition">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#1bb5a7] transition">
            ABOUT US
          </Link>
          <Link href="/contact" className="hover:text-[#1bb5a7] transition">
            CONTACT US
          </Link>
          <Link href="#" className="hover:text-[#1bb5a7] transition">
            PRIVACY POLICY
          </Link>
          <Link href="#" className="hover:text-[#1bb5a7] transition">
            COMMUNICATIONS POLICY
          </Link>
          <Link href="#" className="hover:text-[#1bb5a7] transition">
            ADA ACCESSIBILITY STATEMENT
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300">
          © 2025 The Mortgage Bureau | All rights reserved
        </div>
      </div>
    </footer>
  );
}
