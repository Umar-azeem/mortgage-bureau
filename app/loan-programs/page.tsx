import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Shield,
  Users,
  Building,
  DollarSign,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Loan Programs | The Mortgage Bureau",
  description:
    "Explore our comprehensive mortgage loan programs including FHA, VA, Conventional, USDA, and more. Find the perfect loan for your needs.",
};

const loanPrograms = [
  {
    id: "conventional",
    title: "Conventional Loans",
    description:
      "Traditional mortgages for homebuyers with good to excellent credit and stable income.",
    image: "/img/m1.png",
    features: [
      "Fixed or adjustable rates",
      "Down payments as low as 3-20%",
      "Competitive rates",
      "Flexible terms (15, 20, 30 years)",
    ],
    details:
      "Conventional loans are the most common type of mortgage and offer great flexibility for borrowers with strong credit profiles. They can be used for primary residences, second homes, or investment properties.",
    icon: Home,
  },
  {
    id: "fha",
    title: "FHA Loans",
    description:
      "Government-backed loans designed for first-time homebuyers and those with lower credit scores.",
    image: "/img/m2.png",
    features: [
      "Down payments as low as 3.5%",
      "More flexible credit requirements",
      "Lower interest rates",
      "Perfect for first-time buyers",
    ],
    details:
      "FHA loans are insured by the Federal Housing Administration, making them an excellent choice for first-time buyers or those with less-than-perfect credit. They offer competitive rates and lower down payment requirements.",
    icon: Shield,
  },
  {
    id: "va",
    title: "VA Loans",
    description:
      "Exclusive benefits for military veterans and active-duty service members.",
    image: "/img/m5.jpg",
    features: [
      "0% down payment",
      "No private mortgage insurance required",
      "Competitive rates",
      "Streamlined process for eligible veterans",
    ],
    details:
      "VA loans are a powerful benefit for those who have served our country. With no down payment requirement and no PMI, these loans offer incredible value for eligible veterans, active-duty service members, and their families.",
    icon: Users,
  },
  {
    id: "usda",
    title: "USDA Loans",
    description:
      "Mortgages for rural homebuyers who meet income and property location requirements.",
    image: "/img/m7.png",
    features: [
      "0% down payment",
      "Lower interest rates",
      "No private mortgage insurance",
      "Support for rural communities",
    ],
    details:
      "USDA loans are designed to promote homeownership in rural and suburban areas. With zero down payment and low interest rates, they're an excellent option for eligible buyers looking for affordable financing outside major metropolitan areas.",
    icon: Building,
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    description:
      "Financing options for luxury properties exceeding conventional loan limits.",
    image: "/img/m7.jpg",
    features: [
      "Loans above $766,550",
      "Flexible terms",
      "Competitive rates for large mortgages",
      "Customized solutions",
    ],
    details:
      "Jumbo loans are tailored for high-value properties that exceed conforming loan limits. These loans offer flexible terms and competitive rates for qualified buyers seeking luxury homes or properties in high-cost areas.",
    icon: DollarSign,
  },
  {
    id: "investment",
    title: "Investment Property Loans",
    description:
      "Financing solutions for second homes, rental properties, and investment real estate.",
    image: "/img/m8.jpg",
    features: [
      "Various down payment options",
      "Flexible credit requirements",
      "Investment portfolio analysis",
      "Professional guidance",
    ],
    details:
      "Investment property loans provide financing for real estate investors looking to grow their portfolio. Whether you're purchasing a rental property, vacation home, or commercial space, we have solutions to meet your investment goals.",
    icon: Clock,
  },
];

