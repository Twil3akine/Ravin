# Ravin - Minimal & Rich Astro Theme

A clean, minimal, and content-focused Astro theme built for blogs, documentation, and portfolios. Ravin removes the noise, allowing your content to take center stage while providing a rich set of UI components.

**[Live Demo](https://ravin-theme.pages.dev)** | **[Component Catalog](https://ravin-theme.pages.dev/components)**

<img width="1445" height="901" alt="スクリーンショット 2026-03-07 16 27 41" src="https://github.com/user-attachments/assets/e2afd780-62e5-4fa6-88da-e15148d4c739" />

## ✨ Features

- **Content-First Design**: Minimalist, monochrome-based aesthetic that makes your typography pop.
- **Rich Component Library**: Comes with 15+ built-in UI components (Callouts, Tabs, Steps, Spoilers, ThemeToggles, and more) ready to use in your MDX files.
- **Dark Mode Support**: Seamless light/dark mode switching with zero flash on load.
- **View Transitions**: Smooth, app-like page navigation built-in.
- **Fully Responsive**: Looks beautiful on desktops, tablets, and mobile devices.
- **MDX Ready**: Write your content in Markdown/MDX with full component support.

## 🚀 Quick Start

You can start a new project using the Ravin theme with a single command:

```bash
npm create astro@latest -- --template twil3akine/ravin
```

*(Alternatively, you can use `pnpm`, `yarn`, or `bun`)*

```bash
bun create astro --template twil3akine/ravin

```

## 🛠️ Built With

* [Astro](https://astro.build/) - The web framework for content-driven websites.
* [Svelte](https://svelte.dev/) - Used for interactive components (like ThemeToggle and TOC).
* [MDX](https://mdxjs.com/) - Markdown for the component era.

## 📂 Project Structure

Inside of your Ravin project, you'll see the following folders and files:

```text
/
├── public/           # Static assets (fonts, images, icons)
├── src/
│   ├── components/   # Base and Composite UI components
│   ├── layouts/      # Layout templates (Layout.astro)
│   ├── pages/        # Astro pages and MDX content
│   └── styles/       # Global CSS (base.css, custom.css)
├── astro.config.mjs  # Astro configuration
└── package.json

```

## 🎨 Using Components

Ravin includes a variety of components to enrich your articles. Simply import them into your `.mdx` or `.astro` files:

```mdx
import Callout from '@/components/Callout.astro';

<Callout type="tip" title="Pro Tip">
  This is how you use a component in Ravin!
</Callout>

```

Check out the [Component Catalog](https://www.google.com/url?sa=E&source=gmail&q=https://ravin-theme.pages.dev/components) in the live demo for a full list of available components and usage examples.

## 📄 License

This theme is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
