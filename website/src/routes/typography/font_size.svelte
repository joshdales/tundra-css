<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	const { level } = $props<{ level: number }>()
</script>

<DesignToken property="font-size" {level} on:copied_value>
	<p style="--size: var(--font-size-{level}">Lorem ipsum</p>
</DesignToken>

<style>
	p {
		font-size: var(--size);
	}
</style>
