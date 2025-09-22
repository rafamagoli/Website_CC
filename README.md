# Website CC — React + Vite

A single-page website for **Camila Cavaleri (Psychologia Breve)** built with **React + Vite**, CSS Modules, and a lightweight design system. It’s optimized for fast loads, smooth in-page navigation, and simple deployment to **Vercel**.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Styling system](#styling-system)
- [Navigation & anchors](#navigation--anchors)
- [Sections](#sections)
- [Assets & icons](#assets--icons)
- [Accessibility](#accessibility)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Tech stack

- **React 18** (SPA)
- **Vite** (dev server & build)
- **CSS Modules** (scoped component styles)
- **Framer Motion** (subtle, accessible animations)
- **Vanilla SVG** icons
- **Node** 18/20 compatible

---

## Prerequisites

- **Node.js** v20 (recommended) or v18  
- **npm** (comes with Node)

---

## Quick start

> Make sure you are inside the app folder: `website-cc/` (this is where `package.json` lives).

```bash
# Install
npm install

# Run dev server
npm run dev
# open the printed URL, typically http://localhost:5173

# Build for production
npm run build

# Preview the production build locally
npm run preview


⸻

Scripts

{
  "scripts": {
    "dev": "vite",             // local dev server with HMR
    "build": "vite build",     // outputs production assets to /dist
    "preview": "vite preview"  // serves the /dist build locally
  }
}


⸻

Project structure

website-cc/
├─ public/
│  └─ assets/                 
│
├─ src/
│  ├─ assets/
│  │  ├─ components/navbar/
│  │  │  ├─ Navbar.jsx
│  │  │  └─ Navbar.module.css
│  │  ├─ CCLOGO.png
│  │  ├─ ICONGREEN.png
│  │  ├─ ICONYELLOW.png
│  │  ├─ ICONRED.png
│  │  └─ ...other brand images
│  │
│  ├─ sections/
│  │  ├─ home/
│  │  │  ├─ Home.jsx
│  │  │  └─ Home.module.css
│  │  ├─ about/
│  │  │  ├─ About.jsx
│  │  │  └─ About.module.css
│  │  ├─ footer/
│  │  │  ├─ Footer.jsx
│  │  │  └─ Footer.module.css
│  │  ├─ services/
│  │  │  ├─ Services.jsx
│  │  │  └─ Services.module.css
│  │  ├─ contact/
│  │  │  ├─ Contact.jsx
│  │  │  └─ Contact.module.css
│  │  └─ faq/
│  │     ├─ FAQ.jsx
│  │     └─ FAQ.module.css
│  │
│  ├─ App.jsx
│  ├─ App.css                 # global layout helpers (container, section)
│  └─ index.css               # global tokens, resets, scrolling behavior
│
├─ index.html                 # loads fonts & mounts #root
├─ package.json
└─ vite.config.js

Conventions
	•	Each section lives in src/sections/<name>/ as Component.jsx + Component.module.css.
	•	Global tokens & base rules in src/index.css; layout helpers in src/App.css.
	•	The Navbar lives under src/assets/components/navbar/.
	•	Images used via ESM imports live in src/assets/. Public, path-based images may go in public/assets/.

⸻

Styling system

Design tokens (src/index.css)

:root {
  /* Fonts */
  --font-primary: 'Playfair Display', serif;   /* titles */
  --font-secondary: 'Poppins', system-ui, ...; /* body */

  /* Brand palette */
  --color-primary-1: #536845; /* green */
  --color-primary-2: #f1ae2f; /* yellow/accent */
  --color-primary-3: #be4214; /* rust */

  --color-secondary-1: #fffffe; /* off-white */
  --color-secondary-2: #ffedd3; /* peach (global background) */
  --color-secondary-3: #efedec; /* light gray-beige */

  /* Derived */
  --fg: #2a2a2a;
  --muted: #6f7b5f;

  /* Anchors offset (fixed navbar) */
  --nav-offset: 80px;
}

html, body, #root { height: 100%; }
#root { display: flex; flex-direction: column; }
main { flex: 1 0 auto; }
html, body { overflow-x: hidden; }
body { margin: 0; font-family: var(--font-secondary); background: var(--color-secondary-2); }

/* Smooth scroll & anchor offset */
html { scroll-behavior: smooth; scroll-padding-top: var(--nav-offset); }
/* Fallback for all anchor targets */
[id] { scroll-margin-top: var(--nav-offset); }

Fonts

Load Playfair Display and Poppins in index.html:

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

CSS Modules

Import and use scoped classes:

import styles from './Component.module.css'
<div className={styles.block}>…</div>


⸻

Navigation & anchors
	•	Sticky Navbar with hamburger on small screens.
	•	IntersectionObserver highlights the current section.
	•	Anchor scroll is smooth and respects the fixed navbar via CSS (scroll-padding-top / scroll-margin-top) and a JS fallback in the click handler.

Add a new section:
	1.	Create src/sections/<id>/<Cap>.jsx with <section id="<id>">…</section>.
	2.	Add { id: '<id>', label: '...' } to navItems in Navbar.jsx.
	3.	Import and render the section in App.jsx.

⸻

Sections
	•	Home: hero with animated brand mark and primary CTA.
	•	About: concise, welcoming copy; soft background.
	•	Services (Therapia Breve): didactic structure (Intro → How it works → For whom → Benefits → CTA), brand-reinforced visuals, responsive.
	•	Contact: two action cards (WhatsApp / Email) with motion; trust badges; signature micro-CTA.
	•	FAQ: accessible accordion with brand-aligned design.
	•	Footer: full-width dark brand bar, CTA band, icon-only contact row, quick nav, and credits.

⸻

Assets & icons

Two valid patterns:
	1.	ESM imports (recommended within components):

import Logo from '../../assets/CCLOGO.png'
<img src={Logo} alt="Camila Cavaleri" />

	2.	Public path (for assets in public/assets):

<img src="/assets/CCLOGO.png" alt="…" />

⸻

Accessibility
	•	Semantic landmarks (<header>, <main>, <section>, <footer>).
	•	Button for hamburger (keyboard friendly), aria-* labels on icon-only links.
	•	Focus rings preserved (outline-offset), color contrast tuned to brand palette.


⸻

Troubleshooting

Blank page or styles not applied
	•	Ensure you’re running from website-cc/.
	•	Hard refresh (Cmd/Ctrl+Shift+R).
	•	Check console for 404s: fix asset paths per Assets & icons.

npm run dev says “Could not read package.json”
	•	You’re in the wrong folder.
cd path/to/Website_CC/website-cc && npm run dev

Images missing in production
	•	/assets/... must live under public/assets/.
	•	Imported images must live under src/assets/.



⸻

License

Proprietary — client project for Camila Cavaleri.
Do not redistribute without permission.

---