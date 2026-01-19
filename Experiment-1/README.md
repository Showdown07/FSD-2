**Routing** Routing is used to navigate between different pages or components in the application without reloading the page.
BrowserRouter manages the routing logic and keeps the UI synced with the URL.
Routes acts as a container for all defined application routes.
Route links a specific URL path to the component that should be rendered.
Link enables seamless navigation between routes without triggering a full page reload.


## Learning Outcomes
FOR exp-3 lo: -
-Understand the concept of client-side routing in React applications.
-Learn how to define and manage routes using React Router.
-Gain the ability to navigate between pages using Link without page reloads.
-Understand how URLs map to specific components in a React app.
-Develop structured, multi-page React applications using routing.
-After completing this experiment you should be able to:

For Exp-1
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

