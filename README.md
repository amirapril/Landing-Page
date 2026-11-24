# Glow Clinic — Landing Page

A modern, responsive landing page for a fictional aesthetic centre, built as a junior
frontend portfolio project. Premium look, clean structure, dummy data only — no backend
required.

**Tech:** React 18 · Vite · Bootstrap 5 · Bootstrap Icons · custom CSS design tokens

---

## Getting started

```bash
npm install
npm run dev      # local dev server (auto-opens)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages…). If you host it in a
sub-folder, set `base: '/your-repo/'` in `vite.config.js`.

---

## Sections

| Section        | File                              | Notes                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------- |
| Sticky navbar  | `src/components/Navbar.jsx`       | Logo, smooth-scroll links, active-section highlight, dark-mode toggle, animated mobile menu |
| Hero           | `src/components/Hero.jsx`         | Gradient/photo background, 2 CTAs, trust row, floating "next slot" card |
| Services       | `src/components/Services.jsx`     | 6 icon cards + consultation note                          |
| About / Why us | `src/components/About.jsx`        | Image block, checklist, animated counters                 |
| Testimonials   | `src/components/Testimonials.jsx` | 3 review cards (middle card highlighted)                  |
| Contact/Booking| `src/components/Contact.jsx`      | Info panel + validated booking form + success message     |
| Footer         | `src/components/Footer.jsx`       | Quick links, treatments, contact info, socials, copyright |

---

## Customising

### 1. Texts, services, reviews, contact details
Everything lives in **`src/data/content.js`** — change copy, add/remove service cards,
update phone/address/hours in one place.

### 2. Colors & typography
Open **`src/styles/global.css`** and edit the *design tokens* block at the top
(`--primary`, `--bg`, `--text`, `--radius`, fonts…). Dark mode has its own token block
right below it (`html[data-bs-theme='dark']`), so both themes stay in sync.

### 3. Images (optional upgrade)
The design ships with polished gradients so it works offline. To use photography instead,
drop your files here and they are picked up automatically:

```
public/images/hero.jpg     → hero background (wide landscape, ~1920×1080)
public/images/about.jpg    → about-section photo (portrait ~4:4.4)
```

Recommended free sources: Unsplash, Pexels, Freepik.

### 4. Brand
`brand` in `src/data/content.js` (logo text) · `public/favicon.svg` (logo mark) ·
`index.html` (title, description, Google Fonts).

---

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── images/            ← add hero.jpg / about.jpg here (optional)
└── src/
    ├── main.jsx           ← bootstrap + global css imports
    ├── App.jsx            ← sections + dark-mode state (persists in localStorage)
    ├── data/content.js    ← ALL website copy / dummy data
    ├── styles/global.css  ← design tokens, buttons, reveal animations
    └── components/
        ├── Logo.jsx · Reveal.jsx (scroll-reveal wrapper)
        ├── Navbar.jsx/.css
        ├── Hero.jsx/.css
        ├── Services.jsx/.css
        ├── About.jsx/.css        (animated stat counters)
        ├── Testimonials.jsx/.css
        ├── Contact.jsx/.css      (validation + success message)
        └── Footer.jsx/.css
```

## Features checklist

- ✅ Fully responsive (mobile → widescreen, Bootstrap grid + media queries)
- ✅ Smooth-scroll navigation with sticky navbar & active-link highlighting
- ✅ Scroll-reveal and hover animations (respects `prefers-reduced-motion`)
- ✅ Form validation: required fields, email format, Iranian mobile format
  (`0912 123 4567`, `+98 912 …`), success message, dummy submit
- ✅ Dark mode toggle (saved to `localStorage`)
- ✅ Semantic markup, focus styles, ARIA labels, keyboard-friendly
