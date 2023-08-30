<script>
	import '../app.postcss';
	import LogoFull from '$lib/images/logo-full.svelte';
</script>

<div class="app">
	<nav class="navbar shadow">
		<div class="navbar-start">
			<a class="h-16 btn btn-ghost" href="/">
				<LogoFull />
			</a>
		</div>
	</nav>
	<main>
		<slot />
	</main>
</div>
