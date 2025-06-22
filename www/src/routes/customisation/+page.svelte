<main>
	<h1 class="heading-6">Customisation</h1>

	<p class="body-4">
		I've tried to make this pretty easy to customise to get how you want with minimal fuss. For the
		most part things that should be considered customisable are using CSS custom properties, though
		you can always override whatever properties you want.
		<br />
		If you have any troubles or encounter difficulties trying to make changes or adjustments feel free
		to open an issue on
		<a
			class="external"
			href="https://github.com/joshdales/tundra-css/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen"
			target="_blank"
			rel="noopener noreferrer">Github</a
		>.
	</p>

	<p class="body-4">
		Generally the custom properties are named after the property that they are supposed to be
		setting so that it is easy to guess what you need to change. There are a few of exceptions for
		this though mostly around the padding of elements which goes for <code>--padding-x</code> and
		<code>--padding-y</code> rather than <code>--padding-inline</code> and
		<code>--padding-block</code>, but maybe I'll change that in the future.
	</p>

	<section class="body-4">
		<h2 class="heading-5">Accent colours</h2>
		<p>
			There are classes to applying the accent colour to whatever element you want, eg.
			<code>red</code>, <code>blue</code>, <code>green</code>, etc. These all set the
			<code>accent-color</code> property as well as adding accent variables for each level.
		</p>

		<p>
			You could apply this can apply this class at a parent level eg. apply it to the
			<code>body</code>
			and all your buttons and inputs would have that colour, but you can still override that by applying
			a different colour class to an individual element.
		</p>

		<p>The accent variables are generally used in the following way on interactive elements:</p>
		<ol>
			<li>
				<code>accent-4</code> The standard accent colour for that element, might be the text or the background.
			</li>
			<li>
				<code>accent-3</code> The accent used when elements are being viewed (either by focus or hover).
			</li>
			<li><code>accent-2</code> The element is being activated or interactive with.</li>
			<li>
				<code>accent-9</code> Contrast colour with the main accent, usually on whatever the accent colour
				isn't.
			</li>
		</ol>
		<p>
			Though there might be some slight variation based on the type of element and how it's
			interacted with.

			<br />

			There is more information about this in the
			<a
				class="external"
				href="https://github.com/joshdales/tundra-css/blob/main/README.md"
				target="_blank"
				rel="noopener noreferrer">project Readme</a
			>.
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

	a {
		display: inline-flex;
	}
</style>
