<script>
	import TokenDescription from '$lib/components/token_description.svelte'
	import AccentSelector from '$lib/components/accent_selector.svelte'

	let selectedColour = ''
</script>

<main>
	<TokenDescription title="Checkboxes & Radios">
		<p class="body-4">
			When a user needs to select items from a list you can apply either the <code>checkbox-*</code>
			or <code>radio-*</code> to the appropriate input.
		</p>

		<AccentSelector updateColour={(newColour) => (selectedColour = newColour)} />
	</TokenDescription>

	<fieldset name="checkbox">
		<label class="label-1">
			<input type="checkbox" class="checkbox-1 {selectedColour}" checked={true} />
			<input type="checkbox" class="checkbox-1 {selectedColour}" indeterminate={true} />
			Checkbox 1
		</label>

		<label class="label-2">
			<input type="checkbox" class="checkbox-2 {selectedColour}" checked={false} />
			<input type="checkbox" class="checkbox-2 {selectedColour}" indeterminate={true} />
			Checkbox 2
		</label>

		<label class="label-3">
			<input type="checkbox" class="checkbox-3 {selectedColour}" checked={false} />
			<input type="checkbox" class="checkbox-3 {selectedColour}" indeterminate={true} />
			Checkbox 3
		</label>

		<label class="label-4">
			<input type="checkbox" class="checkbox-4 {selectedColour}" checked={false} />
			<input type="checkbox" class="checkbox-4 {selectedColour}" indeterminate={true} />
			Checkbox 4
		</label>
	</fieldset>

	<fieldset name="radio">
		<label class="label-1" for="radio-1">
			<input
				type="radio"
				name="radio"
				class="radio-1 {selectedColour}"
				id="radio-1"
				value="radio-1"
			/>
			Radio 1
		</label>

		<label class="label-2" for="radio-2">
			<input
				type="radio"
				name="radio"
				class="radio-2 {selectedColour}"
				id="radio-2"
				value="radio-2"
			/>
			Radio 2
		</label>

		<label class="label-3" for="radio-3">
			<input
				type="radio"
				name="radio"
				class="radio-3 {selectedColour}"
				id="radio-3"
				value="radio-3"
			/>
			Radio 3
		</label>

		<label class="label-4" for="radio-4">
			<input
				type="radio"
				name="radio"
				class="radio-4 {selectedColour}"
				id="radio-4"
				value="radio-4"
			/>
			Radio 4
		</label>
	</fieldset>
</main>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-4);
		border: 0.5px solid var(--neutral-5);
		border-radius: var(--radius-1);

		& + & {
			margin-block-start: var(--space-4);
		}
	}

	label {
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}
</style>
