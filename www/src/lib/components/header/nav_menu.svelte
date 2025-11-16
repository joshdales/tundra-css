<script lang="ts">
	let showMenu = $state(false)

	let navRef: HTMLElement | undefined = $state()

	function handleOutsideClick(event: MouseEvent) {
		if (!showMenu) {
			return
		}

		if (!navRef?.contains(event.target as Node | null)) {
			hideMenu()
		}
	}

	function hideMenu() {
		showMenu = false
	}
</script>

<svelte:window onclick={handleOutsideClick} />

<nav bind:this={navRef}>
	<button
		aria-label={showMenu ? 'Show menu' : 'Hide menu'}
		class="element-button button-1 ghost"
		class:show={showMenu}
		onclick={() => (showMenu = !showMenu)}
	>
		<div></div>
	</button>

	{#if showMenu}
		<menu>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/customisation">Customisation</a>
			</li>

			<hr />

			<li>
				<a onclick={hideMenu} class="text-link-3" href="/colours">Colours</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/radius">Radius</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/spacing">Spacing</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/typography">Typography</a>
			</li>

			<hr />

			<li>
				<a onclick={hideMenu} class="text-link-3" href="/buttons">Buttons</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/inputs">Inputs</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/toggles">Toggles</a>
			</li>
			<li>
				<a onclick={hideMenu} class="text-link-3" href="/text-styles">Text Styles</a>
			</li>

			<hr />

			<li>
				<a
					class="text-link-3 external"
					href="https://github.com/joshdales/tundra-css"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
				</a>
			</li>
		</menu>
	{/if}
</nav>

<style>
	nav {
		display: flex;
	}

	button {
		position: relative;
		display: flex;
		flex-direction: column;
		align-self: center;
		height: var(--space-11);
		width: var(--space-11);

		&::before,
		&::after {
			content: '';
			transform: rotate(var(--rotate));
			transition: all 300ms ease-in-out;
			position: absolute;
		}

		&::before {
			top: var(--space-2);
		}

		&::after {
			bottom: var(--space-2);
		}

		& div,
		&::before,
		&::after {
			width: var(--space-8);
			height: var(--space-1);
			background: var(--neutral-1);
			border-radius: var(--radius-1);
		}

		&.show div {
			display: none;
		}

		&.show::before,
		&.show::after {
			top: var(--space-5);
			bottom: var(--space-5);
		}

		&.show::before {
			--rotate: 45deg;
		}
		&.show::after {
			--rotate: -45deg;
		}
	}

	hr {
		margin-block: var(--space-3);
	}

	menu {
		width: calc(var(--space-14) * 1.5);
		list-style: none;
		position: absolute;
		top: calc(var(--space-1) + var(--header-height));
		right: 0;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-8);
		border-radius: var(--radius-2);
		box-shadow: var(--space-2) var(--space-1) var(--space-3) var(--space-1) rgba(0, 0, 0, 0.1);
	}

	a {
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	@media (prefers-reduced-motion) {
		button {
			transition: none;
		}
	}
</style>
