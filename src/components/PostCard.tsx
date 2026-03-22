import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Post } from '../types'

interface PostCardProps {
  post: Post
  index?: number
}

const PostCard: React.FC<PostCardProps> = memo(({ post, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.01, y: -4 }}
      className="rounded-lg overflow-hidden border flex flex-col h-full group cursor-pointer"
      style={{
        background: 'var(--bg-alt)',
        borderColor: 'var(--border)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--cyan)'
        el.style.boxShadow = '0 0 20px rgba(0,212,255,0.15), 0 8px 32px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = 'none'
      }}
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full" tabIndex={-1}>
        {/* Cover Image */}
        <div className="relative overflow-hidden h-48 flex-shrink-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={600}
            height={200}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 30%, var(--bg-alt) 100%)',
            }}
          />
          {/* Keywords */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {post.keywords.slice(0, 3).map((kw) => (
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
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3
            className="font-display font-bold text-xl mb-1 leading-tight group-hover:transition-colors duration-200"
            style={{ color: 'var(--text-bright)' }}
          >
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-dim)' }}>
            {post.subtitle}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <span
              className="font-mono text-xs group-hover:translate-x-1 transition-transform duration-200"
              style={{ color: 'var(--cyan)' }}
            >
              READ MORE →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
})

PostCard.displayName = 'PostCard'

export default PostCard
