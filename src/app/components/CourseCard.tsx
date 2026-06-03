import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Course } from '../data/courses'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden border border-gray-100 bg-white w-full mx-auto max-w-[360px] sm:max-w-none
                    transition-all duration-500 ease-in-out
                    md:hover:scale-[1.03] lg:hover:scale-105 md:hover:shadow-2xl group h-full">

      {/* --- TOP: IMAGE WITH FLUID RESPONSIVE HEIGHT --- */}
      {/* Mobile par h-56, tablet par h-60 aur bade desktops par standard h-64/72 handle kiya ha */}
      <div className="relative h-52 sm:h-60 md:h-64 lg:h-68 w-full overflow-hidden select-none">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* --- BOTTOM: CONTENT BLOCK WITH BALANCED METRICS --- */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8">
        
        {/* Title: Fluid font size adjustments to prevent broken multi-line breaks */}
        <h2 className="text-xl sm:text-2xl font-black text-[#051435] group-hover:text-[#0A4DA1] transition-colors duration-300 mb-2.5 tracking-tight leading-snug">
          {course.title}
        </h2>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2 sm:line-clamp-3 flex-1 font-medium">
          {course.shortDesc}
        </p>

        {/* Dynamic Price Render */}
        {course.price && (
          <p className="text-xs sm:text-sm font-extrabold text-[#0A4DA1] mb-4 tracking-tight">
            {course.price}
          </p>
        )}

        {/* Interactive Action CTA */}
        <Link
          href={`/courses/${course.slug}`}
          className="flex items-center justify-center gap-2
                     border border-gray-200 text-gray-700
                     md:group-hover:border-transparent md:group-hover:text-[#0A4DA1]
                     md:group-hover:shadow-[0_8px_25px_rgba(10,77,161,0.18)]
                     text-xs sm:text-sm font-bold px-4 sm:px-5 py-3 rounded-xl
                     transition-all duration-300 w-full active:scale-[0.98] bg-white md:bg-transparent"
        >
          Explore Course <ArrowUpRight size={16} className="transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </Link>
      </div>

    </div>
  )
}