import Image from 'next/image'

// Instructor Data
const instructors = [
  {
    name: 'MR. M. ALI USMAN',
    role: 'Software Engineer | COO and Project Manager of Multiple USA Based Projects',
    image: '/usman.jpg'
  },
  {
    name: 'RAI BASHARAT ALI',
    role: 'ACA(ICAEW), LLB, MSc (Eco), Pursuing LLM (University of London)',
    image: '/rai.jpg'
  }
]

export default function Instructors() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        
        {/* --- BADGE --- */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold text-[#1A4D8C] uppercase tracking-widest bg-blue-50 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C]" />
          Our Team
        </div>

        {/* --- FLUID HEADING --- */}
        {/* Hardcoded font size hata kar responsive utility classes inject kar di hain */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black text-black leading-[32px] sm:leading-[42px] md:leading-[48px] mb-4 sm:mb-6 tracking-tight">
          Meet With Our <span className="text-[#1A4D8C]">Instructors</span>
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-12 md:mb-16 leading-relaxed px-2">
          Our teachers blend expertise and passion to guide you toward success, making learning easier, faster, and truly enjoyable.
        </p>

        {/* --- GRID CONTAINER --- */}
        {/* Mobile par elements stack honge aur gap adjust rahega */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 justify-items-center max-w-sm sm:max-w-none mx-auto">
          {instructors.map((person, index) => (
            <div key={index} className="flex flex-col items-center w-full group">
              
              {/* --- IMAGE CONTAINER WITH RESPONSIVE ASPECT RATIO --- */}
              {/* Fixed sizing hata kar content mapping flow dynamic kar diya ha */}
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[3/4] mb-6 overflow-hidden rounded-tr-[40px] sm:rounded-tr-[50px] rounded-bl-[40px] sm:rounded-bl-[50px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100/60">
                <Image 
                  src={person.image} 
                  alt={person.name} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* --- NAME & ROLE WITH BALANCED SPACING --- */}
              <h4 className="text-base sm:text-lg font-black text-[#1A4D8C] uppercase mb-2 tracking-tight transition-colors duration-300 group-hover:text-black">
                {person.name}
              </h4>
              
              {/* Role: Container width barha di ha mobile layouts k liye taake texts ajeeb vertical line breaks na lein */}
              <p className="text-xs sm:text-sm text-gray-500 max-w-[290px] sm:max-w-[340px] leading-relaxed font-medium">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}