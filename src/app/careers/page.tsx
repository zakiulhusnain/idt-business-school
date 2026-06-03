import Navbar from '../components/Navbar'
import CareersHero from '../components/CareersHero';
import ValuesGrid from '../components/ValuesGrid';
import GrowthSection from '../components/GrowthSection';
import Footer from '../components/Footer'

export default function CareersPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <CareersHero />
        <ValuesGrid />
        <GrowthSection />
        
{/* Apply Button Section */}
<div className="relative text-center pt-20 pb-0">
  <button 
    className="bg-[#16509A] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl 
               transition-all duration-500 ease-out 
               hover:scale-110 hover:bg-[#004AAD] hover:shadow-2xl z-20 relative"
  >
    Apply for a position
  </button>
</div>

{/* Overlapping Vector Section */}
<div className="w-full -mt-16 z-10 relative">
  <img 
    src="/Vector6.webp" 
    alt="Decorative Wave" 
    className="w-full h-auto object-cover pointer-events-none"
  />
</div>
      </main>
      
      <Footer />
    </>
  )
}