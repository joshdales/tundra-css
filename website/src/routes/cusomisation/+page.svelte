<main>
	<h1 class="heading-6">Customisation</h1>

	<p class="body-4">
		I've tried to make this pretty easy to customise to get how you want with minimal fuss. For the
		most part things that should be considered customisable are using CSS custom properties, though
		you can always override whatever properties you want. <br />
		Though if you are doing that a lot maybe this isn't the system that you need?
	</p>

	<p class="body-4">
		Generally the custom properties that are named after the thing that they are supposed to be
		setting so that it is easy to guess what you need to change. There are a few of exceptions for
		this though mostly around the padding of elements which goes for <code>--padding-x</code> and
		<code>--padding-y</code> rather than <code>--padding-inline</code> and
		<code>--padding-block</code>, but maybe I'll change that in the future.
	</p>

	<section>
		<h2 class="heading-5">Accent colours</h2>
		<p class="body-4">
			There are classes to applying the accent colour to whatever element you want, eg.
			<code>red</code>, <code>blue</code>, <code>green</code>, etc. These all set the
			<code>accent-color</code> property as well as add four accent levels.
		</p>

		<p class="body-4">Generally the best way to think of it is like so:</p>
		<ol class="body-3">
			<li><code>accent-1</code> The accent used when elements are in a hover state</li>
			<li><code>accent-2</code> The standard accent colour</li>
			<li><code>accent-3</code> The element is active</li>
			<li>
				<code>accent-4</code> Used occasionally for variations or elements that have a higher contrast
				range.
			</li>
		</ol>

		<p class="body-4">
			You could apply this can apply this class at a parent level eg. apply it to the
			<code>body</code>
			and all your buttons and inputs would have that colour, but you can still override that by applying
			a different colour class to an individual element.
		</p>
	</section>
</main>

<style>
	h1,
	h2 {
		text-transform: capitalize;
		margin-block-end: var(--space-6);
	}

	section {
		margin-block-start: var(--space-10);
	}

	p + p {
		margin-block-start: var(--space-4);
	}

	ol {
		margin-block: var(--space-4);
	}

	li + li {
		margin-block-start: var(--space-4);
	}
</style>
