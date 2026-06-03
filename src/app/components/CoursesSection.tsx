import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const courses = [
  { title: 'Software Quality Assurance', href: '#', image: '/qa.webp', span: 'md:col-span-1 md:row-span-2' },
  { title: 'Application Development', href: '#', image: '/appdev.webp', span: 'md:col-span-1' },
  { title: 'Artificial Intelligence', href: '#', image: '/new.webp', span: 'md:col-span-1' },
  { title: 'Digital Marketing', href: '#', image: '/digitalmarket.webp', span: 'md:col-span-1' },
  { title: 'Video Editing', href: '#', image: '/videoediting.webp', span: 'md:col-span-1' },
  { title: 'Wordpress Development', href: '#', image: '/wordpress.webp', span: 'md:col-span-3' },
];

export default function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER WITH FLUID DESIGN --- */}
        <div className="text-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0A4DA1] font-bold text-[10px] sm:text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-[#0A4DA1] rounded-full flex-shrink-0"></span>
            Professional Excellence
          </div>

          {/* Dynamic Scaling Heading */}
          <h2 
            style={{ fontFamily: 'var(--font-geist)' }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[60px] leading-[32px] sm:leading-[42px] md:leading-[60px] lg:leading-[75px] font-black text-black tracking-tight mb-4"
          >
            Our Popular <span className="text-[#0A4DA1]">Courses</span>
          </h2>

          {/* Balanced Safe Description */}
          <p 
            style={{ fontFamily: 'var(--font-geist)' }}
            className="text-sm sm:text-base lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[29px] font-medium text-[#484E61] max-w-2xl mx-auto px-2"
          >
            Explore our most in-demand courses designed to build real digital skills. 
            With the right training, you can unlock new opportunities.
          </p>
        </div>

        {/* --- ACTIVE PROGRAMS BADGE --- */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16">
          <div className="h-px w-10 sm:w-16 bg-gray-200" />
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-2xl px-4 sm:px-6 py-2">
            <span className="text-lg sm:text-xl font-black text-[#1A63CD]">{courses.length}</span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400">
              Active Programs
            </span>
          </div>
          <div className="h-px w-10 sm:w-16 bg-gray-200" />
        </div>

        {/* --- RESPONSIVE BENTO GRID LAYOUT --- */}
        {/* Mobile par cards ki height standard h-[220px] control karegi, md screens par standard rows trigger honge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] md:auto-rows-[250px]">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.href}
              className={`group relative rounded-[24px] sm:rounded-[32px] overflow-hidden block ${course.span} transition-all duration-500 shadow-sm hover:shadow-xl`}
            >
              {/* Image Asset Handling */}
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 50vw"
              />
              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
              
              {/* Card Meta Container */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-8 w-full flex justify-between items-end gap-4 z-10">
                <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight leading-snug">
                  {course.title}
                </h3>
                <div className="bg-white/20 p-2.5 sm:p-3 rounded-full backdrop-blur-md group-hover:bg-white group-hover:text-blue-900 transition-all duration-300 flex-shrink-0 transform group-hover:rotate-45">
                  <ArrowUpRight size={18} className="text-white group-hover:text-[#0A4DA1] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- EXPLORE ALL BUTTON --- */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 bg-[#0A4DA1] text-white font-black text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl hover:bg-blue-900 transition-all shadow-md hover:shadow-lg transform active:scale-95"
          >
            Explore All Courses <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}