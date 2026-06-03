import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import { ContactForm, ContactMap } from '../components/ContactComponents'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20">
        <ContactHero />
        
        <section className="flex justify-center px-4 mt-12">
          <ContactInfo />
        </section>

        {/* Form aur Map ko alag alag section mein rakhein taake upar-neeche aayein */}
        <section className="flex justify-center px-4 mt-12">
          <ContactForm />
        </section>

        <section className="flex justify-center px-4">
          <ContactMap />
        </section>
      </main>
      <Footer />
    </>
  )
}