'use client'
import { useState, useTransition } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const locations = {
  Islamabad: {
    phone: '+92 330 888 0211',
    email: 'admission@ict.net.pk',
    address: 'Plot No. 63, Service Road, I-10/3 North, Islamabad 44000',
    image: '/islamabad.webp',
    timings: { mon: '9 am – 5:30 pm', tueFri: '9 am – 5:30 pm', sat: '9 am – 5:30 pm' }
  },
  Lahore: {
    phone: '+92 42 123 4567',
    email: 'info.lhr@ict.net.pk',
    address: '5th Floor, Pace Shopping Mall, Model Town, Link Road, Lahore',
    image: '/Lahore.webp',
    timings: { mon: '9 am – 5:00 pm', tueFri: '9 am – 5:00 pm', sat: '9 am – 1:00 pm' }
  },
  Karachi: {
    phone: '+92 21 987 6543',
    email: 'info.khi@ict.net.pk',
    address: 'Main Shahrah-e-Faisal, Karachi',
    image: '/Karachi.webp',
    timings: { mon: '9 am – 5:30 pm', tueFri: '9 am – 5:30 pm', sat: '9 am – 5:30 pm' }
  }
}

export default function ContactInfo() {
  const [activeTab, setActiveTab] = useState<keyof typeof locations>('Islamabad')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (city: keyof typeof locations) => {
    startTransition(() => {
      setActiveTab(city)
    })
  }

  return (
    <section className="w-full bg-gray-50/50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* --- FLUID RESPONSIVE HEADING --- */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black text-[#16509A] leading-[38px] sm:leading-[48px] md:leading-[58px] mb-8 md:mb-10 text-center tracking-tight">
          Let Your Wanderlust<br className="sm:hidden" /> Guide You
        </h2>

        {/* --- SAFE SCROLL TAB BUTTONS CONTAINER --- */}
        {/* Mobile par buttons flex-nowrap aur x-axis scroll safe hain taake touch constraints pass hon */}
        <div className="flex sm:justify-center items-center gap-2.5 sm:gap-4 mb-8 md:mb-12 overflow-x-auto no-scrollbar pb-3 sm:pb-0 px-2 -mx-4 sm:mx-0">
          {Object.keys(locations).map((city) => {
            const isSelected = activeTab === city
            return (
              <button
                key={city}
                onClick={() => handleTabChange(city as keyof typeof locations)}
                className={`px-6 sm:px-10 py-3 text-xs sm:text-sm font-extrabold tracking-wide border rounded-xl sm:rounded-2xl transition-all duration-300 flex-shrink-0 cursor-pointer active:scale-[0.97] ${
                  isSelected 
                    ? 'bg-[#16509A] text-white border-[#16509A] shadow-md shadow-blue-900/10' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#16509A] hover:text-[#16609A]'
                }`}
              >
                {city}
              </button>
            )
          })}
        </div>

        {/* --- MAIN INFO PANELS WITH TRANSITION BUFFER --- */}
        <div className={`bg-white p-5 sm:p-8 lg:p-12 rounded-[24px] sm:rounded-[32px] shadow-[0_12px_45px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
          
          {/* Left Block: Contact Data Cards */}
          <div className="flex-1 flex flex-col justify-between space-y-6 sm:space-y-8">
            
            {/* Phone Entry */}
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#16509A]/10">
                <Phone className="text-[#16509A]" size={20} />
              </div>
              <div>
                <p className="text-gray-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-0.5">Requesting A Call:</p>
                <a href={`tel:${locations[activeTab].phone}`} className="text-[#16509A] font-black text-base sm:text-lg hover:underline transition-all">
                  {locations[activeTab].phone}
                </a>
              </div>
            </div>
            
            {/* Email Entry */}
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#16509A]/10">
                <Mail className="text-[#16509A]" size={20} />
              </div>
              <div>
                <p className="text-gray-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-0.5">E-mail Address:</p>
                <a href={`mailto:${locations[activeTab].email}`} className="text-[#16509A] font-black text-base sm:text-lg hover:underline transition-all break-all">
                  {locations[activeTab].email}
                </a>
              </div>
            </div>

            {/* Address Entry */}
            <div className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#16509A]/10">
                <MapPin className="text-[#16509A]" size={20} />
              </div>
              <div>
                <p className="text-gray-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-0.5">Campus Location:</p>
                <p className="text-[#051435] font-extrabold text-sm sm:text-base leading-snug tracking-tight">
                  {locations[activeTab].address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Timing Metrics & Image */}
          <div className="flex-1 w-full flex flex-col justify-between gap-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-8 lg:pl-12">
            
            {/* Timing Component Rows */}
            <div className="space-y-3.5 w-full">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#16509A] tracking-wider mb-3">
                <Clock size={15} /> Campus Operation Timings
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-2.5">
                <span className="font-semibold text-sm text-gray-500">Monday</span> 
                <span className="font-bold text-sm text-[#16509A] bg-blue-50/60 px-3 py-1 rounded-lg">{locations[activeTab].timings.mon}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-2.5">
                <span className="font-semibold text-sm text-gray-500">Tuesday–Friday</span> 
                <span className="font-bold text-sm text-[#16509A] bg-blue-50/60 px-3 py-1 rounded-lg">{locations[activeTab].timings.tueFri}</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="font-semibold text-sm text-gray-500">Saturday</span> 
                <span className="font-bold text-sm text-[#16509A] bg-blue-50/60 px-3 py-1 rounded-lg">{locations[activeTab].timings.sat}</span>
              </div>
            </div>
            
            {/* Fluid Proportional Image Container */}
{/* Dynamic Google Map Instead of Image */}
<div className="w-full aspect-[16/9] md:aspect-[16/9] relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
  <iframe
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6641.868097015817!2d73.03444614607795!3d33.65887072342264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8f8cb6356d%3A0x5f8dda7539291cdf!2sBasharat%20Ali%20%26%20Company!5e0!3m2!1sen!2s!4v1780478002430!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>

        </div>

      </div>
    </section>
  )
}
