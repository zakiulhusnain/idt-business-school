// Imports parameters mapping
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogHero from '../components/BlogHero'
import BlogGrid from '../components/BlogGrid'

export const metadata = {
  title: 'Blog & Expert Insights - IDT Pakistan',
  description: 'Explore expert insights, trends, and stories that help you stay ahead.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col antialiased">
      {/* Existing global navigation header */}
      <Navbar />

      {/* Main Assembly View Blocks */}
      <main className="flex-grow">
        <BlogHero />
        <BlogGrid />
      </main>

      {/* Existing professional global page footer */}
      <Footer />
    </div>
  )
}