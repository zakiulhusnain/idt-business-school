import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import CeoMessage from '../components/CeoMessage'
import MissionVision from '../components/MissionVision'
import WhyChooseUs from '../components/WhyChooseUs'
// Yahan apne existing components import karein:
import Mentors from '../components/MentorsSection' 
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <AboutHero />
        <CeoMessage />
        <MissionVision />
        <WhyChooseUs />
        {/* Yahan add karein */}
        <Mentors />
      </main>
      {/* Footer page ke end mein layout mein add ho jayega */}
      <Footer />
    </>
  )
}