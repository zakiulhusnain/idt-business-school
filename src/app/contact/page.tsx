'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactHero'
import ContactInfo from '../components/ContactInfo'
import { ContactForm, ContactMap } from '../components/ContactComponents'

type City = 'Islamabad' | 'Lahore' | 'Karachi'

export default function ContactPage() {
  const [activeCity, setActiveCity] = useState<City>('Islamabad')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20">
        <ContactHero />

        <section className="flex justify-center px-4 mt-12">
          <ContactInfo activeCity={activeCity} onCityChange={setActiveCity} />
        </section>

        <section className="flex justify-center px-4 mt-12">
          <ContactForm />
        </section>

        <section className="flex justify-center px-4">
          <ContactMap activeCity={activeCity} />
        </section>
      </main>
      <Footer />
    </>
  )
}
