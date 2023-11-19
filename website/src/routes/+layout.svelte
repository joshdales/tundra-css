<script lang="ts">
	import { page } from '$app/stores'
	import '../app.css'

	let isNotHomePage = $derived($page.route.id !== '/')

	let headerHeight: number = $state(0)
	let currentPosition: number = $state(0)
	let prevPosition: number = 0

	function shouldHideHeader(currentYPosition: number): boolean {
		const positionDelta = prevPosition - currentPosition
		prevPosition = currentYPosition
		return positionDelta < 0
	}

	let hide: boolean = $derived(shouldHideHeader(currentPosition))
</script>

<svelte:window bind:scrollY={currentPosition} />

{#if isNotHomePage}
	<header bind:clientHeight={headerHeight} style="--header-height:-{headerHeight}px" class:hide>
		<a href="/" class="heading-3">Tundra</a>
	</header>
{/if}

<slot />

<footer>
	<h3>
		<a class="link-4" href="https://github.com/joshdales/tundra-css"
			>github.com/joshdales/tundra-css</a
		>
	</h3>
</footer>

<style>
	header {
		position: sticky;
		z-index: 2;
		background-color: var(--neutral-8);
		top: 0;
		transition: top 0.5s;
		color: var(--green);
		padding-inline: var(--space-10);
		padding-block: var(--space-6);
	}

	header.hide {
		top: var(--header-height);
	}

	footer {
		text-align: center;
		padding-block: var(--space-4);
		margin-block-start: auto;
	}

	a {
		position: relative;
		color: var(--green);
		text-decoration: none;
		padding-block-end: var(--space-1);
	}

	a:hover {
		text-decoration: underline;
	}
</style>
