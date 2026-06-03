import Image from 'next/image'

export default function MentorsHero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE WITH OPTIMIZED COVER --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mentor.webp" 
          alt="Mentors Hero" 
          fill 
          className="object-cover object-center select-none"
          priority // Hero section page optimizations k liye critical ha
          sizes="100vw"
        />
        {/* Overlay: Contrast aur multi-device text readability control karne k liye */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
      </div>

      {/* --- GRID PATTERN (LEAK SAFE) --- */}
      {/* Width ko relative aur max constraints me bandha ha taake horizontal overflow bilkul zero ho */}
      <div className="absolute top-0 right-0 z-10 w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[600px] h-full opacity-15 pointer-events-none select-none">
        <Image 
          src="/grid.png" 
          alt="Grid Pattern" 
          fill 
          className="object-contain object-right-top" 
        />
      </div>
      
      {/* --- CONTENT WRAPPER WITH FLUID RESPONSIVE TYPOGRAPHY --- */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        {/* --- HERO HEADING (CLEAN TAILWIND RESPONSIVE SPEC) --- */}
        {/* Inline rigid specs ko nikaal kar framework range di ha taake text khud adjust ho jaye */}
        <h1 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[44px] sm:leading-[56px] md:leading-[68px] lg:leading-[72px] tracking-tight mb-4 sm:mb-6 text-center select-text"
        >
          Our Mentors
        </h1>

        {/* --- DESCRIPTION P TAG --- */}
        <p 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-medium text-white/90 text-sm sm:text-base md:text-xl lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[32px] max-w-xs sm:max-w-xl lg:max-w-2xl text-center tracking-normal sm:tracking-wide"
        >
          Learn from experts who shape the future.
        </p>

      </div>
    </section>
  )
}