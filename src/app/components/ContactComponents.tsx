'use client'
import { FormEvent } from 'react'

type City = 'Islamabad' | 'Lahore' | 'Karachi'

const mapSrcs: Record<City, string> = {
  Islamabad: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0817329712672!2d73.03126047409759!3d33.65504403860185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9598a544dc2b%3A0xedb196b4e14783fb!2s63%20Service%20Rd%20N%2C%20I-10%2F3%20I%2010%2F3%20I-10%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780556981704!5m2!1sen!2s',
  Lahore: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9579657158356!2d74.3153912239792!3d31.47034244961497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190720d5bc902f%3A0x549dc13e9a782d0a!2sPace%20Shopping%20Mall%20Speedo%20Bus%20Stop%2C%20Model%20Town%2C%20Link%20Road%20Lahore!5e0!3m2!1sen!2s!4v1780557043456!5m2!1sen!2s',
  Karachi: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28961.45631308604!2d67.00958081083985!3d24.857631499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da763ff3c2f%3A0x6c066e5a5bd0d58c!2sICT%20-%20Institute%20of%20Corporate%20and%20Taxation%20Karachi!5e0!3m2!1sen!2s!4v1780557082779!5m2!1sen!2s',
}

export function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-black text-[#16509A] text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.2] mb-4">
          Connect With Us <span className="text-[#051435]">And Tell Us</span>
          <br className="hidden sm:inline" /> How We Can Assist
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
          Looking to turn your ideas into reality? IDT Pakistan is here to guide and assist
          you throughout the entire process.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-[0_12px_45px_rgba(0,0,0,0.05)] border border-gray-100/80 space-y-5 sm:space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
              Name <span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="John Doe"
              className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
              Phone <span className="text-red-500">*</span>
            </label>
            <input type="tel" required placeholder="+92 300 1234567"
              className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" required placeholder="name@example.com"
            className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-black text-[#16509A] mb-2 tracking-wide uppercase">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea required rows={4} placeholder="Tell us how we can assist you..."
            className="w-full p-3.5 sm:p-4 text-sm border border-gray-200 rounded-xl bg-[#F8FAFF] focus:outline-none focus:ring-2 focus:ring-[#16509A]/20 focus:border-[#16509A] transition-all font-medium text-gray-800 resize-none"
          />
        </div>

        <button type="submit"
          className="w-full bg-[#16509A] text-white py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-lg shadow-blue-900/10 hover:bg-[#124382] transition duration-300 cursor-pointer active:scale-[0.99]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export function ContactMap({ activeCity }: { activeCity: City }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100">
        <iframe
          key={activeCity}
          src={mapSrcs[activeCity]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-105 hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  )
}
