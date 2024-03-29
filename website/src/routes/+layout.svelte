<script lang="ts">
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import NavMenu from '$lib/components/nav_menu.svelte'
	import '../app.css'

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			return
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	let headerHeight: number = 0
	let currentPosition: number = 0
	let prevPosition: number = 0

	function shouldHideHeader(currentYPosition: number): boolean {
		const positionDelta = prevPosition - currentPosition
		prevPosition = currentYPosition
		return positionDelta < 0
	}

	$: hide = shouldHideHeader(currentPosition)
</script>

<svelte:head>
	<title>Tundra CSS</title>
</svelte:head>

<svelte:window bind:scrollY={currentPosition} />

{#if !$page.data.hideHeader}
	<header bind:clientHeight={headerHeight} style="--header-height:{headerHeight}px" class:hide>
		<a href="/" class="alt-heading-3">Tundra CSS</a>

		<NavMenu />
	</header>
{/if}

<slot />

<footer>
	<h3>
		<a class="link-4 external" href="https://github.com/joshdales/tundra-css">
			github.com/joshdales/tundra-css
		</a>
	</h3>
</footer>

<style>
	header {
		position: sticky;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		background-color: var(--neutral-8);
		top: 0;
		transition: top 0.5s;
		color: var(--green);
		padding-inline: var(--space-10);
		padding-block: var(--space-6);
		animation: add-shadow linear both;
		animation-timeline: scroll();
		animation-range: 0 var(--space-14);
	}

	@keyframes add-shadow {
		to {
			box-shadow:
				0 var(--space-1) var(--space-2) calc(var(--space-1) * -1) rgba(0, 0, 0, 0.2),
				var(--space-2) var(--space-1) var(--space-3) var(--space-1) rgba(0, 0, 0, 0.1);
		}
	}

	header.hide {
		top: calc(var(--header-height) * -1);
	}

	header,
	header.hide {
		&:has(menu) {
			top: 0;
		}
	}

	footer {
		text-align: center;
		padding-block: var(--space-4);
		margin-block-start: auto;
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
