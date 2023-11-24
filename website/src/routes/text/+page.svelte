<script lang="ts">
	const headings = new Array(6)
	const text = new Array(4)
</script>

<main>
	<h1>Text Styles</h1>

	<p>Apply the text style class to add those typography variables.</p>

	<label for="text-style-select">
		View the text styles
		<select class="input-4" name="text-style" id="text-style-select">
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
		<h2>Heading</h2>
		{#each headings as _, index}
			<p class="heading-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Alt Heading</h2>
		{#each headings as _, index}
			<p class="alt-heading-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Body</h2>
		{#each text as _, index}
			<p class="body-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Link</h2>
		{#each text as _, index}
			<p class="link-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Button</h2>
		{#each text as _, index}
			<p class="button-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Label</h2>
		{#each text as _, index}
			<p class="label-{index + 1}">Lorem ipsum</p>
		{/each}
	</section>

	<section>
		<h2>Input</h2>
		{#each text as _, index}
			<p class="input-{index + 1}">Lorem ipsum</p>
		{/each}
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
</style>
