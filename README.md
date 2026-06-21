# Elevvo Technologies Website

A professional enterprise website built with React.

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

3. **Build for production**
   ```bash
   npm run build
   ```
   Output goes to the `build/` folder, ready to deploy.

## Project Structure

```
elevvo-project/
├── public/
│   └── index.html        # HTML entry point
├── src/
│   ├── App.jsx           # Main application (all pages & components)
│   └── index.js          # React entry point
├── package.json
└── README.md
```

## Pages

- **Home** — Hero, stats, services overview, why us, testimonials, CTA
- **Services** — Expandable cards for all 6 services
- **About** — Story, timeline, values, leadership team
- **Careers** — Perks + open positions
- **Contact** — Contact form + info

## Tech Stack

- React 18
- CSS-in-JS (inline styles + injected `<style>` tag)
- Google Fonts (Sora + Inter)
- IntersectionObserver for scroll animations
