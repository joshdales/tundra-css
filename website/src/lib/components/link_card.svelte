<script lang="ts">
	export let href: string
	export let title: string
	export let desc: string
</script>

<a {href}>
	<h3 class="alt-heading-2">{title}</h3>
	<p class="label-1">{desc}</p>
</a>

<style>
	a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: var(--foreground);
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border-top: 0.5px solid transparent;
		transition:
			all 0.1s ease-in-out,
			transform 0.3s ease-in;
	}

	a:hover,
	a:focus {
		box-shadow:
			0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
			0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
			inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--blue-7) l c h / 10%);
		background-color: oklch(from var(--blue-8) l c h / 40%);
		border-color: var(--blue-8);
		transform: translate(0, calc(var(--space-1) * -1));
	}

	@media (prefers-reduced-motion) {
		a:hover,
		a:focus {
			transform: none;
		}
	}

	a:focus {
		outline: none;
		border-color: var(--blue-6);
	}

	p {
		margin-block-end: var(--space-1);
	}
</style>
