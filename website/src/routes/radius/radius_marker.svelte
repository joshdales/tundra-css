<script lang="ts">
	interface iProps {
		level: number
	}
	const { level } = $props<iProps>()
</script>

<div style="--radius: var(--radius-{level})">
	<p class="label-2">
		<code>radius-{level}</code>
	</p>
</div>

<style>
	div:before {
		content: '';
		display: block;
		background-color: var(--red-6);
		height: var(--space-14);
		width: var(--space-14);
		border-radius: var(--radius);
		margin-block-end: var(--space-2);
	}
</style>
