<script lang="ts">
	let selectedStyle = ''
	const headings = new Array(6)
	const text = new Array(4)
</script>

<main>
	<h1>Text Styles</h1>

	<p class="body-4">Apply the text style class to add those typography variables.</p>

	<label class="label4" for="text-style-select">
		View the text styles
		<select
			bind:value={selectedStyle}
			class="input-4"
			name="text-style"
			id="text-style-select"
			placeholder="Select text style"
		>
			<option value="heading">Heading</option>
			<option value="alt-heading">Alt Heading</option>
			<option value="body">Body</option>
			<option value="link">Link</option>
			<option value="button">Button</option>
			<option value="label">Label</option>
			<option value="input">Input</option>
		</select>
	</label>

	<section>
		{#if selectedStyle === 'heading' || selectedStyle === 'alt-heading'}
			{#each headings as _, index}
				<p class="{selectedStyle}-{index + 1}">Lorem ipsum</p>
			{/each}
		{:else if selectedStyle}
			{#each text as _, index}
				<p class="{selectedStyle}-{index + 1}">Lorem ipsum</p>
			{/each}
		{:else}
			<p class="body-4">Nothing selected yet</p>
		{/if}
	</section>
</main>

<style>
	h2 {
		margin-block-end: var(--space-3);
	}
	section {
		display: flex;
		flex-direction: column;
		margin-block: var(--space-10);
	}

	label {
		display: flex;
		flex-direction: column;
	}

	select {
		width: fit-content;
	}
</style>
