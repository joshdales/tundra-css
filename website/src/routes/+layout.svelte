<script lang="ts">
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import NavHeader from '$lib/components/header/nav_header.svelte'
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
</script>

<svelte:head>
	<title>Tundra CSS</title>
</svelte:head>

{#if !$page.data.hideHeader}
	<NavHeader />
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
	footer {
		text-align: center;
		padding-block: var(--space-4);
		margin-block-start: auto;
	}

	a {
		display: flex;
		justify-content: center;
	}
</style>
