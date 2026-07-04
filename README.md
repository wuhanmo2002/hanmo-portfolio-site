# Hanmo Wu Film Portfolio

React + Vite portfolio site for Hanmo Wu.

The site is a bilingual dark cinematic film portfolio with a lightweight hero montage, lazy-loaded full reel playback, hash-based project detail pages, and Netlify-ready static output.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

## Deployment

Netlify settings are included in `netlify.toml`:

- Build command: `pnpm build`
- Publish directory: `dist`
- SPA fallback: `/index.html`
- Asset cache headers: configured for `/assets/*`

## Performance Notes

- No WebGL / Three.js dynamic background is used.
- No GSAP dependency is used.
- Reveal animations use CSS transforms and opacity.
- IntersectionObserver reveals unobserve elements after first reveal.
- The full reel video source is attached only when the reel section nears the viewport.
- The current optimized public media set is about 25MB, down from about 64MB.

The site uses copied/resized stills and web-friendly MP4 copies. Original Desktop source assets were not moved, renamed, deleted, or modified.
