<script>
	import LinkCard from './link_card.svelte'
</script>

<div class="grid">
	<header>
		<h1 class="heading-6">Tundra CSS</h1>
		<p class="body-4">Hello there how are you?</p>
	</header>

	<main>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsa magni sequi. Aliquam
			laborum maxime, molestias est sit quasi assumenda ipsam veniam sint nihil quod perspiciatis
			incidunt, dolores, ad suscipit!
		</p>

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
					<LinkCard
						href="/spacing"
						title="Spacing"
						desc="The scale that you should use for every time you need a measurement."
					/>
				</li>
				<li>
					<LinkCard href="/radius" title="Radius" desc="How round do you want those corners?" />
				</li>
				<li>
					<LinkCard
						href="/typography"
						title="Typography"
						desc="The foundational elements that build up the text styles."
					/>
				</li>
				<li>
					<LinkCard
						href="/text"
						title="Text"
						desc="The different types of text and how they look"
					/>
				</li>
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
	}

	header {
		position: sticky;
		top: 0;
		height: fit-content;
		padding-block: var(--space-14);
		padding-inline: var(--space-12);
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
		margin-block-start: var(--space-14);
	}

	ul {
		margin-block-start: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		list-style: none;
		padding: 0;
	}
</style>