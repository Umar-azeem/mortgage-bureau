import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  TrendingUp,
  Zap,
  GraduationCap,
  ClipboardList,
  Home,
  Mountain,
  Star,
  CheckCircle,
  Users,
  DollarSign,
  Clock,
  Shield,
  MapPin,
  Building,
  Award,
  Briefcase,
  Heart,
  Target,
  Compass,
  BarChart,
} from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Why Choose Us | The Mortgage Bureau',
  description: 'Discover what sets The Mortgage Bureau apart: competitive rates, fast processing, expert guidance, and genuine local support.',
};

// Features with icon names as strings (for server/client compatibility)
const features = [
  {
    title: 'Competitive Rates',
    description: 'We shop multiple lenders to find you the best rates available, ensuring you get the most competitive pricing in the market.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Fast Processing',
    description: 'Our streamlined process means quick approvals and closings. We understand that time is money when buying a home.',
    iconName: 'Zap',
  },
  {
    title: 'Expert Guidance',
    description: 'Our team has decades of combined mortgage experience. We guide you through every step with clear, honest advice.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Transparent Process',
    description: 'No hidden fees or surprise costs. We believe in complete transparency from start to finish in your mortgage journey.',
    iconName: 'ClipboardList',
  },
  {
    title: 'Multiple Loan Options',
    description: 'From conventional to VA loans, FHA to investment properties - we have solutions for every borrower profile.',
    iconName: 'Home',
  },
  {
    title: 'Local Support',
    description: "We're Colorado-based and deeply understand our local real estate market and unique homebuyer needs.",
    iconName: 'Mountain',
  },
];

// Icon mapping for client-side rendering
const iconMap = {
  TrendingUp: TrendingUp,
  Zap: Zap,
  GraduationCap: GraduationCap,
  ClipboardList: ClipboardList,
  Home: Home,
  Mountain: Mountain,
};

const testimonials = [
  {
    name: 'John & Sarah Martinez',
    location: 'Denver, CO',
    comment: 'The Mortgage Bureau made our first-time home purchase so easy. The team was professional, responsive, and got us a fantastic rate. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    location: 'Boulder, CO',
    comment: 'As a veteran, I appreciated how smoothly the VA loan process went. The staff knew exactly what they were doing and made closing quick and painless.',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    location: 'Colorado Springs, CO',
    comment: 'I refinanced my home and saved thousands annually thanks to The Mortgage Bureau. The transparency and customer service were exceptional.',
    rating: 5,
  },
];

const cities = [
  'Denver',
  'Boulder',
  'Colorado Springs',
  'Fort Collins',
  'Aurora',
  'Littleton',
  'Lakewood',
  'Arvada',
  'Westminster',
  'Broomfield',
  'Longmont',
  'All of Colorado',
];

export default function WhyChooseUs() {
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Why Choose The Mortgage Bureau?</h1>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl  w-full">
                             Discover what sets us apart from other lenders
                            </p>
                          </div>
                        </section>
           
      

      {/* Main Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2f5e]">What Makes Us Different</h2>
            <p className="text-lg text-gray-700">
              The Mortgage Bureau combines competitive rates, expert guidance, and genuine care to help Colorado families achieve homeownership on their terms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName as keyof typeof iconMap];
              return (
                <div key={index} className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#1a2f5e]/10 rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-[#1a2f5e]" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2f5e] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24 bg-[#1a2f5e] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-[#1bb5a7]" />
                <h3 className="text-2xl font-bold text-[#1bb5a7]">Personalized Solutions</h3>
              </div>
              <p className="text-gray-100 mb-4">
                We don&apos;t believe in one-size-fits-all mortgages. Every client gets personalized attention and customized loan solutions that match their unique financial situation and goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>Thorough financial analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>Customized loan recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>Ongoing support and guidance</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-[#1bb5a7]" />
                <h3 className="text-2xl font-bold text-[#1bb5a7]">Transparent Pricing</h3>
              </div>
              <p className="text-gray-100 mb-4">
                You&apos;ll know exactly what you&apos;re paying for. We provide detailed rate quotes, loan estimates, and clear explanations so you can make informed decisions without surprises.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>Detailed loan estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>No hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1bb5a7] flex-shrink-0 mt-0.5" />
                  <span>Clear closing disclosures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-10 h-10 text-[#1bb5a7]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#1bb5a7] mb-2">5000+</div>
              <p className="text-gray-700 font-semibold">Mortgages Closed</p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Award className="w-10 h-10 text-[#1bb5a7]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#1bb5a7] mb-2">98%</div>
              <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-[#1bb5a7]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#1bb5a7] mb-2">15+ Years</div>
              <p className="text-gray-700 font-semibold">Industry Experience</p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <BarChart className="w-10 h-10 text-[#1bb5a7]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#1bb5a7] mb-2">$2B+</div>
              <p className="text-gray-700 font-semibold">In Mortgages Funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a2f5e]">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#1bb5a7] fill-[#1bb5a7]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                <div>
                  <p className="font-bold text-[#1a2f5e]">{testimonial.name}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Target className="w-8 h-8 text-[#1bb5a7]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f5e]">Serving Colorado Communities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {cities.map((city, index) => (
              <div key={index} className="py-4 px-4 bg-[#f8f9fa] rounded-lg hover:shadow-md transition-shadow duration-300 flex items-center justify-center gap-2">
                <Building className="w-4 h-4 text-[#1bb5a7]" />
                <p className="font-semibold text-[#1a2f5e]">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2f5e] text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-[#1bb5a7] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience The Difference</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose The Mortgage Bureau for their mortgage needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1a2f5e] transition rounded font-bold">
              SCHEDULE CONSULTATION
            </a>
            <a href="/loan-programs" className="px-8 py-4 bg-[#1bb5a7] text-white hover:bg-[#2eccc1] transition rounded font-bold">
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}