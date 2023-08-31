<script>
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import LogoStandalone from '$lib/images/logo-standalone.svelte';
	import Phone from '$lib/info/Phone.svelte';
	import '../app.css';
</script>

<div class="app flex min-h-screen flex-col">
	<Navbar>
		<li><a href="/">Home</a></li>
		<li><a href="/emergency">Notdienst</a></li>
		<li><a href="/services">Leistungen</a></li>
		<li><a href="/remote">Fernwartung</a></li>
		<li>
			<details class="z-20">
				<summary>Über uns</summary>
				<ul class="lg:top-10 lg:shadow-2xl lg:drop-shadow">
					<li><a href="/about-us">Firma</a></li>
					<li><a href="/about-us/people">Team</a></li>
				</ul>
			</details>
		</li>
		<li><a href="/contact">Kontakt</a></li>
	</Navbar>
	<main class="flex w-full flex-1 justify-center px-8 text-lg">
		<div class="max-w-7xl flex-1">
			<slot />
		</div>
	</main>
	<Footer>
		<div>
			<LogoStandalone class="h-16 w-auto" />
			<p>
				Rahn IT-Systemtechnik<br />
				<Phone />
			</p>
		</div>
		<div>
			<a class="link-hover link" href="/">Home</a>
			<a class="link-hover link" href="/emergency">Notfalldienst</a>
			<a class="link-hover link" href="/services">Leistungen</a>
			<a class="link-hover link" href="/remote">Fernwartung</a>
			<a class="link-hover link" href="/about-us">Über Rahn-IT</a>
			<a class="link-hover link" href="/about-us/people">Über das Team</a>
			<a class="link-hover link" href="/contact">Kontakt</a>
		</div>
		<div>
			<a class="link-hover link" href="/impressum">Impressum</a>
		</div>
	</Footer>
</div>
