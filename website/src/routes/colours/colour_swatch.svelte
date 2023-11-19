<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	interface iProps {
		colour: string
		level: number
	}
	let { colour, level } = $props<iProps>()
	let colourValue: string = $state('')
	let element: HTMLDivElement

	$effect(() => {
		colourValue = getComputedStyle(element).getPropertyValue(`--${colour}-${level}`)
	})

	function copyOnEnter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			copyValue()
		}
	}

	const dispatch = createEventDispatcher()

	function copyValue() {
		const value = `var(--${colour}-${level})`
		navigator.clipboard
			.writeText(value)
			.then(() => {
				dispatch('copied_value', { value, success: true })
			})
			.catch(() => {
				dispatch('copied_value', { value, success: false })
			})
	}
</script>

<div
	bind:this={element}
	class="colour"
	style="--bg: var(--{colour}-{level});"
	on:click={copyValue}
	on:keydown={copyOnEnter}
	role="button"
	tabindex="0"
>
	<div class="swatch" />
	<p class="label-2">
		<code>{colour}-{level}</code>
		<span class="label-1">{colourValue}</span>
	</p>
</div>

<style>
	.colour {
		display: flex;
		flex-direction: column;
		padding: var(--space-2);
		cursor: pointer;
		background-color: var(--neutral-8);
		transition:
			transform 0.1s ease-out,
			box-shadow 0.1s ease-out;
		position: relative;
	}

	.colour:hover {
		z-index: 1;
		transform: scale(1.15);
		box-shadow: 0 var(--space-1) var(--space-2) var(--space-2) rgba(0, 0, 0, 0.1);
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

	code {
		display: block;
	}

	span {
		opacity: 0;
		margin-block-start: var(--space-1);
	}
</style>
