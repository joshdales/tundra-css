<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	interface iProps {
		property: string
		level: number
	}
	let { property, level } = $props<iProps>()
	let colourValue: string = $state('')
	let element: HTMLDivElement

	$effect(() => {
		colourValue = getComputedStyle(element).getPropertyValue(`--${property}-${level}`)
	})

	function copyOnEnter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			copyValue()
		}
	}

	const dispatch = createEventDispatcher()

	function copyValue() {
		const value = `var(--${property}-${level})`
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
	class="token"
	style="--prop: var(--{property}-{level});"
	on:click={copyValue}
	on:keydown={copyOnEnter}
	role="button"
	tabindex="0"
>
	<div class="swatch">
		<slot />
	</div>

	<p class="label-2">
		<code>{property}-{level}</code>
		<span class="label-1">{colourValue}</span>
	</p>
</div>

<style>
	.token {
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

	.token:hover {
		z-index: 1;
		transform: scale(1.15);
		box-shadow: 0 var(--space-1) var(--space-2) var(--space-2) rgba(0, 0, 0, 0.1);
	}

	.token:hover span {
		opacity: 1;
	}

	.swatch {
		display: flex;
		align-items: center;
		justify-content: center;
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
