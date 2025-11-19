import React from 'react'

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-gradient-to-br from-pink-100 via-sky-100 to-violet-100 rounded-3xl p-8 border border-white/70">
            <h2 className="text-3xl font-bold text-slate-900">About Vcan</h2>
            <p className="mt-4 text-slate-700">
              We are a global digital marketing and web design studio helping startups and enterprises grow with design, code, and performance.
              Our approach blends strategy, creativity, and analytics to build brands that scale.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
              <li>Data-driven decisions and measurable outcomes</li>
              <li>Design systems, component libraries, and scalable code</li>
              <li>Agile delivery with transparent communication</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-2 text-slate-600">To craft delightful, conversion-focused experiences that turn attention into growth.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900">Our Values</h3>
              <p className="mt-2 text-slate-600">Integrity, curiosity, craftsmanship, and long-term partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
