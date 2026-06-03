import Image from 'next/image'

export default function BlogHero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#EBF3FC] via-[#F4F8FD] to-[#EBF3FC]/60 pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-[500px] md:min-h-[600px]">
      
      {/* Soft Background Radial Lighting Effects matching reference file image_f6e61b.jpg */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* --- LEFT SIDE: TYPOGRAPHY CONTENT BLOCK (7 Columns) --- */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10">
          
          <h1 
            className="text-3xl top-6 sm:text-4xl md:text-[48px] font-black text-[#0f172a] tracking-tight max-w-xl leading-[1.2] sm:leading-[1.15] md:leading-[60px]"
            style={{ fontFamily: 'var(--font-geist-sans), Arial, sans-serif' }}
          >
            Empowering You With Knowledge to Grow Smarter
          </h1>

          <p 
            className="text-[#334155] text-sm sm:text-base md:text-[18px] font-normal max-w-lg leading-[24px] sm:leading-[29px]"
            style={{ fontFamily: 'var(--font-geist-sans), Arial, sans-serif' }}
          >
            Explore expert insights, trends, and stories that help you stay ahead.
          </p>

          {/* Action CTAs Layout Layer */}
          <div className="flex items-center gap-4 w-full sm:w-auto pt-2">
            <button className="flex-1 sm:flex-none bg-[#16509A] hover:bg-[#113f7a] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition duration-300 shadow-md shadow-blue-900/10 active:scale-[0.98] cursor-pointer whitespace-nowrap">
              Enroll Now
            </button>
            <button className="flex-1 sm:flex-none bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 font-extrabold text-sm px-8 py-3.5 rounded-xl transition duration-300 shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap">
              Explore
            </button>
          </div>
          
        </div>

        {/* --- RIGHT SIDE: PREMIUM LAPTOP/MOCKUP CANVAS (5 Columns) --- */}
        {/* Border radius and shadows calibrated exactly as seen in image_f6e61b.jpg */}
        <div className="lg:col-span-5 w-full relative flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-[540px] aspect-[16/11] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-gray-100">
            
            {/* Structural Graphic background container mesh */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay">
              <Image 
                src="/blogback.webp" 
                alt="Graphic Background Structural Base" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Main Mockup Dashboard view render focus */}
            <Image 
              src="/blogfront.webp" 
              alt="IDT Interactive Dashboard Mockup Portfolio" 
              fill 
              className="object-cover object-center select-none"
              sizes="(max-width: 1400px) 100vw, 450px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}