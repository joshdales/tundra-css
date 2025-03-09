export type ThemeColour =
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'cyan'
	| 'blue'
	| 'purple'
	| 'pink'

export type ThemeBrightness = 'light' | 'dark' | 'system'

export const theme = $state<{ colour: ThemeColour; brightness: ThemeBrightness }>({
	colour: localStorage.getItem('theme-colour') ?? 'green',
	brightness: 'light',
})

export function saveTheme(colour: string) {
	localStorage.setItem('theme-colour', colour)
}
