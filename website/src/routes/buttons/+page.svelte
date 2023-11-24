<script lang="ts">
	let colour = $state('')

	function copyClasses(event: MouseEvent) {
		const element = event.target as HTMLButtonElement
		const classes = element.className.replace(/(svelte-\w+)/, '')
		navigator.clipboard.writeText(classes)
		// TODO: Display copy notification
	}
</script>

<main>
	<h1 class="alt-heading-5">Buttons</h1>

	<p class="body-4">
		Apply the class for the button variant and the accent colour that you want the button to be. Add
		a <code>button-*</code> class to change the size.
	</p>

	<fieldset name="accent">
		<legend class="alt-heading-3">Accent</legend>

		<label class:active={colour === 'red'} class="label-4" for="buttons-red">
			Red
			<input bind:group={colour} type="radio" name="buttons" value="red" id="buttons-red" hidden />
		</label>

		<label class:active={colour === 'blue'} class="label-4" for="buttons-blue">
			Blue
			<input
				bind:group={colour}
				type="radio"
				name="buttons"
				value="blue"
				id="buttons-blue"
				hidden
			/>
		</label>

		<label class:active={colour === 'green'} class="label-4" for="buttons-green">
			Green
			<input
				bind:group={colour}
				type="radio"
				name="buttons"
				value="green"
				id="buttons-green"
				hidden
			/>
		</label>

		<label class:active={colour === 'yellow'} class="label-4" for="buttons-yellow">
			Yellow
			<input
				bind:group={colour}
				type="radio"
				name="buttons"
				value="yellow"
				id="buttons-yellow"
				hidden
			/>
		</label>
	</fieldset>

	<h2 class="alt-heading-4">Filled</h2>

	<div class="btn-group">
		<button class="button-1 filled {colour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 filled {colour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 filled {colour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 filled {colour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<h2 class="alt-heading-4">Outline</h2>

	<div class="btn-group">
		<button class="button-1 outline {colour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 outline {colour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 outline {colour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 outline {colour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<h2 class="alt-heading-4">Ghost</h2>

	<div class="btn-group">
		<button class="button-1 ghost {colour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 ghost {colour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 ghost {colour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 ghost {colour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<section class="disabled">
		<h3>Disabled buttons</h3>
		<p>When buttons are disabled they look the same no matter what their accent colour.</p>
		<div class="btn-group">
			<button class="button-2 filled" disabled> Lorem ipsum </button>
			<button class="button-2 outline" disabled> Lorem ipsum </button>
			<button class="button-2 ghost" disabled> Lorem ipsum </button>
		</div>
	</section>
</main>

<style>
	.btn-group,
	fieldset {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-6);
		margin-block: var(--space-4);
	}

	fieldset {
		border: none;
		padding: 0;
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

	button {
		width: fit-content;
		height: fit-content;
	}
</style>
