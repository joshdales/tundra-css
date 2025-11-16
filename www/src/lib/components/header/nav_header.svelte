<script lang="ts">
	import NavAccent from './nav_accent.svelte'
	import NavMenu from './nav_menu.svelte'

	let headerHeight: number = $state(0)
	let currentPosition: number = $state(0)
	let prevPosition: number = 0

	function shouldHideHeader(currentYPosition: number): boolean {
		if (currentPosition < 200) {
			return false
		}

		const positionDelta = prevPosition - currentPosition
		prevPosition = currentYPosition
		return positionDelta < 0
	}

	let hide = $derived(shouldHideHeader(currentPosition))
</script>

<svelte:window bind:scrollY={currentPosition} />

<header bind:clientHeight={headerHeight} style="--header-height:{headerHeight}px" class:hide>
	<a href="/" class="text-alt-heading-3">Tundra CSS</a>

	<NavAccent />
	<NavMenu />
</header>

<style>
	header {
		container-type: inline-size;
		position: sticky;
		z-index: 2;
		display: flex;
		align-items: center;
		max-width: 1450px;
		justify-content: space-between;
		top: var(--space-2);
		transition: top 0.7s ease-in-out;
		color: var(--app-accent);
		padding-inline: var(--space-10);
		padding-block: var(--space-6);
		width: 100%;
		background-color: #fff;
		border-radius: var(--radius-3);
		margin-inline: auto;
		margin-block: var(--space-2);
		animation: change-position linear both;
		animation-timeline: scroll();
		animation-range: 0 var(--space-14);
	}

	header.hide {
		--header-position: calc(var(--header-height) + var(--space-10));
		top: calc(var(--header-position) * -2);
	}

	@keyframes change-position {
		to {
			width: calc(100% - var(--space-13));
			padding-inline: var(--space-6);
			box-shadow:
				0 var(--space-1) var(--space-2) calc(var(--space-1) * -1) rgba(0, 0, 0, 0.2),
				var(--space-2) var(--space-1) var(--space-3) var(--space-1) rgba(0, 0, 0, 0.1);
		}
	}

	@supports not (animation-range: 1px) {
		header {
			border: 1px solid var(--neutral-7);
		}
	}

	header,
	header.hide {
		:global(&:has(menu), &:has(.selector.show)) {
			top: 0;
		}
	}

	a {
		display: flex;
		justify-content: center;
	}

	header a {
		gap: var(--space-2);

		&::after {
			content: none;
		}

		&::before {
			content: '←';
		}
	}
</style>
