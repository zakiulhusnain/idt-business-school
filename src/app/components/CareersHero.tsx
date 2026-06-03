import Image from 'next/image'

export default function CareersHero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE WITH OPTIMIZED COVER (LCP Fast Load Architecture) --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Careers.webp" 
          alt="Careers Join Our Team Hero Background" 
          fill 
          className="object-cover object-center select-none"
          priority // Critical layout priority tag for better performance indexing
          sizes="100vw"
        />
        {/* Overlay: Text contrast and readability layout */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
      </div>

      {/* --- CONTENT WRAPPER WITH FLUID RESPONSIVE TYPOGRAPHY --- */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        {/* --- HERO HEADING (CLEAN TAILWIND RESPONSIVE SPEC) --- */}
        {/* Rigid line heights replaced with dynamic scaling classes */}
        <h1 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[44px] sm:leading-[56px] md:leading-[68px] lg:leading-[72px] tracking-tight mb-4 sm:mb-6 text-center select-text"
        >
          Join Our Team
        </h1>

        {/* --- DESCRIPTION P TAG (DYNAMIC BREAKPOINTS MAPPED) --- */}
        <p 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-medium text-white/90 text-sm sm:text-base md:text-xl lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[38px] max-w-xs sm:max-w-2xl lg:max-w-4xl text-center tracking-normal sm:tracking-wide"
        >
          At IDT, we love our work—and our people. We offer a collaborative environment, meaningful projects, and real growth opportunities. If you want to make an impact with a team built on innovation and integrity, you're in the right place.
        </p>

      </div>
    </section>
  )
}