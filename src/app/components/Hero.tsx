import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image: object-right set kiya hai taake mobile par main content na kate */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://idt-olive.vercel.app/Main Hero.jpg"
          alt="Future Leaders"
          fill
          className="object-cover object-right md:object-center" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-9 w-full">
        <div className="max-w-[700px]">
          
          {/* Responsive Heading: clamp(min, preferred, max) */}
          <h1 
            className="text-white font-[800] mb-6" 
            style={{ 
              fontSize: 'clamp(32px, 8vw, 60px)', 
              lineHeight: 'clamp(40px, 10vw, 75px)',
              fontFamily: 'var(--font-geist)' 
            }}
          >
            Master the skills that <br className="hidden md:block" />
            define tomorrow's <br className="hidden md:block" />
            leaders.
          </h1>

          {/* Subtext */}
          <p 
            className="text-white mb-10 font-[400]" 
            style={{ 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              lineHeight: 'clamp(22px, 3vw, 29px)',
              fontFamily: 'var(--font-geist)' 
            }}
          >
            Build real-world expertise and unlock global opportunities for a successful, confident, and bright future.
          </p>

{/* Buttons with Glow Effect */}
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
  {/* Enroll Now Button - Blue Glow on Hover */}
  <Link
    href="/courses"
    className="w-full sm:w-auto text-center bg-white text-[#0A4DA1] px-8 py-4 rounded-md font-bold transition-all duration-300 
               border-b-[6px] border-[#0A4DA1] active:border-b-0 active:translate-y-[6px] 
               hover:bg-gray-50 hover:shadow-[0_15px_30px_-10px_rgba(10,77,161,0.6)]"
    style={{ fontSize: '16px', fontFamily: 'var(--font-geist)' }}
  >
    Enroll Now
  </Link>

  {/* Explore Button - White Glow on Hover */}
  <Link
    href="/about"
    className="w-full sm:w-auto text-center bg-transparent text-white px-8 py-4 rounded-md font-bold transition-all duration-300 
               border-2 border-white border-b-[6px] active:border-b-0 active:translate-y-[6px] 
               hover:text-white hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.4)]"
    style={{ fontSize: '16px', fontFamily: 'var(--font-geist)' }}
  >
    Explore
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}