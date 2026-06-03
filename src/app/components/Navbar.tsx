'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Courses',
    href: '/courses',
    dropdown: [
      { label: 'Software Quality Assurance', href: '/courses/software-quality-assurance' },
      { label: 'App Development', href: '/courses/application-development' },
      { label: 'Artificial Intelligence', href: '/courses/ai' },
      { label: 'Digital Marketing', href: '/courses/digital-marketing' },
      { label: 'Video Editing', href: '/courses/video-editing' },
      { label: 'Wordpress Development', href: '/courses/wordpress' },
      { label: 'Web Development', href: '/courses/web-development' },
      { label: 'SEO Mastery', href: '/courses/seo-mastery' },
      { label: 'Data Analytics Beginners', href: '/courses/data-analytics' },
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
          
          {/* Logo with Zoom Hover Effect */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110">
            <Image
              src="https://idt-olive.vercel.app/IDT logo Header.png"
              alt="IDT Logo"
              width={100}
              height={35}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-white/80 p-1 rounded-full border border-white shadow-sm">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="flex items-center gap-1 px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
                    {link.label} <ChevronDown size={12} />
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0A4DA1] rounded-lg transition-all">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="px-4 py-2 text-[12px] font-bold text-gray-600 hover:text-black rounded-full transition-all">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/verify" className="text-sm font-semibold text-gray-700 hover:text-[#0A4DA1]">Certificate</Link>
            <Link href="/career" className="bg-[#0A4DA1] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-md">
              Job Placement →
            </Link>
          </div>

          {/* Hamburger Button */}
          <button className="lg:hidden p-2 text-gray-700 focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden h-screen overflow-y-auto pb-24 px-6 pt-6 transition-all duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 pb-2">
                {link.dropdown ? (
                  <div>
                    {/* Split Click Layout: Text clicks route page, Arrow clicks triggers dropdown */}
                    <div className="flex justify-between items-center w-full">
                      <Link 
                        href={link.href} 
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-bold text-gray-800 flex-grow py-1"
                      >
                        {link.label}
                      </Link>
                      <button 
                        onClick={() => setCoursesOpen(!coursesOpen)}
                        className="p-3 text-gray-600 hover:text-[#0A4DA1] focus:outline-none"
                      >
                        <ChevronDown size={20} className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Dropdown Content Submenus */}
                    {coursesOpen && (
                      <div className="mt-2 ml-4 flex flex-col gap-3 border-l-2 border-[#0A4DA1] pl-4 py-1 transition-all">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href} 
                            onClick={() => setMobileOpen(false)} 
                            className="text-sm font-semibold text-gray-600 hover:text-[#0A4DA1] py-0.5"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileOpen(false)} 
                    className="text-lg font-bold text-gray-800 block w-full py-1"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Footer Links */}
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/verify" onClick={() => setMobileOpen(false)} className="font-bold text-gray-700 text-base px-1">Certificate</Link>
              <Link href="/career" onClick={() => setMobileOpen(false)} className="bg-[#0A4DA1] text-white text-center font-extrabold px-6 py-3.5 rounded-full shadow-md active:scale-[0.98] transition-transform">
                Job Placement →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}