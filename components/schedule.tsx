'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Video,
  Home,
  Users,
  CalendarDays,
  MessageCircle,
  ChevronRight,
  Star,
  User,
  Building2,
  FileText,
  Shield,
  Heart,
  Target,
  Award,
  Send,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const appointmentTypes = [
  {
    id: 'first-time-buyer',
    title: 'First-Time Homebuyer Consultation',
    duration: '45 min',
    description: 'Get patient, clear guidance through your first home purchase. Questions welcomed.',
    icon: Home
  },
  {
    id: 'va-loan',
    title: 'VA Loan Consultation',
    duration: '30 min',
    description: 'Explore your VA loan benefits and get expert guidance on your home financing.',
    icon: Shield
  },
  {
    id: 'refinance',
    title: 'Refinance Review',
    duration: '30 min',
    description: 'Review your current mortgage and explore refinance opportunities to save money.',
    icon: Building2
  },
  {
    id: 'investment',
    title: 'Investment Property Strategy',
    duration: '45 min',
    description: 'Plan your real estate investment portfolio and financing strategy for growth.',
    icon: Users
  },
  {
    id: 'video',
    title: 'Video Consultation',
    duration: '30 min',
    description: 'Connect virtually from anywhere. Flexible and convenient for your schedule.',
    icon: Video
  },
  {
    id: 'general',
    title: 'General Mortgage Consultation',
    duration: '30 min',
    description: 'Discuss your mortgage needs and explore the best options for your situation.',
    icon: FileText
  },
];

