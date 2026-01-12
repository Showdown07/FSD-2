# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Learning Outcomes

After completing this experiment you should be able to:

- **Understand SPA basics:** Explain what a Single Page Application is and how client-side routing works.
- **Use React Router:** Set up routing with `react-router-dom` and create navigable views/components.
- **Wire up Vite + React:** Start the dev server, interpret error messages, and fix common import/path issues.
- **Component composition:** Build and organize components (e.g., `Home`, `About`, `Contact`) and pass props/state between them.
- **Debug and dependency management:** Identify missing dependencies, install packages, and resolve HMR/build errors.

## SPA vs MPA — Key Differences

- **Routing location:** **SPA:** routing is handled on the client using JavaScript (single HTML entry). **MPA:** routing is handled on the server with separate HTML pages per route.
- **Navigation UX:** **SPA:** fast, app-like transitions without full page reloads. **MPA:** full page reloads on navigation (simpler but slower UX).
- **Initial load & caching:** **SPA:** larger initial bundle, subsequent navigation is fast; caching strategies differ. **MPA:** smaller page payloads per route, leverage standard browser caching per page.
- **SEO & indexability:** **SPA:** requires server-side rendering (SSR) or pre-rendering for best SEO. **MPA:** naturally SEO-friendly because each page is separate HTML.
- **Complexity & use cases:** **SPA:** better for interactive single-page apps (dashboards, SPAs). **MPA:** suited for content sites or simpler multi-page websites.
