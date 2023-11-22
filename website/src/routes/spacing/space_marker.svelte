<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	interface iProps {
		level: number
	}
	const { level } = $props<iProps>()
</script>

<DesignToken property="space" {level} on:copied_value>
	<div style="--space: var(--space-{level})" />
</DesignToken>

<style>
	div {
		height: var(--space);
		width: var(--space);
		background-color: var(--red-6);
		margin: auto;
	}
</style>
