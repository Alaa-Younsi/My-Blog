import React, { useState, useMemo, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

const allKeywords = Array.from(new Set(posts.flatMap((p) => p.keywords)))

const Blog: React.FC = () => {
  const [search, setSearch] = useState('')
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null)

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const handleKeyword = useCallback((kw: string) => {
    setActiveKeyword((prev) => (prev === kw ? null : kw))
  }, [])

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search.trim() === '' ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(search.toLowerCase())
      const matchesKeyword = !activeKeyword || post.keywords.includes(activeKeyword)
      return matchesSearch && matchesKeyword
    })
  }, [search, activeKeyword])

  return (
    <>
      <Helmet>
        <title>Dead Side | Blog</title>
        <meta name="description" content="All transmissions from Dead Side. Cyberpunk culture, AI consciousness, digital identity and more." />
        <meta name="keywords" content="blog, cyberpunk, AI, digital identity, tech, culture" />
        <meta property="og:title" content="Dead Side | Blog" />
        <meta property="og:description" content="All transmissions from the digital underground." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://deadside.dev/blog" />
      </Helmet>

      <div className="pt-20 min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Header */}
        <section className="py-16 px-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-black text-4xl md:text-5xl mb-3 scan-heading"
              style={{ color: 'var(--text-bright)' }}
            >
              <span style={{ color: 'var(--cyan)' }}>// </span>TRANSMISSIONS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm"
              style={{ color: 'var(--text-dim)' }}
            >
              {posts.length} signals found in the archive
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Search */}
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="SEARCH TRANSMISSIONS..."
              className="w-full max-w-lg px-4 py-2 rounded border font-mono text-sm outline-none transition-all duration-200"
              style={{
                background: 'var(--bg)',
                color: 'var(--text-bright)',
                borderColor: 'var(--border)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan)'
                e.currentTarget.style.boxShadow = '0 0 0 1px var(--cyan), 0 0 16px rgba(0,212,255,0.2)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="Search blog posts"
            />

            {/* Keyword pills */}
            <div className="flex flex-wrap gap-2">
              {allKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => handleKeyword(kw)}
                  className="font-mono text-xs px-3 py-1 rounded-full border transition-all duration-200"
                  style={{
                    color: activeKeyword === kw ? 'var(--bg)' : 'var(--cyan)',
                    background: activeKeyword === kw ? 'var(--cyan)' : 'transparent',
                    borderColor: 'var(--cyan)',
                  }}
                  aria-pressed={activeKeyword === kw}
                >
                  #{kw}
                </button>
              ))}
              {activeKeyword && (
                <button
                  onClick={() => setActiveKeyword(null)}
                  className="font-mono text-xs px-3 py-1 rounded-full border transition-all duration-200"
                  style={{ color: 'var(--text-dim)', borderColor: 'var(--border)' }}
                >
                  CLEAR ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div
                  className="font-display font-black text-5xl mb-4 animate-glitch"
                  style={{ color: 'var(--text-dim)' }}
                >
                  NO SIGNAL FOUND
                </div>
                <p className="font-mono text-sm" style={{ color: 'var(--text-dim)' }}>
                  Adjust your search parameters and try again.
                </p>
                <button
                  className="mt-6 font-mono text-sm px-6 py-2 rounded border transition-all duration-200"
                  style={{ color: 'var(--cyan)', borderColor: 'var(--cyan)' }}
                  onClick={() => { setSearch(''); setActiveKeyword(null) }}
                >
                  RESET FILTERS
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog
