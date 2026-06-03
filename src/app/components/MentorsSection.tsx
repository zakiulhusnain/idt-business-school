import Image from 'next/image'

const mentors = [
  {
    name: 'Mr.M.Ali Usman',
    role: 'Software Engineer  | COO and Project Manager of Multiple USA Based Projects',
    image: '/usman.jpg',
  },
  {
    name: 'RAI BASHARAT ALI',
    role: '(ACA|ICAEW), LLB, MSC (ECO), PARSUING LLM (UNIVERSITY OF LONDON)',
    image: '/rai.jpg',
  },
]

export default function MentorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16">
          <span className="inline-flex items-center bg-[#E5E9F2] text-[#0A4DA1] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-[#0A4DA1] rounded-full mr-2"></span>
            Our Mentors
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* --- PREMIUM FRAME WITH SMOOTH HOVER EFFECTS --- */}
              <div 
                className="relative w-[280px] h-[420px] rounded-[24px] overflow-hidden mb-6 
                           transition-all duration-500 ease-out 
                           transform group-hover:-translate-y-3 group-hover:scale-[1.02]"
                style={{
                  backgroundColor: '#fff',
                  border: '8px solid #ffffff',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)',
                }}
              >
                {/* Image Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-[#124A93]/0 group-hover:bg-[#124A93]/5 transition-all duration-500 z-10" />
                
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  sizes="280px"
                  priority
                />
              </div>
              
              {/* --- EXACT DESIGN FOR MENTOR NAME --- */}
              <h3 
                style={{
                  fontFamily: 'Geist, "Geist Fallback", sans-serif',
                  fontStyle: 'italic',
                  fontWeight: 900,
                  color: 'rgb(18, 74, 147)',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
                className="mb-2 text-center tracking-wide"
              >
                {mentor.name}
              </h3>

              {/* --- EXACT DESIGN FOR MENTOR ROLE (WITH BROWSER-SAFE LAB COLOR) --- */}
              <p 
                style={{
                  fontFamily: 'Geist, "Geist Fallback", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  color: '#74777F', // Yeh aap ke lab(47.7841 -0.393182 -10.0268) ka exact perfect alternative hex ha
                  fontSize: '10px',
                  lineHeight: '15px',
                }}
                className="text-center px-4 max-w-[320px] tracking-wide"
              >
                {mentor.role}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}