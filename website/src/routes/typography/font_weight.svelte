<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	const { level } = $props<{ level: number }>()
</script>

<DesignToken property="font-weight" {level} on:copied_value>
	<p style="--weight: var(--font-weight-{level}">Lorem ipsum</p>
</DesignToken>

<style>
	p {
		font-size: var(--font-size-5);
		font-weight: var(--weight);
	}
</style>
