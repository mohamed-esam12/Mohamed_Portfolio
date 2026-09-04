# Mohamed Esam — Portfolio

A single-page portfolio built from your CV, with a dark space theme (animated
starfield background, deep-navy palette, gold accent). Pure HTML/CSS/JS —
no build tools, no dependencies to install.

## Files

```
portfolio/
├── index.html          ← page content (edit text here)
├── css/style.css        ← space theme + layout
├── js/script.js          ← animated starfield background
└── Mohamed_Esam_CV.pdf   ← your CV, linked from the "Résumé" button
```

## 1. Preview it locally

You can just double-click `index.html` to open it in a browser. Fonts and
the starfield will work offline; nothing calls an external API.

## 2. Put it on GitHub (same approach as the portfolio you linked)

1. Create a new repo on GitHub, e.g. `Mohamed_Portfolio`.
2. Upload these files (or, from a terminal):
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Mohamed_Portfolio.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**,
   branch **main**, folder **/ (root)**. Save.
5. GitHub gives you a live URL after a minute, in the form
   `https://<your-username>.github.io/Mohamed_Portfolio/`.

## 3. Customize

- **Text/content** — everything is in `index.html`; each section is
  clearly commented (`<!-- HERO -->`, `<!-- RESEARCH / PROJECTS -->`, etc).
- **Colors** — all defined once at the top of `css/style.css` under
  `:root`. Change `--blue`, `--gold`, `--violet` to retheme instantly.
- **Add project screenshots** — drop images into `assets/`, then inside
  a timeline item add:
  ```html
  <img src="assets/your-image.png" alt="Description" style="margin-top:12px; border-radius:8px; width:100%;">
  ```
- **Add a photo of yourself** to the hero — insert an `<img>` above
  `.hero__title` and give it a class to position it (e.g. a circular
  frame at the top-right of the hero).
- **Starfield density/speed** — in `js/script.js`, tweak
  `STAR_COUNT_PER_PX` (density) and each star's `speed`/`drift` values.

## 4. Optional next steps

- Add a `Certificates/` folder and link out to certificate PDFs from the
  Certifications section, the way the reference portfolio does.
- Add `site.webmanifest`, `robots.txt`, and `sitemap.xml` if you want the
  same SEO/PWA polish as the reference repo — happy to generate those too
  if you'd like.
- Swap the Google Fonts `<link>` for self-hosted fonts if you want a
  fully offline-capable site.