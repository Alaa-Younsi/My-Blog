<div align="center">

# ░▒▓ DEAD SIDE ▓▒░

### A Blog from the Digital Underground

*Tech deep-dives · Cultural commentary · The space between*

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Overview

**Dead Side** is a modern, cyberpunk-themed personal blog built with React and TypeScript. It features a full blog and articles system, immersive visual effects (neon glows, scanlines, particle backgrounds), and a production-ready setup for Vercel deployment.

The project is deliberately minimal in its dependencies — no backend, no database, no CMS. Content lives in typed TypeScript data files, making the blog fast, fully static, and trivially deployable.

---

## Features

- **Dual content streams** — separate Blog and Articles sections with independent filtering and search
- **Rich post rendering** — structured content types: paragraphs, headings, code blocks, quotes, images, and dividers
- **Cyberpunk aesthetic** — neon glow effects, CRT scanline overlay, glitch text animations, canvas particle background
- **Page transitions** — Framer Motion-powered fade + slide transitions between routes
- **SEO-ready** — per-page meta tags, Open Graph, Twitter Card, canonical URLs via `react-helmet-async`
- **Code splitting** — lazy-loaded routes with `React.lazy()` + `Suspense` for optimal bundle sizes
- **Scroll progress bar** — reading progress indicator in the Navbar
- **Search & filtering** — keyword-based filtering on Blog and Articles pages
- **Fully responsive** — mobile-first design with a hamburger navigation menu
- **Performance-optimized** — Terser minification, manual chunk splitting, immutable asset caching
- **Security headers** — CSP, HSTS, X-Frame-Options, and more via `vercel.json` and `_headers`
- **Dark mode** — CSS variable-based Tokyo Night theme

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | [React](https://react.dev/) | 18.3.1 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.4.0 |
| Build Tool | [Vite](https://vitejs.dev/) | 7.3.1 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 3.4.1 |
| Routing | [React Router DOM](https://reactrouter.com/) | 6.22.0 |
| Animations | [Framer Motion](https://www.framer.com/motion/) | 11.0.0 |
| SEO / Head | [React Helmet Async](https://github.com/staylor/react-helmet-async) | 2.0.4 |
| CSS Processing | PostCSS + Autoprefixer | 8.4 / 10.4 |
| Minification | Terser | 5.29.0 |
| Linting | ESLint + TypeScript ESLint | 8.57 / 7.0 |

---

## Project Structure

```
deadside/
│
├── public/                     # Static assets served as-is
│   ├── favicon.svg             # Site favicon
│   ├── og-image.png            # Open Graph social preview image
│   ├── robots.txt              # Search engine crawl directives
│   ├── sitemap.xml             # XML sitemap for SEO
│   └── _headers                # Security & cache headers (Netlify / Cloudflare)
│
├── src/
│   ├── main.tsx                # React app entry point
│   ├── App.tsx                 # Root component: routing, layout, page transitions
│   ├── index.css               # Global styles, CSS variables, animations
│   ├── vite-env.d.ts           # Vite environment type declarations
│   │
│   ├── types/
│   │   └── index.ts            # Shared TypeScript interfaces (Post, Article, Section…)
│   │
│   ├── data/                   # Static content (replaces a CMS / database)
│   │   ├── posts.ts            # Blog post data array
│   │   └── articles.ts         # Article data array
│   │
│   ├── pages/                  # Lazy-loaded route-level components
│   │   ├── Home.tsx            # Landing page (hero, featured posts/articles)
│   │   ├── Blog.tsx            # Blog listing with search and keyword filter
│   │   ├── BlogPost.tsx        # Individual blog post renderer
│   │   ├── Articles.tsx        # Articles listing with search and keyword filter
│   │   ├── ArticlePost.tsx     # Individual article renderer
│   │   └── About.tsx           # About page
│   │
│   └── components/             # Reusable UI components
│       ├── Navbar.tsx          # Fixed navbar with scroll progress bar
│       ├── Footer.tsx          # Footer with navigation and social links
│       ├── PostCard.tsx        # Blog post card (memoized)
│       ├── ArticleCard.tsx     # Article card (memoized)
│       ├── GlitchText.tsx      # CSS glitch effect text wrapper
│       ├── ParticleBackground.tsx  # Canvas-based floating particle animation
│       ├── ScanlineOverlay.tsx # CRT scanline visual effect
│       └── CyberDivider.tsx    # Decorative section divider
│
├── index.html                  # HTML entry point (meta, OG tags, fonts)
├── vite.config.ts              # Vite config (aliases, code splitting, minifier)
├── tailwind.config.ts          # Tailwind theme (colors, fonts, animations)
├── tsconfig.json               # TypeScript compiler config
├── tsconfig.node.json          # TypeScript config for Vite build files
├── postcss.config.js           # PostCSS plugins (Tailwind, Autoprefixer)
├── vercel.json                 # Vercel deployment config (rewrites, headers, cache)
├── .gitignore                  # Git ignore rules
└── package.json                # Scripts, dependencies, metadata
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/deadside.git
cd deadside

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with Hot Module Replacement (HMR).

### Production Build

```bash
npm run build
```

Outputs to `dist/`. The build runs TypeScript type checking first, then Vite with Terser minification.

### Preview Production Build Locally

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deploying.

### Lint

```bash
npm run lint
```

---

## Adding Content

Content is managed through typed TypeScript data files — no CMS required.

### Adding a Blog Post

Edit `src/data/posts.ts` and add a new entry to the array:

```typescript
{
  slug: 'my-new-post',          // URL: /blog/my-new-post
  title: 'My New Post',
  subtitle: 'A short subtitle',
  date: '2024-01-15',
  readTime: '5 min read',
  featured: false,
  keywords: ['tech', 'typescript'],
  coverImage: 'https://your-image-url.jpg',
  content: [
    { type: 'paragraph', content: 'Your opening paragraph...' },
    { type: 'heading', content: 'A Section Heading' },
    { type: 'code', language: 'typescript', content: 'const x = 42;' },
    { type: 'quote', content: 'An inspiring quote.' },
  ],
}
```

### Adding an Article

Edit `src/data/articles.ts` — same structure as posts with an additional `category` field and support for `list` sections:

```typescript
{
  slug: 'my-article',
  category: 'Engineering',
  // ... same fields as Post
  content: [
    { type: 'list', items: ['Item one', 'Item two', 'Item three'] },
  ],
}
```

### Supported Content Section Types

| Type | Description |
|---|---|
| `paragraph` | Body text |
| `heading` | `<h2>` level heading |
| `subheading` | `<h3>` level heading |
| `image` | Full-width image with optional caption |
| `quote` | Styled blockquote |
| `code` | Syntax-highlighted code block (specify `language`) |
| `divider` | Horizontal decorative rule |
| `list` | Unordered list (Articles only) |

---

## Design System

The theme is inspired by **Tokyo Night** with a cyberpunk twist.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `bg` | `#1a1b2e` | Main background |
| `bg-alt` | `#16213e` | Alternate / card background |
| `surface` | `#0f3460` | Elevated surfaces |
| `accent` | `#e94560` | Primary accent (pink/red) |
| `accent2` | `#533483` | Secondary accent (purple) |
| `cyan` | `#00d4ff` | Highlights, links, glow |
| `text` | `#a9b1d6` | Body text |
| `text-bright` | `#c0caf5` | Headings, emphasized text |
| `text-dim` | `#565f89` | Muted / metadata text |

### Fonts

- **Rajdhani** (`font-display`) — Display headings; loaded from Google Fonts
- **Share Tech Mono** (`font-mono`) — Code blocks, labels, UI accents; loaded from Google Fonts

---

## Deployment

### Vercel (Recommended)

This project is pre-configured for Vercel via `vercel.json`.

**Option 1 — Vercel CLI:**

```bash
npm install -g vercel
vercel
```

**Option 2 — GitHub Integration:**

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repository
3. Vercel auto-detects Vite — no additional settings required
4. Click **Deploy**

The `vercel.json` handles:
- SPA routing (all paths → `index.html`)
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Immutable caching for hashed assets in `/assets/`

### Other Platforms

**Netlify:** The `public/_headers` file provides equivalent security and cache headers. Add a `_redirects` file to `public/`:

```
/*  /index.html  200
```

**Cloudflare Pages:** The `public/_headers` file is natively supported. Add a `public/_redirects` file as above.

---

## Environment Variables

This project requires no environment variables by default (content is static).

If you extend the project (e.g., add a contact form, analytics, or a CMS), create a `.env.local` file at the root:

```bash
# Example — never commit real values
VITE_ANALYTICS_ID=your_id_here
VITE_API_URL=https://api.example.com
```

> All Vite environment variables must be prefixed with `VITE_` to be accessible in client code.  
> `.env.local` is listed in `.gitignore` and will never be committed.

---

## Performance

The production build is optimized with:

- **Code splitting** — vendor libraries (React, Router, Framer Motion) split into separate chunks for better caching
- **Lazy loading** — all 6 page components are loaded on demand with `React.lazy()`
- **Terser minification** — dead code elimination and aggressive compression
- **Immutable cache headers** — hashed asset filenames in `dist/assets/` cached for 1 year
- **Font preconnect** — `<link rel="preconnect">` hints for Google Fonts reduce latency
- **Lazy image loading** — all `<img>` tags use `loading="lazy"`
- **Tree shaking** — ESM modules enable full tree shaking at build time

---

## Security

Security headers are applied at the edge via `vercel.json` (and `public/_headers` for other platforms):

| Header | Value |
|---|---|
| `Content-Security-Policy` | Restricts sources for scripts, styles, fonts, and connections |
| `Strict-Transport-Security` | HSTS with 2-year max-age and preload |
| `X-Frame-Options` | `DENY` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` — prevents MIME sniffing |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, microphone, geolocation, and payment APIs |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

*Built in the void. Powered by caffeine.*

</div>
