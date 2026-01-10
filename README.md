# Landing

This repo currently contains a pre-built static site at the repo root.

## Run without .NET

A SvelteKit (Node) server has been scaffolded under `web/` to host the existing built HTML (copied into `web/static/legacy/`) without requiring the .NET WebAPI.

```bash
cd web
npm i
npm run dev
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

Notes:
- The original Svelte source files are not present in this workspace; the SvelteKit server routes return the legacy HTML from `web/static/legacy/`.
- If you want a true “edit Svelte components and hot reload” workflow, you’ll need the original Svelte source project (or manually port the legacy HTML into Svelte components).