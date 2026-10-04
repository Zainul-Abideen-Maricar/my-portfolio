# Zainul Abideen Maricar - SEO Portfolio

React + Vite + Framer Motion + Lucide icons. No router, no other dependencies.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Replace your details (one file: `src/data/portfolioData.js`)
| What | Where |
|---|---|
| Profile photo | Copy it to `public/profile.jpg`, then set `profile.image: '/profile.jpg'`. Empty = initials avatar. |
| Email / Phone | `contact.email`, `contact.phone` |
| LinkedIn / GitHub | `contact.linkedin`, `contact.github` |
| Projects | `projects` array: title, text, tags, and `link` (the link shows only when filled in). |
| Experience, skills, services, about text | `experience`, `skills`, `services`, `profile.about` |
| Demo dashboard numbers | `dashboard` (labelled "Demo visualization, not real data" on the page; keep the label unless the numbers are real). |

## Before you deploy
1. Replace `https://www.example.com/` with your real domain in `index.html` (canonical, og:url, og:image, twitter:image), `public/robots.txt` and `public/sitemap.xml`.
2. Add a 1200x630 image at `public/og-image.png` for link previews.
3. Contact form: it validates, then opens the visitor's email app addressed to `contact.email`. To send directly from the page, use a form service (Formspree, Web3Forms, EmailJS) and call its public endpoint from `Contact.jsx`. Never put private API keys in frontend code.

## Structure
```
src/
  components/  Navbar, Hero, About, Skills, Experience, Services, Projects, Dashboard, Contact, Footer, ui (shared animation helpers)
  data/portfolioData.js
  App.jsx  main.jsx  index.css
```
Projects, Dashboard and Contact are lazy loaded. Animations respect `prefers-reduced-motion`.
