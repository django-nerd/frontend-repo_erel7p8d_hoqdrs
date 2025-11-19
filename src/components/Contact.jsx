import React from 'react'

const ADDRESS_TEXT = 'RTO X Roads, Near, RTO Office Rd, Ranga Rao Nagar, Kakinada, Andhra Pradesh 533003'
const ADDRESS_MAPS_Q = encodeURIComponent(ADDRESS_TEXT)
const PHONE_DISPLAY = '097055 65777'
const PHONE_TEL = '+919705565777'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s work together</h2>
          <p className="mt-3 text-slate-600">Tell us about your goals and we’ll get back within 24 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          {/* Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-pink-100 via-sky-100 to-violet-100 border border-white/70">
              <h3 className="font-semibold text-slate-900">Visit or contact us</h3>
              <div className="mt-4 space-y-3 text-slate-700">
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Address</div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS_MAPS_Q}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-slate-800 hover:underline"
                  >
                    {ADDRESS_TEXT}
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Phone</div>
                  <a href={`tel:${PHONE_TEL}`} className="mt-1 inline-block text-slate-800 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500">Hours</div>
                  <div className="mt-1 text-slate-800">Mon–Sat, 9:00 AM – 7:00 PM</div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a href={`tel:${PHONE_TEL}`} className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Call now</a>
                <a
                  href={`https://wa.me/${PHONE_TEL.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/80 border border-slate-200 text-slate-900 hover:bg-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Vcan Software Solutions Map"
                src={`https://www.google.com/maps?q=${ADDRESS_MAPS_Q}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Name" />
            <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80" placeholder="Email" />
            <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 md:col-span-2" placeholder="Company / Brand" />
            <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 md:col-span-2" placeholder="Tell us about your project" />
            <div className="md:col-span-2 flex flex-wrap items-center gap-3">
              <button type="button" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Send message</button>
              <span className="text-sm text-slate-500">Prefer a quick chat? Call us at <a href={`tel:${PHONE_TEL}`} className="underline text-slate-700">{PHONE_DISPLAY}</a>.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