// Generate time slots dynamically
const generateTimeSlots = () => {
  const slots = [];
  for (let i = 8; i <= 17; i++) {
    const hour = i > 12 ? i - 12 : i;
    const ampm = i >= 12 ? 'PM' : 'AM';
    slots.push({ time: `${hour}:00 ${ampm}`, available: true });
    if (i < 17) {
      slots.push({ time: `${hour}:30 ${ampm}`, available: Math.random() > 0.3 });
    }
  }
  return slots;
};

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>('first-time-buyer');
  const [step, setStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Form state for user details
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Add empty days for padding
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateShort = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const monthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedAppointment = appointmentTypes.find(t => t.id === selectedType);
    
    const emailSubject = encodeURIComponent(
      `Appointment Request from ${formData.firstName} ${formData.lastName}`
    );
    const emailBody = encodeURIComponent(
      `New Appointment Request\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Appointment Details:\n` +
      `Type: ${selectedAppointment?.title || 'Not specified'}\n` +
      `Date: ${formatDate(selectedDate)}\n` +
      `Time: ${selectedTime || 'Not selected'}\n` +
      `Duration: ${selectedAppointment?.duration || '--'}\n\n` +
      `Additional Notes:\n${formData.notes || 'No additional notes'}\n\n` +
      `---\n` +
      `This appointment request was submitted via The Mortgage Bureau website.`
    );
    window.open(
      `mailto:mike@themortgagebureau.com?subject=${emailSubject}&body=${emailBody}`,
      '_blank'
    );

    // ── 2. SEND WHATSAPP MESSAGE ──
    const whatsappNumber = '13039294700';
    const whatsappText = encodeURIComponent(
      `📅 New Appointment Request\n\n` +
      `👤 Name: ${formData.firstName} ${formData.lastName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Phone: ${formData.phone || 'Not provided'}\n\n` +
      `📋 Appointment Details:\n` +
      `• Type: ${selectedAppointment?.title || 'Not specified'}\n` +
      `• Date: ${formatDate(selectedDate)}\n` +
      `• Time: ${selectedTime || 'Not selected'}\n` +
      `• Duration: ${selectedAppointment?.duration || '--'}\n\n` +
      `📝 Notes: ${formData.notes || 'No additional notes'}`
    );
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
        '_blank'
      );
    }, 500);

    setIsSubmitting(false);
    setBookingComplete(true);
  };

  const timeSlots = generateTimeSlots();

  if (bookingComplete) {
    return (
      <main className="min-h-screen bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a2f5e] mb-3">Appointment Scheduled!</h2>
            <p className="text-gray-600 text-lg mb-2">
              Your consultation with Mike at The Mortgage Bureau has been confirmed.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-semibold text-[#1a2f5e]">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-semibold text-[#1a2f5e]">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Type:</span>
                  <span className="font-semibold text-[#1a2f5e]">
                    {appointmentTypes.find(t => t.id === selectedType)?.title}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-semibold text-[#1a2f5e]">
                    {appointmentTypes.find(t => t.id === selectedType)?.duration}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              A confirmation email has been sent to your email address with all the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-[#1a2f5e] hover:bg-[#2a4f7e] text-white">
                  Return Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-[#1a2f5e] text-[#1a2f5e] hover:bg-[#1a2f5e] hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a2f5e] to-[#2a4f7e] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Schedule a Consultation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Path to Homeownership Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            At The Mortgage Bureau, we make the path to homeownership clear, accessible, and tailored to your needs. 
            Schedule a time with Mike to discuss your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
            <a
              href="tel:13039294700"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-colors text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              (303) 929-4700
            </a>
            <a
              href="mailto:mike@themortgagebureau.com"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              mike@themortgagebureau.com
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 1 ? 'bg-[#1a2f5e] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className={`ml-2 text-sm sm:text-base font-medium ${step >= 1 ? 'text-[#1a2f5e]' : 'text-gray-400'}`}>
                  Select Type
                </span>
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              <div className="flex items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 2 ? 'bg-[#1a2f5e] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className={`ml-2 text-sm sm:text-base font-medium ${step >= 2 ? 'text-[#1a2f5e]' : 'text-gray-400'}`}>
                  Pick Date & Time
                </span>
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              <div className="flex items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 3 ? 'bg-[#1a2f5e] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className={`ml-2 text-sm sm:text-base font-medium ${step >= 3 ? 'text-[#1a2f5e]' : 'text-gray-400'}`}>
                  Confirm
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleBooking}>
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left Column - Appointment Types */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-[#1a2f5e] mb-4 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    Appointment Type
                  </h3>
                  <div className="space-y-3">
                    {appointmentTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => {
                            setSelectedType(type.id);
                            setStep(2);
                          }}
                          className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedType === type.id
                              ? 'border-[#1a2f5e] bg-[#1a2f5e]/5'
                              : 'border-gray-200 hover:border-[#1a2f5e]/50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              selectedType === type.id ? 'bg-[#1a2f5e] text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-semibold ${
                                selectedType === type.id ? 'text-[#1a2f5e]' : 'text-gray-700'
                              }`}>
                                {type.title}
                              </p>
                              <p className="text-xs text-gray-500">{type.duration}</p>
                              <p className="text-xs text-gray-400 mt-1 hidden sm:block">{type.description}</p>
                            </div>
                            {selectedType === type.id && (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a2f5e] flex-shrink-0 mt-0.5" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Middle Column - Date & Time */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-[#1a2f5e] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Select Date & Time
                  </h3>

                  {/* Calendar Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={goToPreviousMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="font-semibold text-[#1a2f5e]">{monthYear(currentMonth)}</span>
                    <button
                      type="button"
                      onClick={goToNextMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(currentMonth).map((date, index) => (
                      <div key={index}>
                        {date ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (!isPastDate(date)) {
                                setSelectedDate(date);
                              }
                            }}
                            disabled={isPastDate(date)}
                            className={`w-full text-center p-2 rounded-lg transition-all duration-200 text-sm ${
                              isPastDate(date)
                                ? 'text-gray-300 cursor-not-allowed'
                                : isSelected(date)
                                ? 'bg-[#1a2f5e] text-white'
                                : isToday(date)
                                ? 'border-2 border-[#1a2f5e] text-[#1a2f5e] hover:bg-[#1a2f5e]/5'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        ) : (
                          <div className="p-2"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Selected Date Display */}
                  <div className="bg-[#1a2f5e]/5 rounded-lg p-3 mb-4 text-center">
                    <p className="text-sm text-gray-600">Selected Date</p>
                    <p className="font-semibold text-[#1a2f5e]">{formatDate(selectedDate)}</p>
                  </div>

                  {/* Time Slots */}
                  <p className="text-sm text-gray-600 mb-3">
                    Available time slots:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 sm:max-h-56 overflow-y-auto pr-1">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`p-2 sm:p-2.5 rounded-lg text-center transition-all duration-200 text-sm ${
                          slot.available
                            ? selectedTime === slot.time
                              ? 'bg-[#1a2f5e] text-white'
                              : 'border border-gray-200 hover:border-[#1a2f5e] text-gray-700'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                        {!slot.available && <span className="block text-xs">Booked</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Summary & Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-[#1a2f5e] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Appointment Summary
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs">Type</p>
                      <p className="font-semibold text-[#1a2f5e]">
                        {appointmentTypes.find(t => t.id === selectedType)?.title || 'Not selected'}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs">Date</p>
                      <p className="font-semibold text-[#1a2f5e]">{formatDate(selectedDate)}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs">Time</p>
                      <p className="font-semibold text-[#1a2f5e]">{selectedTime || 'Not selected'}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-xs">Duration</p>
                      <p className="font-semibold text-[#1a2f5e]">
                        {appointmentTypes.find(t => t.id === selectedType)?.duration || '--'}
                      </p>
                    </div>
                  </div>

                  {/* User Details Form */}
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition"
                    />
                    <textarea
                      name="notes"
                      placeholder="Additional Notes (optional)"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#1a2f5e] focus:ring-2 focus:ring-[#1a2f5e]/20 focus:outline-none transition resize-none"
                    />
                  </div>

                  <div className="mt-4 p-3 bg-[#1a2f5e]/5 rounded-lg border border-[#1a2f5e]/10">
                    <p className="text-xs text-gray-600 text-center">
                      <User className="w-3 h-3 inline mr-1" />
                      Consultation with <span className="font-semibold text-[#1a2f5e]">Mike at The Mortgage Bureau</span>
                      <br />
                      <span className="text-[10px] text-gray-400">Colorado's Trusted Mortgage Experts</span>
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !selectedType || !formData.firstName || !formData.lastName || !formData.email || isSubmitting}
                    className="w-full mt-4 bg-[#1a2f5e] hover:bg-[#2a4f7e] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Confirm Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-[10px] text-gray-400 text-center mt-3">
                    Submitting will open your email client and WhatsApp with your appointment details pre-filled.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1a2f5e] mb-2">Why Choose The Mortgage Bureau</h3>
            <p className="text-gray-600">Built on a culture of giving: time, knowledge, and empathy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#1a2f5e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-[#1a2f5e]" />
              </div>
              <h4 className="font-semibold text-[#1a2f5e] mb-1">Honesty at Every Step</h4>
              <p className="text-sm text-gray-500">Transparency isn't a feature — it's a foundation. We keep you informed at every stage.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#1a2f5e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-[#1a2f5e]" />
              </div>
              <h4 className="font-semibold text-[#1a2f5e] mb-1">Putting Your Homeownership First</h4>
              <p className="text-sm text-gray-500">Your goals are our priority. We simplify the process and deliver solutions that fit.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#1a2f5e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-[#1a2f5e]" />
              </div>
              <h4 className="font-semibold text-[#1a2f5e] mb-1">Colorado Expertise. National Capability.</h4>
              <p className="text-sm text-gray-500">Deep local knowledge with the ability to serve clients across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a2f5e] mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Call or email Mike directly and he'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:13039294700"
                className="inline-flex items-center gap-2 bg-[#1a2f5e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4f7e] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (303) 929-4700
              </a>
              <a
                href="mailto:mike@themortgagebureau.com"
                className="inline-flex items-center gap-2 border-2 border-[#1a2f5e] text-[#1a2f5e] px-6 py-3 rounded-lg font-semibold hover:bg-[#1a2f5e] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                mike@themortgagebureau.com
              </a>
              <a
                href="https://wa.me/13039294700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}