import type { Cookies } from '@sveltejs/kit'
import type { Theme, ThemeColour } from '$lib/theme.svelte'

export async function load({ cookies }: { cookies: Cookies }) {
	const theme: Partial<Theme> = {}
	const themeColour = cookies.get('themeColour')
	if (themeColour) {
		theme.colour = themeColour as ThemeColour
	}

	return {
		theme,
	}
}
