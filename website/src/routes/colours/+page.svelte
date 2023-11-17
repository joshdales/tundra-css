<script lang="ts">
	const colours = ['neutral', 'red', 'green', 'blue', 'yellow']
	const colour_map = colours.map((colour) => new Array(8).fill(colour))

	function generate_fg(colour: string, index: number) {
		if (colour === 'yellow') {
			return 'neutral-1'
		}

		return `var(--neutral-${index > 3 ? 1 : 8})`
	}

	function generate_bg(colour: string, index: number): string {
		return `var(--${colour}-${index + 1})`
	}

	function copy_on_enter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			copy_value(event)
		}
	}

	function copy_value(event: MouseEvent | KeyboardEvent) {
		if (!event.currentTarget) {
			return
		}
		// @ts-ignore - doesn't recognise id as a property but it is there.
		const id = event.currentTarget.id as string

		const element = document.getElementById(id)
		if (!element) {
			return
		}
		const value = getComputedStyle(element).getPropertyValue(`--${id}`)
		navigator.clipboard.writeText(value)
	}
</script>

{#each colour_map as colour}
	<div class="colour">
		{#each colour as item, index}
			<div
				class="colour-item"
				id={`${item}-${index + 1}`}
				style="--bg: {generate_bg(item, index)}; --fg: {generate_fg(item, index)}"
				data-colour={generate_bg(item, index)}
				on:click={copy_value}
				on:keydown={copy_on_enter}
				role="button"
				tabindex="0"
			>
				{item}-{index + 1}
			</div>
		{/each}
	</div>
{/each}

<style>
	.colour {
		display: flex;
	}

	.colour-item {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bg);
		color: var(--fg);
		/* color: color-contrast(var(--bg) as var(--neutral-1), var(--neutral-8)); */
		height: var(--space-13);
		width: calc(var(--space-14));
	}
</style>
