import { courses } from '../data/courses'
import CourseCard from './CourseCard'

export default function CoursesList() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header — center aligned */}
        <div className="mb-16 text-center">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1A4D8C] border border-[#1A4D8C]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A4D8C] inline-block" />
            Professional Excellence
          </span>

          {/* Heading */}
          <h2 className="text-[60px] font-black leading-[75px] mb-4">
            <span className="text-[#051435]">Explore </span>
            <span className="text-[#1A63CD]">Programs</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mb-8">
            Unlock new opportunities with our most in-demand digital skill courses, crafted by
            industry veterans for the next generation of experts.
          </p>

          {/* Counter with lines */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gray-200" />
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-2xl px-6 py-2.5">
              <span className="text-xl font-black text-[#1A63CD]">{courses.length}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Active Courses
              </span>
            </div>
            <div className="h-px w-16 bg-gray-200" />
          </div>

        </div>

        {/* 3 cards per row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

      </div>
    </section>
  )
}