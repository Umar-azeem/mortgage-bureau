'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // ── 1. SEND EMAIL via mailto ──
    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:mike@themortgagebureau.com?subject=${emailSubject}&body=${emailBody}`,
      '_blank'
    );

    // ── 2. SEND WHATSAPP MESSAGE ──
    const whatsappNumber = '13039294700';
    const whatsappText = encodeURIComponent(
      `Hi Mike! I'm ${firstName} ${lastName}.\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage: ${message}`
    );
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
        '_blank'
      );
    }, 500);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-gray-200 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2f5e] mb-2 sm:mb-3">Message Sent!</h3>
            <p className="text-gray-600 text-base sm:text-lg mb-2">Your email client and WhatsApp have been opened.</p>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
              If they didn't open, please contact Mike directly at{' '}
              <a href="mailto:mike@themortgagebureau.com" className="text-[#1bb5a7] font-semibold hover:underline">
                mike@themortgagebureau.com
              </a>{' '}
              or WhatsApp{' '}
              <a href="https://wa.me/13039294700" target="_blank" className="text-[#1bb5a7] font-semibold hover:underline">
                (303) 929-4700
              </a>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1a2f5e] hover:bg-[#2a4f7e] text-white font-bold rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2f5e] mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Whether you have questions about loan programs or are ready to apply, our team is here to help. Whatever your situation, we're here to make the process smooth and stress-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-[#1a2f5e] text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              Reach out to us through any of the following channels, and our team will get back to you promptly.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#1bb5a7]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                  <p className="text-sm sm:text-base font-semibold">(303) 929-4700</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#1bb5a7]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Email</p>
                  <p className="text-sm sm:text-base font-semibold break-all">mike@themortgagebureau.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#1bb5a7]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Location</p>
                  <p className="text-sm sm:text-base font-semibold">Colorado, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">WhatsApp</p>
                  <p className="text-sm sm:text-base font-semibold">(303) 929-4700</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-300">
                <span className="font-semibold text-white flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  Business Hours:
                </span>
                <span className="block mt-1">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat - Sun: By Appointment
                </span>
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              <a
                href="mailto:mike@themortgagebureau.com"
                className="flex items-center gap-2 text-xs text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
              >
                <Mail className="w-3 h-3" />
                Email Us
              </a>
              <a
                href="https://wa.me/13039294700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white bg-[#25D366] hover:bg-[#1ebe5d] px-3 py-1.5 rounded-full transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a2f5e] mb-4 sm:mb-6">Send a Message</h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a2f5e] border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition bg-white text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a2f5e] border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition bg-white text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a2f5e] border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition bg-white text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a2f5e] border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition bg-white text-sm sm:text-base"
                  placeholder="(303) 929-4700"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-[#1a2f5e] border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition bg-white resize-none text-sm sm:text-base"
                  placeholder="Tell us about your mortgage needs, goals, or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#1bb5a7] hover:bg-[#14998d] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1bb5a7]/30 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    SEND MESSAGE
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-400">
                Submitting will open your email client and WhatsApp with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}