<script module lang="ts">
	export interface CopiedValue {
		value: string
		success: boolean
	}
</script>

<script lang="ts">
	import { fly } from 'svelte/transition'
	import Toast from './toast.svelte'

	interface Props {
		copiedValue: CopiedValue | undefined
	}

	let { copiedValue = $bindable() }: Props = $props()
	let timer: ReturnType<typeof setTimeout> | undefined = $state()

	$effect(() => {
		if (copiedValue && copiedValue.success) {
			timer = setTimeout(() => {
				copiedValue = undefined
			}, 2000)
		}

		return () => {
			if (timer) {
				clearTimeout(timer)
			}
		}
	})
</script>

{#key copiedValue}
	<div class="toaster" transition:fly={{ y: 100, duration: 500 }}>
		{#if copiedValue}
			<Toast type={copiedValue.success ? 'success' : 'danger'} showClose={!copiedValue.success}>
				{#if copiedValue.success}
					<p class="text-body-2">
						<code>{copiedValue.value}</code> copied to your clipboard!
					</p>
				{:else}
					<p class="text-body-2">
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
