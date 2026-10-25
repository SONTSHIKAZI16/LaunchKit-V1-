# Mthiya LaunchKit V1 — Next.js Recovery Foundation

This branch restores a deployable Next.js App Router shell from the LaunchKit V1 build notes. It is not a byte-for-byte recovery of the missing original application source.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verify a production build

```sh
pnpm typecheck
pnpm build
```

Vercel should use the repository root as the project root. The root `package.json` declares Next.js and the build script runs `next build`. `/api/health` provides a lightweight deployment check.

The historical feature notes remain in `README_BUILD_019.md` through `README_BUILD_030.md`.
