<script lang="ts">
	import { page } from '$app/stores'
	import '../app.css'

	let is_not_home_page = $derived($page.route.id !== '/')

	let header_height: number = $state(0)
	let current_position: number = $state(0)
	let prev_position: number = 0

	function shouldHideHeader(currentYPosition: number): boolean {
		const positionDelta = prev_position - current_position
		prev_position = currentYPosition
		return positionDelta < 0
	}

	let hide: boolean = $derived(shouldHideHeader(current_position))
</script>

<svelte:window bind:scrollY={current_position} />

{#if is_not_home_page}
	<header bind:clientHeight={header_height} style="--header-height:-{header_height}px" class:hide>
		<a href="/" class="alt-heading-3">Tundra</a>
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
		padding-inline: var(--space-4);
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
