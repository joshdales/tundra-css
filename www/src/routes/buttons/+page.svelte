<script lang="ts">
	import TokenDescription from '$lib/components/token_description.svelte'
	import AccentSelector from '$lib/components/accent_selector.svelte'
	import CopyToaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'

	let selectedColour = $state('')
	let copiedValue: CopiedValue | undefined = $state()

	function copyClasses(event: MouseEvent) {
		const element = event.target as HTMLButtonElement
		let classList: string[] = []
		element.classList.forEach((value, index) => {
			// Svelte adds it's own class at the end, so if we remove the last one we should just
			// get the classes that we care about
			if (index === element.classList.length - 1) {
				return
			}
			classList.push(value)
		})
		const classes = classList.join(' ')
		navigator.clipboard
			.writeText(classes)
			.then(() => {
				copiedValue = { success: true, value: classes }
			})
			.catch(() => {
				copiedValue = { success: false, value: classes }
			})
	}
</script>

<main>
	<TokenDescription title="Buttons">
		<p class="body-4">
			Apply the class for the button variant and the accent colour that you want the button to be.
			Add a <code>button-*</code> class to change the size, and a class for the colour it add that accent
			otherwise the button will be greyscale.
		</p>

		<p class="body-4">Click on a button to copy it's classes.</p>

		<AccentSelector updateColour={(newColour) => (selectedColour = newColour)} />
	</TokenDescription>

	<h2 class="heading-4">Filled</h2>

	<div class="btn-group">
		<button class="button-1 filled {selectedColour}" onclick={copyClasses}> Button 1 </button>

		<button class="button-2 filled {selectedColour}" onclick={copyClasses}> Button 2 </button>

		<button class="button-3 filled {selectedColour}" onclick={copyClasses}> Button 3 </button>

		<button class="button-4 filled {selectedColour}" onclick={copyClasses}> Button 4 </button>
	</div>

	<h2 class="heading-4">Outline</h2>

	<div class="btn-group">
		<button class="button-1 outline {selectedColour}" onclick={copyClasses}> Button 1 </button>

		<button class="button-2 outline {selectedColour}" onclick={copyClasses}> Button 2 </button>

		<button class="button-3 outline {selectedColour}" onclick={copyClasses}> Button 3 </button>

		<button class="button-4 outline {selectedColour}" onclick={copyClasses}> Button 4 </button>
	</div>

	<h2 class="heading-4">Ghost</h2>

	<div class="btn-group">
		<button class="button-1 ghost {selectedColour}" onclick={copyClasses}> Button 1 </button>

		<button class="button-2 ghost {selectedColour}" onclick={copyClasses}> Button 2 </button>

		<button class="button-3 ghost {selectedColour}" onclick={copyClasses}> Button 3 </button>

		<button class="button-4 ghost {selectedColour}" onclick={copyClasses}> Button 4 </button>
	</div>

	<section class="disabled">
		<h3 class="alt-heading-3">Disabled buttons</h3>

		<p class="body-4">
			When buttons are disabled they look the same no matter what their accent colour.
		</p>

		<div class="btn-group">
			<button class="button-2 filled" disabled> Lorem ipsum </button>
			<button class="button-2 outline" disabled> Lorem ipsum </button>
			<button class="button-2 ghost" disabled> Lorem ipsum </button>
		</div>
	</section>
</main>

<CopyToaster {copiedValue} />

<style>
	.btn-group {
		--columns: 4;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--space-6);
		margin-block: var(--space-4);
	}

	@media screen and (max-width: 600px) {
		.btn-group {
			--columns: 2;
		}
	}

	button {
		width: fit-content;
		height: fit-content;
	}

	code {
		text-wrap: nowrap;
	}
</style>
