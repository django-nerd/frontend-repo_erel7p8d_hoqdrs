import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 text-sm rounded-md transition-colors ${
          isActive ? 'bg-white/60 text-slate-800' : 'text-slate-700 hover:bg-white/60 hover:text-slate-900'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-violet-200 shadow-inner" />
          <div className="leading-tight">
            <div className="font-semibold text-slate-800">Vcan Software Solutions</div>
            <div className="text-[11px] text-slate-600">Digital Marketing • Web • Apps</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItem('/', 'Home')}
          {navItem('/about', 'About')}
          {navItem('/services', 'Services')}
          {navItem('/internship', 'Internships')}
          {navItem('/contact', 'Contact')}
        </nav>

        <button className="md:hidden p-2 rounded-md text-slate-700 hover:bg-white" onClick={() => setOpen(v => !v)}>
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/80">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/services', 'Services')}
            {navItem('/internship', 'Internships')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
