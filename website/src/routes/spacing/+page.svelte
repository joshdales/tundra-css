<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'

	let copiedValue: CopiedValue | undefined
</script>

<main>
	<h1 class="heading-5">Spacing</h1>

	<p class="body-4">
		Use these variables for setting any kind of space; padding, margins, gaps, etc.
	</p>

	<p class="body-4">Click on one of the tiles to copy its variable to your clipboard.</p>

	<section>
		{#each new Array(14).fill('space') as property, index}
			<DesignToken {property} level={index + 1} on:copied_value={(ev) => (copiedValue = ev.detail)}>
				<div style="--space: var(--space-{index + 1})" />
			</DesignToken>
		{/each}
	</section>
</main>

<Toaster {copiedValue} />

<style>
	p {
		margin-block: var(--space-5);
	}

	section {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--space-4);
		margin-block: auto;
	}

	div {
		height: var(--space);
		width: var(--space);
		background-color: var(--red-6);
		margin: auto;
	}
</style>
