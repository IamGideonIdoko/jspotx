# JSpotX

Demo spotlight feature implementation

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Tree

```text
src
├─ app  (Next.js app directory)
│  ├─ bookmarks
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ layout.tsx
│  └─ page.tsx
├─ assets  (Images, Videos, Audios, SVGs, Fonts... etc)
│  ├─ images
│  │  ├─ default_avatar.png
│  │  └─ default_image.jpg
│  └─ svgs
│     └─ bookmark.svg
├─ components  (Shared components)
│  ├─ Auth.tsx
│  ├─ CustomNavbar.tsx
│  ├─ JobCard.tsx
│  ├─ JobCarousel.tsx
│  ├─ JobFilter.tsx
│  └─ Jobs.tsx
├─ composables (Shared composables)
│  ├─ SaveButton.tsx
│  └─ bootstrap.tsx
├─ config   (App configurations)
│  └─ index.ts
├─ context   (Global contexts)
│  └─ job.context.tsx
├─ hooks   (Resuable hooks)
│  ├─ auth.hook.ts
│  └─ db.hook.ts
├─ interfaces   (TS types)
│  ├─ config.interface.ts
│  └─ db.interface.ts
├─ libs  (Extenable libraries)
│  └─ firebase.ts
├─ styles (Styling)
│  ├─ globals.css
│  └─ home.module.css
├─ utils   (Utility functions)
│  └─ global.util.ts
└─ env.mjs

```
