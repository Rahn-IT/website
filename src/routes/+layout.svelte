<script>
	import '../app.css';
	import LogoFull from '$lib/images/logo-full.svelte';
</script>

<div class="app">
	<nav class="navbar h-32 shadow">
		<div class="navbar-start h-full">
			<a class="h-full btn btn-ghost" href="/">
				<LogoFull class="h-full" />
			</a>
		</div>
	</nav>
	<main>
		<slot />
	</main>
</div>
