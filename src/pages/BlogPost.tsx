import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { posts } from '../data/posts'
import type { PostSection } from '../types'
import CyberDivider from '../components/CyberDivider'

const SectionBlock: React.FC<{ section: PostSection }> = ({ section }) => {
  switch (section.type) {
    case 'heading':
      return (
        <h2
          className="font-display font-bold text-2xl md:text-3xl mt-12 mb-4 pl-4 border-l-4"
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
            style={{
              border: '1px solid var(--cyan)',
              boxShadow: '0 0 20px rgba(0,212,255,0.15)',
            }}
            loading="lazy"
            width={1200}
            height={500}
          />
          {section.caption && (
            <figcaption
              className="font-mono text-xs mt-2 text-center"
              style={{ color: 'var(--text-dim)' }}
            >
              {section.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote
          className="my-8 pl-6 border-l-4 py-1"
          style={{ borderColor: 'var(--accent)' }}
        >
          <p
            className="font-display text-xl md:text-2xl italic font-light"
            style={{ color: 'var(--text-bright)', lineHeight: 1.7 }}
          >
            {section.content}
          </p>
        </blockquote>
      )
    case 'code':
      return (
        <div className="my-6 rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          <div
            className="flex items-center justify-between px-4 py-2 border-b"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <span className="font-mono text-xs uppercase" style={{ color: 'var(--text-dim)' }}>
              {section.language ?? 'code'}
            </span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e94560' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffd700' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#00d4ff' }} />
            </div>
          </div>
          <pre
            className="p-5 overflow-x-auto font-mono text-sm leading-relaxed"
            style={{ background: 'var(--bg-alt)', color: 'var(--cyan)' }}
          >
            <code>{section.content}</code>
          </pre>
        </div>
      )
    case 'divider':
      return <CyberDivider />
    default:
      return null
  }
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const postIndex = posts.indexOf(post)
  const prevPost = posts[postIndex - 1]
  const nextPost = posts[postIndex + 1]

  return (
    <>
      <Helmet>
        <title>{post.title} | Dead Side</title>
        <meta name="description" content={post.subtitle} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://deadside.dev/blog/${post.slug}`} />
      </Helmet>

      <article className="pt-16" style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1200}
            height={600}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,27,46,0.5) 0%, rgba(26,27,46,0.98) 100%)' }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto left-0 right-0">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{
                    color: 'var(--cyan)',
                    background: 'rgba(0,212,255,0.12)',
                    border: '1px solid rgba(0,212,255,0.3)',
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-black leading-tight mb-3"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: '#fff',
                textShadow: '0 2px 20px rgba(0,0,0,0.8)',
              }}
            >
              {post.title}
            </motion.h1>
            <p className="text-base md:text-lg mb-4" style={{ color: 'var(--text-dim)' }}>
              {post.subtitle}
            </p>
            <div className="flex items-center gap-4 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 py-12">
          {post.content.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
        </div>

        {/* Nav */}
        <div
          className="border-t py-8 px-4"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-alt)' }}
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              to="/blog"
              className="font-mono text-sm transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            >
              ← BACK TO BLOG
            </Link>
            <div className="flex gap-6">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="font-mono text-xs transition-colors duration-200 text-right"
                  style={{ color: 'var(--text-dim)' }}
                >
                  ← PREV
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-bright)' }}>
                    {prevPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="font-mono text-xs transition-colors duration-200 text-right"
                  style={{ color: 'var(--text-dim)' }}
                >
                  NEXT →
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-bright)' }}>
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogPost
