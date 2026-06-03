import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, BookOpen, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image Layout */}
          <div className="relative grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://idt-olive.vercel.app/It student.jpg" alt="Student" fill className="object-cover" />
              </div>
              <div className="bg-[#0A4DA1] text-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
                <Image src="/Main.png" alt="Icon" width={30} height={30} className="rounded-full" />
                <p className="font-semibold text-xs leading-tight">Empowering learners with trusted training</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-16">
              <div className="relative w-full aspect-square rounded-full border-[3px] border-dashed border-blue-200 p-2 overflow-hidden">
                <Image src="https://idt-olive.vercel.app/It student 2.jpg" alt="Discussion" fill className="object-cover rounded-full" />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://idt-olive.vercel.app/It student 3.jpg" alt="Team" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* RIGHT: Content with Precise Typography */}
          <div>
            {/* About Us: 11px, 700, #0A4DA1 */}
            <div className="inline-flex items-center gap-2 bg-[#F0F4F8] px-4 py-2 rounded-md uppercase tracking-widest mb-4" 
                 style={{ color: 'rgb(10, 77, 161)', fontSize: '11px', fontWeight: 700, lineHeight: '17px' }}>
              <span className="w-2 h-2 bg-[#0A4DA1] rounded-full"></span>
              About Us
            </div>
            
            {/* Heading: 48px, 800, lab color */}
            <h2 className="mb-6" style={{ color: 'lab(7.78673 1.82345 -15.0537)', fontSize: '48px', fontWeight: 800, lineHeight: '60px' }}>
              Our Education System <br /> 
              <span className='text-[#0A4DA1]'>Inspires</span> You More.
            </h2>
            
            {/* Subtext: 15px, 400, lab color */}
            <p className="mb-8 max-w-md" style={{ color: 'lab(47.7841 -0.393182 -10.0268)', fontSize: '15px', fontWeight: 400, lineHeight: '24px' }}>
              Our innovative education system combines expert guidance, practical learning, and real-world skills to empower every student.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0A4DA1] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'lab(7.78673 1.82345 -15.0537)', fontSize: '18px', fontWeight: 700, lineHeight: '28px' }}>Education Services</h4>
                  <p style={{ color: 'rgb(120, 120, 120)', fontSize: '16px', lineHeight: '24px' }}>Learn industry-relevant skills today.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0A4DA1] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'lab(7.78673 1.82345 -15.0537)', fontSize: '18px', fontWeight: 700, lineHeight: '28px' }}>International Hub</h4>
                  <p style={{ color: 'rgb(120, 120, 120)', fontSize: '16px', lineHeight: '24px' }}>Connecting you to global learning.</p>
                </div>
              </div>
            </div>

            {/* Buttons & Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-16">
              <Link href="/about" className="bg-[#0A4DA1] text-white font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-900 transition-all">
                Discover More <ArrowRight size={18} />
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A4DA1] rounded-full flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#0A4DA1] uppercase">Call me</span>
                  <span style={{ color: 'lab(7.78673 1.82345 -15.0537)', fontSize: '18px', fontWeight: 900, lineHeight: '28px' }}>+92 371 0194603</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
