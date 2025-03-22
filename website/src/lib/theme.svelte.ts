export type ThemeColour =
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'cyan'
	| 'blue'
	| 'purple'
	| 'pink'
	| 'gradient'

export type ThemeBrightness = 'light' | 'dark' | 'system'

interface Theme {
	colour: ThemeColour
	brightness: ThemeBrightness
	gradient?: Set<ThemeColour>
}

export const theme = $state<Theme>({
	colour: '',
	brightness: 'light',
})
