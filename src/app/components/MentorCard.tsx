import Image from 'next/image';

interface MentorCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

export default function MentorCard({ name, title, imageSrc }: MentorCardProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[290px] sm:max-w-[320px] mx-auto group">
      
      {/* --- IMAGE CONTAINER WITH RESPONSIVE FLUID RATIO --- */}
      {/* Fixed dimensions ko hata kar w-full aur aspect ratio set kiya ha taake images har device par smoothly auto-adjust hon */}
      <div className="relative w-full aspect-[3/4] mb-5 sm:mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-2">
        
        {/* Decorative Background Layer */}
        {/* Dynamic rounded corners jo image frame ke sath scale honge */}
        <div className="absolute inset-0 bg-gray-200/80 dark:bg-gray-800 rounded-tr-[40px] sm:rounded-tr-[50px] rounded-bl-[40px] sm:rounded-bl-[50px] rotate-3 -z-10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />

        {/* Main Image Frame */}
        <div className="relative w-full h-full overflow-hidden rounded-tr-[40px] sm:rounded-tr-[50px] rounded-bl-[40px] sm:rounded-bl-[50px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-gray-100/50">
          <Image 
            src={imageSrc} 
            alt={name} 
            fill 
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110" 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>
      
      {/* --- TEXT DETAILS WITH FLUID TYPOGRAPHY --- */}
      <div className="text-center w-full px-2">
        {/* Name: Automatically steps down size on extra small screens */}
        <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#051435] uppercase tracking-tight transition-colors duration-300 group-hover:text-[#1A4D8C]">
          {name}
        </h4>
        
        {/* Title: Dynamic width barrier for neat balancing */}
        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5 sm:mt-2 max-w-[220px] sm:max-w-[250px] mx-auto leading-normal">
          {title}
        </p>
      </div>

    </div>
  );
}