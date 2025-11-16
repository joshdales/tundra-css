<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'
	import TokenDescription from '$lib/components/token_description.svelte'
	const colourMap = [
		'neutral',
		'red',
		'orange',
		'yellow',
		'green',
		'cyan',
		'blue',
		'purple',
		'pink',
	].map((colour) => new Array(9).fill(colour))

	let copiedValue: CopiedValue | undefined = $state()
</script>

<main>
	<TokenDescription title="Colour Palette">
		<p class="text-body-4">
			A list of all colours that are available as variables. All of the colours are defined in
			OKLCH, some of them are on the P3 colour gamut, but there are fallbacks for monitors that
			don't support that.
		</p>

		<p class="text-body-4">
			Click on one of the colour swatches to copy its variable to your clipboard.
		</p>
	</TokenDescription>

	{#each colourMap as colour}
		<div class="swatch-grid">
			{#each colour as item, index}
				<DesignToken
					property={item}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<div class="colour-block"></div>
				</DesignToken>
			{/each}
		</div>
	{/each}
</main>

<Toaster {copiedValue} />

<style>
	.swatch-grid {
		--columns: 9;
	}

	@media screen and (max-width: 700px) {
		.swatch-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 400px) {
		.swatch-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.colour-block {
		height: 100%;
		width: 100%;
		background-color: var(--prop);
	}
</style>
