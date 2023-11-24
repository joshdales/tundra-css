<script>
	import LinkCard from '$lib/components/link_card.svelte'
</script>

<div class="grid">
	<header>
		<h1 class="heading-6">Tundra CSS</h1>
		<p class="body-4">A comprehensive but not overwhelming CSS design system.</p>
		<p class="body-4">
			Its not a complete framework with utility classes for every property that you might want, like
			Tailwind or Tachyons or what have you. It is a smaller selection of variables and classes, and
			SCSS mixins it you want them. This should give you the building blocks to get a relatively
			nice looking project without having to go through too much trouble.
		</p>
	</header>

	<main>
		<h2 class="alt-heading-4">Foundations</h2>
		<p class="body-3">The variables used to make up the larger elements.</p>
		<nav>
			<ul>
				<li>
					<LinkCard
						href="/colours"
						title="Colours"
						desc="The colour palette and colour based variables that are open to you."
					/>
				</li>
				<li>
					<LinkCard href="/radius" title="Radius" desc="How round do you want those corners?" />
				</li>
				<li>
					<LinkCard
						href="/spacing"
						title="Spacing"
						desc="The scale that you should use for every time you need a measurement."
					/>
				</li>
				<li>
					<LinkCard
						href="/typography"
						title="Typography"
						desc="The foundational elements that build up the text styles."
					/>
				</li>
			</ul>
		</nav>

		<h2 class="alt-heading-4">Elements</h2>
		<p class="body-3">
			You can apply classes to the following elements to the systems appearances.
		</p>
		<nav>
			<ul>
				<li>
					<LinkCard
						href="/buttons"
						title="Buttons"
						desc="The colour palette and colour based variables that are open to you"
					/>
				</li>
				<li>
					<LinkCard
						href="/inputs"
						title="Inputs"
						desc="For when someone needs to type some text into a box"
					/>
				</li>
				<li>
					<LinkCard
						href="/text"
						title="Text"
						desc="The different types of text and how they look"
					/>
				</li>
			</ul>
		</nav>
	</main>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1.5fr 2fr;
		min-height: 100vh;
		min-height: 100lvh;
		gap: var(--space-12);
	}

	header {
		position: sticky;
		top: 0;
		height: fit-content;
		padding-block: var(--space-14);
		padding-inline-start: var(--space-12);
	}

	h1 {
		margin-block-end: var(--space-6);
		color: var(--accent);
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-block-start: var(--space-14);
		max-width: 800px;
		padding-inline-start: 0;
		padding-inline-end: var(--space-12);
	}

	nav,
	h2 {
		width: 100%;
	}

	ul {
		margin-block-end: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		list-style: none;
		padding: 0;
	}

	h2 {
		margin-block-start: var(--space-10);
		margin-block-end: var(--space-2);
	}

	h2:first-of-type {
		margin-block-start: 0;
	}

	.body-3 {
		width: 100%;
		margin-block-end: var(--space-3);
	}

	header p {
		margin-block: var(--space-6);
	}
</style>
