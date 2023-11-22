<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let selectedToken = $state($page.url.searchParams.get('token') || '')

	function updateSelectedToken(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		selectedToken = event.currentTarget.value
	}

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

		<label class="label-4" for="token-font-weight">
			Font Weight
			<input
				bind:group={selectedToken}
				on:change={updateSelectedToken}
				type="radio"
				name="typography"
				value="font-weight"
				id="token-font-weight"
			/>
		</label>

		<label class="label-4" for="token-font-size">
			Font Size
			<input
				bind:group={selectedToken}
				on:change={updateSelectedToken}
				type="radio"
				name="typography"
				value="font-size"
				id="token-font-size"
			/>
		</label>

		<label class="label-4" for="token-line-height">
			Line Height
			<input
				bind:group={selectedToken}
				on:change={updateSelectedToken}
				type="radio"
				name="typography"
				value="line-height"
				id="token-line-height"
			/>
		</label>

		<label class="label-4" for="token-letter-spacing">
			Letter Spacing
			<input
				bind:group={selectedToken}
				on:change={updateSelectedToken}
				type="radio"
				name="typography"
				value="letter-spacing"
				id="token-letter-spacing"
			/>
		</label>
	</fieldset>

	{selectedToken}
</main>

<style>
	fieldset {
		margin-block-start: var(--space-4);
		display: flex;
		justify-content: space-evenly;
		border: none;
		padding: 0;
	}
</style>
