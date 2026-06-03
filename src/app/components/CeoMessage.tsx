import Image from 'next/image'

export default function CeoMessage() {
  return (
    // Mobile par overlap safe kiya (-mt-12) aur space management k liye pt-16 diya taake avatar text ko cover na kare
    // Desktop (md:) par standard spacing blueprint aur deep overlap (-mt-32) active ho jayega
    <section className="relative z-20 -mt-12 pt-16 md:pt-0 md:-mt-32 px-4 mb-24">
      
      {/* Main Grid Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] border-4 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] relative flex flex-col md:flex-row-reverse min-h-[550px]">
        
        {/* --- IMAGE CONTAINER (RIGHT SIDE ON DESKTOP & OVERLAP ON MOBILE) --- */}
        {/* Mobile par absolute positioning aur rounded avatar layout, desktop par dynamic vertical square block */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:top-0 md:left-auto md:right-0 md:translate-x-0 md:relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[350px] md:h-auto rounded-full md:rounded-none md:rounded-r-[28px] border-4 border-white md:border-none overflow-hidden shadow-md md:shadow-none flex-shrink-0 z-10">
          <Image 
            src="/rai.jpg" 
            alt="Basharat Ali" 
            fill 
            className="object-cover object-top" 
            sizes="(max-width: 768px) 150px, 350px"
            priority
          />
        </div>

        {/* --- TEXT CONTENT (LEFT SIDE ON DESKTOP) --- */}
        {/* Mobile par pt-20 se text niche push kiya ha taake circular avatar content ko block na kare */}
        <div className="p-6 pt-20 sm:p-10 md:p-14 md:pt-14 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-black text-[#051435] mb-2 text-center md:text-left tracking-tight">
            CEO Message
          </h2>
          <p className="text-[#1A4D8C] italic text-sm font-semibold mb-6 text-center md:text-left">
            Dear Students and Partners,
          </p>
          
          <div className="text-gray-600 text-sm leading-relaxed space-y-4 text-justify px-1 sm:px-0">
            <p>
              Welcome to the Institute of Digital Trainings. We are dedicated to providing practical, 
              industry-ready digital skills that open real opportunities. Our focus is on delivering 
              high-quality learning that prepares you for the modern digital world.
            </p>
            <p>
              Whether you're exploring digital marketing, development, or social media, we aim to 
              empower you with confidence and real-world expertise. At IDT, we believe in 
              transforming talent into professional capability through guidance, practice, and innovation.
            </p>
          </div>

          {/* CEO Meta Signatures */}
          <div className="mt-8 text-center md:text-left border-t border-gray-50 pt-6 md:border-0 md:pt-0">
            <p className="text-gray-400 text-xs">Warm regards,</p>
            <p className="text-gray-900 font-extrabold text-lg">Basharat Ali</p>
            <p className="text-[#1A4D8C] text-[10px] font-bold uppercase tracking-wider mt-0.5">
              CEO, Institute of Digital Trainings
            </p>
            <p className="text-gray-400 text-[10px] mt-0.5 font-medium">
              Digital Courses & Software Services Expert
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}