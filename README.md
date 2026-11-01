# Tundra CSS

Repo for Tundra CSS. The styles themselves live in the `packages/tundra` and the website which is built with SvelteKit is `packages/www`.

## Development

This project uses node and pnpm for local development.

```bash
# Install dependencies
pnpm install

# Build the main css file
pnpm -F "tundra-css" build

# Pass the watch flag to update on any style updates
pnpm -F "tundra-css" build --watch
```
