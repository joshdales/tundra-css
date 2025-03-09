<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements'
	import { theme, saveTheme } from '$lib/theme.svelte'

	const changeTheme: ChangeEventHandler<HTMLSelectElement> = (event) => {
		if (!event.currentTarget.value) return
		saveTheme(event.currentTarget.value)
	}
</script>

<label class="label-3" for="theme-selector">
	Site theme:

	<select
		name="theme-selector"
		id="theme-selector"
		class={`${theme.colour} input-1`}
		bind:value={theme.colour}
		onchange={changeTheme}
	>
		<option value="red" selected={theme.colour === 'red'}>Red</option>
		<option value="orange" selected={theme.colour === 'orange'}>Orange</option>
		<option value="yellow" selected={theme.colour === 'yellow'}>Yellow</option>
		<option value="green" selected={theme.colour === 'green'}>Green</option>
		<option value="cyan" selected={theme.colour === 'cyan'}>Cyan</option>
		<option value="blue" selected={theme.colour === 'blue'}>Blue</option>
		<option value="purple" selected={theme.colour === 'purple'}>Purple</option>
		<option value="pink" selected={theme.colour === 'pink'}>Pink</option>
	</select>
</label>

<style>
	select::before {
		content: '';
		display: block;
		height: var(--space-2);
		aspect-ratio: 1;
		background-color: var(--app-accent);
	}
</style>
