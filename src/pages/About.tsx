import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import GlitchText from '../components/GlitchText'
import CyberDivider from '../components/CyberDivider'

const skills = [
  'TypeScript', 'Rust', 'Systems Design', 'Distributed Systems',
  'Philosophy of Mind', 'Cybersecurity', 'Open Source', 'Linux',
  'Cryptography', 'Dark Aesthetics', 'Coffee', 'Existential Dread',
]

const terminalLines = [
  { delay: 0, text: '$ whoami', color: 'var(--cyan)' },
  { delay: 300, text: '> ghost_node_47', color: 'var(--text-bright)' },
  { delay: 700, text: '$ cat /etc/identity', color: 'var(--cyan)' },
  { delay: 1100, text: '> Location: Somewhere in the network', color: 'var(--text)' },
  { delay: 1400, text: '> Status: Online (mostly)', color: 'var(--text)' },
  { delay: 1700, text: '> Occupation: Write code, write words', color: 'var(--text)' },
  { delay: 2100, text: '$ grep -r "passion" ./life', color: 'var(--cyan)' },
  { delay: 2500, text: '> Found: building things that last', color: 'var(--accent)' },
  { delay: 2800, text: '> Found: understanding systems deeply', color: 'var(--accent)' },
  { delay: 3100, text: '> Found: making art from logic', color: 'var(--accent)' },
  { delay: 3500, text: '$ _', color: 'var(--cyan)' },
]

const About: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
      }, line.delay + 500)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      <Helmet>
        <title>Dead Side | About</title>
        <meta name="description" content="About the author of Dead Side — a developer and writer operating somewhere in the network." />
        <meta name="keywords" content="about, developer, writer, cyberpunk, ghost_node_47" />
        <meta property="og:title" content="Dead Side | About" />
        <meta property="og:description" content="A developer and writer. Somewhere in the network." />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://deadside.dev/about" />
      </Helmet>

      <div className="pt-20 min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Circuit board SVG bg */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="30" y2="40" stroke="#00d4ff" strokeWidth="0.5" />
                <line x1="50" y1="40" x2="80" y2="40" stroke="#00d4ff" strokeWidth="0.5" />
                <line x1="40" y1="0" x2="40" y2="30" stroke="#00d4ff" strokeWidth="0.5" />
                <line x1="40" y1="50" x2="40" y2="80" stroke="#00d4ff" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="3" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
                <circle cx="0" cy="40" r="2" fill="#00d4ff" />
                <circle cx="80" cy="40" r="2" fill="#00d4ff" />
                <circle cx="40" cy="0" r="2" fill="#00d4ff" />
                <circle cx="40" cy="80" r="2" fill="#00d4ff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: 'var(--text-dim)' }}
            >
              WHO AM I?
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-black leading-none mb-4"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: 'var(--text-bright)',
                textShadow: '0 0 30px rgba(0,212,255,0.3)',
              }}
            >
              <GlitchText text="GHOST_NODE_47" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg max-w-xl mx-auto"
              style={{ color: 'var(--text-dim)' }}
            >
              Developer. Writer. Signal in the noise.
            </motion.p>
          </div>
        </section>

        <CyberDivider />

        {/* Bio + Terminal */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className="font-display font-bold text-2xl mb-6"
                style={{ color: 'var(--text-bright)' }}
              >
                <span style={{ color: 'var(--cyan)' }}>// </span>SIGNAL PROFILE
              </h2>
              <div className="space-y-4" style={{ color: 'var(--text)' }}>
                <p className="leading-relaxed">
                  I operate under the handle{' '}
                  <span style={{ color: 'var(--cyan)' }} className="font-mono">
                    ghost_node_47
                  </span>
                  . I don't have a physical address, exactly — I have a series of connections, a
                  network of servers, a collection of half-finished projects that probably run better
                  than they have any right to.
                </p>
                <p className="leading-relaxed">
                  By day, I build systems that are supposed to be reliable. By night, I write about
                  the ones that aren't. I'm interested in the gap between how we think technology
                  works and how it actually works — that gap is where all the interesting things live.
                </p>
                <p className="leading-relaxed">
                  Dead Side started as a private document. Notes I kept for myself about ideas that
                  wouldn't leave me alone. At some point I decided the network deserved to see them.
                  Make of that what you will.
                </p>
                <p className="leading-relaxed">
                  I believe software is a humanistic discipline. The choices we make in code reflect
                  our values, our assumptions, our blindspots. Understanding that is the beginning of
                  building things worth building.
                </p>
              </div>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2
                className="font-display font-bold text-2xl mb-6"
                style={{ color: 'var(--text-bright)' }}
              >
                <span style={{ color: 'var(--accent)' }}>// </span>TERMINAL
              </h2>
              <div
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: 'var(--border)' }}
              >
                {/* Terminal header */}
                <div
                  className="flex items-center gap-1.5 px-4 py-3 border-b"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: '#e94560' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ffd700' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#00d4ff' }} />
                  <span className="ml-3 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                    bash — ghost@node:~
                  </span>
                </div>
                {/* Terminal body */}
                <div
                  className="p-5 font-mono text-sm min-h-64"
                  style={{ background: '#0d0e1a' }}
                >
                  {terminalLines.map((line, i) => (
                    <div
                      key={i}
                      className="mb-1 transition-opacity duration-300"
                      style={{
                        opacity: visibleLines.includes(i) ? 1 : 0,
                        color: line.color,
                      }}
                    >
                      {line.text}
                      {i === terminalLines.length - 1 && visibleLines.includes(i) && (
                        <span className="animate-blink" style={{ color: 'var(--cyan)' }}>
                          █
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CyberDivider />

        {/* Skills */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="font-display font-bold text-2xl mb-8"
              style={{ color: 'var(--text-bright)' }}
            >
              <span style={{ color: 'var(--cyan)' }}>// </span>INTERESTS &amp; SKILLS
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                  className="font-mono text-sm px-4 py-2 rounded-full border transition-all duration-300 cursor-default"
                  style={{
                    color: 'var(--text)',
                    borderColor: 'var(--border)',
                    background: 'rgba(31,43,71,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--cyan)'
                    el.style.borderColor = 'var(--cyan)'
                    el.style.boxShadow = '0 0 12px rgba(0,212,255,0.3)'
                    el.style.background = 'rgba(0,212,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--text)'
                    el.style.borderColor = 'var(--border)'
                    el.style.boxShadow = 'none'
                    el.style.background = 'rgba(31,43,71,0.5)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="font-mono text-sm mb-6" style={{ color: 'var(--text-dim)' }}>
              Find me in the network
            </p>
            <div className="flex gap-4 justify-center">
              {[
                { label: 'GitHub', href: 'https://github.com', color: 'var(--cyan)' },
                { label: 'X / Twitter', href: 'https://x.com', color: 'var(--accent)' },
              ].map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-2 rounded border transition-all duration-300"
                  style={{
                    color,
                    borderColor: color,
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = `${color}15`
                    el.style.boxShadow = `0 0 16px ${color}50`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
