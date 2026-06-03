import Image from 'next/image'

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* --- TOP BADGE --- */}
        <div className="flex justify-center mb-12 md:mb-16">
          <span className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/30 rounded-full px-4 py-1.5 bg-blue-50/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C] inline-block" />
            Our Mission & Vision
          </span>
        </div>

        {/* --- ROW 1: HEADING & MISSION CARD --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center mb-16 md:mb-12">

          {/* Left: Heading */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] md:leading-tight tracking-tight">
              Our Mission<br className="hidden md:inline" /> & Vision
            </h2>
            <div className="mt-4 w-12 h-1 rounded-full bg-[#1A4D8C]" />
          </div>

          {/* Right: Mission card — Mobile stack safe, Desktop full luxury overlay */}
          <div className="relative pt-16 md:pt-0 md:pl-20 max-w-md md:max-w-none mx-auto w-full">
            {/* Circle Image Frame */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[-64px] md:top-1/2 md:-translate-y-1/2 w-32 h-32 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white md:border-none">
              <Image
                src="/About center 1.jpg"
                alt="Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 240px"
              />
            </div>
            
            {/* Card Content Layout */}
            <div className="bg-gray-50/80 border border-gray-100 rounded-[24px] md:rounded-2xl pt-20 pb-8 px-6 md:py-10 md:pl-32 lg:pl-36 md:pr-8 lg:pr-10 shadow-sm text-center md:text-left transition-all hover:shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Mission</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                To empower learners with future-ready digital skills and build a
                globally competitive workforce.
              </p>
            </div>
          </div>

        </div>

        {/* --- ROW 2: VISION CARD & EMPTY BLOCK --- */}
        {/* order-last lg grid positions ensure fluid transition flow on mobile layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* Left: Vision card — Mobile stack safe, Desktop full luxury right overlay */}
          <div className="relative pt-16 md:pt-0 md:pr-20 max-w-md md:max-w-none mx-auto w-full md:order-first">
            {/* Circle Image Frame */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[-64px] md:top-1/2 md:-translate-y-1/2 w-32 h-32 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white md:border-none">
              <Image
                src="/About center 2.jpg"
                alt="Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 128px, 240px"
              />
            </div>
            
            {/* Card Content Layout */}
            <div className="bg-gray-50/80 border border-gray-100 rounded-[24px] md:rounded-2xl pt-20 pb-8 px-6 md:py-10 md:pl-8 lg:pl-10 md:pr-32 lg:pr-36 shadow-sm text-center md:text-left transition-all hover:shadow-md">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Vision</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                To deliver practical education that builds real-world skills for
                careers, business, and freelancing.
              </p>
            </div>
          </div>

          {/* Right: Hidden spacer only active on modern dashboards desktops */}
          <div className="hidden md:block" />

        </div>

      </div>
    </section>
  )
}