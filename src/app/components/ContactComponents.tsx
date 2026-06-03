'use client'
import { FormEvent } from 'react'

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      
      {/* --- FLUID HEADER AND DESCRIPTION --- */}
      <div className="text-center mb-8 md:mb-12">
        <h2 
          className="font-black text-[#16509A] text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.2] mb-4"
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Connect With Us <span className='text-[#051435]'>And Tell Us</span><br className="hidden sm:inline" /> How We Can Assist
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
          Looking to turn your ideas into reality? IDT Pakistan is here to guide and assist 
          you throughout the entire process.
        </p>
      </div>
      
      {/* --- CONVERSION-FOCUSED HIGH-END FORM --- */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-[0_12px_45px_rgba(0,0,0,0.05)] border border-gray-100/80 space-y-5 sm:space-y-6"
      >
        {/* Responsive Grid: Desktop par 2 columns, Mobile par stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
              Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required
              placeholder="John Doe"
              className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800" 
            />
          </div>

          {/* Phone Field */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
              Phone <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              required
              placeholder="+92 300 1234567"
              className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800" 
            />
          </div>

        </div>

        {/* Email Field - Full Width on Grid */}
        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            required
            placeholder="name@example.com"
            className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800" 
          />
        </div>

        {/* Message Field - Full Width */}
        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea 
            required
            rows={4} 
            placeholder="Tell us how we can assist you..."
            className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800 resize-none" 
          />
        </div>
        
        {/* Submit CTA */}
        <button 
          type="submit"
          className="w-full bg-[#16509A] text-white py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-lg shadow-blue-900/10 hover:bg-[#124382] transition duration-300 cursor-pointer active:scale-[0.99]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export function ContactMap() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Responsive Aspect Ratio Container: Mobile par safe default, desktop par full height expansion */}
      <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.4111394145747!2d73.04505167628863!3d33.64648713838421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m2!1s0x0%3A0x0!2zMzM0MzgnMzcuNCJOIDczwrAwMickNDIuMiJF!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-105 hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  )
}