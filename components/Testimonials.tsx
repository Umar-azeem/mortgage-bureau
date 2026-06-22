'use client';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Josef Williams',
    time: '1 year ago',
    avatar: 'J',
    avatarBg: '#4caf50',
    text: 'Mike and his team are a pleasure to work with. They are patient and I felt they were genuinely interested in ensuring that my transaction was as efficient and stress-free as possible. I will definitely use them again and recommend them to others.',
  },
  {
    name: 'Bri Bradley',
    time: '1 year ago',
    avatar: 'B',
    avatarBg: '#2196f3',
    text: 'Mike was great to work with! He was able to easily explain things to me and weigh out different scenarios and options so I could make sure I was making the best decision for my situation. I would highly recommend him!',
  },
  {
    name: 'Jeff Jaworski',
    time: '1 year ago',
    avatar: 'J',
    avatarBg: '#009688',
    text: 'Mike was great to work with and very responsive.',
  },
  {
    name: 'Sarah Thompson',
    time: '2 years ago',
    avatar: 'S',
    avatarBg: '#9c27b0',
    text: 'Absolutely wonderful experience from start to finish. Mike made the entire mortgage process seamless and kept us informed every step of the way. Could not recommend more highly!',
  },
  {
    name: 'David Martinez',
    time: '2 years ago',
    avatar: 'D',
    avatarBg: '#ff5722',
    text: 'Mike helped us navigate a complex refinancing situation with professionalism and expertise. His knowledge of the market saved us thousands of dollars.',
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#f4b400]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* Verified checkmark */}
      <svg className="w-4 h-4 text-[#1a73e8] ml-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [expanded, setExpanded] = useState(false);
  const TRUNCATE_LENGTH = 140;
  const isLong = testimonial.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !isLong
    ? testimonial.text
    : testimonial.text.slice(0, TRUNCATE_LENGTH) + '...';

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm min-h-[200px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: testimonial.avatarBg }}
          >
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">{testimonial.name}</div>
            <div className="text-gray-500 text-xs">{testimonial.time}</div>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <StarRating />

      {/* Text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {displayText}
      </p>

      {/* Read more */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 text-sm text-left hover:text-gray-600 transition"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    return [0, 1, 2].map((i) => testimonials[(current + i) % total]);
  };

  return (
    <section className="bg-[#1a2f5e] py-14 px-4">
      {/* Title */}
      <div className="flex flex-col items-center mb-8">
        <h2 className=" text-white text-3xl md:text-4xl font-bold tracking-widest px-8 py-3 uppercase">
          TESTIMONIALS
        </h2>
        {/* Google Translate icon below title */}
        <div className="mt-3">
          
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2a3f6e] hover:bg-[#3a4f7e] text-white flex items-center justify-center transition"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {getVisible().map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-[#2a3f6e] hover:bg-[#3a4f7e] text-white flex items-center justify-center transition"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}