<script lang="ts">
	interface Props {
		href: string
		title: string
		desc: string
	}

	let { href, title, desc }: Props = $props()
</script>

<a {href}>
	<h3 class="heading-2">{title}</h3>
	<p class="label-2">{desc}</p>
</a>

<style>
	a {
		display: grid;
		row-gap: var(--space-1);
		grid-template-columns: 1fr auto;
		grid-template-areas:
			'title indicator'
			'desc indicator';
		flex-direction: column;
		text-decoration: none;
		color: var(--app-foreground);
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border: 0.5px solid transparent;
		transition:
			all 0.1s ease-in-out,
			transform 0.3s ease-in;
	}

	a::after {
		grid-area: indicator;
		align-self: center;
		font-size: var(--font-size-5);
	}

	a:hover,
	a:focus {
		box-shadow:
			0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
			0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
			inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--app-accent-8) l c h / 10%);
		background-color: oklch(from var(--app-accent-9) l c h / 40%);
		border-color: var(--app-accent-9);
		transform: translate(0, calc(var(--space-1) * -1));
		text-decoration: none;
	}

	@media (prefers-reduced-motion) {
		a:hover,
		a:focus {
			transform: none;
		}
	}

	a:focus {
		outline: none;
		border-color: var(--app-accent-6);
	}

	h3 {
		grid-area: title;
	}

	p {
		grid-area: desc;
	}
</style>
