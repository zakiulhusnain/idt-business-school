export default function GrowthSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12 px-4 sm:px-6">
        
        {/* --- LEFT SIDE: IMAGE WITH RESPONSIVE FRAME & BADGE --- */}
        {/* Mobile par padding-bottom di ha taake overlapping badge neechay wale content se na takraye */}
        <div className="relative w-full lg:w-[48%] pb-8 lg:pb-0 flex justify-center">
          <div className="relative group rounded-tl-[60px] rounded-br-[60px] sm:rounded-tl-[100px] sm:rounded-br-[100px] shadow-2xl overflow-hidden border-[6px] sm:border-[10px] border-white w-full max-w-[500px] lg:max-w-none">
            <img 
              src="/image.webp" 
              className="w-full h-[380px] sm:h-[480px] md:h-[550px] lg:h-[600px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
              alt="Growth" 
            />
          </div>
          
          {/* Overlapping 10+ Years Box - Fully Managed for Mobile & Desktop */}
          <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-2 md:right-6 lg:-bottom-8 lg:-right-6 bg-[#285cce] text-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl w-32 sm:w-40 text-center border-4 border-white z-10 transition-all duration-300">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">10+</h3>
            <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider mt-1">Years Excellence</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT & FEATURES GRID --- */}
        <div className="w-full lg:w-[52%] text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Dynamic Responsive Heading using Tailwind Classes instead of Hardcoded Pixels */}
          <h2 
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            className="font-black text-[#051435] text-3xl sm:text-4xl md:text-[48px] leading-[38px] sm:leading-[46px] md:leading-[58px] tracking-tight mb-6"
          >
            Redefining <span className="text-[#004AAD]">Professional</span> <br className="hidden sm:inline" />Growth Standards.
          </h2>
          
          <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg max-w-xl lg:max-w-none">
            We don't just provide services; we build pathways for success 
            through innovative strategies and hands-on mentorship.
          </p>

          {/* Features Grid - Cleaned up and responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl lg:max-w-none mt-2">
            
            {/* Card 1 */}
            <div className="group p-6 bg-gray-50 rounded-[20px] border border-transparent transition-all duration-300 hover:border-[#004AAD] hover:shadow-lg cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-100 transition-colors duration-300 group-hover:bg-[#004AAD] shadow-sm">
                <svg className="w-6 h-6 text-[#9d9fa1] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#051435] text-lg mb-1">Fast Track</h4>
                <p className="text-sm text-gray-500 leading-normal">Accelerated learning modules designed for busy professionals.</p>
              </div>
            </div>

            {/* Card 2 */}
            {/* Card 2 se fuzool top-10 class nikal di ha jo responsive layout kharab kar rhi thi */}
            <div className="group p-6 bg-gray-50 rounded-[20px] border border-transparent transition-all duration-300 hover:border-[#004AAD] hover:shadow-lg cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-100 transition-colors duration-300 group-hover:bg-[#004AAD] shadow-sm">
                <svg className="w-6 h-6 text-[#9d9fa1] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#051435] text-lg mb-1">Verified Skill</h4>
                <p className="text-sm text-gray-500 leading-normal">Industry-recognized certifications upon completion.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}