<script lang="ts">
	interface Props {
		title: string;
		children?: import('svelte').Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div>
	<h1 class="heading-5">{title}</h1>

	{@render children?.()}
</div>

<style>
	h1 {
		margin-block-end: var(--space-6);
	}

	div :global(p + p) {
		margin-block: var(--space-4);
	}
</style>
