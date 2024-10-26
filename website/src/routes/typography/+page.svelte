<script lang="ts">
	import { run } from 'svelte/legacy'

	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import DesignToken from '$lib/components/design_token.svelte'
	import Toaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'
	import TokenDescription from '$lib/components/token_description.svelte'

	let selectedToken = $state($page.url.searchParams.get('token') || '')
	let copiedValue: CopiedValue | undefined = $state()

	run(() => {
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
	<TokenDescription title="Typography">
		<p class="body-4">
			These are all the token that the text styles are made from. In general you probably won't need
			to access these directly but the variables are available in case that you do.
		</p>

		<p class="body-4">
			Select the typography token that you want to see and click on one of the tiles to copy its
			variable to your clipboard.
		</p>

		<fieldset name="typography">
			<legend class="heading-3">Token type</legend>

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
	</TokenDescription>

	{#if selectedToken === 'font-size'}
		<section class="swatch-grid" style="--columns: 4">
			{#each new Array(9).fill(selectedToken) as _, index}
				<DesignToken
					property={selectedToken}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<p class="token font-size" style="--size: var(--font-size-{index + 1}">Lorem ipsum</p>
				</DesignToken>
			{/each}
		</section>
	{:else if selectedToken === 'font-weight'}
		<section class="swatch-grid" style="--columns: 4">
			{#each new Array(4).fill(selectedToken) as _, index}
				<DesignToken
					property={selectedToken}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<p class="token font-weight" style="--weight: var(--font-weight-{index + 1}">
						Lorem ipsum
					</p>
				</DesignToken>
			{/each}
		</section>
	{:else if selectedToken === 'line-height'}
		<section class="swatch-grid">
			{#each new Array(5).fill(selectedToken) as _, index}
				<DesignToken
					property={selectedToken}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<p class="token line-height" style="--height: var(--line-height-{index + 1}">
						Lorem ipsum
					</p>
				</DesignToken>
			{/each}
		</section>
	{:else if selectedToken === 'letter-spacing'}
		<section class="swatch-grid">
			{#each new Array(5).fill(selectedToken) as _, index}
				<DesignToken
					property={selectedToken}
					level={index + 1}
					on:copied_value={(ev) => (copiedValue = ev.detail)}
				>
					<p class="token letter-spacing" style="--spacing: var(--letter-spacing-{index + 1}">
						Lorem ipsum
					</p>
				</DesignToken>
			{/each}
		</section>
	{:else}
		<p class="body-4 empty">Select a token to see it's options</p>
	{/if}
</main>

<Toaster {copiedValue} />

<style>
	fieldset {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-6);
		margin-block-start: var(--space-4);
		border: none;
		padding: 0;
	}

	legend {
		margin-block-end: var(--space-4);
	}

	label {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--app-foreground);
		border-radius: var(--radius-2);
		padding-block: var(--space-4);
		padding-inline: var(--space-6);
		border: 1.5px solid var(--neutral-8);
		text-align: center;
		transition:
			all 0.1s ease-in-out,
			transform 0.3s ease-in;
	}

	.active,
	label:hover {
		border-color: var(--blue-8);
		background-color: oklch(from var(--blue-8) l c h / 30%);
	}

	label:hover {
		box-shadow:
			0 var(--space-1) var(--space-2) oklch(from var(--neutral-1) l c h / 5%),
			0 0 var(--space-1) oklch(from var(--neutral-1) l c h / 10%),
			inset var(--space-2) var(--space-1) var(--space-3) oklch(from var(--blue-9) l c h / 10%);
		transform: translate(0, calc(var(--space-1) * -1));
	}

	@media screen and (max-width: 600px) {
		fieldset {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.token {
		font-size: var(--size, var(--font-size-5));
		font-weight: var(--weight, var(--font-weight-2));
		letter-spacing: var(--spacing, var(--letter-spacing-2));
		line-height: var(--height, var(--line-height-2));
	}

	.line-height {
		border-block: 1.5px solid var(--red-7);
	}

	.empty {
		margin-block: var(--space-14);
		text-align: center;
	}
</style>
