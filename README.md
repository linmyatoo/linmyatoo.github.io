# Lin Myat Oo — Developer Portfolio

A modern, premium developer portfolio built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

🌐 **Live**: [linmyatoo.github.io](https://linmyatoo.github.io)

---

## ✨ Features

- **Premium Design** — Dark mode, glassmorphism, animated gradients, micro-interactions
- **Responsive** — Optimized for desktop, tablet, and mobile
- **Animated** — Framer Motion entrance animations, typing effect, animated skill bars
- **SEO Optimized** — Meta tags, Open Graph, sitemap, robots.txt
- **Performance** — Static export, lazy loading, optimized assets
- **Accessible** — Semantic HTML, proper labels, keyboard navigation

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Design system + Tailwind
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, etc.
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── data.ts             # All portfolio content (centralized)
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build

```bash
# Build for production (static export)
npm run build
```

The static site will be generated in the `out/` directory.

## 🔧 Customization

### Update Content

All portfolio content is centralized in [`src/lib/data.ts`](src/lib/data.ts). Edit this single file to update:

- Personal information
- Projects
- Experience
- Skills
- Education
- Certifications

### Update Styles

The design system is defined in [`src/app/globals.css`](src/app/globals.css) using CSS custom properties and Tailwind's `@theme` directive.

### Contact Form

The contact form UI is ready. To enable form submissions:

1. Create a free account on [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/)
2. Update the form's `action` attribute in `src/components/sections/Contact.tsx`

## 📦 Deployment

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on push to `main`.

To enable:
1. Go to **Settings → Pages** in your GitHub repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the site will deploy automatically

### Custom Domain

1. Add your domain in **Settings → Pages → Custom domain**
2. Create a `CNAME` file in `public/` with your domain name
3. Update DNS records as directed by GitHub

## 📄 License

© 2025 Lin Myat Oo. All rights reserved.
