'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Hamza Bin Tariq', location: 'Islamabad, PK', course: 'Web Development', text: "Being from Islamabad, I wanted a place that offered international standard training. IDT's Full-Stack course exceeded my expectations." },
  { name: 'Zainab Fatima', location: 'Lahore, PK', course: 'Graphic Design', text: "The Graphic Design faculty at IDT is incredible. They don't just teach software; they teach you how to think like a designer." },
  { name: 'Aarav Sharma', location: 'New Delhi, IN', course: 'Digital Marketing', text: 'I took the remote Digital Marketing certification. The strategies shared for SEO and Meta Ads are very practical.' },
  { name: 'Muhammad Bilal', location: 'Karachi, PK', course: 'Cyber Security', text: 'IDT is hands down the best institute for Cyber Security in Pakistan. The labs are up-to-date.' },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(1024) // Server-safe execution window track

  useEffect(() => {
    // Screen width track karne ke liye taake animations mobile par page leak na karein
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Dynamic animation offsets based on viewport width
  const isMobile = screenWidth < 640
  const isTablet = screenWidth >= 640 && screenWidth < 1024
  const offset = isMobile ? 320 : isTablet ? 400 : 500

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden w-full relative">
      
      {/* --- BADGE STRUCTURE --- */}
      <div className="flex flex-col items-center mb-6">
        <span className="inline-flex items-center bg-[#E5E9F2] text-[#0A4DA1] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
          <span className="w-2 h-2 bg-[#0A4DA1] rounded-full mr-2"></span>
          Our Testimonials
        </span>
      </div>

      {/* --- HEADER TEXT WITH RESPONSIVE TYPOGRAPHY SPECS --- */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 md:mb-16">
        {/* Fluid Heading Component */}
        <h2 
          style={{
            fontFamily: 'Geist, "Geist Fallback", sans-serif',
            fontStyle: 'normal',
            fontWeight: 800,
            color: 'rgb(26, 92, 176)',
          }}
          className="tracking-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[48px]"
        >
          <span className='text-black'>This Is</span> What Our Students Say
        </h2>

        {/* Fluid Description Component */}
        <p
          style={{
            fontFamily: 'Geist, "Geist Fallback", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: '#6F768E',
          }}
          className="max-w-2xl mx-auto text-sm sm:text-base leading-[22px] sm:line-height-[26px] px-2"
        >
          Real stories, real success. See how our students describe their learning journey with us.
        </p>
      </div>

      {/* --- CAROUSEL TRACK --- */}
      {/* Mobile par container height auto-adjust ho sakti ha, optimized frame is h-[400px] to h-[450px] */}
      <div className="relative h-[420px] sm:h-[450px] w-full max-w-7xl mx-auto flex justify-center items-center px-4">
        <AnimatePresence mode="popLayout">
          {testimonials.map((t, i) => {
            const isActive = i === index
            const isPrev = i === (index - 1 + testimonials.length) % testimonials.length
            const isNext = i === (index + 1) % testimonials.length

            if (!isActive && !isPrev && !isNext) return null

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i > index ? offset : -offset }}
                animate={{ 
                  opacity: isActive ? 1 : (isMobile ? 0 : 0.35), // Mobile par distraction hatane k liye side cards hide kiye hain
                  scale: isActive ? 1 : 0.82,
                  x: isActive ? 0 : (isPrev ? -offset : offset), 
                  filter: isActive ? "blur(0px)" : "blur(6px)",
                  zIndex: isActive ? 20 : 10
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // Card content handling logic (p-6 on mobile, p-10 on desktop)
                className="absolute w-full max-w-[340px] sm:max-w-md bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 sm:mb-6 justify-center">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-6 sm:mb-8 text-center">
                    “{t.text}”
                  </p>
                </div>
                
                <div className="text-center mt-auto">
                  <h4 className="font-bold text-[#051435] text-base sm:text-lg">{t.name}</h4>
                  <p className="text-[#0A4DA1] text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1">
                    {t.location} • {t.course}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}