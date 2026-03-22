import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import GlitchText from '../components/GlitchText'
import CyberDivider from '../components/CyberDivider'
import PostCard from '../components/PostCard'
import ArticleCard from '../components/ArticleCard'
import { posts } from '../data/posts'
import { articles } from '../data/articles'

const Home: React.FC = () => {
  const glitchRef = useRef<HTMLSpanElement>(null)
  const [glitching, setGlitching] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setGlitching(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>Dead Side | Home</title>
        <meta name="description" content="Dead Side — A blog from the digital underground. Tech, culture, and the space between." />
        <meta name="keywords" content="cyberpunk, tech, culture, blog, digital, underground" />
        <meta property="og:title" content="Dead Side | Home" />
        <meta property="og:description" content="A blog from the digital underground. Tech. Culture. The space between." />
        <meta property="og:image" content="https://picsum.photos/seed/cyber001/1200/600" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://deadside.dev/" />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <ParticleBackground />

        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Hero radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(233,69,96,0.12) 0%, transparent 65%)',
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative text-center px-4 z-10 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: 'var(--cyan)' }}
          >
            ▸ TRANSMISSION INCOMING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black leading-none mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(4rem, 12vw, 9rem)',
              color: '#fff',
              textShadow:
                '0 0 10px var(--accent), 0 0 30px var(--accent), 0 0 60px rgba(233,69,96,0.4), 0 0 8px var(--cyan)',
            }}
          >
            <span ref={glitchRef}>
              <GlitchText
                text="DEAD SIDE"
                className={glitching ? 'animate-neonFlicker' : ''}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mb-10 max-w-xl mx-auto"
            style={{ color: 'var(--text-dim)' }}
          >
            A blog from the digital underground. Tech. Culture.
            <br />
            The space between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/blog"
              className="px-8 py-3 font-mono text-sm uppercase tracking-widest rounded transition-all duration-300"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                boxShadow: '0 0 16px rgba(233,69,96,0.4)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'scale(1.05)'
                el.style.boxShadow = '0 0 30px rgba(233,69,96,0.7)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'scale(1)'
                el.style.boxShadow = '0 0 16px rgba(233,69,96,0.4)'
              }}
            >
              ENTER THE BLOG
            </Link>
            <Link
              to="/articles"
              className="px-8 py-3 font-mono text-sm uppercase tracking-widest rounded border transition-all duration-300"
              style={{
                background: 'transparent',
                color: 'var(--cyan)',
                borderColor: 'var(--cyan)',
                boxShadow: '0 0 8px rgba(0,212,255,0.2)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(0,212,255,0.1)'
                el.style.boxShadow = '0 0 20px rgba(0,212,255,0.5)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.boxShadow = '0 0 8px rgba(0,212,255,0.2)'
              }}
            >
              READ ARTICLES
            </Link>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            SCROLL
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{
              color: 'var(--cyan)',
              animation: 'scrollDown 1.4s ease-in-out infinite',
            }}
          >
            <path
              d="M8 3L8 21M8 21L3 15M8 21L13 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative z-10 py-12 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto">
          <CyberDivider />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-6">
            {[
              { num: '03', label: 'POSTS' },
              { num: '03', label: 'ARTICLES' },
              { num: '∞', label: 'THOUGHTS' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-mono text-4xl font-bold"
                  style={{
                    color: 'var(--cyan)',
                    textShadow: '0 0 12px rgba(0,212,255,0.6)',
                  }}
                >
                  {num}
                </div>
                <div
                  className="font-mono text-xs uppercase tracking-widest mt-1"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <CyberDivider />
        </div>
      </section>

      {/* ─── FEATURED POSTS ─── */}
      <section className="relative z-10 py-16 px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="font-display font-bold text-2xl md:text-3xl scan-heading"
              style={{ color: 'var(--text-bright)' }}
            >
              <span style={{ color: 'var(--cyan)' }}>// </span>
              LATEST TRANSMISSIONS
              <span className="cursor-blink" aria-hidden="true" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="font-mono text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--cyan)' }}
            >
              VIEW ALL POSTS →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLES ─── */}
      <section className="relative z-10 py-16 px-4" style={{ background: 'var(--bg-alt)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="font-display font-bold text-2xl md:text-3xl"
              style={{ color: 'var(--text-bright)' }}
            >
              <span style={{ color: 'var(--accent)' }}>// </span>
              RECENT ARTICLES
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {articles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/articles"
              className="font-mono text-sm uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--accent)' }}
            >
              VIEW ALL ARTICLES →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
