<script lang="ts">
	const colours = ['neutral', 'red', 'green', 'blue', 'yellow'];
	const colourMap = colours.map((colour) => new Array(8).fill(colour));

	function generate_fg(colour: string, index: number) {
		if (colour === 'yellow') {
			return 'neutral-1';
		}

		return `var(--neutral-${index > 3 ? 1 : 8})`;
	}

	function generate_bg(colour: string, index: number): string {
		return `var(--${colour}-${index + 1})`;
	}
</script>

{#each colourMap as colour}
	<div class="colour">
		{#each colour as item, index}
			<div
				class=" colour-item"
				style="--bg: {generate_bg(item, index)}; --fg: {generate_fg(item, index)}"
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
