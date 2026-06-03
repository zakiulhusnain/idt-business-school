'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What courses does IDT offer?',
    a: 'IDT offers a wide range of professional courses including Full Stack Web Development, Graphic Design, Digital Marketing, and specialized ERP training.',
  },
  {
    q: 'Do I need any prior experience to join the courses?',
    a: 'No, our courses are designed for all levels. We start from the basics and move to advanced professional skills.',
  },
  {
    q: 'How long are the courses at IDT?',
    a: 'Most courses range from 3 to 6 months depending on the program depth and your learning pace.',
  },
  {
    q: 'Will I receive a certificate after completing a course?',
    a: 'Yes, you will receive an industry-recognized certificate upon successful completion of your course and projects.',
  },
  {
    q: 'What makes IDT different from other institutes?',
    a: 'We prioritize project-based learning and provide dedicated mentorship with real-world business challenges.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Images with floating style */}
          <div className="relative">
             {/* Main Image */}
             <div className="relative rounded-[32px] overflow-hidden h-[450px]">
              <Image
                src="https://idt-olive.vercel.app/faq 1.jpg"
                alt="Student thinking"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Graphic Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-10 bg-white rounded-3xl shadow-2xl p-4 border border-gray-100"
            >
              <Image
                src="https://idt-olive.vercel.app/Faq.png"
                alt="FAQ"
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#0A4DA1]"></span>
              <p className="text-[#0A4DA1] font-bold text-xs uppercase tracking-[0.3em]">
                FAQ
              </p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#051435] mb-10 leading-[1.1]">
              Frequently Asked <span className="text-[#0A4DA1]">Questions.</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-[#0A4DA1] bg-blue-50/30' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className={`font-bold text-sm ${open === i ? 'text-[#0A4DA1]' : 'text-[#051435]'}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open === i ? 'bg-[#0A4DA1] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-500 text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}