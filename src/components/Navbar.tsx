import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GlitchText from './GlitchText'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
]

const Navbar: React.FC = () => {
  const location = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const el = document.documentElement
    const scrollTop = el.scrollTop || document.body.scrollTop
    const scrollHeight = el.scrollHeight - el.clientHeight
    if (scrollHeight > 0) {
      setScrollProgress((scrollTop / scrollHeight) * 100)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      {/* Neon Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[200] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent), 0 0 16px var(--accent)',
        }}
        aria-hidden="true"
      />

      <nav
        className="fixed top-0 left-0 right-0 z-[100] border-b"
        style={{
          background: 'rgba(26,27,46,0.85)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="font-display font-bold text-2xl tracking-widest"
              style={{ color: 'var(--accent)' }}
              aria-label="Dead Side — Home"
            >
              <GlitchText text="DEAD SIDE" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative font-mono text-xs uppercase tracking-widest transition-colors duration-200 group"
                    style={{
                      color: isActive(link.to) ? 'var(--cyan)' : 'var(--text)',
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        background: 'var(--cyan)',
                        boxShadow: '0 0 6px var(--cyan)',
                        width: isActive(link.to) ? '100%' : '0%',
                      }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: 'var(--cyan)', opacity: 0.5 }}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: 'var(--text-bright)',
                  transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : '',
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: 'var(--text-bright)',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: 'var(--text-bright)',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : '',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? '300px' : '0',
            borderTop: mobileOpen ? '1px solid var(--border)' : 'none',
          }}
        >
          <ul
            className="flex flex-col px-4 py-4 gap-4"
            style={{ background: 'rgba(22,33,62,0.98)' }}
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block font-mono text-sm uppercase tracking-widest py-2 border-b transition-colors duration-200"
                  style={{
                    color: isActive(link.to) ? 'var(--cyan)' : 'var(--text)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
