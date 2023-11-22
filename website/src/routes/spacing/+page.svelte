<script>
	import DesignToken from '$lib/components/design_token.svelte'
</script>

<main>
	<h1 class="alt-heading-5">Spacing</h1>

	<p class="body-4">
		Use these variables for setting any kind of space; padding, margins, gaps, etc.<br />
	</p>

	<section>
		{#each new Array(14).fill('space') as property, index}
			<DesignToken {property} level={index + 1} on:copied_value>
				<div style="--space: var(--space-{index + 1})" />
			</DesignToken>
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
