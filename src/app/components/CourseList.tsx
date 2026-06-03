import { courses } from '../data/courses'
import CourseCard from './CourseCard'

export default function CoursesList() {
  return (
    // Mobile par py-12 aur bari screens par py-20 taake spacing achhi lage
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header — center aligned */}
        {/* Mobile par margin-bottom thora kam (mb-10) kiya hai */}
        <div className="mb-10 md:mb-16 text-center">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C] inline-block" />
            Professional Excellence
          </span>

          {/* Heading — Fully Responsive Custom Scaling */}
          {/* Mobile par 32px, tablets par 48px, aur desktop par pure 60px hoga */}
          <h2 className="text-[32px] sm:text-[48px] md:text-[60px] font-black leading-[42px] sm:leading-[58px] md:leading-[75px] mb-4 tracking-tight">
            <span className="text-[#051435]">Explore </span>
            <span className="text-[#1A63CD]">Programs</span>
          </h2>

          {/* Description */}
          {/* Mobile par text-sm aur desktop par text-base kiya hai */}
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-6 md:mb-8 px-2 sm:px-0">
            Unlock new opportunities with our most in-demand digital skill courses, crafted by
            industry veterans for the next generation of experts.
          </p>

          {/* Counter with lines */}
          {/* Mobile par lines thori choti (w-10) aur space kam (gap-2) ki hai taake screen width se baahir na nikle */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-px w-10 sm:w-16 bg-gray-200" />
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-2xl px-4 py-2 md:px-6 md:py-2.5">
              <span className="text-lg md:text-xl font-black text-[#1A63CD]">{courses.length}</span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-400">
                Active Courses
              </span>
            </div>
            <div className="h-px w-10 sm:w-16 bg-gray-200" />
          </div>

        </div>

        {/* 3 cards per row grid */}
        {/* Yeh layout responsive hai: Mobile (1 column), Tablet (2 columns), Desktop (3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

      </div>
    </section>
  )
}
