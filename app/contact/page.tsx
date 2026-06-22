import Header from "@/components/header";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Mail, MapIcon, Phone } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | The Mortgage Bureau",
  description:
    "Get in touch with The Mortgage Bureau. Call (303) 929-4700 or fill out our contact form. We&apos;re ready to help with your mortgage needs.",
};

export default function Contact() {
  return (
    <main>
      <section className="relative bg-[#1a2f5e] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/img/m1.png"
            alt="Mortgage Loans"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Let&apos;s discuss your mortgage goals and find the perfect solution
          </p>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex justify-center flex-col items-center">
              <div className="text-4xl mb-3 text-[#1bb5a7] justify-center">
                <Phone />
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">(303) 929-4700</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm MT</p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div className="text-4xl mb-3 text-[#1bb5a7]">
                <Mail />
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">info@themortgagebureau.com</p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div className="text-4xl mb-3 text-[#1bb5a7]">
                <MapIcon />
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">
                Location
              </h3>
              <p className="text-gray-600">Based in Colorado</p>
              <p className="text-sm text-gray-500">Serving all of Colorado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Why Contact Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">
            When to Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">
                Pre-Approval Questions
              </h3>
              <p className="text-gray-700 mb-4">
                Ready to start your home buying journey? We can discuss your
                financial situation and help you get pre-approved for a mortgage
                quickly.
              </p>
              <a
                href="tel:+13039294700"
                className="text-[#1bb5a7] font-semibold hover:underline"
              >
                Call us today →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">
                Loan Program Questions
              </h3>
              <p className="text-gray-700 mb-4">
                Confused about which loan program is right for you? Our
                specialists can explain FHA, VA, Conventional, USDA, and more.
              </p>
              <a
                href="/loan-programs"
                className="text-[#1bb5a7] font-semibold hover:underline"
              >
                Learn about programs →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">
                Refinancing
              </h3>
              <p className="text-gray-700 mb-4">
                Looking to refinance? We can review your current mortgage and
                show you how much you could save with a refinance.
              </p>
              <a
                href="tel:+13039294700"
                className="text-[#1bb5a7] font-semibold hover:underline"
              >
                Get a refi quote →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">
                Investment Property
              </h3>
              <p className="text-gray-700 mb-4">
                Interested in an investment property or second home? We have
                specialized loan programs for investors and multi-property
                owners.
              </p>
              <a
                href="tel:+13039294700"
                className="text-[#1bb5a7] font-semibold hover:underline"
              >
                Speak with specialist →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>
                  How long does the mortgage application process take?
                </span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Most applications are processed within 3-7 business days.
                However, with our streamlined process and expert team, many
                borrowers see approvals in 1-2 business days. The timeline can
                vary based on documentation completeness and loan complexity.
              </p>
            </details>

            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>Do I need a down payment?</span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                It depends on the loan program. Conventional loans typically
                require 3-20% down. FHA loans require as little as 3.5%. VA and
                USDA loans can offer 0% down payment options for eligible
                borrowers. We can help you find a program that works for your
                situation.
              </p>
            </details>

            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>What credit score do I need?</span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Different programs have different requirements. Conventional
                loans typically require 620+, while FHA loans work with scores
                as low as 580. VA and USDA loans have more flexible credit
                requirements. Contact us to discuss your specific situation.
              </p>
            </details>

            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>What documents do I need to prepare?</span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Typically you&apos;ll need: pay stubs, tax returns (last 2
                years), bank statements, identification, and property
                information. We&apos;ll provide a complete list during your
                initial consultation. Having documents ready speeds up the
                process significantly.
              </p>
            </details>

            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>Do you offer refinancing?</span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! We help homeowners refinance to get better rates, lower
                monthly payments, access home equity, or change loan terms. If
                rates have dropped or your situation has improved, you could
                save thousands. Call us for a free refinance analysis.
              </p>
            </details>

            <details className="bg-[#f8f9fa] p-6 rounded-lg group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-[#1a2f5e] text-lg">
                <span>Are there any hidden fees?</span>
                <span className="transform group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                No. We believe in complete transparency. Your initial loan
                estimate will detail all fees. There are no hidden, surprise, or
                undisclosed fees. We&apos;ll walk you through every cost before
                you commit.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2f5e] text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let&apos;s discuss your
            mortgage goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13039294700"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded font-bold"
            >
              CALL (303) 929-4700
            </a>
            <a
              href="mailto:info@themortgagebureau.com"
              className="px-8 py-4 bg-[#1bb5a7] text-white hover:bg-[#2eccc1] transition rounded font-bold"
            >
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
