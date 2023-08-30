<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<div class="app">
	<Navbar>
		<li><a href="/">Home</a></li>
		<li><a href="/">Notdienst</a></li>
		<li><a href="/">Leistungen</a></li>
		<li><a href="/">Fernwartung</a></li>
		<li><a href="/">Kontakt</a></li>
	</Navbar>
	<main>
		<slot />
	</main>
</div>
