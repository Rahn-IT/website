<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import LogoStandalone from '$lib/images/logo-standalone.svelte';
	import Phone from '$lib/info/Phone.svelte';
	import '../app.css';
</script>

<div class="app flex min-h-screen flex-col">
	<Navbar class="navbar bg-base-100 dark:bg-base-200 fixed z-50 h-20 shadow">
		<li class="xl:hidden"><a href="/">Home</a></li>
		<li><a href="/emergency">Notdienst</a></li>
		<li>
			<details class="z-20">
				<summary>Leistungen</summary>
				<ul class="xl:top-10 xl:shadow-2xl xl:drop-shadow">
					<li><a href="/services">Dienste</a></li>
					<li><a href="/services/email">E-Mail</a></li>
					<li><a href="/services/linux">Linux & Proxmox</a></li>
				</ul>
			</details>
		</li>
		<li><a href="/pricing">Preise</a></li>
		<li><a href="/remote">Fernwartung</a></li>
		<li>
			<details class="z-20">
				<summary>Unternehmen</summary>
				<ul class="xl:top-10 xl:shadow-2xl xl:drop-shadow">
					<li><a href="/about-us">Unsere Prinzipen</a></li>
					<li><a href="/about-us/people">Das Team</a></li>
				</ul>
			</details>
		</li>
		<li><a href="/contact">Kontakt</a></li>
	</Navbar>
	<main class="flex w-full flex-1 justify-center px-8 pt-20 text-lg">
		<div class="w-full max-w-7xl">
			<slot />
		</div>
	</main>
	<Footer />
</div>
