import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'AI Courses why ?',
    image: '/blog1.webp',
    author: 'AI Team',
    date: '3/11/2026',
    slug: 'ai-courses-why'
  },
  {
    id: 2,
    title: 'Meta AI',
    image: '/blog2.webp',
    author: 'Tech Team',
    date: '3/1/2026',
    slug: 'meta-ai-insights'
  },
  {
    id: 3,
    title: 'Salaried Class Tax Slabs Pakistan 2025–26: Planning Guide',
    image: '/blog3.webp',
    author: 'Rai Basharat Ali',
    date: '3/5/2026',
    slug: 'salaried-class-tax-slabs-pakistan'
  }
]

export default function BlogGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 3-COLUMN GRID ARCHITECTURE (As per image_f6def4.jpg) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {blogPosts.map((post) => (
            <article key={post.id} className="w-full">
              {/* Main Interactive Link Wrapper */}
              <Link 
                href={`/blog/${post.slug}`} 
                className="group flex flex-col space-y-4 h-full"
              >
                
                {/* --- IMAGE CONTAINER WITH OVERFLOW MASK & HOVER ZOOM EFFECT --- */}
                {/* Reference rounded corners mapping with smooth transitions timing */}
                <div className="w-full aspect-[16/9] relative rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gray-50 border border-gray-100/60 shadow-sm group-hover:shadow-xl group-hover:border-gray-200/80 transition-all duration-500 ease-out">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Subtle Dark Vignette Overlay on Hover for premium depth */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* --- CONTENT BLOCK --- */}
                <div className="flex flex-col flex-grow justify-between space-y-4 px-1">
                  
                  {/* Fluid Responsive Title Heading with Hover Color Shift */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#051435] tracking-tight leading-snug group-hover:text-[#16509A] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* --- AUTHOR META BADGE BLOCK --- */}
                  <div className="flex items-center gap-3 pt-1 mt-auto">
                    {/* Rounded Avatar Circle Letter Indicator */}
                    <div className="w-8 h-8 rounded-full bg-[#EBF3FC] border border-[#16509A]/10 flex items-center justify-center text-xs font-black text-[#16509A] select-none uppercase group-hover:bg-[#16509A] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                      {post.author.charAt(0)}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-gray-800 leading-none mb-1">
                        {post.author}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 leading-none">
                        {post.date}
                      </span>
                    </div>
                  </div>

                </div>

              </Link>
            </article>
          ))}
          
        </div>

      </div>
    </section>
  )
}