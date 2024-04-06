<script lang="ts">
	export let title: string
</script>

<div>
	<h1 class="heading-5">{title}</h1>

	<slot />
</div>

<style>
	h1 {
		margin-block-end: var(--space-6);
	}

	div :global(p + p) {
		margin-block: var(--space-4);
	}
</style>
