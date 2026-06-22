import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | The Mortgage Bureau',
  description: 'Learn about The Mortgage Bureau&apos;s mission, values, and commitment to Colorado families. Expert mortgage guidance since our founding.',
};

export default function AboutUs() {
  return (
    <main>
      
      {/* Hero Section */}
        <section className="relative bg-[#1a2f5e] text-white py-16 md:py-24 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/img/m7.png"
                  alt="Mortgage Loans"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About The Mortgage Bureau</h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                  Learn about our mission to help Colorado families achieve homeownership
                </p>
              </div>
            </section>
      

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2f5e]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Mortgage Bureau is dedicated to providing honest, transparent, and personalized mortgage solutions to Colorado families and professionals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that achieving homeownership shouldn&apos;t be complicated. Our expert team takes the time to understand your unique financial situation and goals, then guides you through every step of the mortgage process.
              </p>
              <p className="text-lg text-gray-700">
                With decades of combined experience in the mortgage industry, we&apos;re committed to finding the best loan program for your needs and budget.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1bb5a7] mb-2">Our Values</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1bb5a7] font-bold">✓</span>
                      <span><strong>Integrity:</strong> Honest advice without hidden fees or surprises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1bb5a7] font-bold">✓</span>
                      <span><strong>Expertise:</strong> Deep knowledge of all loan programs and market conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1bb5a7] font-bold">✓</span>
                      <span><strong>Support:</strong> Personalized guidance at every step</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1bb5a7] font-bold">✓</span>
                      <span><strong>Speed:</strong> Fast processing and quick decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1bb5a7] font-bold">✓</span>
                      <span><strong>Local:</strong> Colorado-based team that understands the market</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">Founded with Purpose</h3>
              <p className="text-gray-700">
                The Mortgage Bureau was established with a simple mission: to serve Colorado families with mortgage expertise, transparency, and genuine care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">Growing Together</h3>
              <p className="text-gray-700">
                Over the years, we&apos;ve helped thousands of families achieve their homeownership dreams, building lasting relationships based on trust and results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#1bb5a7] mb-4">Looking Forward</h3>
              <p className="text-gray-700">
                Today, we remain committed to innovation, education, and providing the best mortgage solutions for Colorado&apos;s families and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">Meet Our Team</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team of experienced mortgage professionals is dedicated to helping you find the right loan program and navigate the homeownership process with confidence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#1bb5a7] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                MB
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">Expert Loan Officers</h3>
              <p className="text-gray-600">Dedicated professionals with years of mortgage expertise</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#1bb5a7] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                MB
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">Processing Team</h3>
              <p className="text-gray-600">Fast, accurate handling of your loan application</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#1bb5a7] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                MB
              </div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-2">Support Staff</h3>
              <p className="text-gray-600">Ready to answer your questions every step of the way</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2f5e] text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your mortgage goals and find the perfect solution for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded font-bold">
              GET IN TOUCH
            </a>
            <a href="/loan-programs" className="px-8 py-4 bg-[#1bb5a7] text-white hover:bg-[#2eccc1] transition rounded font-bold">
              EXPLORE LOAN PROGRAMS
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
