import { courses } from '@/app/data/courses';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function BenefitItem({ b, img, align }: {
  b: { title: string; desc: string }
  img: string
  align: 'left' | 'right' | 'center'
}) {
  return (
    <div className={`flex flex-col gap-4 w-[200px] ${
      align === 'center' ? 'items-center text-center'
      : align === 'right' ? 'items-end text-right'
      : 'items-start text-left'
    }`}>
      {/* Icon — bara size */}
      <div className="w-20 h-20 relative overflow-hidden rounded-2xl group cursor-pointer flex-shrink-0">
        <Image
          src={`/${img}`}
          alt={b.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-125"
        />
      </div>
      <p style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 800, fontSize: '18px', lineHeight: '23px', color: 'rgb(26, 77, 140)' }}>
        {b.title}
      </p>
      <p className="text-gray-500 text-sm leading-relaxed">
        {b.desc}
      </p>
    </div>
  )
}
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${course.image}')` }}>
            <div className="absolute inset-0 bg-slate-900/40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 800, fontSize: '72px', lineHeight: '72px', color: 'rgb(255,255,255)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {course.title}
            </h1>
            <p className="mx-auto max-w-2xl" style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 500, fontSize: '24px', lineHeight: '39px', color: '#e5e7eb' }}>
              {course.shortDesc}
            </p>
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="relative flex flex-col lg:flex-row items-center gap-8 py-24 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="relative w-full lg:w-1/2 h-[520px] flex-shrink-0">
            <div className="absolute top-[250px] right-[140px] w-[240px] h-[360px] z-0 rounded-[36px] overflow-hidden">
              <Image src="/rectangle.webp" alt="" fill className="object-cover" />
            </div>
            <div className="absolute bottom-42 left-8 w-[220px] h-[320px] z-10 rounded-[36px] overflow-hidden">
              <Image src="/rectangle.webp" alt="" fill className="object-cover" />
            </div>
            <div className="absolute top-[100px] left-[60px] w-[400px] h-[400px] z-20 rounded-full overflow-hidden border-[14px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <Image src={course.circleImage} alt={course.title} fill className="object-cover" />
            </div>
            <div className="absolute top-[500px] left-[80px] w-12 h-12 bg-[#0A4DA1] rounded-full z-30 border-4 border-white shadow-lg" />
            <div className="absolute top-[180px] left-0 z-10 opacity-50">
              <div className="grid grid-cols-2 gap-[8px]">
                {[...Array(6)].map((_, i) => <div key={i} className="w-[6px] h-[6px] bg-[#1e3a6e] rounded-full" />)}
              </div>
            </div>
            <div className="absolute top-[260px] right-0 z-10 opacity-50">
              <div className="grid grid-cols-2 gap-[8px]">
                {[...Array(6)].map((_, i) => <div key={i} className="w-[6px] h-[6px] bg-[#1e3a6e] rounded-full" />)}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0A4DA1] px-4 py-1.5 rounded-full font-bold text-sm uppercase border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-[#0A4DA1] rounded-full" />
              {course.title}
            </div>
            <h2 style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 800, fontSize: '48px', lineHeight: '53px', color: 'rgb(0,0,0)' }} className="mb-8">
              Trusted {course.title} Training in Pakistan
            </h2>
            <div className="space-y-5">
              <div>
                <p style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: 'rgb(20,20,35)' }} className="mb-2">
                  Want to become a skilled {course.title} expert?
                </p>
                <p style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(75,80,100)' }}>
                  {course.shortDesc}
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: 'rgb(20,20,35)' }} className="mb-2">
                  What is {course.title}?
                </p>
                <p style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(75,80,100)' }}>
                  {course.longDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16">

          {/* ── Sessions ── */}
          <section className="mb-20">
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/20 rounded-full px-4 py-1.5 bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C] inline-block" />
                Our Classes Sessions
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {course.sessions.slice(0, 2).map((s, i) => (
                <div key={i} className="relative bg-blue-50/60 border border-blue-100 rounded-3xl p-10 text-center flex flex-col items-center">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#1A4D8C] rounded-bl-2xl rounded-tr-3xl flex items-center justify-center">
                    <span className="text-white text-lg font-black">&ldquo;&rdquo;</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 700, fontSize: '30px', lineHeight: '36px', color: 'rgb(26,77,140)' }} className="mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">{s.desc}</p>
                  <button className="bg-[#1A4D8C] hover:bg-[#0A4DA1] text-white font-bold px-10 py-3.5 rounded-xl transition-colors text-sm">Register Now</button>
                </div>
              ))}
            </div>
            {course.sessions[2] && (
              <div className="relative bg-blue-50/60 border border-blue-100 rounded-3xl p-10 text-center flex flex-col items-center">
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#1A4D8C] rounded-bl-2xl rounded-tr-3xl flex items-center justify-center">
                  <span className="text-white text-lg font-black">&ldquo;&rdquo;</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 700, fontSize: '30px', lineHeight: '36px', color: 'rgb(26,77,140)' }} className="mb-4">{course.sessions[2].title}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">{course.sessions[2].desc}</p>
                <button className="bg-[#1A4D8C] hover:bg-[#0A4DA1] text-white font-bold px-10 py-3.5 rounded-xl transition-colors text-sm">Register Now</button>
              </div>
            )}
          </section>



          {/* ── Benefits ── */}
          <section className="mb-20 py-10">

            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/20 rounded-full px-4 py-1.5 bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C] inline-block" />
                Benefits
              </span>
            </div>

            <h2
              style={{ fontFamily: 'var(--font-geist), sans-serif', fontWeight: 800, fontSize: '48px', lineHeight: '48px', color: 'rgb(0,0,0)' }}
              className="text-center mb-4 max-w-3xl mx-auto"
            >
              Benefits of Becoming a Certified {course.title} Expert
            </h2>
            <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-20 leading-relaxed">
              Gain In-Demand Skills, Access Global Career Opportunities, and Maximize Your
              Earning Potential as a Certified {course.title}
            </p>
{/* Diamond Grid */}
<div className="relative max-w-4xl mx-auto">

  {/* Row 1 — top center */}
  <div className="flex justify-center mb-6">
    <BenefitItem b={course.benefits[0]} img="bf1.webp" align="center" />
  </div>

  {/* Row 2 — left + diamond image + right */}
  <div className="flex items-center justify-center gap-[90px] mb-6">

    <div className="w-[200px] flex-shrink-0">
      <BenefitItem b={course.benefits[1]} img="bf2.webp" align="right" />
    </div>

    {/* Diamond image — centered */}
    <div className="relative flex-shrink-0 w-[350px] h-[350px] top-11">
      {/* Dashed border */}
      <div
        className="absolute border-2 border-dashed border-[#1A4D8C]/40"
        style={{ inset: '-16px', borderRadius: '56px', transform: 'rotate(45deg)' }}
      />
      {/* Rotated image */}
      <div
        className="absolute inset-0 overflow-hidden shadow-2xl"
        style={{ borderRadius: '48px', transform: 'rotate(45deg)' }}
      >
        <div style={{
          transform: 'rotate(-45deg) scale(1.42)',
          transformOrigin: 'center',
          position: 'absolute',
          inset: 0,
        }}>
          <Image src={course.diamondImage} alt="Benefits" fill className="object-cover" />
        </div>
      </div>
    </div>

    <div className="w-[200px] flex-shrink-0">
      <BenefitItem b={course.benefits[2]} img="bf3.webp" align="left" />
    </div>

  </div>

  {/* Row 3 — left + right below diamond */}
  <div className="flex justify-center gap-[420px] mb-6">
    <div className="w-[200px]">
      <BenefitItem b={course.benefits[3]} img="bf4.webp" align="right" />
    </div>
    <div className="w-[200px]">
      <BenefitItem b={course.benefits[4]} img="bf5.webp" align="left" />
    </div>
  </div>

  {/* Row 4 — bottom center */}
  <div className="flex justify-center">
    <BenefitItem b={course.benefits[5]} img="bf6.webp" align="center" />
  </div>

