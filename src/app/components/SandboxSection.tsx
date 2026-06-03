"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SandboxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Detect touch devices to safely manage 3D physics on mobile
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-15, 15]), springConfig);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current || isTouchDevice) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT: FLUID INTERACTIVE IMAGE FRAME --- */}
          {/* Height mobile par h-[350px] se leak proof responsive scale ho kar desktop par h-[600px]/[650px] ho jayegi */}
          <motion.div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX: isTouchDevice ? 0 : rotateX, 
              rotateY: isTouchDevice ? 0 : rotateY, 
              perspective: 1000 
            }}
            className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden h-[350px] sm:h-[480px] md:h-[550px] lg:h-[650px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.2)] cursor-crosshair mx-auto max-w-[600px] lg:max-w-none transition-shadow duration-300"
          >
            <Image
              src="https://idt-olive.vercel.app/NEW.jpg"
              alt="Hands-on Practice"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* --- RIGHT: CONTENT CONTENT WITH FLUID TEXT ADJUSTMENTS --- */}
          <div className="lg:pl-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Top Indicator Badge Layout */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-blue-600 hidden lg:inline-block"></div>
              <p className="text-[#0A4DA1] font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                Practical Excellence
              </p>
            </div>
            
            {/* Fluid Heading: Automatically scales using multi-tier sizes to avoid wrapping crash */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#051435] mb-6 md:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Stop Watching.<br />
              <span className="text-[#0A4DA1]">Start Building.</span>
            </h2>
            
            {/* Main Description */}
            <p className="text-gray-500 text-sm sm:text-base mb-8 md:mb-12 leading-relaxed max-w-xl lg:max-w-none">
              Static tutorials don&apos;t build careers—projects do. Access our{' '}
              <span className="text-[#051435] font-bold">Live-Sandbox environment</span> where you
              apply every lesson to real-world business challenges in real-time.
            </p>

            {/* Sub Feature Info Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-xl lg:max-w-none text-left">
              <div className="border-l-2 border-blue-500/30 pl-4 sm:pl-6 py-1">
                <h4 className="text-[#051435] font-bold text-sm sm:text-base mb-1.5 sm:mb-2">Industry Simulation</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Work within environments that mirror top tech companies.
                </p>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-4 sm:pl-6 py-1">
                <h4 className="text-[#051435] font-bold text-sm sm:text-base mb-1.5 sm:mb-2">Instant Feedback</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  AI-driven code reviews and mentor checkpoints as you build.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}