const values = [
  { 
    icon: "/Vector.webp", 
    title: "A Purpose-Driven Culture", 
    desc: "We take on meaningful challenges that create real, lasting impact. By combining innovation, dedication, and strategic thinking, we work to deliver solutions that truly make a difference for communities, businesses, and the world around us." 
  },
  { 
    icon: "/Vector1.webp", 
    title: "Supportive Team", 
    desc: "Collaboration and respect guide every aspect of our work. We believe that when people feel heard, valued, and supported, they can achieve remarkable outcomes. Together, we cultivate a culture where innovation grows, excellence is encouraged, and collective success becomes possible." 
  },
  { 
    icon: "/Vector2.webp", 
    title: "Growth Opportunities", 
    desc: "We are committed to supporting your continuous learning and professional growth. By providing the right tools, guidance, and opportunities, we empower you to build new skills, advance your career, and reach your full potential." 
  },
  { 
    icon: "/Vector3.webp", 
    title: "Flexibility That Works", 
    desc: "We recognize that productivity looks different for everyone. That’s why we offer hybrid, remote, and in-office arrangements tailored to how you work most effectively." 
  },
  { 
    icon: "/Vector4.webp", 
    title: "Supportive Team", 
    desc: "From dependable health coverage to flexible paid time off, we go above and beyond to make sure you're fully supported. We believe that when you feel healthy, confident, and taken care of, you can bring your best self to the work you do every day." 
  },
  { 
    icon: "/Vector5.webp", 
    title: "Inclusive Environment", 
    desc: "Diversity and inclusion aren’t just values we highlight—they’re actions we practice every day. We celebrate individuality, welcome different perspectives, and work intentionally to create a workplace where every person feels seen, heard, and supported." 
  },
];

export default function ValuesGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50/50 overflow-hidden">
      {/* Grid gaps aur outer margin ko choti screens ke mutabiq dynamic kar diya ha */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-12 mt-12">
        {values.map((item, index) => (
          <div 
            key={index} 
            className="relative bg-white p-6 sm:p-8 lg:p-10 pt-16 rounded-[30px] border border-gray-100 flex flex-col items-center text-center
                       transition-all duration-500 ease-out transform
                       hover:-translate-y-3 hover:scale-[1.01]
                       shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
          >
            {/* Overlapping Icon Box with Safe Layout */}
            <div className="absolute -top-10 bg-white p-4 rounded-2xl shadow-md border border-gray-100 transition-transform duration-500 ease-out">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-10 h-10 object-contain" 
              />
            </div>

            {/* Heading - Removed hardcoded sizes to implement Fluid Responsive Text */}
            <h3 
              className="font-bold mb-3 tracking-tight text-center text-[#004AAD] 
                         text-xl sm:text-2xl leading-[28px] sm:leading-[32px]"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {item.title}
            </h3>

            {/* Description - Adapts text size perfectly for ultra-readability */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm sm:max-w-none">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}