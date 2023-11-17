<script lang="ts">
	interface iProps {
		colour: string
		level: number
	}
	let { colour, level } = $props<iProps>()
	let value: string = $state('')
	let element: HTMLDivElement

	$effect(() => {
		value = getComputedStyle(element).getPropertyValue(`--${colour}-${level}`)
	})

	function copy_on_enter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			copy_value()
		}
	}

	function copy_value() {
		navigator.clipboard.writeText(value)
	}
</script>

<div
	bind:this={element}
	class="colour"
	style="--bg: var(--{colour}-{level});"
	on:click={copy_value}
	on:keydown={copy_on_enter}
	role="button"
	tabindex="0"
>
	<div class="swatch" />
	<p class="label-2">
		<code>{colour}-{level}</code>
		<span class="label-1">{value}</span>
	</p>
</div>

<style>
	.colour {
		display: flex;
		flex-direction: column;
		padding: var(--space-2);
		cursor: pointer;
		background-color: var(--neutral-8);
		transition: all 0.1s ease-out;
		position: relative;
	}

	.colour:hover {
		transform: scale(1.15);
		box-shadow: 0 var(--space-1) var(--space-2) var(--space-2) rgba(0, 0, 0, 0.1);
		z-index: 1;
	}

	.colour:hover span {
		opacity: 1;
	}

	.swatch {
		height: var(--space-14);
		background-color: var(--bg);
	}

	p {
		width: 100%;
		padding-block: var(--space-1);
		padding-inline: var(--space-2);
	}

	span {
		opacity: 0;
		margin-block-start: var(--space-1);
	}
</style>
