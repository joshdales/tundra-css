<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let selectedToken = $state($page.url.searchParams.get('token') || '')

	$effect(() => {
		const token = $page.url.searchParams.get('token')
		if (token && !selectedToken) {
			selectedToken = token
		} else if (selectedToken && selectedToken !== token) {
			$page.url.searchParams.set('token', selectedToken)
			goto($page.url, { replaceState: true })
		}
	})
</script>

<main>
	<h1 class="alt-heading-5">Typography</h1>

	<p class="body-4">
		These are all the token that the text styles are made from. In general you probably won't need
		to access these directly but the variables are available in case that you do.
	</p>

	<fieldset name="typography">
		<legend class="alt-heading-3">Token type</legend>

		<label class:active={selectedToken === 'font-weight'} class="label-4" for="token-font-weight">
			Font Weight
			<input
				bind:group={selectedToken}
				type="radio"
				name="typography"
				value="font-weight"
				id="token-font-weight"
				hidden
			/>
		</label>

		<label class:active={selectedToken === 'font-size'} class="label-4" for="token-font-size">
			Font Size
			<input
				bind:group={selectedToken}
				type="radio"
				name="typography"
				value="font-size"
				id="token-font-size"
				hidden
			/>
		</label>

		<label class:active={selectedToken === 'line-height'} class="label-4" for="token-line-height">
			Line Height
			<input
				bind:group={selectedToken}
				type="radio"
				name="typography"
				value="line-height"
				id="token-line-height"
				hidden
			/>
		</label>

		<label
			class:active={selectedToken === 'letter-spacing'}
			class="label-4"
			for="token-letter-spacing"
		>
			Letter Spacing
			<input
				bind:group={selectedToken}
				type="radio"
				name="typography"
				value="letter-spacing"
				id="token-letter-spacing"
				hidden
			/>
		</label>
	</fieldset>

	{selectedToken}
</main>

<style>
	fieldset {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-6);
		margin-block-start: var(--space-4);
		border: none;
		padding: 0;
	}

	label {
		cursor: pointer;
		color: var(--foreground);
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border-top: 0.5px solid transparent;
		text-align: center;
		transition:
			all 0.1s ease-in-out,
			transform 0.3s ease-in;
	}

	.active,
	label:hover {
		border-color: var(--blue-8);
		background-color: oklch(from var(--blue-8) l c h / 40%);
		box-shadow:
			0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
			0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
			inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--blue-7) l c h / 10%);
	}

	label:hover {
		transform: translate(0, calc(var(--space-1) * -1));
	}
</style>
