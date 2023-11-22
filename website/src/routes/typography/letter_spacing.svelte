<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	const { level } = $props<{ level: number }>()
</script>

<DesignToken property="letter-spacing" {level} on:copied_value>
	<p style="--spacing: var(--letter-spacing-{level}">Lorem ipsum</p>
</DesignToken>

<style>
	p {
		font-size: var(--font-size-5);
		letter-spacing: var(--spacing);
	}
</style>
