import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Internship from './components/Internship'

const ADDRESS_TEXT = 'RTO X Roads, Near, RTO Office Rd, Ranga Rao Nagar, Kakinada, Andhra Pradesh 533003'
const PHONE_DISPLAY = '097055 65777'
const PHONE_TEL = '+919705565777'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="py-10 border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vcan Software Solutions</p>
            <p className="text-sm text-slate-600">All rights reserved.</p>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-800">Address</div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_TEXT)}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-600 hover:underline"
            >
              {ADDRESS_TEXT}
            </a>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-800">Contact</div>
            <a href={`tel:${PHONE_TEL}`} className="block text-sm text-slate-600 hover:underline">{PHONE_DISPLAY}</a>
            <a
              href={`https://wa.me/${PHONE_TEL.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
