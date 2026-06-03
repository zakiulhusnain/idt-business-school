import Image from 'next/image'
import Link from 'next/link'

export default function SkillSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT: IMAGE COLLAGE WITH DYNAMIC CENTER LOGO --- */}
          {/* Mobile par h-[340px], tablet par h-[500px] aur desktop par dynamic scale max 650px lagaya ha */}
          <div className="relative w-full max-w-[650px] h-[340px] sm:h-[500px] md:h-[550px] lg:h-[620px] flex flex-wrap justify-between content-between mx-auto">
            
            {/* Top-left Image */}
            <div className="w-[48.5%] h-[48.5%] rounded-tl-[60px] sm:rounded-tl-[100px] lg:rounded-tl-[120px] rounded-tr-[24px] sm:rounded-tr-[40px] rounded-br-[24px] sm:rounded-br-[40px] rounded-bl-[24px] sm:rounded-bl-[40px] overflow-hidden relative shadow-md">
              <Image src="https://idt-olive.vercel.app/Skill 1.jpg" alt="Learning" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" priority />
            </div>
            
            {/* Top-right Image */}
            <div className="w-[48.5%] h-[48.5%] rounded-tr-[60px] sm:rounded-tr-[100px] lg:rounded-tr-[120px] rounded-tl-[24px] sm:rounded-tl-[40px] rounded-bl-[24px] sm:rounded-bl-[40px] rounded-br-[24px] sm:rounded-br-[40px] overflow-hidden relative shadow-md">
              <Image src="https://idt-olive.vercel.app/Skill 2.jpg" alt="Team" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" priority />
            </div>
            
            {/* Bottom-left Image */}
            <div className="w-[48.5%] h-[48.5%] rounded-bl-[60px] sm:rounded-bl-[100px] lg:rounded-bl-[120px] rounded-br-[24px] sm:rounded-br-[40px] rounded-tr-[24px] sm:rounded-tr-[40px] rounded-tl-[24px] sm:rounded-tl-[40px] overflow-hidden relative shadow-md">
              <Image src="https://idt-olive.vercel.app/Skill 3.jpg" alt="Coding" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            
            {/* Bottom-right Image */}
            <div className="w-[48.5%] h-[48.5%] rounded-br-[60px] sm:rounded-br-[100px] lg:rounded-br-[120px] rounded-bl-[24px] sm:rounded-bl-[40px] rounded-tl-[24px] sm:rounded-tl-[40px] rounded-tr-[24px] sm:rounded-tr-[40px] overflow-hidden relative shadow-md">
              <Image src="https://idt-olive.vercel.app/Skill 4.jpg" alt="Mentoring" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            
            {/* Center Logo - Made Fully Responsive (Smaller on Mobile, Premium on Desktop) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center z-10 shadow-2xl border-[5px] sm:border-[8px] border-white transition-all duration-300">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image 
                  src="https://idt-olive.vercel.app/IDT logo Header.png" 
                  alt="IDT Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT CONTENT WITH FLUID TEXT --- */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            
            {/* Dynamic Badge - Max-width safety control */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0A4DA1] font-bold text-[10px] sm:text-xs px-4 py-2 rounded-full uppercase tracking-widest mb-6 max-w-full text-left shadow-sm">
              <span className="w-2 h-2 bg-[#0A4DA1] rounded-full flex-shrink-0"></span>
              Learn by identifying your skill gaps
            </div>

            {/* Fluid Heading Breakdown */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#051435] mb-6 leading-[1.15] tracking-tight">
              Speed up learning with <span className="text-[#0A4DA1]">personalized guidance</span>
            </h2>

            {/* Descriptions */}
            <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed max-w-xl lg:max-w-none">
              Discover your current skill level with IDT's advanced skill check tools. Understand your strengths, identify areas to improve, and unlock a personalized growth path that helps you learn smarter and faster.
            </p>
            
            <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed max-w-xl lg:max-w-none">
              Get tailored course recommendations in Web Development, Mobile Apps, AI, Medical Billing, and more. Plus, receive instant guidance from expert mentors who support you and accelerate your career growth every step of the way.
            </p>

            {/* Premium Interactive Button */}
            <Link
              href="/courses"
              className="inline-block bg-[#051435] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-black transition-all shadow-md hover:shadow-xl transform active:scale-95"
            >
              Explore Skill Assessments
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}