</div>
</section>
<section className="py-20 overflow-hidden relative min-h-[800px] bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
    
    {/* Left Side: Title */}
    <div className="w-full lg:w-[350px] text-center lg:text-left z-10">
      <h2 className="text-[52px] font-black leading-[56px] text-black mb-1">Course</h2>
      <h2 className="text-[52px] font-normal italic leading-[56px] text-gray-400 mb-6">Outline</h2>
      <p className="text-gray-400 text-sm leading-relaxed max-w-[220px] mx-auto lg:mx-0">
        A program to learn a subject, divided into modules covering specific topics.
      </p>
    </div>

    {/* Right Side: The Curve Canvas */}
    <div className="relative flex-1 w-full h-[600px]">
      
      {/* SVG Path */}
      <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none">
        <path 
          d="M 50 50 Q 250 300 50 550" 
          fill="none" 
          stroke="#1A4D8C" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
        />
      </svg>

      {/* Modules Map */}
      {course.modules.map((m, index) => {
        const topPositions = [5, 18, 32, 46, 60, 74, 88]; 
        const leftPositions = [40, 100, 140, 160, 140, 100, 40]; 

        return (
          <div 
            key={m.id} 
            className="absolute flex items-center gap-4 transition-all duration-500"
            style={{ top: `${topPositions[index]}%`, left: `${leftPositions[index]}px` }}
          >
            {/* Dot */}
            <div className="w-4 h-4 bg-white border-2 border-[#1A4D8C] rounded-full z-10" />

            {/* Card Capsule */}
            <div className="bg-[#1A4D8C] text-white py-3 px-6 rounded-full flex items-center justify-between gap-6 shadow-lg min-w-[320px]">
              <div className="flex flex-col">
                <span className="text-[10px] opacity-70 font-bold uppercase">Module {String(m.id).padStart(2, '0')}</span>
                <h4 className="text-sm font-bold">{m.title}</h4>
              </div>
              
              {/* Image positioned on the right */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image 
                  src={`/cmd${(index % 5) + 1}.webp`} 
                  alt={m.title} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* Why Choose Us & Certification Section */}
<section>
<div className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Overlapping Images Section */}
    <div className="relative w-full h-[500px]">
      {/* Background White Base Layer (Rounded Card) */}
      <div className="absolute top-0 right-[0px] w-[650px] h-[350px] bg-white rounded-[20px] shadow-2xl z-0" />
      
      {/* Background Image: Desktop/Office */}
      <div className="absolute top-[20px] right-[290px] w-[370px] h-[260px] rounded-[30px] overflow-hidden z-10 ">
        <Image src="/Rectangle571.webp" alt="Office" fill className="object-cover" />
      </div>

      {/* Background Image: Meeting/Team */}
      <div className="absolute top-[50px] left-[75px] w-[370px] h-[260px] rounded-[30px] overflow-hidden z-10 ">
        <Image src="/Rectangle570.webp" alt="Meeting" fill className="object-cover" />
      </div>

      {/* Main Foreground Image: Expert Trainer */}
      <div className="absolute top-[190px] right-[40px] w-[550px] h-[400px] rounded-[30px] overflow-hidden z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white">
        <Image src="/121.webp" alt="Expert Trainer" fill className="object-cover" />
      </div>
    </div>

    {/* Right Side: Content */}
    <div>
      <span className="inline-block px-4 py-1 mb-4 text-xs font-bold text-[#1A4D8C] uppercase tracking-widest bg-blue-100 rounded-full">
        Why Choose Us
      </span>
      <h2 className="text-5xl font-black text-black mb-8">Why <span className='text-[#1A4D8C]'>Choose Us</span></h2>
      <p className="text-gray-600 mb-8 w-[600px] leading-relaxed">
      At the Institute of Digital Trainings (IDT), we equip you with real-world, job-ready skills through practical, hands-on learning guided by industry experts. Whether you're a student, professional, or aspiring freelancer, our flexible and affordable courses are designed to help you grow and succeed.
      </p>

      <ul className="space-y-4">
        {[
          "Expert Trainers", 
          "Practical Learning", 
          "Industry Relevant Courses", 
          "Flexible & Affordable", 
          "Career & Freelancing Support"
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 font-semibold text-[slate-800]">
            <div className="w-5 h-5 bg-[white] rounded-full flex items-center justify-center text-[#1A4D8C] hover:text-white text-[10px] shadow-md hover:bg-[#1A4D8C]">✓</div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</section>
<section className="py-24 mt-24 relative right-48">
  {/* ml-auto use kiya taake poora container right ki taraf shift ho jaye */}
  <div className="w-[1500px] left-[100px] px-600">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Side: Text Content */}
      <div className="max-w-2xl">
        <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
          Earn A<br /><span className='text-[#1A4D8C]'>Certification </span>   
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Earn A Certification Upon successful completion of any course at 
          the Institute of Digital Trainings (IDT), you will receive an official 
          certification that formally recognizes your skills and enhances 
          your professional credibility in your chosen field.
        </p>
        <button className="bg-[#1A4D8C] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#153e70] transition-all shadow-lg">
          Apply Now For this Course
        </button>
      </div>

      {/* Right Side: Certification Card */}
      <div className="relative w-full flex justify-center lg:justify-end">
        <div className="bg-white p-8 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] w-full max-w-[700px] object-contain transition-transform duration-500 ease-in-out hover:scale-110">
<div className="relative w-full aspect-[1.7/1] overflow-hidden rounded-xl">
  <Image 
    src="/certificate.webp" 
    alt="Certification" 
    fill 
     
  />
</div>
        </div>
      </div>

    </div>
  </div>
</section>

   </div>
      </main>
      <Footer />
    </>
  );
}




