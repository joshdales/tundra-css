<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'
	import TokenDescription from '$lib/components/token_description.svelte'
	import AccentSelector from '$lib/components/accent_selector.svelte'

	let selectedColour = $state('')
	let copiedValue: CopiedValue | undefined = $state()
</script>

<main>
	<TokenDescription title="Shadows">
		<p class="body-4">Round out the corners, smooth things over.</p>

		<p class="body-4">Click on one of the tiles to copy its variable to your clipboard.</p>

		<AccentSelector updateColour={(newColour) => (selectedColour = newColour)} />
	</TokenDescription>

	<section class="swatch-grid {selectedColour}">
		{#each Array(5) as _property, index}
			<DesignToken
				property={selectedColour ? 'accent-shadow' : 'shadow'}
				level={index + 1}
				on:copied_value={(ev) => (copiedValue = ev.detail)}
			>
				<div></div>
			</DesignToken>
		{/each}
	</section>
</main>

<Toaster {copiedValue} />

<style>
	div {
		height: var(--space-10);
		width: var(--space-10);
		box-shadow: var(--prop);
	}
</style>
