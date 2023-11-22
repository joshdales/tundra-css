<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	const { level } = $props<{ level: number }>()
</script>

<DesignToken property="line-height" {level} on:copied_value>
	<p style="--height: var(--line-height-{level}">Lorem ipsum</p>
</DesignToken>

<style>
	p {
		font-size: var(--font-size-5);
		line-height: var(--height);
		border-block: 1.5px solid var(--red-7);
	}
</style>
