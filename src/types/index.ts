export interface Post {
  id: string
  slug: string
  title: string
  subtitle: string
  date: string
  keywords: string[]
  coverImage: string
  content: PostSection[]
  readTime: string
  featured?: boolean
}

export interface PostSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'image' | 'quote' | 'code' | 'divider'
  content?: string
  language?: string
  alt?: string
  caption?: string
}

export interface Article {
  id: string
  slug: string
  title: string
  subtitle: string
  date: string
  keywords: string[]
  coverImage: string
  content: ArticleSection[]
  readTime: string
  category: string
}

export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'image' | 'quote' | 'code' | 'list' | 'divider'
  content?: string
  items?: string[]
  language?: string
  alt?: string
  caption?: string
}
