<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let type: 'success' | 'danger'
	export let showClose = false
</script>

<aside>
	<div class="icon">
		{#if type === 'danger'}
			😱
		{:else if type === 'success'}
			🙌
		{:else}
			🤔
		{/if}
	</div>

	<div class="content">
		<slot />
	</div>

	{#if showClose}
		<button class="button-1 ghost" on:click={() => dispatch('close')}>
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.707,14.293a1,1,0,1,1-1.414,1.414L12,13.414,8.707,16.707a1,1,0,1,1-1.414-1.414L10.586,12,7.293,8.707A1,1,0,1,1,8.707,7.293L12,10.586l3.293-3.293a1,1,0,1,1,1.414,1.414L13.414,12Z"
				/>
			</svg>
		</button>
	{/if}
</aside>

<style>
	aside {
		display: flex;
		align-items: center;
		background-color: var(--neutral-8);
		gap: var(--space-3);
		padding: var(--space-4);
		border-radius: var(--radius-2);
		box-shadow: 0 var(--space-1) var(--space-2) var(--space-2) rgba(0, 0, 0, 0.1);
	}

	.icon {
		display: flex;
		justify-content: center;
		font-size: var(--font-size-6);
	}

	svg {
		height: var(--space-8);
		width: var(--space-8);
		fill: var(--neutral-0);
	}

	button {
		margin-inline-start: auto;
	}
</style>
