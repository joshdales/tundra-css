export type AccentColour =
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'cyan'
	| 'blue'
	| 'purple'
	| 'pink'

export type Brightness = 'light' | 'dark' | 'system'

export interface Theme {
	accent: AccentColour
	/**
	 * @todo
	 */
	mode: Brightness
}
