# Mthiya LaunchKit V1 — Build 031 Recovery Foundation

This is a reconstructed deployable application layer based on the LaunchKit V1 architecture and documentation available after the original source was missing from the repository. It is not claimed to be the byte-for-byte original source.

## Run
npm install
npm run dev

## Build / Cloudflare
npm run build
npx wrangler deploy

Cloudflare expects the built assets in `dist/` through `wrangler.jsonc`.
