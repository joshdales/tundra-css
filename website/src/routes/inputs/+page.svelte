<script>
	import AccentSelector from '$lib/components/accent_selector.svelte'
	let selectedColour = ''
</script>

<main>
	<h1>Inputs (text)</h1>

	<p>
		Text based inputs for user entry you can apply the <code>input-*</code> class to the input element,
		and combine it with the label class on the label element. If you don't include a class for the colour
		then the accent colours with be greyscale.
	</p>

	<AccentSelector {selectedColour} on:accent={(ev) => (selectedColour = ev.detail)} />

	<label for="input1" class="label-1">
		Input 1
		<input class="input-1 {selectedColour}" type="text" placeholder="Input 1" id="input1" />
	</label>

	<label for="input2" class="label-2">
		Input 2
		<input class="input-2 {selectedColour}" type="text" placeholder="Input 2" id="input2" />
	</label>

	<label for="input3" class="label-3">
		Input 3
		<input class="input-3 {selectedColour}" type="text" placeholder="Input 3" id="input3" />
	</label>

	<label for="input4" class="label-4">
		Input 4
		<input class="input-4 {selectedColour}" type="text" placeholder="Input 4" id="input4" />
	</label>

	<h2>Customisation</h2>
	<p class="body-4">
		In order to make your own variations of the inputs you just need to make a class that overrides
		the accent variables: <code>accent-1</code> or <code>accent-2</code> with your preferred values.
	</p>
</main>

<style>
	p {
		margin-block-start: var(--space-6);
		margin-block-end: var(--space-8);
	}

	label {
		display: flex;
		flex-direction: column;
		margin-block: var(--space-6);
		cursor: pointer;
	}

	input {
		margin-block-start: var(--space-1);
	}
</style>
