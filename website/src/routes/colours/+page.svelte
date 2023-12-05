<script lang="ts">
	import { fly } from 'svelte/transition'
	import DesignToken from '$lib/components/design_token.svelte'
	import Toast from '$lib/components/toast.svelte'
	import { onDestroy } from 'svelte'
	const colourMap = ['neutral', 'red', 'green', 'blue', 'yellow'].map((colour) =>
		new Array(8).fill(colour),
	)

	let copiedColour: { value: string; success: boolean } | undefined
	let timer: number
	$: {
		if (copiedColour && copiedColour.success) {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				copiedColour = undefined
			}, 2000)
		}
	}

	onDestroy(() => {
		clearTimeout(timer)
	})
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
				<DesignToken
					property={item}
					level={index + 1}
					on:copied_value={(ev) => (copiedColour = ev.detail)}
				>
					<div class="colour-block" />
				</DesignToken>
			{/each}
		</div>
	{/each}
</main>

{#key copiedColour}
	<div class="toaster" transition:fly={{ y: 100, duration: 500 }}>
		{#if copiedColour}
			<Toast type={copiedColour.success ? 'success' : 'danger'} showClose={!copiedColour.success}>
				{#if copiedColour.success}
					<p class="body-2">
						<code>{copiedColour.value}</code> copied to your clipboard!
					</p>
				{:else}
					<p class="body-2">
						Copy <code>{copiedColour.value}</code> to your clipboard.
					</p>
				{/if}
			</Toast>
		{/if}
	</div>
{/key}

<style>
	.body-4 {
		margin-block: var(--space-5);
	}

	.colour {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: var(--space-1);
	}

	.toaster {
		z-index: 3;
		position: fixed;
		bottom: var(--space-10);
		margin-inline: var(--space-10);
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
