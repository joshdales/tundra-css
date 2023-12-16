<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	const colours = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'pink']
	export let selectedColour: string

	$: dispatch('accent', selectedColour)
</script>

<fieldset name="accent">
	<legend class="alt-heading-3">Accent</legend>

	{#each colours as colour}
		<label class:active={selectedColour === colour} class="label-4" for="colours-{colour}">
			{colour}
			<input
				bind:group={selectedColour}
				type="radio"
				name="colours"
				value={colour}
				id="colours-{colour}"
				hidden
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

	label {
		cursor: pointer;
		color: var(--foreground);
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border: 1.5px solid var(--neutral-6);
		text-align: center;
		text-transform: capitalize;
		transition:
			all 0.1s ease-in-out,
			transform 0.3s ease-in;
	}

	.active,
	label:hover {
		border-color: var(--blue-8);
		background-color: oklch(from var(--blue-8) l c h / 40%);
	}

	label:hover {
		box-shadow:
			0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
			0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
			inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--blue-7) l c h / 10%);
		transform: translate(0, calc(var(--space-1) * -1));
	}
</style>
