// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'




// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [coursesOpen, setCoursesOpen] = useState(false)

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-2">
//       <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
          
//           <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
//             <Image src="https://idt-olive.vercel.app/IDT logo Header.png" alt="IDT Logo" width={100} height={35} className="object-contain" />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center bg-white/80 p-1 rounded-full border border-white shadow-sm">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.label} className="relative group">
//                   <Link href={link.href} className="flex items-center gap-1 px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
//                     {link.label} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
//                   </Link>
                  
//                   {/* PROFESSIONAL DROPDOWN GRID */}
//                   <div className="absolute top-full left-0 mt-3 w-[480px] bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50 p-6">
//                     <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//                       {link.dropdown.map((item) => {
//                         const Icon = item.icon;
//                         return (
//                           <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group/item">
//                             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-500 group-hover/item:bg-[#0A4DA1] group-hover/item:text-white transition-all">
//                               <Icon size={20} />
//                             </div>
//                             <span className="text-[13px] font-bold text-gray-700 group-hover/item:text-[#0A4DA1]">{item.label}</span>
//                           </Link>
//                         );
//                       })}
//                     </div>
//                     <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
//                       <Link href="/courses" className="text-xs font-bold text-[#0A4DA1] flex items-center gap-1 hover:underline">View All Courses →</Link>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link key={link.href} href={link.href} className="px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
//                   {link.label}
//                 </Link>
//               )
//             )}
//           </nav>
            //  </div>
//         </div>
//       )}
//     </header>
//   )
// }




'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ChevronDown, Menu, BookOpen,  X, ShieldCheck, Smartphone, Brain, Megaphone, Video, Globe, BarChart3, Code2, Search, FileText } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Courses',
    href: '/courses',
    dropdown: [
      { label: 'Software Quality Assurance', href: '/newcourses/software-quality-assurance', icon: ShieldCheck },
      { label: 'App Development', href: '/newcourses/application-development', icon: Smartphone },
      { label: 'Artificial Intelligence', href: '/newcourses/artificial-intelligence', icon: Brain },
      { label: 'Digital Marketing', href: '/newcourses/digital-marketing', icon: Megaphone },
      { label: 'Video Editing', href: '/newcourses/video-editing', icon: Video },
      { label: 'Wordpress Development', href: '/newcourses/wordpress', icon: Globe },
      { label: 'Data Analytics', href: '/newcourses/data-analytics', icon: BarChart3 },
      { label: 'Web Development', href: '/newcourses/web-development', icon: Code2 },
      { label: 'SEO Mastery', href: '/newcourses/seo-mastery', icon: Search },
      { label: 'Medical Billing', href: '/newcourses/medical-billing', icon: FileText },
    ],
  },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Contact', href: '/contact' },
  { label: 'Career', href: '/careers' },
  { label: 'Blogs', href: '/blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-2">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <Image src="https://idt-olive.vercel.app/IDT logo Header.png" alt="IDT Logo" width={100} height={35} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-white/80 p-1 rounded-full border border-white shadow-sm">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="flex items-center gap-1 px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
                    {link.label} <ChevronDown size={12} />
                  </Link>
                  
                  {/* PROFESSIONAL DROPDOWN CARD (Matches "Our Programs" style) */}
                  <div className="absolute top-full left-0 mt-3 w-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8">
                    <div className="flex items-center gap-2 mb-6 text-gray-400">
                      <BookOpen size={18} />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Our Programs</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-3 group/item">
                          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 text-gray-400 group-hover/item:bg-blue-50 group-hover/item:text-[#0A4DA1] transition-all">
                            <BookOpen size={16} />
                          </div>
                          <span className="text-[14px] font-semibold text-gray-700 group-hover/item:text-[#0A4DA1] transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link href="/courses" className="flex w-full items-center justify-center gap-2 bg-[#0A4DA1] text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-800 transition-all">
                        View All Courses →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          
            <div className="hidden lg:flex items-center gap-4">
            <Link href="/verify" className="text-sm font-semibold text-gray-700 hover:text-[#0A4DA1]">Certificate</Link>
              <Link href="/career" className="bg-[#0A4DA1] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-md">Job Placement →</Link>
             </div>

            <button className="lg:hidden p-2 text-gray-700 focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>


         {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden h-screen overflow-y-auto pb-24 px-6 pt-6 transition-all duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 pb-2">
                {link.dropdown ? (
                  <div>
                    <div className="flex justify-between items-center w-full">
                      <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-bold text-gray-800 flex-grow py-1">{link.label}</Link>
                      <button onClick={() => setCoursesOpen(!coursesOpen)} className="p-3 text-gray-600">
                        <ChevronDown size={20} className={`transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {coursesOpen && (
                      <div className="mt-2 ml-4 flex flex-col gap-3 border-l-2 border-[#0A4DA1] pl-4 py-1">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-gray-600 py-0.5">{item.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-bold text-gray-800 block w-full py-1">{link.label}</Link>
                )}
              </div>
            ))}
        
        </div>
      </div>
       )}
    </header>
  )
}