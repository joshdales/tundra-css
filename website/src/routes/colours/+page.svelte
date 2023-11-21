<script lang="ts">
	import ColourSwatch from './colour_swatch.svelte'
	const colourMap = ['neutral', 'red', 'green', 'blue', 'yellow'].map((colour) =>
		new Array(8).fill(colour),
	)

	// TODO: Handle the clicked event to display a notification
</script>

<main>
	<h1 class="alt-heading-5">Colour Palette</h1>
	<p class="body-4">
		A list of all colours that are available as variables. All of the colours are defined in OKLCH,
		some of them are on the P3 colour gamut, but there are fallbacks for monitors that don't support
		that. Click on one of the colour swatches and copy its raw value to your clipboard.
	</p>

	{#each colourMap as colour}
		<div class="colour">
			{#each colour as item, index}
				<ColourSwatch colour={item} level={index + 1} />
			{/each}
		</div>
	{/each}
</main>

<style>
	p {
		margin-block: var(--space-5);
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
