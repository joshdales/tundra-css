<script>
	// import SpaceMarker from './space_marker.svelte'

	const radiusMap = new Array(5).fill('radius')
</script>

<main>
	<h1 class="alt-heading-5">Radius</h1>

	<p class="body-4">Round out the corners, smoothe things over</p>

	<sectiosn>
		{#each radiusMap as _, index}
			<code>radius-{index + 1}</code>
		{/each}
	</sectiosn>
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
