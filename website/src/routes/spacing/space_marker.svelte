<script lang="ts">
	interface iProps {
		level: number
	}
	const { level } = $props<iProps>()
	let spaceValue: string = $state('')
	let element: HTMLDivElement

	$effect(() => {
		spaceValue = getComputedStyle(element).getPropertyValue(`--space-${level}`)
	})
</script>

<div bind:this={element} class="space" style="--space:var(--space-{level})">
	<p class="label-2">
		<code>space-{level}</code>
		{spaceValue}
	</p>
</div>

<style>
	.space {
		display: flex;
		align-items: flex-start;
		gap: var(--space-1);
	}
	.space:after {
		content: '';
		display: block;
		height: var(--space);
		width: var(--space);
		background-color: var(--red-6);
	}

	code {
		display: block;
	}
</style>
