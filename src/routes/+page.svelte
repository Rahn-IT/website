<script lang="ts">
	import Company from '$lib/Company.svelte';
	import NoCookie from '$lib/images/NoCookie.svelte';
	import { name } from '$lib/info/info';

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
		Profitieren auch Sie von unserem umfangreiches Wissen, und unserer langjährige Erfahrung.
	</p>
	<p class="py-2">
		Unser Kundenstamm ist dabei so Vielseitig wie unsere Leistungen,
		<br />
		In welcher Branche Sie auch tätig sind, zögern Sie nicht uns zu kontaktieren.
	</p>
</div>

<div class="py-4">
	<h2 class="pt-8 text-3xl">Unser Einsatzgebiet</h2>
	<p class="py-4">
		Per Fernwartung sind wir gerne deutschlandweit für Sie da. Falls Sie eine persönliche Betreuung
		wünschen oder benötigen können wir Ihnen in folgenden Ortschaften und deren Umgebung behilflich
		sein:
	</p>

	<ul class="list-disc px-8">
		<li>Altötting</li>
		<li>Ampfing</li>
		<li>Burghausen</li>
		<li>Dorfen</li>
		<li>Eggenfelden</li>
		<li>Garching an der Alz</li>
		<li>Haag</li>
		<li>Marktl</li>
		<li>Mühldorf</li>
		<li>Neumarkt-Sankt Veit</li>
		<li>Obing</li>
		<li>Rosenheim</li>
		<li>Tittmoning</li>
		<li>Traunreut</li>
		<li>Traunstein</li>
		<li>Trostberg</li>
		<li>Vilsbiburg</li>
		<li>Waldkraiburg</li>
		<li>Wasserburg</li>
	</ul>
</div>

<div class="py-4">
	<h2 class="pt-8 text-3xl">Referenzen</h2>
	<div class="flex h-40 flex-row flex-nowrap gap-16 overflow-x-scroll">
		<Company
			class="bg-neutral p-10"
			name="Fischer"
			href="https://spenglerei-fischer.de"
			image="/images/refs/fischer.png"
		/>
		<Company
			name="Autowelt Ostermaier"
			href="https://autowelt-ostermaier.de"
			image="/images/refs/autowelt.jpg"
		/>
		<Company
			name="Erbenermittlung Mayer"
			href="https://erben-mayer.de/"
			image="/images/refs/mayer.jpg"
		/>
		<Company
			name="Danzl Gartentechnik"
			href="https://www.danzl-gartentechnik.de/"
			image="/images/refs/danzl.jpg"
		/>
		<Company
			name="Langlechner"
			href="https://langlechner-haustechnik.de/"
			image="/images/refs/langlechner.png"
		/>
		<Company
			class="bg-neutral p-8"
			name="Fitworld"
			href="https://www.fitworldts.de/"
			image="/images/refs/fitworld.png"
		/>
		<Company
			name="Rechtsanwälte Heiß"
			href="https://www.rechtsanwaelte-heiss.de/"
			image="/images/refs/heiss.png"
		/>
		<Company
			class="p-8"
			name="Biostein"
			href="https://www.biostein.com/"
			image="/images/refs/biostein.png"
		/>
		<Company
			name="Mauerberger"
			href="https://www.mauerberger-tore.de/"
			image="/images/refs/mauerberger.png"
		/>
		<Company
			class="p-8"
			name="Solarbau Chiemgau"
			href="https://solarbau-chiemgau.de/"
			image="/images/refs/solarbau-chiemgau.png"
		/>
		<Company
			class="bg-neutral p-8"
			name="Zimmermann Transporte"
			href="https://www.zimmermann-transporte.com/"
			image="/images/refs/zimmermann.png"
		/>
	</div>
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
