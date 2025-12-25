# GPT-3 Clone 🔮

**GPT-3 Clone** is a React-based clone of the GPT-3 landing page. It's a small frontend project that reproduces the layout, components, and visual style of the original GPT-3 marketing site for learning and experimentation.

---

## 🚀 Features

- Responsive landing page layout with header, features sections, CTA, blog, and footer
- Modular component-based structure (reusable components under `src/components/`)
- Container components for assembling page sections (`src/container/`)
- CSS styling using modular files for each component
- Build-ready and deployable (static build in `build/`)

---

## 🧭 Tech Stack

- React (Create React App scaffold)
- JavaScript (ES6+)
- CSS modules / component-specific CSS files

---

## 📁 Project Structure (important files)

- `src/` – source files
  - `index.js` – app entry
  - `App.js` – root app component
  - `components/` – small, reusable UI components (e.g., `Brand`, `Navbar`, `Article`, `Feature`, `CTA`)
  - `container/` – larger layout pieces that compose components into sections (e.g., `Header`, `Blog`, `Footer`, `WhatGPT3`)
  - `assets/` – static assets used by the UI
- `public/` – static public files
- `build/` – production build output (generated after `npm run build`)

> Note: `components/index.js` re-exports component defaults to make imports in `App.js` (or other containers) cleaner.

---

## ⚙️ Installation & Dev Commands

Install deps:

```
npm install
```

Run development server:

```
npm start
```

Create production build:

```
npm run build
```

Serve the `build/` directory with any static server for testing the production bundle.

---

## 🛠 Development Notes

- Use `src/components/index.js` to export components in a single place, e.g. `export { default as Navbar } from './navbar/Navbar'` and then import them in `App.js` or containers.
- Containers group multiple components into logical sections (Header, Blog, Features, Footer).
- Figma and design references were used; some shapes might need manual CSS tuning to match the design precisely.

Useful design/animation resources used during development:

- [Angry Tools](https://angrytools.com/)
- [Animista](https://animista.net/)
- [Project Figma file](https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3)

---

## 🙌 Contributing

Feel free to open issues or PRs to add features, improve responsiveness, or refactor code for clarity.

---

## 📜 License

This project uses the [LICENSE](./LICENSE) present in the repository.

---

If you'd like, I can also update `package.json` scripts, add contribution guidelines, or polish component docs. 💡
