import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData()
		const themeColour = data.get('colour')?.toString()
		if (themeColour) {
			cookies.set('themeColour', themeColour, { path: '/' })
		}

		return { success: true }
	},
} satisfies Actions
