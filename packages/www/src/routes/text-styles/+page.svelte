<script lang="ts">
	import TokenDescription from '$lib/components/token_description.svelte'

	let selectedStyle = $state('')
	const headings = new Array(6)
	const text = new Array(4)
</script>

<main>
	<TokenDescription title="Text Styles">
		<p class="text-body-4">Apply the text style class to add those typography variables.</p>

		<label class="text-label-2" for="text-style-select">
			View the text styles
			<select
				bind:value={selectedStyle}
				class="input-2"
				name="text-style"
				id="text-style-select"
				placeholder="Select text style"
			>
				<!-- <option value="" disabled>Select text style</option> -->
				<option value="text-heading">Heading</option>
				<option value="text-alt-heading">Alt Heading</option>
				<option value="text-body">Body</option>
				<option value="text-link">Link</option>
				<option value="text-button">Button</option>
				<option value="text-label">Label</option>
				<option value="text-input">Input</option>
			</select>
		</label>
	</TokenDescription>

	<section>
		<ol>
			{#if selectedStyle === 'text-heading' || selectedStyle === 'text-alt-heading'}
				{#each headings as _, index}
					<li data-class="{selectedStyle}-{index + 1}" class="{selectedStyle}-{index + 1}">
						Lorem ipsum <strong>dolor</strong>
					</li>
				{/each}
			{:else if selectedStyle}
				{#each text as _, index}
					<li data-class="{selectedStyle}-{index + 1}" class="{selectedStyle}-{index + 1}">
						Lorem ipsum <strong>dolor</strong>
					</li>
				{/each}
			{:else}
				<p class="body-4 empty">Nothing selected yet</p>
			{/if}
		</ol>
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
