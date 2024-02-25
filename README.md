<br />
<div align="center">
  <!-- TODO: Add a Logo Here. -->
  <h3 align="center">Personal Portfolio Website </h3>

  <p>
    Personal portfolio website built with Astro, Svelte, and More.
    <br />
    <br />
    <a href="/url">View Site</a>
    ✦ .
    <a href="https://github.com/Hi-kue/">Report Bug</a>
    ✦ .
    <a href="https://github.com/Hi-kue/portfolio-site/issues">Request Feature</a>
    ✦ .
    <a href="/url">Documentation</a>
  </p>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte">
  <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="ThreeJs">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring">
</div>
<br />

# Table of Contents


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

A little reference for how everything will be organize in a typical Astro project. You can of course have a different setup, but this is a good starting point:
1. `src/*`: All the source code lives here (components, pages, styles, etc.).
2. `public/*`: Static non-code, unprocessed asses like images, fonts, etc.
3. `package.json`: Project manifest, very standard.
4. `astro.config.mjs`: Astro configuration file, use to configure Astro.
5. `tsconfig.json`: TypeScript configuration file, use to configure TypeScript.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. Which is very neat, honestly, makes it very easy to reason about your routes.

There's nothing special about `src/components/`, it's just a place to put your components, Im going to be organizing them by feature and then by relational components.

Any static assets, like images, fonts, yada yada be placed in the `public/*` directory.

## Run Commands

If you want to run the application locally, you can use the following set of commands for reference:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm build`               | Build your production site to `./dist/`          |

## Getting Started

After you are done with copying the github repository, you can start by installing the dependencies using the following command:
```hs
npm install
```
or 
```hs
npm i
```

After the dependencies are successfully installed, you can start the development server using the following command:
```hs
npm run dev
```
or 
```hs
npm start
```
And you should be good to go from there, you can start using this site as a reference for your own portfolio site or take some of the components in this site and use them for other projects you might have in mind.

## Contributing

This site is a personal project, so it would not be considered for contributions as the nature of the project is to be a personal portfolio site. However, if you have any suggestions or ideas for the site, feel free to open an issue and I will be happy to take a look at it.

Checkout the [Contributing Guidelines](./CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## TODOs
- [x] Add a `404.astro` page
- [ ] Add nav sections to `Layout.astro`
- [ ] Create Hero, Footer, Header, and Block Components
  - [ ] Hero Section Must Have
    - [ ] Hero Title
    - [ ] Hero ThreeJS Animation or Effect
    - [ ] Hero Subtitle
    - [ ] Here CTA Button
- [ ] Block Section Must Have
  - [ ] Block Title
  - [ ] Block Subtitle (Optional)
  - [ ] Cards (Optional)
  - [ ] Block CTA Button (Optional)
  - [ ] Block ThreeJs Animation or Effect (Optional)
- [ ] Configure ThreeJS with `astro add`
- [x] Configure Tailwind CSS with `astro add` (Optional)
- [x] Configure TypeScript with `astro add` (Optional)