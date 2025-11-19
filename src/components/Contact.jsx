import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s work together</h2>
          <p className="mt-3 text-slate-600">Tell us about your goals and we’ll get back within 24 hours.</p>
        </div>
        <form className="mt-10 grid md:grid-cols-2 gap-6">
          <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Name" />
          <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Email" />
          <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 md:col-span-2" placeholder="Company / Brand" />
          <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 md:col-span-2" placeholder="Tell us about your project" />
          <div className="md:col-span-2 flex justify-center">
            <button type="button" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
