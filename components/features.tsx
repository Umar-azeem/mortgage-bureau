export default function Features() {
  const features = [
    {
      icon: '💰',
      title: 'Competitive Rates',
      description: 'We offer some of the most competitive mortgage rates in Colorado, helping you save money over the life of your loan.'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Our streamlined process gets you from application to approval quickly, without sacrificing quality or personal attention.'
    },
    {
      icon: '🤝',
      title: 'Expert Guidance',
      description: 'Our team of experienced loan officers provides personalized guidance through every step of the mortgage process.'
    },
    {
      icon: '✓',
      title: 'Transparent Process',
      description: 'We believe in clear communication and full transparency so you understand every aspect of your loan.'
    },
    {
      icon: '🏠',
      title: 'Multiple Loan Options',
      description: 'Whether it\'s a conventional loan, FHA, VA, or USDA, we have options tailored to your needs.'
    },
    {
      icon: '📞',
      title: 'Local Support',
      description: 'As a local Colorado lender, we understand the market and are here to support your homeownership journey.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2f5e] mb-4">
            Why Choose The Mortgage Bureau?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With our commitment to transparency, expertise, and personalized service, we make homeownership achievable for Colorado families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2f5e] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-[#1a2f5e] text-white rounded-lg p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Start Your Homeownership Journey?
              </h3>
              <p className="text-lg mb-4 leading-relaxed">
                Whatever loan options you&apos;re looking for, we&apos;re here to make the process smooth and stress-free.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Call us today at <span className="font-bold">(303) 929-4700</span> or start your application online.
              </p>
              <button className="px-8 py-3 bg-[#1bb5a7] text-white font-bold rounded hover:bg-[#159c94] transition">
                APPLY TODAY
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg border border-[#1bb5a7]">
                <p className="text-center text-2xl font-bold">
                  ✓ Trusted by Hundreds of Colorado Families
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
