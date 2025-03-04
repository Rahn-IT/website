<script lang="ts">
	import LogoStandalone from './images/logo-standalone.svelte';
	import Phone from './info/Phone.svelte';
</script>

<footer
	class="footer bg-base-200 text-base-content flex flex-col p-10 text-lg lg:flex-row lg:gap-48 lg:text-base"
>
	<div>
		<a href="/" class="btn btn-ghost h-24 p-2">
			<LogoStandalone class="h-full w-auto" />
		</a>
		<div class="px-2">
			<div>Rahn IT-Systemtechnik</div>
			<div><Phone /></div>
		</div>
	</div>
	<div>
		<a class="link-hover link" href="/">Home</a>
		<a class="link-hover link" href="/emergency">Notfalldienst</a>
		<a class="link-hover link" href="/services">Dienste</a>
		<a class="link-hover link" href="/services/email">E-Mail</a>
		<a class="link-hover link" href="/services/linux">Linux</a>
	</div>
	<div>
		<a class="link-hover link" href="/pricing">Preise</a>
		<a class="link-hover link" href="/remote">Fernwartung</a>
		<a class="link-hover link" href="/about-us">Unsere Prinzipen</a>
		<a class="link-hover link" href="/about-us/people">Das Team</a>
		<a class="link-hover link" href="/contact">Kontakt</a>
		<a class="link-hover link" href="/impressum">Impressum</a>
	</div>
</footer>
