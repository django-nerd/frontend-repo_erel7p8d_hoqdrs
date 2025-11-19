import React from 'react'
import { Megaphone, Search, MousePointerClick, Globe, Code2, Video, Printer, Smartphone, Clapperboard, MessageSquare, MessageCircle } from 'lucide-react'

const services = [
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'Creative strategies that grow your community and engagement.' },
  { icon: Search, title: 'SEO', desc: 'Technical and content SEO to boost organic visibility and traffic.' },
  { icon: MousePointerClick, title: 'Google Ads & PPC', desc: 'High-impact campaigns that convert with measurable ROI.' },
  { icon: MessageSquare, title: 'Meta Ads', desc: 'Targeted ads on Facebook & Instagram for scalable growth.' },
  { icon: Globe, title: 'Website Design & Development', desc: 'Responsive, fast, and delightful websites that convert.' },
  { icon: Code2, title: 'Custom Software', desc: 'Tailored software solutions to streamline operations.' },
  { icon: Video, title: 'Video Editing', desc: 'Story-driven edits for ads, reels, and brand films.' },
  { icon: Printer, title: 'Digital Printing', desc: 'Premium prints, merch, and brand collateral.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'iOS & Android apps designed for performance.' },
  { icon: Clapperboard, title: 'Motion Graphics', desc: 'Animated explainers and product visuals.' },
  { icon: MessageCircle, title: 'Bulk & Voice SMS', desc: 'Scale communication with high deliverability.' },
  { icon: MessageCircle, title: "WhatsApp Marketing", desc: 'Automations and campaigns that reach your audience where they are.' },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">A full-stack team delivering end-to-end, data-driven growth across channels.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl p-6 bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 flex items-center justify-center">
                <Icon className="text-slate-800" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
