import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Article } from '../types'

interface ArticleCardProps {
  article: Article
  index?: number
}

const ArticleCard: React.FC<ArticleCardProps> = memo(({ article, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.005 }}
      className="rounded-lg overflow-hidden border group cursor-pointer"
      style={{
        background: 'var(--bg-alt)',
        borderColor: 'var(--border)',
        borderLeft: '3px solid var(--accent)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--accent)'
        el.style.boxShadow = '0 0 20px rgba(233,69,96,0.15), -3px 0 8px rgba(233,69,96,0.3)'
        el.style.background = 'linear-gradient(90deg, rgba(233,69,96,0.05), var(--bg-alt))'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = 'none'
        el.style.background = 'var(--bg-alt)'
      }}
    >
      <Link
        to={`/articles/${article.slug}`}
        className="flex flex-col sm:flex-row gap-0 h-full"
        tabIndex={-1}
      >
        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                color: '#a78bfa',
                background: 'rgba(83,52,131,0.3)',
                border: '1px solid rgba(83,52,131,0.5)',
              }}
            >
              {article.category}
            </span>
          </div>

          <h3
            className="font-display font-bold text-xl mb-1 leading-tight"
            style={{ color: 'var(--text-bright)' }}
          >
            {article.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-dim)' }}>
            {article.subtitle}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.keywords.slice(0, 3).map((kw) => (
              <span
                key={kw}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  color: 'var(--text-dim)',
                  background: 'rgba(31,43,71,0.8)',
                  border: '1px solid var(--border)',
                }}
              >
                #{kw}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <span
              className="font-mono text-xs group-hover:translate-x-1 transition-transform duration-200"
              style={{ color: 'var(--accent)' }}
            >
              READ →
            </span>
          </div>
        </div>

        {/* Thumbnail — hidden on mobile */}
        <div className="hidden sm:block w-40 flex-shrink-0 relative overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ minHeight: '120px' }}
            loading="lazy"
            width={160}
            height={120}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, var(--bg-alt) 0%, transparent 40%)',
            }}
          />
        </div>
      </Link>
    </motion.article>
  )
})

ArticleCard.displayName = 'ArticleCard'

export default ArticleCard
