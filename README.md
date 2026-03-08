# Magician Essen – Personal Website

One-page landing site for **Magician Essen** (Bay Area). Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Customize

- **Demo video:** Edit `components/Demo.tsx` and set `DEMO_VIDEO_URL` to your YouTube or Vimeo embed URL (e.g. `https://www.youtube.com/embed/YOUR_VIDEO_ID`).
- **Copy and styling:** Update text in `components/Hero.tsx`, `Services.tsx`, and `app/globals.css` (e.g. accent color in `:root`).
- **Contact form:** Submissions are logged in the terminal when you run the dev server. To save to a file or send email, update `app/api/contact/route.ts`.

## Add more pages later

- Create `app/projects/page.tsx` or `app/ai-tool/page.tsx`.
- Add a “Projects” or “AI Tool” link in `components/Header.tsx` (`navLinks` array).

## Deploy (e.g. Vercel)

Connect the `website` folder to [Vercel](https://vercel.com) (or Netlify) and point your domain **magicianessen.com** to the deployment.
