import React, { useState, useMemo, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'

const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))]

const Articles: React.FC = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  const handleCategory = useCallback((cat: string) => {
    setActiveCategory(cat)
  }, [])

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        search.trim() === '' ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <>
      <Helmet>
        <title>Dead Side | Articles</title>
        <meta name="description" content="Deep dives into engineering, philosophy, and open source culture from Dead Side." />
        <meta name="keywords" content="articles, engineering, philosophy, open source, tech" />
        <meta property="og:title" content="Dead Side | Deep Dives" />
        <meta property="og:description" content="Long-form articles on engineering, philosophy, and culture." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://deadside.dev/articles" />
      </Helmet>

      <div className="pt-20 min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Header */}
        <section className="py-16 px-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-black text-4xl md:text-5xl mb-3"
              style={{ color: 'var(--text-bright)' }}
            >
              <span style={{ color: 'var(--accent)' }}>// </span>DEEP DIVES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm"
              style={{ color: 'var(--text-dim)' }}
            >
              {articles.length} long-form pieces in the archive
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Search */}
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="SEARCH ARTICLES..."
              className="w-full max-w-lg px-4 py-2 rounded border font-mono text-sm outline-none transition-all duration-200"
              style={{
                background: 'var(--bg)',
                color: 'var(--text-bright)',
                borderColor: 'var(--border)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 1px var(--accent), 0 0 16px rgba(233,69,96,0.2)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="Search articles"
            />

            {/* Category tabs */}
            <div className="flex gap-0" role="tablist">
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategory(cat)}
                    className="font-mono text-xs px-4 py-2 border-b-2 transition-all duration-200 relative"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-dim)',
                      borderColor: isActive ? 'var(--accent)' : 'transparent',
                      background: 'transparent',
                    }}
                  >
                    {cat.toUpperCase()}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* List */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              <div className="flex flex-col gap-4">
                {filtered.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div
                  className="font-display font-black text-5xl mb-4"
                  style={{ color: 'var(--text-dim)', animation: 'glitch 0.4s steps(2) infinite' }}
                >
                  NO DATA FOUND
                </div>
                <p className="font-mono text-sm" style={{ color: 'var(--text-dim)' }}>
                  The archive returned empty. Adjust your query.
                </p>
                <button
                  className="mt-6 font-mono text-sm px-6 py-2 rounded border transition-all duration-200"
                  style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
                  onClick={() => { setSearch(''); setActiveCategory('All') }}
                >
                  RESET
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Articles
