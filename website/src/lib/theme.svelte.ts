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

export interface Theme {
	colour: ThemeColour
	/**
	 * @todo
	 */
	brightness: ThemeBrightness
	/**
	 * @todo
	 */
	gradient?: Set<ThemeColour>
}
