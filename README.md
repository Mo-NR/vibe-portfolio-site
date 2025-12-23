# Mohammed Rahman Portfolio

A minimal, bold portfolio website built with Astro, Tailwind CSS, and deployed on Cloudflare Pages.

## Features

- **Fast & Lightweight**: Built with Astro for optimal performance (zero JS by default)
- **Minimal Design**: Clean, bold aesthetic with dark navy, dark green, and black color scheme
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Includes sitemap, robots.txt, and proper meta tags
- **Newsletter Integration**: Frontend newsletter signup form (ready for backend integration)

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Fontshare](https://www.fontshare.com/) - Switzer & Khand fonts

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mohammed-rahman-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Build

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── NewsletterForm.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── projects.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Deployment to Cloudflare Pages

### Option 1: Deploy via Git Integration (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project

3. Connect your Git repository

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)

5. Click "Save and Deploy"

6. Update the site URL in `astro.config.mjs`:
   ```js
   site: 'https://your-project-name.pages.dev',
   ```

7. Update `public/robots.txt` with your actual domain

8. Redeploy to regenerate the sitemap with the correct URL

### Option 2: Deploy via Wrangler CLI

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
wrangler pages deploy dist
```

## Customization

### Updating Content

All placeholder content is clearly marked with `<!-- PLACEHOLDER: ... -->` comments. Search for these in the codebase and replace with actual content.

### Changing Colors

The red accent color is defined in `tailwind.config.mjs` as `violent-red: '#E10600'`. You can adjust this value to change the accent color site-wide.

### Adding Projects

Edit the `projects` array in `src/pages/projects.astro` to add or modify project entries.

### Newsletter Form Backend

The newsletter form is currently frontend-only. To add backend functionality:

1. Set up an API endpoint (e.g., using Cloudflare Workers, a third-party service like Mailchimp, ConvertKit, etc.)
2. Update the `action` attribute in `src/components/NewsletterForm.astro`
3. Add any necessary form handling logic

## Performance

This site is optimized for performance:
- Zero JavaScript by default (Astro ships zero JS)
- Minimal CSS (Tailwind purges unused styles)
- Fast page loads and excellent Lighthouse scores

## License

All rights reserved. © Mohammed Rahman

