export type AccentColour =
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'cyan'
	| 'blue'
	| 'purple'
	| 'pink'
	| 'neutral'

export type Brightness = 'light' | 'dark' | 'system'

export interface Theme {
	accent: AccentColour
	/**
	 * @todo https://github.com/joshdales/tundra-css/issues/104
	 */
	mode: Brightness
}
