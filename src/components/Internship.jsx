import React from 'react'

function Internship() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Internship Program</h2>
          <p className="mt-3 text-slate-600">Kickstart your career with hands-on experience across marketing, design, and development.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {['Marketing', 'Design', 'Development'].map(track => (
            <div key={track} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900">{track} Track</h3>
              <p className="mt-2 text-slate-600">Work with mentors, build a portfolio, and ship real projects.</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-pink-100 via-sky-100 to-violet-100 border border-white/70">
          <form className="grid md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Full name" />
            <input className="px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Email" />
            <input className="px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Portfolio / LinkedIn" />
            <select className="px-4 py-3 rounded-xl border border-slate-200 bg-white/80">
              <option>Marketing</option>
              <option>Design</option>
              <option>Development</option>
            </select>
            <textarea rows={5} className="md:col-span-2 px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Why do you want to join?" />
            <div className="md:col-span-2">
              <button type="button" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Apply now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Internship
