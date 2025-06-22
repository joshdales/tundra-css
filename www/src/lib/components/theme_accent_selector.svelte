<script lang="ts">
	import { theme } from '$lib/theme.svelte'
	import type { AccentColour } from '$lib/theme'

	function handleUpdate(evt: Event) {
		evt.preventDefault()
		const target = evt.target as HTMLInputElement
		localStorage.setItem(target.name, target.value)
		theme.accent = target.value as AccentColour
	}
</script>

<form method="post" onchange={(evt) => handleUpdate(evt)}>
	<fieldset aria-label="Theme colour for the site">
		<input
			class="radio-2 red"
			type="radio"
			name="themeAccent"
			id="theme-accent-red"
			value="red"
			checked={theme.accent === 'red'}
		/>
		<input
			class="radio-2 orange"
			type="radio"
			name="themeAccent"
			id="theme-accent-orange"
			value="orange"
			checked={theme.accent === 'orange'}
		/>
		<input
			class="radio-2 yellow"
			type="radio"
			name="themeAccent"
			id="theme-accent-yellow"
			value="yellow"
			checked={theme.accent === 'yellow'}
		/>
		<input
			class="radio-2 green"
			type="radio"
			name="themeAccent"
			id="theme-accent-green"
			value="green"
			checked={theme.accent === 'green'}
		/>
		<input
			class="radio-2 cyan"
			type="radio"
			name="themeAccent"
			id="theme-accent-cyan"
			value="cyan"
			checked={theme.accent === 'cyan'}
		/>
		<input
			class="radio-2 blue"
			type="radio"
			name="themeAccent"
			id="theme-accent-blue"
			value="blue"
			checked={theme.accent === 'blue'}
		/>
		<input
			class="radio-2 purple"
			type="radio"
			name="themeAccent"
			id="theme-accent-purple"
			value="purple"
			checked={theme.accent === 'purple'}
		/>
		<input
			class="radio-2 pink"
			type="radio"
			name="themeAccent"
			id="theme-accent-pink"
			value="pink"
			checked={theme.accent === 'pink'}
		/>
	</fieldset>
</form>

<style>
	fieldset {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		padding: var(--space-3) var(--space-6);
		justify-items: center;
		border: 1px solid var(--neutral-8);
		border-radius: var(--radius-2);
		gap: var(--space-2);
		background-color: #fff;
	}

	input {
		background-color: var(--accent);
		border-color: var(--accent);
	}
</style>
