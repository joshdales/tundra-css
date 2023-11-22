<script>
	import RadiusMarker from './radius_marker.svelte'
	const radiusMap = new Array(5).fill('radius')
</script>

<main>
	<h1 class="alt-heading-5">Radius</h1>

	<p class="body-4">Round out the corners, smooth things over.</p>

	<section>
		{#each radiusMap as _, index}
			<RadiusMarker level={index + 1} />
		{/each}
	</section>
</main>

<style>
	p {
		margin-block: var(--space-5);
	}

	section {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--space-4);
	}
</style>
