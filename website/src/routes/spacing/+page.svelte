<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'
	import TokenDescription from '$lib/components/token_description.svelte'

	let copiedValue: CopiedValue | undefined = $state()
</script>

<main>
	<TokenDescription title="Spacing">
		<p class="body-4">
			Use these variables for setting any kind of space; padding, margins, gaps, etc.
		</p>

		<p class="body-4">Click on one of the tiles to copy its variable to your clipboard.</p>
	</TokenDescription>

	<section class="swatch-grid">
		{#each new Array(14).fill('space') as property, index}
			<DesignToken {property} level={index + 1} on:copied_value={(ev) => (copiedValue = ev.detail)}>
				<div style="--space: var(--space-{index + 1})"></div>
			</DesignToken>
		{/each}
	</section>
</main>

<Toaster {copiedValue} />

<style>
	div {
		height: var(--space);
		width: var(--space);
		background-color: var(--neutral-7);
		margin: auto;
	}
</style>
