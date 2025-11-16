import type { Theme } from './theme.ts'

export const theme = $state<Theme>({
	accent: 'neutral',
	mode: 'system',
})
