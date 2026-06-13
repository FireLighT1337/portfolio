# My Portfolio — React + Vite + Bootstrap

## Get started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## What to customise

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | Your name, tagline, bio, GitHub/LinkedIn URLs |
| `src/components/Skills.jsx` | Your actual skills and tools |
| `src/components/Projects.jsx` | Your real projects (title, description, tech, links) |
| `src/components/Contact.jsx` | Your email + Formspree form ID |
| `src/components/Footer.jsx` | Your name and social links |
| `src/components/Navbar.jsx` | Your brand name |
| `src/index.css` | `--accent` color if you want a different theme |

## Adding a real photo

In `Hero.jsx`, replace the emoji avatar with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
```
Put the image in the `public/` folder.

## Adding a real project screenshot

In `Projects.jsx`, replace the emoji div with:
```jsx
<img src="/screenshots/project-name.png" alt="Project Name" className="project-img" style={{ objectFit: 'cover' }} />
```

## Setting up the contact form (free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `Contact.jsx`, replace `YOUR_FORM_ID` with it

## Deploy to Vercel (free, 2 minutes)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at vercel.com — it auto-deploys on every push.
