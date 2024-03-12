<script lang="ts">
	import AccentSelector from '$lib/components/accent_selector.svelte'
	import CopyToaster from '$lib/components/copy_toaster.svelte'
	import type { CopiedValue } from '$lib/components/copy_toaster.svelte'

	let selectedColour = ''
	let copiedValue: CopiedValue | undefined

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
	<h1 class="heading-5">Buttons</h1>

	<p class="body-4">
		Apply the class for the button variant and the accent colour that you want the button to be. Add
		a <code>button-*</code> class to change the size, and a class for the colour it add that accent otherwise
		the button will be greyscale.
	</p>

	<p class="body-4">Click on a button to copy it's classes.</p>

	<AccentSelector {selectedColour} on:accent={(ev) => (selectedColour = ev.detail)} />

	<h2 class="heading-4">Filled</h2>

	<div class="btn-group">
		<button class="button-1 filled {selectedColour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 filled {selectedColour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 filled {selectedColour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 filled {selectedColour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<h2 class="heading-4">Outline</h2>

	<div class="btn-group">
		<button class="button-1 outline {selectedColour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 outline {selectedColour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 outline {selectedColour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 outline {selectedColour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<h2 class="heading-4">Ghost</h2>

	<div class="btn-group">
		<button class="button-1 ghost {selectedColour}" on:click={copyClasses}> Button 1 </button>

		<button class="button-2 ghost {selectedColour}" on:click={copyClasses}> Button 2 </button>

		<button class="button-3 ghost {selectedColour}" on:click={copyClasses}> Button 3 </button>

		<button class="button-4 ghost {selectedColour}" on:click={copyClasses}> Button 4 </button>
	</div>

	<section class="disabled">
		<h3>Disabled buttons</h3>
		<p>When buttons are disabled they look the same no matter what their accent colour.</p>
		<div class="btn-group">
			<button class="button-2 filled" disabled> Lorem ipsum </button>
			<button class="button-2 outline" disabled> Lorem ipsum </button>
			<button class="button-2 ghost" disabled> Lorem ipsum </button>
		</div>
	</section>

	<h2 class="heading-4">Customisation</h2>
	<p class="body-4">
		In order to make your own button variations you just need to make a class that overrides the
		accent variables: <code>accent-1</code> - <code>accent-4</code> with your preferred values.
	</p>
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
</style>
