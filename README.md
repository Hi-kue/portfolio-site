# Personal Portfolio Website

## Getting Started


## Project Structure

```
.
├── .vscode
├── node_modules
├── public/
│   ├── fonts
│   ├── images
│   └── svg
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── styles/
│   │   ├── global.css
│   │   ├── palette.png
│   │   └── style-rules.md
│   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
├── svelte.config.js
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Run Commands

If you want to run the application locally, you can use the following set of commands for reference:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## TODOs


- [ ] Add a `404.astro` page
- [ ] Add a `sitemap.xml` file
- [ ] Add nav sections to `Layout.astro`
- [ ] Create Hero, Footer, Header, and Block Components
  - [ ] Hero Section Must Have
    - [ ] Hero Title
    - [ ] Hero Spline 3D Animation or Effect
    - [ ] Hero Subtitle
    - [ ] Here CTA Button
- [ ] Block Section Must Have
  - [ ] Block Title
  - [ ] Block Subtitle (Optional)
  - [ ] Cards (Optional)
  - [ ] Block CTA Button (Optional)
  - [ ] Block Spline 3D Animation or Effect (Optional)
- [ ] Configure Spline 3D with `astro add`
- [ ] Configure Tailwind CSS with `astro add` (Optional)
- [ ] Configure TypeScript with `astro add` (Optional)