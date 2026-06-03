import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE WITH OPTIMIZED COVER (Anti-Stretch & High Performance) --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/contact.webp" 
          alt="Contact Us Hero Background" 
          fill 
          className="object-cover object-center select-none"
          priority // Hero section page optimizations aur fast LCP k liye critical ha
          sizes="100vw"
        />
        {/* Overlay: Text contrast aur multi-device readability management ke liye */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
      </div>

      {/* --- CONTENT WRAPPER WITH FLUID RESPONSIVE TYPOGRAPHY --- */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        
        {/* --- HERO HEADING (CLEAN TAILWIND RESPONSIVE SPEC - REMOVED INLINE RIGID SPEC) --- */}
        <h1 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[44px] sm:leading-[56px] md:leading-[68px] lg:leading-[72px] tracking-tight mb-4 sm:mb-6 text-center select-text uppercase"
        >
          CONTACT US
        </h1>

        {/* --- DESCRIPTION P TAG (FLUID AND SCALABLE BOUNDS) --- */}
        <p 
          style={{ fontFamily: 'Geist, "Geist Fallback", sans-serif' }}
          className="font-medium text-white/90 text-sm sm:text-base md:text-xl lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[34px] max-w-xs sm:max-w-xl lg:max-w-2xl text-center tracking-normal sm:tracking-wide"
        >
          Have questions or need assistance? Reach out to us and our team will get back to you as soon as possible.
        </p>

      </div>
    </section>
  )
}