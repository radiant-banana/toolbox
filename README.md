# Toolbox - Next.js static export

A TypeScript Next.js App Router project for GitHub Pages. The root layout owns the shared header and footer; only interactive components opt into client rendering.

## Local development

1. Install Node.js 22.
2. Restore the packages declared in `package.json` with your package manager.
3. Run the `dev` script.
4. Open `http://localhost:3000`.

## Deploy

1. Copy all project contents into the root of your `toolbox` repository.
2. Commit and push to `main`.
3. In repository Settings > Pages, set Source to GitHub Actions.
4. Wait for the deployment workflow to complete.

The build derives `/toolbox` from the GitHub repository name. The static export is written to `out` and deployed as a Pages artifact.

## Structure

- `app/layout.tsx`: shared shell with one header and footer
- `app/page.tsx`: toolbox overview
- `app/tool1/page.tsx`: Text Workshop route
- `components/TextWorkshop.tsx`: interactive state and local persistence
- `content/tools.ts`: typed, data-driven tool registry
- `next.config.ts`: static export and GitHub project path

GitHub Pages cannot run API routes, Server Actions, middleware, or request-time server rendering. Use browser storage or a secure external service for persistence.
