<script>
	import SpaceMarker from './space_marker.svelte'

	const spacingMap = new Array(14).fill('space')
</script>

<main>
	<h1 class="alt-heading-5">Spacing</h1>

	<p class="body-4">
		Use these variables for setting any kind of space; padding, margins, gaps, etc.<br />
	</p>

	<section>
		{#each spacingMap as _, index}
			<SpaceMarker level={index + 1} />
		{/each}
	</section>

	<p class="body-3">
		🤔 But what if I wanted to use some spacing that isn't in the scale? <br />
		🤫 Just use a <code>calc</code> and do some maths with the space variables.
	</p>
</main>

<style>
	p {
		margin-block: var(--space-5);
	}
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
</style>
