import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto min-h-[70vh] grid md:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 shadow-xl border border-white/60">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-700 ring-1 ring-sky-200">Premier Digital Agency</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Elevate your brand with soft, pastel-perfect digital experiences
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Social media, SEO, Google & Meta Ads, performance marketing, web & app design, custom software, video, print, motion and more — all crafted to grow your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">Contact us</a>
            <a href="#services" className="px-5 py-3 rounded-xl bg-white/80 text-slate-900 hover:bg-white transition border border-slate-200">Explore services</a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
    </section>
  )
}

export default Hero
