<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'

	let copiedValue: CopiedValue | undefined
</script>

<main>
	<h1 class="heading-5">Radius</h1>

	<p class="body-4">Round out the corners, smooth things over.</p>

	<p class="body-4">Click on one of the tiles to copy its variable to your clipboard.</p>

	<section class="swatch-grid">
		{#each new Array(5).fill('radius') as property, index}
			<DesignToken {property} level={index + 1} on:copied_value={(ev) => (copiedValue = ev.detail)}>
				<div style="--radius: var(--radius-{index + 1})" />
			</DesignToken>
		{/each}
	</section>
</main>

<Toaster {copiedValue} />

<style>
	p {
		margin-block: var(--space-5);
	}

	div:before {
		content: '';
		display: block;
		background-color: var(--red-6);
		height: var(--space-14);
		width: var(--space-14);
		border-radius: var(--radius);
	}
</style>
