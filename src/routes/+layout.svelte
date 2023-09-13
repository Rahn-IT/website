<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import LogoStandalone from '$lib/images/logo-standalone.svelte';
	import Mail from '$lib/info/Mail.svelte';
	import Phone from '$lib/info/Phone.svelte';
	import '../app.css';
</script>

<div class="app flex min-h-screen flex-col">
	<Navbar class="navbar fixed z-50 h-20 bg-base-100 shadow dark:bg-base-200">
		<li class="xl:hidden"><a href="/">Home</a></li>
		<li><a href="/emergency">Notdienst</a></li>
		<li><a href="/services">Leistungen</a></li>
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
	<Footer>
		<div>
			<a href="/" class="btn btn-ghost">
				<LogoStandalone class="h-16 w-auto" />
			</a>
			<div>
				<div>Rahn IT-Systemtechnik</div>
				<div><Phone /></div>
				<div><Mail /></div>
			</div>
		</div>
		<div>
			<a class="link-hover link" href="/">Home</a>
			<a class="link-hover link" href="/emergency">Notfalldienst</a>
			<a class="link-hover link" href="/services">Leistungen</a>
			<a class="link-hover link" href="/pricing">Preise</a>
			<a class="link-hover link" href="/remote">Fernwartung</a>
			<a class="link-hover link" href="/about-us">Unsere Prinzipen</a>
			<a class="link-hover link" href="/about-us/people">Das Team</a>
		</div>
		<div>
			<a class="link-hover link" href="/contact">Kontakt</a>
			<a class="link-hover link" href="/impressum">Impressum</a>
		</div>
	</Footer>
</div>
