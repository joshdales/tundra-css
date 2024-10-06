<script context="module" lang="ts">
	export interface CopiedValue {
		value: string
		success: boolean
	}
</script>

<script lang="ts">
	import { onDestroy } from 'svelte'
	import { fly } from 'svelte/transition'
	import Toast from './toast.svelte'

	export let copiedValue: CopiedValue | undefined
	let timer: ReturnType<typeof setTimeout>

	$: {
		if (copiedValue && copiedValue.success) {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				copiedValue = undefined
			}, 2000)
		}
	}

	onDestroy(() => {
		clearTimeout(timer)
	})
</script>

{#key copiedValue}
	<div class="toaster" transition:fly={{ y: 100, duration: 500 }}>
		{#if copiedValue}
			<Toast type={copiedValue.success ? 'success' : 'danger'} showClose={!copiedValue.success}>
				{#if copiedValue.success}
					<p class="body-2">
						<code>{copiedValue.value}</code> copied to your clipboard!
					</p>
				{:else}
					<p class="body-2">
						Copy <code>{copiedValue.value}</code> to your clipboard.
					</p>
				{/if}
			</Toast>
		{/if}
	</div>
{/key}

<style>
	.toaster {
		z-index: 3;
		position: fixed;
		bottom: var(--space-10);
		margin-inline: var(--space-10);
	}
</style>
