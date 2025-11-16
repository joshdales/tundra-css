<script lang="ts">
	interface Props {
		title: string
		children?: import('svelte').Snippet
	}

	let { title, children }: Props = $props()
</script>

<div>
	<h1 class="text-heading-5">{title}</h1>

	{@render children?.()}
</div>

<style>
	h1 {
		text-transform: capitalize;
		margin-block-end: var(--space-6);
	}

	div :global(p + p) {
		margin-block: var(--space-4);
	}
</style>
