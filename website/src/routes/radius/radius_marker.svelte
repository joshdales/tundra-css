<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	interface iProps {
		level: number
	}
	const { level } = $props<iProps>()
</script>

<DesignToken property="radius" {level} on:copied_value>
	<div style="--radius: var(--radius-{level})" />
</DesignToken>

<style>
	div:before {
		content: '';
		display: block;
		background-color: var(--red-6);
		height: var(--space-14);
		width: var(--space-14);
		border-radius: var(--radius);
		margin-block-end: var(--space-2);
	}
</style>
