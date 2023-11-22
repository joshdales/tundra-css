<script lang="ts">
	import DesignToken from '$lib/components/design_token.svelte'
	interface iProps {
		colour: string
		level: number
	}
	let { colour, level } = $props<iProps>()
</script>

<DesignToken property={colour} {level} on:copied_value>
	<div class="colour" />
</DesignToken>

<style>
	.colour {
		height: 100%;
		width: 100%;
		background-color: var(--prop);
	}
</style>
