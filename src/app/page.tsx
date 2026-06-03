import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import CoursesSection from './components/CoursesSection'
import SkillSection from './components/SkillSection'
import SandboxSection from './components/SandboxSection'
import BusinessSection from './components/BusinessSection'
import FAQSection from './components/FAQSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import MentorsSection from './components/MentorsSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <CoursesSection />
      <SkillSection />
      <SandboxSection />
      <BusinessSection />
      <FAQSection />
      <MentorsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
