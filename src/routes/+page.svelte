<script lang="ts">
	import References from '$lib/References.svelte';
	import NoCookie from '$lib/images/NoCookie.svelte';

	const years = new Date().getFullYear() - 2004;
</script>

<svelte:head>
	<title>Rahn IT-Systemtechnik</title>
	<meta name="description" content="Professionelle und zuverlässige IT-Hilfe" />
</svelte:head>

<div class="py-4">
	<h1 class="py-8 text-center text-4xl">Willkommen bei <nobr>Rahn IT‑Systemtechnik</nobr></h1>

	<p class="py-2">
		Wir betreuen Seit <b>{years}</b> Jahren professionell und zuverlässig die IT unserer Kunden.
		<br />
		Profitieren auch Sie von unserem umfangreichen Wissen, und unserer langjährige Erfahrung.
	</p>
	<p class="py-2">
		Unser Kundenstamm ist dabei so vielseitig wie unsere Leistungen,
		<br />
		In welcher Branche Sie auch tätig sind, zögern Sie nicht uns zu kontaktieren.
	</p>
</div>

<div class="py-4">
	<h2 class="pt-8 text-3xl">Unser Einsatzgebiet</h2>
	<p class="py-2">Per Fernwartung sind wir gerne deutschlandweit für Sie da.</p>
	<p class="py-2">In folgenden Gebieten sind wir gerne persönlich für Sie da:</p>

	<ul class="list-disc px-8">
		<li>Landkreis Altötting</li>
		<li>Landkreis Mühldorf</li>
		<li>Landkreis Rosenheim</li>
		<li>Landkreis Rottal-Inn</li>
		<li>Landkreis Traunstein</li>
	</ul>
</div>

<div class="w-full py-4">
	<h2 class="pt-8 text-3xl">Referenzen</h2>
	<References />
</div>

<div class="py-4">
	<h2 class="pt-8 text-3xl">Cookies? Nicht mit uns!</h2>
	<NoCookie class="h-40 w-auto" />
	<p>
		Cookie-Banner sind nicht nur nervig, oft werden Marketing- und Tracking-Cookies installiert,
		welche die Privatsphäre beeinträchtigen.
	</p>
	<p>
		Wir stellen uns gegen diesen Trend: Unsere Webseite funktioniert <b>komplett ohne Cookies!</b>
	</p>
</div>
