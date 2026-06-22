"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Email() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // ── 1. SEND EMAIL via mailto ──
    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.open(
      `mailto:mike@themortgagebureau.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-4xl p-8 border border-slate-400 text-center">
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600 mb-2">
          Your email client has been opened with your message pre-filled.
        </p>
        <p className="text-slate-500 text-sm mb-6">
          If it didn't open, please contact us directly at{" "}
          <a
            href="mailto:mike@themortgagebureau.com"
            className="text-[#236193] underline"
          >
            mike@themortgagebureau.com
          </a>
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-[#236193] hover:bg-[#1a4a70] text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>

      {/* Contact badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="mailto:mike@themortgagebureau.com"
          className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          mike@themortgagebureau.com
        </a>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              First Name *
            </label>
            <input
              name="firstName"
              type="text"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Last Name *
            </label>
            <input
              name="lastName"
              type="text"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193]"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236193] resize-none"
            placeholder="Tell me about your mortgage needs..."
          ></textarea>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#192E5C] hover:bg-[#294580] text-white font-semibold py-5 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-xs text-center text-slate-400">
          Submitting will open your email client with your message pre-filled.
        </p>
      </form>
    </div>
  );
}