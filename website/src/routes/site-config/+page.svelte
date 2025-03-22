<script lang="ts">
	import { page } from '$app/state'
	const { theme } = page.data
</script>

<main>
	<h1 class="heading-5">Site configuration</h1>

	<p class="body-4">Make this site look the way that you want it to.</p>

	<section>
		<h2 class="alt-heading-2">Colour</h2>
		<form method="post">
			<label class="label-3" for="colour-selector">
				Site theme

				<select name="colour" id="colour-selector" class={`${theme.accent} input-1`}>
					<option selected={theme.accent === 'red'} value="red">Red</option>
					<option selected={theme.accent === 'orange'} value="orange">Orange</option>
					<option selected={theme.accent === 'yellow'} value="yellow">Yellow</option>
					<option selected={theme.accent === 'green'} value="green">Green</option>
					<option selected={theme.accent === 'cyan'} value="cyan">Cyan</option>
					<option selected={theme.accent === 'blue'} value="blue">Blue</option>
					<option selected={theme.accent === 'purple'} value="purple">Purple</option>
					<option selected={theme.accent === 'pink'} value="pink">Pink</option>
				</select>
			</label>

			<button class={`${theme.accent} filled button-1`} type="submit"> Update </button>
		</form>
	</section>
</main>

<style>
	section {
		margin-block: var(--space-5);
	}
</style>
