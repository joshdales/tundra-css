<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { browser } from '$app/environment'

	const colours = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
	let selectedColour = $page.url.searchParams.get('colour')
	export let updateColour: (newColour: string) => void

	function updateQueryColour(newColour: string | null) {
		const pageColour = $page.url.searchParams.get('colour')
		if (newColour === pageColour) {
			return
		}

		if (newColour) {
			$page.url.searchParams.set('colour', newColour)
		} else {
			$page.url.searchParams.delete('colour')
		}

		if (browser) {
			goto($page.url, { replaceState: true, keepFocus: true, noScroll: true })
		}
	}

	$: {
		updateColour(selectedColour ?? '')
		updateQueryColour(selectedColour)
	}

	type ClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLInputElement }
	function resetSelectedColour(event: ClickEvent) {
		if (event.currentTarget.value === selectedColour) {
			selectedColour = null
		}
	}
</script>

<fieldset name="accent">
	<legend class="alt-heading-2">Accent</legend>

	{#each colours as colour}
		<label class:active={selectedColour === colour} class="label-4" for="colours-{colour}">
			{colour}
			<input
				bind:group={selectedColour}
				type="radio"
				name="colours"
				value={colour}
				id="colours-{colour}"
				on:click={resetSelectedColour}
			/>
		</label>
	{/each}
</fieldset>

<style>
	fieldset {
		--columns: 4;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--space-6);
		margin-block: var(--space-6);
		border: none;
		padding: 0;
	}

	@media screen and (max-width: 500px) {
		fieldset {
			--columns: 3;
		}
	}

	@media screen and (max-width: 400px) {
		fieldset {
			--columns: 2;
		}
	}

	legend {
		margin-block-end: var(--space-4);
	}

	label,
	input {
		cursor: pointer;
	}

	label {
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border: 1.5px solid var(--neutral-8);
		text-align: center;
		text-transform: capitalize;
		transition:
			all 0.1s ease-in-out,
			transform 0.2s ease-in;

		&:hover {
			transform: translate(0, calc(var(--space-1) * -1));
		}

		&:focus-within {
			box-shadow:
				0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
				0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
				inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--blue-7) l c h / 10%);
		}

		&.active {
			border-color: var(--blue-8);
			background-color: oklch(from var(--blue-8) l c h / 30%);
		}
	}

	input {
		position: absolute;
		opacity: 0;
	}
</style>
