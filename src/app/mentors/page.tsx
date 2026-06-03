import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MentorsHero from '../components/MentorsHero'
import InstructorsSection from '../components/InstructorsSection' // Naya component

export default function MentorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <MentorsHero />
        <InstructorsSection />
      </main>
      <Footer />
    </>
  )
}