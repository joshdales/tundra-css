import type { Cookies } from '@sveltejs/kit'
import type { Theme, AccentColour } from '$lib/theme.svelte'

export const prerender = true

export async function load({ cookies }: { cookies: Cookies }) {
	const theme: Partial<Theme> = {}
	const themeAccent = cookies.get('themeAccent')
	if (themeAccent) {
		theme.accent = themeAccent as AccentColour
	}

	return {
		theme,
	}
}
