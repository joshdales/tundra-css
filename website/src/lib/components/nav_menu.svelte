<script>
	let showMenu = false
</script>

<nav>
	<button class="button-1 ghost" class:show={showMenu} on:click={() => (showMenu = !showMenu)}>
		<div />
	</button>

	{#if showMenu}
		<menu>
			<li>
				<a class="link-1" href="/colours">Colours</a>
			</li>
			<li>
				<a class="link-1" href="/radius">Radius</a>
			</li>
			<li>
				<a class="link-1" href="/spacing">Spacing</a>
			</li>
			<li>
				<a class="link-1" href="/typography">Typography</a>
			</li>
			<hr />
			<li>
				<a class="link-1" href="/buttons">Buttons</a>
			</li>
			<li>
				<a class="link-1" href="/inputs">Inputs</a>
			</li>
			<li>
				<a class="link-1" href="/text">Text</a>
			</li>
		</menu>
	{/if}
</nav>

<style>
	nav {
		display: flex;
	}

	button {
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
			top: unset;
			bottom: unset;
		}

		&.show::before {
			--rotate: 45deg;
		}
		&.show::after {
			--rotate: -45deg;
		}
	}

	menu {
		list-style: none;
		position: absolute;
		top: 100%;
		right: 0;
		background-color: var(--neutral-8);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: 0;
	}
</style>
