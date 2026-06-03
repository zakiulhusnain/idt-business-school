import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact Us', href: '/contact' },
]

const courseLinks = [
  { label: 'Software Quality Assurance', href: '/courses/software-quality-assurance' },
  { label: 'App Development', href: '/courses/application-development' },
  { label: 'Web Development', href: '/courses/web-development' },
  { label: 'Graphic Designing', href: '/courses/graphic-designing' },
]

export default function Footer() {
  return (
    <footer className="bg-[#051435] text-gray-400 relative overflow-hidden">
      {/* Background Style Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/Style in Footer.png"
          alt="Footer Background"
          fill
          className="object-cover object-right-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/IDT logo Footer.png"
              alt="IDT Logo"
              width={120}
              height={42}
              className="object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-5">
              IDT delivers practical digital skills to prepare the new generation for real-world
              careers. Learn, build, and grow with future-ready training.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/idt.pakistan1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#0A4DA1] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/institute-of-digital-training-and-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#0A4DA1] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://www.instagram.com/idtpakistan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#0A4DA1] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://x.com/idt.pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#0A4DA1] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courseLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#0A4DA1]" />
                <a href="tel:+923710194603" className="hover:text-white transition-colors">
                  +92 3710194603
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#0A4DA1]" />
                <a href="mailto:contact@idtpakistan.pk" className="hover:text-white transition-colors">
                  contact@idtpakistan.pk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#0A4DA1]" />
                <span>Islamabad | Lahore | Karachi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2025 IDT. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            {/* <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link> */}
            <Link href="#" className="hover:text-white transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}