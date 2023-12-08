<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'
	const colourMap = ['neutral', 'red', 'green', 'blue', 'yellow'].map((colour) =>
		new Array(8).fill(colour),
	)

	let copiedValue: CopiedValue | undefined
</script>

<main>
	<h1 class="alt-heading-5">Colour Palette</h1>
	<p class="body-4">
		A list of all colours that are available as variables. All of the colours are defined in OKLCH,
		some of them are on the P3 colour gamut, but there are fallbacks for monitors that don't support
		that.
	</p>

	<p class="body-4">Click on one of the colour swatches to copy its variable to your clipboard.</p>

	{#each colourMap as colour}
		<div class="colour">
			{#each colour as item, index}
				<DesignToken
					property={item}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<div class="colour-block" />
				</DesignToken>
			{/each}
		</div>
	{/each}
</main>

<Toaster {copiedValue} />

<style>
	.body-4 {
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

	.colour-block {
		height: 100%;
		width: 100%;
		background-color: var(--prop);
	}
</style>
