import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Internship from './components/Internship'

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
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vcan Software Solutions. All rights reserved.</p>
          <div className="text-sm text-slate-600">Built with a soft pastel aesthetic and subtle motion.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
