<script lang="ts">
	import ColourSwatch from './colour_swatch.svelte'
	const colour_map = ['neutral', 'red', 'green', 'blue', 'yellow'].map((colour) =>
		new Array(8).fill(colour),
	)
</script>

<main>
	{#each colour_map as colour}
		<div class="colour">
			{#each colour as item, index}
				<ColourSwatch colour={item} level={index + 1} />
			{/each}
		</div>
	{/each}
</main>

<style>
	main {
		display: grid;
		max-width: calc(var(--space-2) * 3 + var(--space-14) * 8);
	}
	.colour {
		display: flex;
		gap: var(--space-1);
	}
</style>
