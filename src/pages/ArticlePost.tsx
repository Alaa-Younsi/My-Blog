import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { articles } from '../data/articles'
import type { ArticleSection } from '../types'
import CyberDivider from '../components/CyberDivider'

interface TOCItem {
  id: string
  text: string
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

const SectionBlock: React.FC<{ section: ArticleSection; id?: string }> = ({ section, id }) => {
  switch (section.type) {
    case 'heading':
      return (
        <h2
          id={id}
          className="font-display font-bold text-2xl md:text-3xl mt-12 mb-4 pl-4 border-l-4 scroll-mt-24"
          style={{ color: 'var(--text-bright)', borderColor: 'var(--accent)' }}
        >
          {section.content}
        </h2>
      )
    case 'subheading':
      return (
        <h3
          className="font-display font-bold text-xl mt-8 mb-3"
          style={{ color: 'var(--cyan)' }}
        >
          {section.content}
        </h3>
      )
    case 'paragraph':
      return (
        <p
          className="font-display font-light text-base md:text-lg leading-relaxed mb-5"
          style={{ color: 'var(--text)', lineHeight: 1.8 }}
        >
          {section.content}
        </p>
      )
    case 'image':
      return (
        <figure className="my-8">
          <img
            src={section.content}
            alt={section.alt ?? ''}
            className="w-full rounded-lg object-cover"
            style={{ border: '1px solid var(--cyan)', boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
            loading="lazy"
            width={1200}
            height={500}
          />
          {section.caption && (
            <figcaption className="font-mono text-xs mt-2 text-center" style={{ color: 'var(--text-dim)' }}>
              {section.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-4 py-1" style={{ borderColor: 'var(--accent)' }}>
          <p className="font-display text-xl italic font-light" style={{ color: 'var(--text-bright)', lineHeight: 1.7 }}>
            {section.content}
          </p>
        </blockquote>
      )
    case 'code':
      return (
        <div className="my-6 rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between px-4 py-2 border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <span className="font-mono text-xs uppercase" style={{ color: 'var(--text-dim)' }}>
              {section.language ?? 'code'}
            </span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e94560' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd700' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#00d4ff' }} />
            </div>
          </div>
          <pre className="p-5 overflow-x-auto font-mono text-sm leading-relaxed" style={{ background: 'var(--bg-alt)', color: 'var(--cyan)' }}>
            <code>{section.content}</code>
          </pre>
        </div>
      )
    case 'list':
      return (
        <ul className="my-6 space-y-2">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-2 font-display font-light text-base" style={{ color: 'var(--text-bright)' }}>
              <span className="mt-1 flex-shrink-0 font-mono" style={{ color: 'var(--accent)' }}>▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'divider':
      return <CyberDivider />
    default:
      return null
  }
}

const ArticlePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const headings: TOCItem[] = useMemo(
    () =>
      (article?.content ?? [])
        .filter((s) => s.type === 'heading')
        .map((s) => ({ id: slugify(s.content ?? ''), text: s.content ?? '' })),
    [article]
  )

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect()
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })
  }, [headings])

  useEffect(() => {
    setupObserver()
    return () => observerRef.current?.disconnect()
  }, [setupObserver])

  if (!article) return <Navigate to="/articles" replace />

  // Precompute a heading ID for each section (null for non-headings)
  let _hi = 0
  const sectionIds: (string | null)[] = article.content.map((s) => {
    if (s.type === 'heading') {
      const id = headings[_hi]?.id ?? ''
      _hi++
      return id
    }
    return null
  })

  return (
    <>
      <Helmet>
        <title>{article.title} | Dead Side</title>
        <meta name="description" content={article.subtitle} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.subtitle} />
        <meta property="og:image" content={article.coverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://deadside.dev/articles/${article.slug}`} />
      </Helmet>

      <div className="pt-16 min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Hero Header Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-12 px-4 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="font-mono text-xs px-3 py-1 rounded"
                    style={{ color: '#a78bfa', background: 'rgba(83,52,131,0.3)', border: '1px solid rgba(83,52,131,0.5)' }}
                  >
                    {article.category}
                  </span>
                </div>
                <h1
                  className="font-display font-black leading-tight mb-3"
                  style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--text-bright)' }}
                >
                  {article.title}
                </h1>
                <p className="text-lg mb-4" style={{ color: 'var(--text-dim)' }}>
                  {article.subtitle}
                </p>
                <div className="flex items-center gap-4 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              {/* Image */}
              <div className="w-full md:w-72 flex-shrink-0 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={288}
                  height={192}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {article.content.map((section, i) => (
                <SectionBlock key={i} section={section} id={sectionIds[i] ?? undefined} />
              ))}
            </main>

            {/* Sticky TOC */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div
                  className="sticky top-24 rounded-lg p-5 border"
                  style={{ background: 'var(--bg-alt)', borderColor: 'var(--border)' }}
                >
                  <h4
                    className="font-mono text-xs uppercase tracking-widest mb-4"
                    style={{ color: 'var(--text-dim)' }}
                  >
                    Contents
                  </h4>
                  <nav>
                    <ul className="space-y-2">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="block font-display text-sm leading-snug transition-colors duration-200 py-1"
                            style={{
                              color: activeId === heading.id ? 'var(--cyan)' : 'var(--text-dim)',
                              borderLeft: `2px solid ${activeId === heading.id ? 'var(--cyan)' : 'transparent'}`,
                              paddingLeft: '8px',
                            }}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Back link */}
        <div className="border-t py-8 px-4" style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto">
            <Link
              to="/articles"
              className="font-mono text-sm transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            >
              ← BACK TO ARTICLES
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePost
