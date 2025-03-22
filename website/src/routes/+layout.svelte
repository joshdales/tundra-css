<script lang="ts">
	import { onNavigate } from '$app/navigation'
	import { page } from '$app/state'
	import NavHeader from '$lib/components/header/nav_header.svelte'
	import '../app.css'
	import { theme } from '$lib'
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
		if (theme.accent) {
			let appClass
			for (const value of document.documentElement.classList.values()) {
				if (/^app/.test(value)) {
					appClass = value
					break
				}
			}

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
