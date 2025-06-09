<div align="center">

# Iris's Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive personal portfolio website built with Next.js 14 and TypeScript. Features a clean design, dark mode support, blog functionality with MDX, a newsletter subscription a contact form.

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Documentation](#-adding-content)

</div>

## 🌟 Features

- **Modern Design**: Clean and responsive UI built with Tailwind CSS
- **Dark Mode**: System-aware theme switching with next-themes
- **Blog/Posts**: MDX-powered blog posts with syntax highlighting
- **Projects Showcase**: Display your projects with detailed descriptions
- **Contact Form**: Interactive contact form with email integration
- **Type Safety**: Built with TypeScript for better development experience
- **SEO Optimized**: Meta tags and optimized content structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with next-mdx-remote
- **Form Handling**: React Hook Form with Zod validation
- **Email**: Resend for email service
- **UI Components**: Custom components with Radix UI primitives
- **Syntax Highlighting**: sugar-high for code blocks
- **Animations**: Tailwind CSS animations

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add:

```env
RESEND_API_KEY=your_resend_api_key
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── posts/           # Blog posts pages
│   ├── projects/        # Projects pages
│   └── contact/         # Contact page
├── components/          # React components
├── content/            # MDX content
│   ├── posts/          # Blog posts
│   └── projects/       # Project descriptions
├── lib/                # Utility functions
└── public/             # Static assets
```

## 📝 Adding Content

### Blog Posts
Add new blog posts in `content/posts/` as MDX files:

```mdx
---
title: Your Post Title
summary: Brief description
image: /path/to/image.png
author: Your Name
publishedAt: '2024-04-21'
---

Your content here...
```

### Projects
Add new projects in `content/projects/` following the same MDX format.

## 🎨 Customization

- **Styling**: Edit `tailwind.config.ts` for theme customization
- **Components**: Modify components in `components/` directory
- **Content**: Update content in `content/` directory

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or feedback, please use the contact form on the website.
