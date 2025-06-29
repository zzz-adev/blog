# Personal Blog & Portfolio

A modern, multilingual personal blog and portfolio built with SvelteKit, featuring a clean design, syntax highlighting, and internationalization support.

## ✨ Features

- 🎨 **Modern Design** - Clean, responsive UI with dark/light mode support
- 📝 **Blog System** - Markdown-based blog posts with syntax highlighting
- 🌍 **Internationalization** - Multi-language support (English, Romanian, French, German)
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast** - Built with SvelteKit for optimal performance
- 🎨 **Syntax Highlighting** - Beautiful code blocks with Shiki
- 🔍 **SEO Optimized** - Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Markdown**: [MDsveX](https://mdsvex.pngwn.io/) with syntax highlighting
- **Icons**: Unplugin Icons with multiple icon sets
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Package Manager**: [Bun](https://bun.sh/)

## 📝 Writing Blog Posts

Create new blog posts in the `src/content/blog/` directory as Markdown files:

```markdown
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-01"
published: true
---

# Your Content Here

Your markdown content with full MDsveX support.
```
### Syntax Highlighting

Code blocks use Shiki with two themes:
- **Dark**: Vesper
- **Light**: Catppuccin Latte

## 🚀 Deployment

The project is configured for Netlify deployment with the `@sveltejs/adapter-netlify` adapter.

## 🙏 Acknowledgments

- [Anthony Fu](https://github.com/antfu) for the amazing work both on his projects and his personal site from where this project was inspired
- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- [Shiki](https://shiki.matsu.io/) for beautiful syntax highlighting
- [Iconify](https://iconify.design/) for the comprehensive icon library
