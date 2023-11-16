<script>
	import '../app.css';
</script>

<slot />

<footer>
	<h3>
		<a class="link-4" href="https://github.com/joshdales/tundra-css"
			>github.com/joshdales/tundra-css</a
		>
	</h3>
</footer>

<style>
	footer {
		text-align: center;
		padding-block: var(--space-4);
	}

	a {
		position: relative;
		color: var(--green);
		text-decoration: none;
		padding-block-end: var(--space-1);
	}

	a:hover {
		text-decoration: underline;
	}
</style>
