<script lang="ts">
	import ThemeAccentSelector from '../theme_accent_selector.svelte'
	let divRef: HTMLElement | undefined = $state()

	function handleOutsideClick(event: MouseEvent) {
		if (!showMenu) {
			return
		}

		if (!divRef?.contains(event.target as Node | null)) {
			showMenu = false
		}
	}

	let showMenu = $state(false)
</script>

<svelte:window onclick={handleOutsideClick} />

<div class="box" bind:this={divRef}>
	<div class="selector" class:show={showMenu}>
		<ThemeAccentSelector />
	</div>

	<button
		class="button-1 ghost theme-selector"
		aria-label="Update the sites accent colour"
		onclick={() => (showMenu = !showMenu)}
	>
	</button>
</div>

<style>
	button {
		display: none;
	}

	button::before {
		content: '';
		display: block;
		height: var(--space-8);
		width: var(--space-8);
		border-radius: var(--radius-5);
		background: linear-gradient(
			to right,
			var(--red),
			var(--orange),
			var(--yellow),
			var(--green),
			var(--cyan),
			var(--blue),
			var(--purple),
			var(--pink)
		);
	}

	.selector {
		background-color: transparent;
	}

	@container (width < 600px) {
		button {
			display: block;
		}

		.box {
			margin-inline: auto var(--space-2);
		}

		.selector {
			display: none;
			&.show {
				display: block;
				position: absolute;
				top: calc(var(--space-1) + var(--header-height));
				right: 0;
			}
		}
	}
</style>
