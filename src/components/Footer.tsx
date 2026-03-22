import React from 'react'
import { Link } from 'react-router-dom'

const GitHubIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const XIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 border-t mt-16"
      style={{ background: 'var(--bg-alt)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display font-bold text-2xl tracking-widest"
              style={{ color: 'var(--accent)' }}
            >
              DEAD SIDE
            </Link>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-dim)' }}>
              A transmission from the digital underground.
              <br />
              Tech. Culture. The space between.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--text-dim)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/blog', label: 'Blog' },
                { to: '/articles', label: 'Articles' },
                { to: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-cyan-400"
                    style={{ color: 'var(--text)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--text-dim)' }}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200"
                style={{ color: 'var(--text-dim)' }}
                aria-label="GitHub"
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.color = 'var(--cyan)'
                  el.style.boxShadow = '0 0 12px rgba(0,212,255,0.4)'
                  el.style.background = 'rgba(0,212,255,0.08)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.color = 'var(--text-dim)'
                  el.style.boxShadow = 'none'
                  el.style.background = 'transparent'
                }}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200"
                style={{ color: 'var(--text-dim)' }}
                aria-label="X (Twitter)"
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.color = 'var(--accent)'
                  el.style.boxShadow = '0 0 12px rgba(233,69,96,0.4)'
                  el.style.background = 'rgba(233,69,96,0.08)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.color = 'var(--text-dim)'
                  el.style.boxShadow = 'none'
                  el.style.background = 'transparent'
                }}
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            Built in the void. Powered by caffeine.
          </p>
          <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            © {year} Dead Side. All signals reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
