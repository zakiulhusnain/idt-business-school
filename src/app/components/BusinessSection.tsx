import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Identify skill gaps, align learning to goals.',
  'Build talent with cutting-edge digital skills.',
  'Validate skills through real projects.',
]

export default function BusinessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: CONTENT SIDE (5 Columns on Large Desktop) --- */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge */}
            <span className="inline-flex items-center bg-[#E5E9F2] text-[#0A4DA1] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full mb-5 sm:mb-6 uppercase tracking-widest w-fit select-none">
              <span className="w-2 h-2 bg-[#0A4DA1] rounded-full mr-2"></span>
              Develop Tech-Ready Teams
            </span>
            
            {/* Fluid Header Text */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#051435] mb-5 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Accelerate your business initiatives with industry-proven training.
            </h2>

            {/* Subtle Intro Divider */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 text-[#051435] text-sm sm:text-base font-bold tracking-tight">
              <span className="w-6 h-[2px] bg-[#0A4DA1] shrink-0"></span>
              Join forward-thinking businesses that trust IDT.
            </div>

            {/* Clean Spaced Bullet Points */}
            <ul className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 font-bold leading-relaxed">
                  <CheckCircle size={18} className="text-[#0A4DA1] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Action CTA Link */}
            <Link
              href="/contact"
              className="w-full sm:w-fit text-center bg-[#0A4DA1] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl hover:bg-[#051435] transition-all shadow-md hover:shadow-xl active:scale-[0.98]"
            >
              Contact Us for Team Training
            </Link>
          </div>

          {/* --- RIGHT: PREMIUM OVERLAPPING IMAGES CANVAS (6 Columns) --- */}
          {/* Mobile standard par single dynamic block height control lagaya ha */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] mt-6 lg:mt-0 select-none">
            
            {/* First Main Image (Back Frame) */}
            {/* Mobile par full width, Desktop par 10% bottom block cut stagger spacing */}
            <div className="absolute top-0 left-0 w-[75%] sm:w-[65%] lg:w-[55%] h-[85%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-md border-4 border-white z-0">
              <Image
                src="https://idt-olive.vercel.app/business-team-1.jpg"
                alt="Business Presentation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 35vw"
                priority
              />
            </div>
            
            {/* Second Image (Floating Overlap Frame) */}
            {/* Mobile par right-bottom side se upar overlap karegi aur grid break par standard pull down adjust hogi */}
            <div className="absolute bottom-0 right-0 w-[75%] sm:w-[65%] lg:w-[55%] h-[85%] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border-4 border-white z-10 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://idt-olive.vercel.app/business-team-2.jpg"
                alt="Individual Presentation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 35vw"
              />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}