export default function LoanPrograms() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a2f5e] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/img/m3.png"
            alt="Mortgage Loans"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Loan Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Explore our comprehensive mortgage loan programs and find the
            perfect financing solution for your homeownership journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2f5e]">
              Your Path to Homeownership Starts Here
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At The Mortgage Bureau, we specialize in VA, FHA, Conventional,
              and USDA home loans designed to fit your unique financial
              situation. Whether you&apos;re buying your first home,
              refinancing, or looking into government-backed loan options,
              we&apos;re here to make the process smooth and stress-free.
            </p>
            <p className="text-lg text-gray-600">
              Our mortgage specialists can guide you through the options and
              help you select the program that offers the best rates and terms
              for your situation. With extensive experience in Colorado and
              beyond, we deliver trusted, personalized guidance with a broad
              reach and a local touch.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Programs Grid */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">
            Our Loan Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  id={program.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#1bb5a7]"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-[#1bb5a7] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {program.id === "va"
                        ? "VETERAN BENEFIT"
                        : program.id === "usda"
                          ? "ZERO DOWN"
                          : program.id === "fha"
                            ? "FIRST-TIME BUYER"
                            : program.id === "conventional"
                              ? "POPULAR"
                              : program.id === "jumbo"
                                ? "PREMIUM"
                                : "INVESTMENT"}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#1bb5a7]/10 rounded-lg group-hover:bg-[#1bb5a7] transition-colors">
                        <Icon className="w-5 h-5 text-[#1bb5a7] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1a2f5e]">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">
                      {program.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#1a2f5e] text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1.5">
                        {program.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#1bb5a7] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/loan-programs/${program.id}`}
                      className="inline-flex items-center gap-2 text-[#1bb5a7] font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">
            Program Details
          </h2>

          <div className="space-y-12">
            {loanPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center bg-[#f8f9fa] rounded-2xl p-6 md:p-10`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#1a2f5e] rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a2f5e]">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {program.details}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {program.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1bb5a7] flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1a2f5e] text-white px-6 py-3 rounded-lg hover:bg-[#2a4f7e] transition-all font-semibold hover:gap-3"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="flex-1 relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">
            Quick Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-[#1a2f5e] text-white">
                    <th className="text-left py-4 px-4 font-bold">Program</th>
                    <th className="text-left py-4 px-4 font-bold">
                      Min. Down Payment
                    </th>
                    <th className="text-left py-4 px-4 font-bold">
                      Credit Requirements
                    </th>
                    <th className="text-left py-4 px-4 font-bold">
                      PMI Required
                    </th>
                    <th className="text-left py-4 px-4 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-semibold text-[#1a2f5e]">
                      Conventional
                    </td>
                    <td className="py-4 px-4 text-gray-700">3-20%</td>
                    <td className="py-4 px-4 text-gray-700">620+</td>
                    <td className="py-4 px-4 text-gray-700">
                      Yes (if under 20%)
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      Strong credit borrowers
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-semibold text-[#1a2f5e]">
                      FHA
                    </td>
                    <td className="py-4 px-4 text-gray-700">3.5%</td>
                    <td className="py-4 px-4 text-gray-700">580+</td>
                    <td className="py-4 px-4 text-gray-700">Yes (for life)</td>
                    <td className="py-4 px-4 text-gray-700">
                      First-time buyers
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-semibold text-[#1a2f5e]">
                      VA
                    </td>
                    <td className="py-4 px-4 text-gray-700">0%</td>
                    <td className="py-4 px-4 text-gray-700">No minimum</td>
                    <td className="py-4 px-4 text-gray-700">No</td>
                    <td className="py-4 px-4 text-gray-700">
                      Veterans & military
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-semibold text-[#1a2f5e]">
                      USDA
                    </td>
                    <td className="py-4 px-4 text-gray-700">0%</td>
                    <td className="py-4 px-4 text-gray-700">580+</td>
                    <td className="py-4 px-4 text-gray-700">No</td>
                    <td className="py-4 px-4 text-gray-700">
                      Rural homebuyers
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-semibold text-[#1a2f5e]">
                      Jumbo
                    </td>
                    <td className="py-4 px-4 text-gray-700">10-20%</td>
                    <td className="py-4 px-4 text-gray-700">700+</td>
                    <td className="py-4 px-4 text-gray-700">Varies</td>
                    <td className="py-4 px-4 text-gray-700">
                      Luxury properties
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#1a2f5e] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/cta-bg.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our mortgage specialists can review your situation and recommend the
            best loan program for your needs and budget. We&apos;re here to
            guide you every step of the way with honesty, transparency, and
            expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#1bb5a7] text-white hover:bg-[#14998d] transition rounded-lg font-bold shadow-lg shadow-[#1bb5a7]/30"
            >
              SCHEDULE A CONSULTATION
            </Link>
            <Link
              href="/apply"
              className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded-lg font-bold"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
