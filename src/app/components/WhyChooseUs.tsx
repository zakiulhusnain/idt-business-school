import Image from 'next/image'
import { GraduationCap, Users, TrendingUp, Monitor } from 'lucide-react'

const features = [
  { icon: GraduationCap, title: 'Practical Skills',  desc: 'Real digital skills that work.' },
  { icon: Users,         title: 'Expert Mentors',    desc: 'Guidance from industry professionals.' },
  { icon: TrendingUp,    title: 'Career Growth',     desc: 'Training that builds your future.' },
  { icon: Monitor,       title: 'Modern Setup',      desc: 'Learn in tech-ready environment.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">

      {/* --- BADGE --- */}
      <div className="flex justify-center mb-10 md:mb-16">
        <span className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/20 rounded-full px-5 py-2 bg-blue-50/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#1A4D8C]" />
          Why Choose Us
        </span>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* --- LEFT: STACKED IMAGE CARDS (FULLY RESPONSIVE) --- */}
        {/* Mobile par height h-[320px] se start hogi aur desktop par h-[480px] tak automatically barhegi */}
        <div className="relative w-full max-w-[550px] lg:max-w-[700px] h-[320px] sm:h-[400px] md:h-[450px] mx-auto">

          {/* Back card — Dynamic safe offset spacing for mobile vs desktop */}
          <div className="absolute top-3 right-6 sm:right-16 md:right-24 w-[90%] sm:w-[85%] h-[90%] rounded-3xl overflow-hidden opacity-80 sm:opacity-100">
            <Image
              src="/About background why.jpg"
              alt="Background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Main image card — Sitting elegantly on top */}
          <div className="absolute bottom-0 left-2 sm:left-4 w-[90%] sm:w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white z-10">
            <Image
              src="/About why.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

        </div>

        {/* --- RIGHT: CONTENT SECTION WITH FLUID TYPOGRAPHY --- */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start mt-6 lg:mt-0">
          
          {/* Heading scaling: text-2xl on tiny phones, text-3xl on normal mobiles, up to text-5xl on desktops */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#051435] tracking-tight mb-4 leading-tight">
            WHY <span className="text-[#1A4D8C]">CHOOSE US</span>
          </h2>
          
          <div className="w-16 h-1.5 bg-[#1A4D8C] rounded-full mb-6 md:mb-8" />
          
          <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed text-sm sm:text-base max-w-xl lg:max-w-none">
            Choose the Institute of Digital Trainings (IDT Pakistan) a trusted leader in
            practical, career-focused digital skills training.
          </p>

          {/* Features Grid - Shifts to center text on mobile for premium look */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-xl lg:max-w-none text-left">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-2 rounded-2xl transition-all duration-300 hover:bg-gray-50/60 group">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <item.icon size={20} className="text-[#1A4D8C]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-[#051435] text-sm sm:text-base tracking-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}