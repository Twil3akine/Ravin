# Ravin Theme

<p align="center">
  A minimal and rich Astro theme designed for Documentation, Blogs, and Portfolios.
</p>

## ✨ Features

- **Astro × Svelte:** High-performance static site generation with smooth and lightweight interactive UI elements powered by Svelte.
- **Rich MDX Components:** Pre-built components designed to support writing detailed documentation (Tabs, Callouts, Spoilers, CodeBlocks with copy functionality, etc.)
- **Dark Mode Ready:** Beautiful dark mode implementation using CSS Variables that automatically syncs with system preferences and allows manual toggling without flickering.
- **SEO Optimized:** Best practices applied natively. Automatically generates Canonical URLs, OpenGraph (OGP) tags, Twitter Card metadata, and `sitemap.xml` / `robots.txt`.
- **Content Collections:** Strict and type-safe schema definitions for frontmatter across the `/blog` and `/docs` collections.
- **Lightning Fast Search:** Seamlessly integrated `astro-pagefind` for instantaneous, typo-tolerant full-text search right inside a modal.
- **Minimal & Clean:** Monotone design emphasizing typography and whitespace so your content takes center stage.

## 🚀 Getting Started

### 1. Create a New Project

The easiest way to start is by cloning this repository or using it as a template:

```bash
git clone https://github.com/twil3akine/ravin.git my-project
cd my-project
```

### 2. Install Dependencies

You can use `npm`, `pnpm`, or `bun`.

```bash
bun install
```

### 3. Start the Development Server

```bash
bun run dev
```

Visit `http://localhost:4321/` to view your site!

## ⚙️ Configuration

Open `astro.config.mjs` to update the core settings of your site.

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Update this to your deployed domain for OGP and sitemap URLs
  site: 'https://your-domain.com', 
  // ...
});
```

To update the main layout (e.g. Navigation Links, Site Title), edit the properties passed to `<Header>` and `<Footer>` inside `src/layouts/Layout.astro`.

## 📁 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/                 # Static assets (images, fonts, robots.txt)
├── src/
│   ├── components/         # Reusable Astro & Svelte UI components
│   ├── content/            # MDX Markdown files (.mdx)
│   │   ├── blog/           # Blog collection
│   │   └── docs/           # Documentation collection
│   ├── layouts/            # Global UI wrapper (`Layout.astro`)
│   ├── pages/              # Astro routing system
│   └── styles/             # Global CSS and Custom Properties
├── astro.config.mjs        # Astro configuration file
└── package.json            # NPM dependencies
```

## 📝 Writing Content

Ravin leverages Astro's **Content Collections** to give you type safety.
Place your new articles as `.mdx` files inside `src/content/blog/` or `src/content/docs/`.

A typical frontmatter block looks like this:

```mdx
---
title: 'Your Article Title'
description: 'A brief description of the article for SEO.'
date: 2024-05-10
image: '/path/to/ogp.jpg' # Optional
---

Your markdown and components go here!
```

## 📄 License

This theme is available under the MIT license.
