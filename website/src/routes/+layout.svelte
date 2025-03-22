<script lang="ts">
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/state'
	import NavHeader from '$lib/components/header/nav_header.svelte'
	import type { Theme } from '$lib/theme.svelte'
	import '../app.css'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()

	let showHeader = $derived(() => !page.data.hideHeader)

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

	$effect(() => {
		const { theme } = page.data
		if (theme.accent) {
			localStorage.setItem('themeAccent', theme.accent)
			const appClass = document.documentElement.classList.values().find((key) => /^app/.test(key))
			if (appClass) {
				document.documentElement.classList.replace(appClass, `app-${theme.accent}`)
			}
		}
	})
</script>

<svelte:head>
	<title>Tundra CSS</title>
</svelte:head>

{#if showHeader()}
	<NavHeader />
{/if}

{@render children?.()}

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
