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
		max-width: 1200px;
		margin: auto;
	}

	.colour {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: var(--space-1);
	}

	@media screen and (max-width: 1100px) {
		.colour {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media screen and (max-width: 600px) {
		.colour {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 400px) {
		.colour {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
