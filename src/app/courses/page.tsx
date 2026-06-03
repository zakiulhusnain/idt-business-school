import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CoursesHero from '../components/CoursesHero'
import CoursesList from '../components/CourseList'

export const metadata = {
  title: 'All Digital Courses in Pakistan 2026 | IDT Pakistan 2026',
  description: 'Explore IDT Pakistan\'s 14 professional digital courses including Web Development, AI, Digital Marketing, Medical Billing, and more.',
}

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      <CoursesHero />
      <CoursesList />
      <Footer />
    </main>
  )
}