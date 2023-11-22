<script>
	import DesignToken from '$lib/components/design_token.svelte'

	// TODO: Handle the clicked event to display a notification
</script>

<main>
	<h1 class="alt-heading-5">Radius</h1>

	<p class="body-4">Round out the corners, smooth things over.</p>

	<section>
		{#each new Array(5).fill('radius') as property, index}
			<DesignToken {property} level={index + 1} on:copied_value>
				<div style="--radius: var(--radius-{index + 1})" />
			</DesignToken>
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

	div:before {
		content: '';
		display: block;
		background-color: var(--red-6);
		height: var(--space-14);
		width: var(--space-14);
		border-radius: var(--radius);
	}
</style>
