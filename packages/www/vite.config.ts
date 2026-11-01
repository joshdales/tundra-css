import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
			prerender: { handleHttpError: 'warn' },
		}),
		devtoolsJson(),
	],
})
