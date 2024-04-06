<script lang="ts">
	import TokenDescription from '$lib/components/token_description.svelte'

	let selectedStyle = ''
	const headings = new Array(6)
	const text = new Array(4)
</script>

<main>
	<TokenDescription title="Text Styles">
		<p class="body-4">Apply the text style class to add those typography variables.</p>

		<label class="label-2" for="text-style-select">
			View the text styles
			<select
				bind:value={selectedStyle}
				class="input-2"
				name="text-style"
				id="text-style-select"
				placeholder="Select text style"
			>
				<!-- <option value="" disabled>Select text style</option> -->
				<option value="heading">Heading</option>
				<option value="alt-heading">Alt Heading</option>
				<option value="body">Body</option>
				<option value="link">Link</option>
				<option value="button">Button</option>
				<option value="label">Label</option>
				<option value="input">Input</option>
			</select>
		</label>
	</TokenDescription>

	<section>
		{#if selectedStyle === 'heading' || selectedStyle === 'alt-heading'}
			{#each headings as _, index}
				<p class="{selectedStyle}-{index + 1}">Lorem ipsum <strong>dolor</strong></p>
			{/each}
		{:else if selectedStyle}
			{#each text as _, index}
				<p class="{selectedStyle}-{index + 1}">Lorem ipsum <strong>dolor</strong></p>
			{/each}
		{:else}
			<p class="body-4 empty">Nothing selected yet</p>
		{/if}
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		margin-block: var(--space-10);
	}

	label {
		display: flex;
		flex-direction: column;
		margin-block-start: var(--space-4);
	}

	select {
		margin-block-start: var(--space-2);
		width: 100%;
		max-width: 300px;
	}

	.empty {
		text-align: center;
		margin-block: var(--space-10);
	}
</style>
